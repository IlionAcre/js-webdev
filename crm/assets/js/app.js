/* MiniCRM — app.js */

(() => {
  // ---------- Utilities ----------
  const uid = () =>
    crypto?.randomUUID?.() ??
    `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const nowISO = () => new Date().toISOString();
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const safeText = x => x?.toString?.().trim?.() ?? "";

  const normalizeTag = t =>
    t
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const parseTags = csv => {
    const raw = (csv ?? "").trim();
    if (!raw) return [];
    const tags = raw
      .split(",")
      .map(s => normalizeTag(s))
      .filter(Boolean);
    return [...new Set(tags)];
  };

  const money = n => {
    const v = Number(n ?? 0);
    return v
      ? `$${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : "$0";
  };

  // ---------- DOM ----------
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

    navItems: Array.from(document.querySelectorAll(".navItem")),

    viewTitle: document.querySelector("#viewTitle"),
    viewSubtitle: document.querySelector("#viewSubtitle"),
    viewBoard: document.querySelector("#viewBoard"),
    viewInsights: document.querySelector("#viewInsights"),
    viewSettings: document.querySelector("#viewSettings"),

    insightPipeline: document.querySelector("#insightPipeline"),
    insightTopTag: document.querySelector("#insightTopTag"),
  };

  // ---------- State ----------
  const STORAGE_KEY = "mini_crm_v1";

  // ✅ Not rendered yet (student challenge dataset)
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
    trackers: { actionsByDay: new Map() },
    view: "board",
  };

  // ---------- Seed extraction (cards already in HTML) ----------
  const extractSeedLeadsFromDOM = () => {
    const seedCards = Array.from(document.querySelectorAll(".cardSeed"));

    const leads = seedCards.map(card => {
      const tagsRaw = card.dataset.tags ?? "";
      const tags = tagsRaw
        ? tagsRaw
            .split(",")
            .map(t => normalizeTag(t))
            .filter(Boolean)
        : [];

      return {
        id: card.dataset.id || uid(),
        name: card.dataset.name || "Unknown",
        company: card.dataset.company || "",
        email: card.dataset.email || "",
        value: Number(card.dataset.value ?? 0),
        stage: card.dataset.stage || "lead",
        priority: card.dataset.priority || "med",
        tags,
        notes: card.dataset.notes || "",
        updatedAt: nowISO(),
      };
    });

    return leads;
  };

  // ---------- Persistence ----------
  const load = () => {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      // First run: use the visible HTML cards as the initial dataset
      state.leads = extractSeedLeadsFromDOM();
      state.activity = [];
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      state.leads = Array.isArray(parsed.leads)
        ? parsed.leads
        : extractSeedLeadsFromDOM();
      state.activity = Array.isArray(parsed.activity) ? parsed.activity : [];
      const f = parsed.filters ?? {};
      state.filters.q = safeText(f.q);
      state.filters.priority = f.priority ?? "all";
      state.filters.sortBy = f.sortBy ?? "updatedDesc";
      state.view = parsed.view ?? "board";
    } catch {
      state.leads = extractSeedLeadsFromDOM();
      state.activity = [];
    }
  };

  const save = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        leads: state.leads,
        activity: state.activity,
        filters: state.filters,
        view: state.view,
      }),
    );
  };

  // ---------- Activity + trackers ----------
  const logAction = (type, message, meta = {}) => {
    const item = { id: uid(), ts: nowISO(), type, message, meta };
    state.activity.unshift(item);

    const k = todayKey();
    const current = state.trackers.actionsByDay.get(k) ?? 0;
    state.trackers.actionsByDay.set(k, current + 1);

    if (state.activity.length > 40) state.activity.length = 40;
  };

  const rebuildTrackers = () => {
    state.trackers.actionsByDay = new Map();
    for (const a of state.activity) {
      const k = (a.ts ?? "").slice(0, 10);
      if (!k) continue;
      const prev = state.trackers.actionsByDay.get(k) ?? 0;
      state.trackers.actionsByDay.set(k, prev + 1);
    }
  };

  // ---------- Validation ----------
  const validateLead = ({ name, email }) => {
    const errors = [];
    const cleanName = safeText(name);
    if (cleanName.length < 2)
      errors.push("Name must be at least 2 characters.");

    const cleanEmail = safeText(email);
    if (cleanEmail && !cleanEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.push("Email looks invalid.");
    }
    return errors;
  };

  // ---------- Filtering + sorting ----------
  const getVisibleLeads = () => {
    const q = state.filters.q.trim().toLowerCase();
    const pri = state.filters.priority;
    const sortBy = state.filters.sortBy;

    let list = state.leads.filter(l => {
      const hay =
        `${l.name} ${l.email} ${l.company} ${(l.tags ?? []).join(" ")}`.toLowerCase();
      const matchesQ = q ? hay.includes(q) : true;
      const matchesP = pri === "all" ? true : l.priority === pri;
      return matchesQ && matchesP;
    });

    switch (sortBy) {
      case "nameAsc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "valueDesc":
        list.sort((a, b) => Number(b.value ?? 0) - Number(a.value ?? 0));
        break;
      case "updatedDesc":
      default:
        list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        break;
    }
    return list;
  };

  // ---------- Rendering ----------
  const renderCounts = visible => {
    const byStage = { lead: 0, contacted: 0, closed: 0 };
    visible.forEach(l => {
      byStage[l.stage] = (byStage[l.stage] ?? 0) + 1;
    });

    el.countLead.textContent = `${byStage.lead} items`;
    el.countContacted.textContent = `${byStage.contacted} items`;
    el.countClosed.textContent = `${byStage.closed} items`;

    el.navCount.textContent = visible.length;

    el.kpiTotal.textContent = state.leads.length;
    const hot = state.leads.reduce(
      (acc, l) => acc + (l.priority === "high" ? 1 : 0),
      0,
    );
    el.kpiHot.textContent = hot;

    const today = state.trackers.actionsByDay.get(todayKey()) ?? 0;
    el.kpiToday.textContent = today;
  };

  const priorityClass = p => {
    switch (true) {
      case p === "high":
        return "p-high";
      case p === "low":
        return "p-low";
      default:
        return "p-med";
    }
  };

  const cardHTML = lead => {
    const tags = (lead.tags ?? [])
      .slice(0, 3)
      .map(t => `<span class="pill tag">#${t}</span>`)
      .join("");
    const email = lead.email ? `<span class="pill">${lead.email}</span>` : "";
    const company = lead.company
      ? `<span class="pill">${lead.company}</span>`
      : "";
    const value = `<span class="pill">${money(lead.value)}</span>`;

    return `
      <article class="card" data-id="${lead.id}">
        <span class="priority ${priorityClass(lead.priority)}" aria-hidden="true"></span>

        <div class="cardTop">
          <div>
            <p class="name">${lead.name}</p>
            <div class="meta">
              ${company}
              ${email}
              ${value}
            </div>
          </div>
        </div>

        <div class="meta">
          ${tags || `<span class="pill">No tags</span>`}
        </div>

        <div class="cardActions">
          <button class="miniBtn" type="button" data-action="edit">Edit</button>
          <button class="miniBtn" type="button" data-action="move">Move</button>
          <button class="miniBtn" type="button" data-action="delete">Delete</button>
        </div>
      </article>
    `;
  };

  const renderBoard = () => {
    const visible = getVisibleLeads();

    const cols = { lead: [], contacted: [], closed: [] };
    for (const l of visible) cols[l.stage].push(l);

    const renderColumn = (stage, container) => {
      const list = cols[stage];
      if (!list.length) {
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="empty">No leads here. Add a new one or adjust filters.</div>`,
        );
        return;
      }
      for (let i = 0; i < list.length; i++) {
        container.insertAdjacentHTML("beforeend", cardHTML(list[i]));
      }
    };

    renderColumn("lead", el.colLead);
    renderColumn("contacted", el.colContacted);
    renderColumn("closed", el.colClosed);

    renderCounts(visible);
  };

  const renderActivity = () => {
    el.activityFeed.innerHTML = "";
    if (!state.activity.length) {
      el.activityFeed.insertAdjacentHTML(
        "beforeend",
        `<div class="log"><strong>No activity yet</strong><small>Actions will appear here.</small></div>`,
      );
      return;
    }
    let i = 0;
    const max = Math.min(state.activity.length, 30);
    do {
      const a = state.activity[i];
      const time = new Date(a.ts).toLocaleString();
      el.activityFeed.insertAdjacentHTML(
        "beforeend",
        `<div class="log">
          <strong>${a.message}</strong>
          <small>${time}</small>
        </div>`,
      );
      i++;
    } while (i < max);
  };

  const renderInsights = () => {
    const pipelineValue = state.leads.reduce(
      (acc, l) => acc + Number(l.value ?? 0),
      0,
    );
    el.insightPipeline.textContent = money(pipelineValue);

    const tagCounts = new Map();
    let i = 0;
    while (i < state.leads.length) {
      const tags = state.leads[i].tags ?? [];
      for (const t of tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
      i++;
    }

    let top = "—";
    let topN = 0;
    for (const [tag, n] of tagCounts.entries()) {
      if (n > topN) {
        topN = n;
        top = `#${tag}`;
      }
    }
    el.insightTopTag.textContent = top;
  };

  // ---------- Views ----------
  const setView = view => {
    state.view = view;

    const views = [
      {
        key: "board",
        el: el.viewBoard,
        title: "Lead Board",
        sub: "Track outreach, prioritize, and keep a clean pipeline.",
      },
      {
        key: "insights",
        el: el.viewInsights,
        title: "Insights",
        sub: "Quick metrics from your current pipeline.",
      },
      {
        key: "settings",
        el: el.viewSettings,
        title: "Settings",
        sub: "Local preferences (basic placeholders for now).",
      },
    ];

    views.forEach(v => v.el.classList.toggle("hidden", v.key !== view));

    const current = views.find(v => v.key === view);
    el.viewTitle.textContent = current?.title ?? "MiniCRM";
    el.viewSubtitle.textContent = current?.sub ?? "";

    const boardOnly = [
      el.searchInput,
      el.priorityFilter,
      el.sortBy,
      el.newLeadBtn,
      el.exportBtn,
      el.resetBtn,
    ];
    const enabled = view === "board";
    boardOnly.forEach(node => (node.disabled = !enabled));

    if (view === "insights") renderInsights();
  };

  // ---------- Modal controls ----------
  const openModal = (mode, lead = null) => {
    el.formError.classList.add("hidden");
    el.formError.textContent = "";

    const isEdit = mode === "edit";
    el.modalTitle.textContent = isEdit ? "Edit Lead" : "New Lead";
    el.modalSubtitle.textContent = isEdit
      ? "Update details and keep the pipeline clean."
      : "Add a lead to the pipeline.";

    el.leadId.value = lead?.id ?? "";
    el.fullName.value = lead?.name ?? "";
    el.company.value = lead?.company ?? "";
    el.email.value = lead?.email ?? "";
    el.value.value = lead?.value ?? "";
    el.stage.value = lead?.stage ?? "lead";
    el.priority.value = lead?.priority ?? "med";
    el.tags.value = (lead?.tags ?? []).join(", ");
    el.notes.value = lead?.notes ?? "";

    el.modalBackdrop.classList.remove("hidden");
    el.modal.showModal();
    setTimeout(() => el.fullName.focus(), 0);
  };

  const closeModal = () => {
    if (el.modal.open) el.modal.close();
    el.modalBackdrop.classList.add("hidden");
  };

  // ---------- CRUD ----------
  const upsertLead = payload => {
    const id = payload.id || uid();
    const updated = { ...payload, id, updatedAt: nowISO() };

    const idx = state.leads.findIndex(l => l.id === id);
    if (idx >= 0) {
      state.leads[idx] = updated;
      logAction("update", `Updated: ${updated.name}`, { id });
    } else {
      state.leads.unshift(updated);
      logAction("create", `Added: ${updated.name}`, { id });
    }
  };

  const deleteLead = id => {
    const lead = state.leads.find(l => l.id === id);
    state.leads = state.leads.filter(l => l.id !== id);
    logAction("delete", `Deleted: ${lead?.name ?? "Lead"}`, { id });
  };

  const moveLead = id => {
    const lead = state.leads.find(l => l.id === id);
    if (!lead) return;

    const order = ["lead", "contacted", "closed"];
    const currentIndex = order.indexOf(lead.stage);
    const nextStage = order[(currentIndex + 1) % order.length];

    lead.stage = nextStage;
    lead.updatedAt = nowISO();
    logAction("move", `Moved: ${lead.name} → ${nextStage}`, { id, nextStage });
  };

  // ---------- Export ----------
  const exportData = () => {
    const lines = state.leads.map(l => {
      const tags = (l.tags ?? []).join("|");
      return `${l.name}\t${l.company}\t${l.email}\t${l.stage}\t${l.priority}\t${l.value}\t${tags}`;
    });

    const header = "name\tcompany\temail\tstage\tpriority\tvalue\ttags";
    const out = [header, ...lines].join("\n");

    const blob = new Blob([out], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `mini-crm-export-${todayKey()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);

    logAction("export", "Exported leads", { count: state.leads.length });
  };

  const resetAll = () => {
    const ok = confirm("Reset to the seed cards in the HTML?");
    if (!ok) return;

    state.leads = extractSeedLeadsFromDOM();
    state.activity = [];
    rebuildTrackers();
    save();
    renderAll();
  };

  // ---------- Events ----------
  const handleBoardClick = e => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const card = e.target.closest(".card");
    const id = card?.dataset?.id;
    if (!id) return;

    const action = btn.dataset.action;

    if (action === "edit") {
      const lead = state.leads.find(l => l.id === id);
      openModal("edit", lead);
      return;
    }

    if (action === "move") {
      moveLead(id);
      save();
      renderAll();
      return;
    }

    if (action === "delete") {
      const lead = state.leads.find(l => l.id === id);
      const ok = confirm(`Delete "${lead?.name ?? "this lead"}"?`);
      if (!ok) return;
      deleteLead(id);
      save();
      renderAll();
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const payload = {
      id: el.leadId.value,
      name: safeText(el.fullName.value),
      company: safeText(el.company.value),
      email: safeText(el.email.value),
      value: Number(el.value.value ?? 0),
      stage: el.stage.value,
      priority: el.priority.value,
      tags: parseTags(el.tags.value),
      notes: safeText(el.notes.value),
    };

    const errors = validateLead(payload);
    if (errors.length) {
      el.formError.textContent = errors.join(" ");
      el.formError.classList.remove("hidden");
      return;
    }

    upsertLead(payload);
    save();
    renderAll();
    closeModal();
  };

  // ---------- Render ----------
  const renderAll = () => {
    if (state.view === "board") {
      renderBoard();
      renderActivity();
    } else if (state.view === "insights") {
      renderInsights();
    }
  };

  // ---------- Init ----------
  const init = () => {
    load();
    rebuildTrackers();

    el.searchInput.value = state.filters.q;
    el.priorityFilter.value = state.filters.priority;
    el.sortBy.value = state.filters.sortBy;

    // nav listeners
    el.navItems.forEach(item => {
      item.addEventListener("click", () => {
        el.navItems.forEach(x => x.classList.remove("active"));
        item.classList.add("active");

        const view = item.dataset.nav;
        logAction("nav", `Switched to: ${view}`, { view });

        setView(view);
        save();
        renderAll();
      });
    });

    // board delegation
    el.colLead.addEventListener("click", handleBoardClick);
    el.colContacted.addEventListener("click", handleBoardClick);
    el.colClosed.addEventListener("click", handleBoardClick);

    // filters
    el.searchInput.addEventListener("input", () => {
      state.filters.q = el.searchInput.value;
      save();
      renderAll();
    });

    el.priorityFilter.addEventListener("change", () => {
      state.filters.priority = el.priorityFilter.value;
      save();
      renderAll();
    });

    el.sortBy.addEventListener("change", () => {
      state.filters.sortBy = el.sortBy.value;
      save();
      renderAll();
    });

    // buttons
    el.newLeadBtn.addEventListener("click", () => openModal("new"));
    el.exportBtn.addEventListener("click", () => {
      exportData();
      save();
      renderAll();
    });
    el.resetBtn.addEventListener("click", resetAll);

    el.clearActivityBtn.addEventListener("click", () => {
      state.activity = [];
      rebuildTrackers();
      logAction("activity", "Cleared activity log");
      save();
      renderAll();
    });

    // modal buttons
    el.closeModalBtn.addEventListener("click", closeModal);
    el.cancelBtn.addEventListener("click", closeModal);
    el.modalBackdrop.addEventListener("click", closeModal);

    // form
    el.leadForm.addEventListener("submit", handleFormSubmit);

    // keyboard shortcuts
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeModal();

      const tag = document.activeElement?.tagName?.toLowerCase?.() ?? "";
      const typing = ["input", "textarea"].includes(tag);

      if (e.key === "/" && !typing && state.view === "board") {
        e.preventDefault();
        el.searchInput.focus();
      }

      if (
        (e.key === "n" || e.key === "N") &&
        !typing &&
        state.view === "board"
      ) {
        openModal("new");
      }
    });

    // Apply saved view
    const initialView = state.view ?? "board";
    el.navItems.forEach(x =>
      x.classList.toggle("active", x.dataset.nav === initialView),
    );
    setView(initialView);

    // Important: this will replace the seed HTML cards with rendered cards (same content)
    renderAll();

    // Keep FUTURE_LEADS available for student exercises (not used by app)
    // window.FUTURE_LEADS = FUTURE_LEADS;
  };

  init();
})();
