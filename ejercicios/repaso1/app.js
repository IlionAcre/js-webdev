(() => {
  // ---------- Utilities ----------
  const uid = () =>
    crypto?.randomUUID?.() ??
    `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;

  const safeText = x => (x ?? "").toString().trim();

  const normalize = s => safeText(s).toLowerCase();

  // ---------- DOM (Selections) ----------
  // getElementById
  const listEl = document.getElementById("list");
  const statsEl = document.getElementById("stats");
  const emptyStateEl = document.getElementById("emptyState");

  // querySelector
  const addForm = document.querySelector("#addForm");
  const itemInput = document.querySelector("#itemInput");
  const filterSelect = document.querySelector("#filterSelect");
  const searchInput = document.querySelector("#searchInput");
  const clearPackedBtn = document.querySelector("#clearPackedBtn");
  const clearAllBtn = document.querySelector("#clearAllBtn");

  // ---------- State ----------
  const STORAGE_KEY = "packing_list_items_v1";

  /** @type {{id: string, name: string, packed: boolean, createdAt: number}[]} */
  let items = loadItems();

  // ---------- Persistence ----------
  function loadItems() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      // Basic shape check
      return parsed
        .filter(
          x => x && typeof x.id === "string" && typeof x.name === "string",
        )
        .map(x => ({
          id: x.id,
          name: x.name,
          packed: Boolean(x.packed),
          createdAt: Number(x.createdAt ?? Date.now()),
        }));
    } catch {
      return [];
    }
  }

  function saveItems() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  // ---------- Rendering ----------
  function getViewState() {
    const filter = filterSelect.value; // all | packed | unpacked
    const q = normalize(searchInput.value);
    return { filter, q };
  }

  function applyFilters(allItems) {
    const { filter, q } = getViewState();

    let out = allItems;

    if (filter === "packed") out = out.filter(x => x.packed);
    if (filter === "unpacked") out = out.filter(x => !x.packed);

    if (q) out = out.filter(x => normalize(x.name).includes(q));

    return out;
  }

  function render() {
    const visible = applyFilters(items);

    // Build HTML (fast + simple)
    listEl.innerHTML = visible.map(renderItemHTML).join("");

    // Empty state
    const showEmpty = items.length === 0;
    emptyStateEl.style.display = showEmpty ? "block" : "none";

    updateStats();
  }

  function renderItemHTML(item) {
    const packedClass = item.packed ? "packed" : "";
    const badge = item.packed
      ? `<span class="badge">packed</span>`
      : `<span class="badge">unpacked</span>`;

    // data-action used for event delegation
    return `
      <li class="item ${packedClass}" data-id="${item.id}">
        <input class="toggle" type="checkbox" ${item.packed ? "checked" : ""} aria-label="Toggle packed" />
        <div class="name">
          <span class="text">${escapeHTML(item.name)}</span>
          ${badge}
        </div>
        <div class="actionsRow">
          <button class="iconBtn" data-action="edit" type="button">Edit</button>
          <button class="iconBtn" data-action="delete" type="button">Delete</button>
        </div>
      </li>
    `;
  }

  function updateStats() {
    const total = items.length;
    const packed = items.filter(x => x.packed).length;
    const unpacked = total - packed;

    const { filter, q } = getViewState();
    const visibleCount = applyFilters(items).length;

    const filterLabel =
      filter === "all" ? "All" : filter === "packed" ? "Packed" : "Unpacked";

    const searchLabel = q ? ` • Searching: “${q}”` : "";

    statsEl.textContent = `${filterLabel}${searchLabel} • Showing ${visibleCount}/${total} • Packed ${packed} • Unpacked ${unpacked}`;
  }

  // ---------- Actions ----------
  function addItem(name) {
    const item = {
      id: uid(),
      name,
      packed: false,
      createdAt: Date.now(),
    };
    items.unshift(item); // newest first
    saveItems();
    render();
  }

  function deleteItem(id) {
    items = items.filter(x => x.id !== id);
    saveItems();
    render();
  }

  function togglePacked(id, packed) {
    const it = items.find(x => x.id === id);
    if (!it) return;
    it.packed = packed;
    saveItems();
    render();
  }

  function editItem(id) {
    const it = items.find(x => x.id === id);
    if (!it) return;

    const next = safeText(prompt("Edit item:", it.name));
    if (!next) return;

    it.name = next;
    saveItems();
    render();
  }

  function clearPacked() {
    items = items.filter(x => !x.packed);
    saveItems();
    render();
  }

  function clearAll() {
    items = [];
    saveItems();
    render();
  }

  // ---------- Event Listeners ----------
  // submit: add item
  addForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = safeText(itemInput.value);
    if (!name) return;

    addItem(name);
    itemInput.value = "";
    itemInput.focus();
  });

  // change: filter select
  filterSelect.addEventListener("change", () => {
    render();
  });

  // input: search (live)
  searchInput.addEventListener("input", () => {
    render();
  });

  // click: clear packed / clear all
  clearPackedBtn.addEventListener("click", () => {
    clearPacked();
  });

  clearAllBtn.addEventListener("click", () => {
    const ok = confirm("Clear ALL items?");
    if (!ok) return;
    clearAll();
  });

  // Event delegation on the list:
  // - click on edit/delete buttons
  // - change on checkbox toggle
  listEl.addEventListener("click", e => {
    const target = e.target;

    // Find the <li> ancestor (DOM traversal)
    const li = target.closest("li[data-id]");
    if (!li) return;

    const id = li.dataset.id;

    // Buttons use data-action
    if (target.matches("button[data-action='delete']")) {
      deleteItem(id);
      return;
    }

    if (target.matches("button[data-action='edit']")) {
      editItem(id);
      return;
    }
  });

  listEl.addEventListener("change", e => {
    const target = e.target;

    const li = target.closest("li[data-id]");
    if (!li) return;

    const id = li.dataset.id;

    if (target.matches("input.toggle")) {
      togglePacked(id, target.checked);
    }
  });

  // ---------- Helpers ----------
  function escapeHTML(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ---------- Initial render ----------
  render();
})();
