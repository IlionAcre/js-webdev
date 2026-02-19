"use strict";

(() => {
  // =========================================================
  // 1) UTILIDADES (helpers pequeños)
  // =========================================================

  /**
   * uid()
   * Genera un id único para leads/acciones.
   *
   * Concepto clave:
   * - crypto.randomUUID() (si existe) genera UUIDs reales.
   * - Fallback: timestamp + random (suficiente para demo local, no para sistemas distribuidos).
   */
  const uid = () => {
    // TODO: usar crypto.randomUUID() si está disponible
    // return crypto?.randomUUID?.() ?? `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  /** nowISO()
   * Fecha/hora en ISO 8601 (útil para ordenar por updatedAt).
   */
  const nowISO = () => new Date().toISOString();

  /** todayKey()
   * Clave YYYY-MM-DD para agrupar acciones por día en trackers.
   */
  const todayKey = () => new Date().toISOString().slice(0, 10);

  /**
   * safeText(x)
   * Normaliza input a string seguro y trim.
   *
   * Concepto clave:
   * - "??" (nullish coalescing): solo usa el fallback si es null/undefined.
   * - trim(): limpia espacios al inicio/fin (evita validaciones raras por espacios).
   */
  const safeText = x => (x ?? "").toString().trim();

  /**
   * normalizeTag(t)
   * Convierte un tag a un formato consistente:
   * - minúsculas
   * - espacios -> "-"
   * - elimina caracteres "raros"
   *
   * Regex #1: /\s+/g
   * - \s = cualquier whitespace (espacio, tab, salto de línea)
   * - + = uno o más
   * - g = global (reemplaza todas las ocurrencias)
   *
   * Regex #2: /[^a-z0-9-]/g
   * - [] = set de caracteres permitidos
   * - ^ dentro de [] = negación (todo lo que NO sea a-z, 0-9 o "-")
   * - g = global
   */
  const normalizeTag = t => {
    // TODO: implementar exactamente con replace + regex como arriba
    return safeText(t)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  /**
   * parseTags(csv)
   * Convierte "tag one, tag-two, TAG 3" => ["tag-one","tag-two","tag-3"] sin duplicados.
   *
   * Conceptos clave:
   * - split(",") + map() + filter(Boolean)
   * - Set para dedupe
   * - spread (...) para volver a array
   */
  const parseTags = csv => {
    // TODO:
    // 1) raw = trim
    // 2) si raw vacío => []
    // 3) tags = raw.split(",").map(normalizeTag).filter(Boolean)
    // 4) dedupe: return [...new Set(tags)]
    const raw = safeText(csv);
    if (!raw) return [];
    const tags = raw.split(",").map(normalizeTag).filter(Boolean);
    return [...new Set(tags)];
  };

  /**
   * money(n)
   * Formato "$12,300"
   *
   * Conceptos clave:
   * - Number(...) para garantizar número
   * - toLocaleString para separadores correctos según locale
   */
  const money = n => {
    // TODO: implementar
    const v = Number(n ?? 0);
    return v
      ? `$${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : "$0";
  };

  // =========================================================
  // 2) DOM CACHE (hardcoded selectors = OK en apps vanilla)
  // =========================================================
  const el = {
    navCount: document.querySelector("#navCount"),
    kpiTotal: document.querySelector("#kpiTotal"),
    kpiHot: document.querySelector("#kpiHot"),
    kpiToday: document.querySelector("#kpiToday"),

    searchInput: document.querySelector("#searchInput"),
    priorityFilter: document.querySelector("#priorityFilter"),
    sortBy: document.querySelector("#sortBy"),

    newLeadBtn: document.querySelector("#newLeadBtn"),
    exportBtn: document.querySelector("#exportBtn"),
    resetBtn: document.querySelector("#resetBtn"),

    countLead: document.querySelector("#countLead"),
    countContacted: document.querySelector("#countContacted"),
    countClosed: document.querySelector("#countClosed"),

    colLead: document.querySelector("#colLead"),
    colContacted: document.querySelector("#colContacted"),
    colClosed: document.querySelector("#colClosed"),

    activityFeed: document.querySelector("#activityFeed"),
    clearActivityBtn: document.querySelector("#clearActivityBtn"),

    modal: document.querySelector("#leadModal"),
    modalBackdrop: document.querySelector("#modalBackdrop"),
    closeModalBtn: document.querySelector("#closeModalBtn"),
    cancelBtn: document.querySelector("#cancelBtn"),

    leadForm: document.querySelector("#leadForm"),
    leadId: document.querySelector("#leadId"),
    fullName: document.querySelector("#fullName"),
    company: document.querySelector("#company"),
    email: document.querySelector("#email"),
    value: document.querySelector("#value"),
    stage: document.querySelector("#stage"),
    priority: document.querySelector("#priority"),
    tags: document.querySelector("#tags"),
    notes: document.querySelector("#notes"),

    modalTitle: document.querySelector("#modalTitle"),
    modalSubtitle: document.querySelector("#modalSubtitle"),
    formError: document.querySelector("#formError"),

    // Concepto: Array.from(NodeList) => array real para usar forEach/map/etc.
    navItems: Array.from(document.querySelectorAll(".navItem")),

    viewTitle: document.querySelector("#viewTitle"),
    viewSubtitle: document.querySelector("#viewSubtitle"),
    viewBoard: document.querySelector("#viewBoard"),
    viewInsights: document.querySelector("#viewInsights"),
    viewSettings: document.querySelector("#viewSettings"),

    insightPipeline: document.querySelector("#insightPipeline"),
    insightTopTag: document.querySelector("#insightTopTag"),
  };

  // =========================================================
  // 3) STATE + DATOS
  // =========================================================

  /**
   * STORAGE_KEY (hardcoded)
   * Es la “llave” con la que guardas y lees en localStorage.
   *
   * ¿Por qué existe?
   * - Evita colisiones con otras apps en el mismo dominio.
   * - Te permite versionar: si cambias estructura, puedes pasar a "mini_crm_v2".
   *
   * ¿Qué se guarda?
   * - leads, activity, filters, view (lo mínimo necesario para “reabrir” la app igual).
   */
  const STORAGE_KEY = "mini_crm_v1";

  // Dataset extra NO renderizado (sirve para ejercicios futuros: importar, paginar, etc.)
  const FUTURE_LEADS = [
    {
      id: uid(),
      name: "Dylan Wright",
      company: "Harbor Finance",
      email: "dylan@harborfinance.com",
      value: 8600,
      stage: "lead",
      priority: "high",
      tags: ["finance", "compliance"],
      notes: "Needs audit-friendly exports.",
      updatedAt: nowISO(),
    },
    {
      id: uid(),
      name: "Sophia Kim",
      company: "Orbit Analytics",
      email: "sophia@orbit-analytics.com",
      value: 4100,
      stage: "lead",
      priority: "med",
      tags: ["analytics", "demo"],
      notes: "Requested a product walkthrough.",
      updatedAt: nowISO(),
    },
    {
      id: uid(),
      name: "Ben Howard",
      company: "Summit Roofing",
      email: "ben@summitroofing.com",
      value: 1300,
      stage: "lead",
      priority: "low",
      tags: ["smallbiz"],
      notes: "Interested but not urgent.",
      updatedAt: nowISO(),
    },
    {
      id: uid(),
      name: "Amina Yusuf",
      company: "Evergreen Nonprofit",
      email: "amina@evergreen.org",
      value: 2100,
      stage: "lead",
      priority: "med",
      tags: ["nonprofit", "discount"],
      notes: "Asked about nonprofit pricing.",
      updatedAt: nowISO(),
    },
    {
      id: uid(),
      name: "Carlos Diaz",
      company: "Metro Fitness",
      email: "carlos@metrofitness.com",
      value: 2900,
      stage: "lead",
      priority: "med",
      tags: ["automation"],
      notes: "Wants lead capture + SMS.",
      updatedAt: nowISO(),
    },
    {
      id: uid(),
      name: "Ivy Novak",
      company: "Peak Legal",
      email: "ivy@peaklegal.com",
      value: 6200,
      stage: "contacted",
      priority: "high",
      tags: ["legal", "fast-track"],
      notes: "Needs onboarding plan.",
      updatedAt: nowISO(),
    },
    {
      id: uid(),
      name: "Kai Bennett",
      company: "SignalWorks",
      email: "kai@signalworks.io",
      value: 1700,
      stage: "contacted",
      priority: "med",
      tags: ["integration"],
      notes: "Waiting on technical requirements.",
      updatedAt: nowISO(),
    },
  ];

  const state = {
    leads: [],
    activity: [],
    filters: { q: "", priority: "all", sortBy: "updatedDesc" },
    trackers: { actionsByDay: new Map() }, // Map => ideal para conteos por clave (día)
    view: "board",
  };

  // =========================================================
  // 4) SEED DESDE HTML (tarjetas .cardSeed ya visibles)
  // =========================================================

  /**
   * extractSeedLeadsFromDOM()
   *
   * Concepto importante: dataset
   * - card.dataset.foo lee data-foo="..." del HTML.
   * - Todo viene como string, toca convertir (Number) en value.
   *
   * TODO:
   * 1) Seleccionar .cardSeed
   * 2) mapear a objetos lead con defaults
   * 3) tags: leer dataset.tags y partir por comas + normalize
   * 4) devolver array de leads
   */
  const extractSeedLeadsFromDOM = () => {
    // TODO: implementar
    // const seedCards = Array.from(document.querySelectorAll(".cardSeed"));
    // return seedCards.map(card => ({ ... }));
    return [];
  };

  // =========================================================
  // 5) PERSISTENCIA (localStorage)
  // =========================================================

  /**
   * load()
   *
   * Conceptos:
   * - localStorage guarda strings, por eso JSON.stringify / JSON.parse.
   * - try/catch: protege de JSON corrupto o cambios de versión.
   *
   * TODO:
   * 1) raw = localStorage.getItem(STORAGE_KEY)
   * 2) si no hay raw: state.leads = extractSeedLeadsFromDOM(); activity=[]
   * 3) si hay raw: JSON.parse
   * 4) aplicar defaults si faltan campos
   */
  const load = () => {
    // TODO: implementar
  };

  /**
   * save()
   *
   * TODO:
   * - localStorage.setItem(STORAGE_KEY, JSON.stringify({...}))
   * - guardar solo lo necesario: leads/activity/filters/view
   */
  const save = () => {
    // TODO: implementar
  };

  // =========================================================
  // 6) ACTIVITY + TRACKERS
  // =========================================================

  /**
   * logAction(type, message, meta)
   *
   * Conceptos:
   * - Un "activity feed" es un log UI: eventos recientes para el usuario.
   * - Trackers: Map(day -> count) para KPIs (acciones hoy).
   *
   * TODO:
   * 1) crear item {id, ts, type, message, meta}
   * 2) state.activity.unshift(item)
   * 3) aumentar conteo en Map para todayKey()
   * 4) recortar activity a max 40
   */
  const logAction = (type, message, meta = {}) => {
    // TODO: implementar
  };

  /**
   * rebuildTrackers()
   *
   * Concepto:
   * - Si recargas desde storage, conviene reconstruir trackers desde activity.
   *
   * TODO:
   * 1) state.trackers.actionsByDay = new Map()
   * 2) for...of sobre activity
   * 3) extraer YYYY-MM-DD de ts (slice(0,10))
   * 4) incrementar conteo en Map
   */
  const rebuildTrackers = () => {
    // TODO: implementar
  };

  // =========================================================
  // 7) VALIDACIÓN
  // =========================================================

  /**
   * validateLead({name, email})
   *
   * Regex email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   * - ^ inicio, $ fin (valida toda la cadena)
   * - [^\s@]+ : uno o más caracteres que NO sean whitespace ni "@"
   * - @ literal
   * - \. literal punto (hay que escapar el .)
   *
   * OJO:
   * - Es una validación "razonable" para UI, no cubre TODO el estándar real de emails.
   *
   * TODO:
   * - name: mínimo 2 chars
   * - email: si existe, debe pasar regex
   * - retornar array de strings de errores
   */
  const validateLead = ({ name, email }) => {
    // TODO: implementar
    return [];
  };

  // =========================================================
  // 8) FILTRADO + ORDEN
  // =========================================================

  /**
   * getVisibleLeads()
   *
   * Conceptos:
   * - "haystack": string gigante con name+email+company+tags para includes().
   * - sort: muta el array, por eso normalmente se ordena una copia.
   *
   * TODO:
   * 1) q = state.filters.q.trim().toLowerCase()
   * 2) filtrar por q (includes) y prioridad
   * 3) switch(sortBy):
   *    - nameAsc: localeCompare
   *    - valueDesc: b.value - a.value
   *    - updatedDesc: new Date(b.updatedAt) - new Date(a.updatedAt)
   * 4) devolver lista
   */
  const getVisibleLeads = () => {
    // TODO: implementar
    return [];
  };

  // =========================================================
  // 9) RENDER (Board / Activity / Insights)
  // =========================================================

  /**
   * renderCounts(visible)
   *
   * Conceptos:
   * - forEach para conteos por stage
   * - reduce para KPI "hot"
   * - Map.get para "acciones hoy"
   *
   * TODO:
   * 1) contar por stage y actualizar contadores en UI
   * 2) navCount = visible.length
   * 3) kpiTotal = state.leads.length
   * 4) kpiHot = cantidad priority==="high"
   * 5) kpiToday = trackers.get(todayKey()) ?? 0
   */
  const renderCounts = visible => {
    // TODO: implementar
  };

  /**
   * priorityClass(p)
   *
   * Concepto: switch(true)
   * - Te permite evaluar condiciones booleanas por casos.
   *
   * TODO:
   * - high -> p-high
   * - low  -> p-low
   * - default -> p-med
   */
  const priorityClass = p => {
    // TODO: implementar con switch(true) o ternary
    return "p-med";
  };

  /**
   * cardHTML(lead)
   *
   * Conceptos:
   * - template strings `...${x}...`
   * - map/join para tags
   * - atributos data-* para identificar cards y acciones
   *
   * TODO:
   * 1) tags render: (lead.tags ?? []).slice(0,3).map(...).join("")
   * 2) condicionales para email/company
   * 3) money(lead.value)
   * 4) incluir botones con data-action="edit|move|delete"
   */
  const cardHTML = lead => {
    // TODO: implementar
    return "";
  };

  /**
   * renderBoard()
   *
   * Conceptos:
   * - "distribución" por stage (lead/contacted/closed)
   * - insertar HTML con insertAdjacentHTML (agrega DOM sin reflow enorme por cada concatenación)
   *
   * TODO:
   * 1) visible = getVisibleLeads()
   * 2) cols = {lead:[], contacted:[], closed:[]}
   * 3) for...of visible -> push según stage
   * 4) limpiar columnas (innerHTML="")
   * 5) renderColumn(stage, container):
   *    - si vacío -> empty message
   *    - si no -> loop e insertar cardHTML
   * 6) renderCounts(visible)
   */
  const renderBoard = () => {
    // TODO: implementar
  };

  /**
   * renderActivity()
   *
   * Conceptos:
   * - do...while para practicar
   * - toLocaleString() para fecha amigable
   *
   * TODO:
   * 1) si no hay activity -> "No activity yet"
   * 2) renderizar hasta 30 items
   */
  const renderActivity = () => {
    // TODO: implementar
  };

  /**
   * renderInsights()
   *
   * Conceptos:
   * - reduce para pipeline value (sum)
   * - Map para conteo de tags (tag -> count)
   * - entries() para iterar pares [k,v]
   *
   * TODO:
   * 1) pipelineValue = suma values
   * 2) construir tagCounts con Map
   * 3) encontrar top tag
   * 4) actualizar UI
   */
  const renderInsights = () => {
    // TODO: implementar
  };

  // =========================================================
  // 10) VISTAS
  // =========================================================

  /**
   * setView(view)
   *
   * Conceptos:
   * - classList.toggle("hidden", condición)
   * - deshabilitar controles (disabled) fuera del board
   *
   * TODO:
   * 1) state.view = view
   * 2) mostrar/ocultar viewBoard/viewInsights/viewSettings
   * 3) cambiar title/subtitle
   * 4) disabled controls si no es board
   * 5) si insights -> renderInsights()
   */
  const setView = view => {
    // TODO: implementar
  };

  // =========================================================
  // 11) MODAL
  // =========================================================

  /**
   * openModal(mode, lead)
   *
   * Conceptos:
   * - showModal() para <dialog>
   * - backdrop separado para dar efecto overlay
   *
   * TODO:
   * 1) reset error UI
   * 2) set modalTitle/modalSubtitle
   * 3) llenar inputs (defaults)
   * 4) mostrar backdrop + modal.showModal()
   * 5) focus input (setTimeout)
   */
  const openModal = (mode, lead = null) => {
    // TODO: implementar
  };

  /**
   * closeModal()
   *
   * TODO:
   * - modal.close()
   * - ocultar backdrop
   */
  const closeModal = () => {
    // TODO: implementar
  };

  // =========================================================
  // 12) CRUD
  // =========================================================

  /**
   * upsertLead(payload)
   *
   * Conceptos:
   * - findIndex para ubicar por id
   * - spread {...payload} para copiar/mezclar
   * - unshift para agregar arriba (más reciente primero)
   *
   * TODO:
   * 1) id = payload.id || uid()
   * 2) updated = {...payload, id, updatedAt: nowISO()}
   * 3) idx = findIndex
   * 4) if idx>=0 update else unshift
   * 5) logAction("create"/"update", ...)
   */
  const upsertLead = payload => {
    // TODO: implementar
  };

  /**
   * deleteLead(id)
   *
   * Conceptos:
   * - filter crea un nuevo array sin el elemento
   *
   * TODO:
   * 1) encontrar lead (para mensaje)
   * 2) state.leads = state.leads.filter(...)
   * 3) logAction("delete", ...)
   */
  const deleteLead = id => {
    // TODO: implementar
  };

  /**
   * moveLead(id)
   *
   * Conceptos:
   * - “pipeline order” fijo: ["lead","contacted","closed"]
   * - (index + 1) % order.length para ciclo
   *
   * TODO:
   * 1) encontrar lead
   * 2) calcular nextStage
   * 3) actualizar stage + updatedAt
   * 4) logAction("move", ...)
   */
  const moveLead = id => {
    // TODO: implementar
  };

  // =========================================================
  // 13) EXPORT + RESET
  // =========================================================

  /**
   * exportData()
   *
   * Conceptos avanzados:
   * - Blob + URL.createObjectURL => descarga sin servidor
   * - <a> temporal para disparar download
   *
   * TODO:
   * 1) map leads -> líneas tab-separated
   * 2) header + join("\n")
   * 3) crear Blob
   * 4) crear <a>, set href, set download
   * 5) click(), cleanup, revokeObjectURL
   * 6) logAction("export", ...)
   */
  const exportData = () => {
    // TODO: implementar
  };

  /**
   * resetAll()
   *
   * TODO:
   * 1) confirm()
   * 2) restaurar seed leads
   * 3) limpiar activity
   * 4) rebuildTrackers()
   * 5) save(); renderAll()
   */
  const resetAll = () => {
    // TODO: implementar
  };

  // =========================================================
  // 14) EVENTOS
  // =========================================================

  /**
   * handleBoardClick(e) — event delegation
   *
   * Concepto clave: Delegación de eventos
   * - En vez de poner listeners en cada botón, pones 1 listener en el contenedor.
   * - Luego detectas qué botón se clickeó con closest().
   * - Esto escala mejor cuando agregas/eliminás cards dinámicamente.
   *
   * TODO:
   * 1) btn = e.target.closest("button[data-action]")
   * 2) card = e.target.closest(".card")
   * 3) id = card.dataset.id
   * 4) action = btn.dataset.action
   * 5) switch(action): edit/move/delete
   */
  const handleBoardClick = e => {
    // TODO: implementar
  };

  /**
   * handleFormSubmit(e)
   *
   * Conceptos:
   * - preventDefault para manejar submit sin recargar
   * - construir payload desde inputs
   * - validar y mostrar errores
   *
   * TODO:
   * 1) e.preventDefault()
   * 2) payload = { id, name, company, email, value, stage, priority, tags, notes }
   * 3) errors = validateLead(payload)
   * 4) si errors: mostrar formError
   * 5) else: upsertLead + save + renderAll + closeModal
   */
  const handleFormSubmit = e => {
    // TODO: implementar
  };

  // =========================================================
  // 15) RENDER ALL
  // =========================================================

  /**
   * renderAll()
   *
   * TODO:
   * - si view === "board": renderBoard(); renderActivity()
   * - si view === "insights": renderInsights()
   */
  const renderAll = () => {
    // TODO: implementar
  };

  // =========================================================
  // 16) INIT
  // =========================================================

  /**
   * init()
   *
   * Conceptos relevantes:
   * - listeners en array (navItems.forEach)
   * - listeners en 3 columnas (board click delegation)
   * - keyboard shortcuts con document.addEventListener("keydown", ...)
   *
   * TODO:
   * 1) load(); rebuildTrackers()
   * 2) set inputs de filtros desde state.filters
   * 3) nav listeners: activar, setView, logAction, save, renderAll
   * 4) board listeners: colLead/colContacted/colClosed -> handleBoardClick
   * 5) filtros listeners: input/change -> actualizar state.filters + save + renderAll
   * 6) botones: new/export/reset/clearActivity
   * 7) modal: close buttons + backdrop click
   * 8) form submit
   * 9) keyboard shortcuts (Esc, "/", "n")
   * 10) aplicar view inicial + renderAll
   *
   * Nota: FUTURE_LEADS NO se usa aquí; queda para ejercicios (importar/merge/paginación).
   */
  const init = () => {
    // TODO: implementar
    // Opcional para ejercicios:
    // window.FUTURE_LEADS = FUTURE_LEADS;
  };

  init();
})();
