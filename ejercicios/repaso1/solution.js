// ==================================================
// 1) DOM selection (seleccionar elementos del DOM)
// ==================================================
// - Selecciona el form (#addForm)
// - Selecciona el input donde escriben (#itemInput)
// - Selecciona el container de la lista (<ul id="list">)
// - Selecciona el dropdown de filter (#filterSelect)
// - Selecciona el input de search (#searchInput)
// - Selecciona los buttons (#clearPackedBtn, #clearAllBtn)
// - Selecciona stats (#stats) y empty state (#emptyState)
// Tip: Usa document.getElementById y document.querySelector.

// ==================================================
// 2) State (guardar datos en memoria) usando un array
// ==================================================
// - Crea un array llamado items = []
// - Cada item debe ser un object con esta forma:
//   { id: "unique-id", name: "Socks", packed: false }
//
// - Para el id:
//   const id = "id_" + Date.now() + "_" + Math.random()

// ==================================================
// 4) render()
// ==================================================
// - Crea una function render():
//   a) Limpia el list container: listEl.innerHTML = ""
//   b) Calcula qué items se ven según filter + search:
//      - filter: "all" / "packed" / "unpacked"
//      - search: name incluye el texto del search input
//   c) Por cada item visible:
//      - Crea un <li> con document.createElement
//      - Guarda el id en li.dataset.id
//      - Crea un checkbox (<input type="checkbox">)
//        * checkbox.checked = item.packed
//      - Crea un span para el name
//      - Crea un button "Edit"
//      - Crea un button "Delete"
//      - Usa append / appendChild para armar el li
//      - Agrega el li al ul
//   d) empty state:
//      - Si items.length === 0 -> muestra emptyState
//      - Si no -> ocúltalo
//   e) stats:
//      - Muestra total, packed, unpacked, y "showing X/Y"

// ==================================================
// 5) Action functions (funciones pequeñas para acciones)
// ==================================================
// - addItem(name)
//   - Crea un nuevo object (id, name, packed=false)
//   - Agrégalo al array (push o unshift)
//   - saveItems()
//   - render()
//
// - deleteItem(id)
//   - Filtra el array: items = items.filter(...)
//   - saveItems()
//   - render()
//
// - togglePacked(id, isPacked)
//   - Encuentra el item (find)
//   - Cambia item.packed = isPacked
//   - saveItems()
//   - render()
//
// - editItem(id)
//   - Encuentra el item (find)
//   - Usa prompt() para pedir un nuevo name
//   - Si el texto no está vacío, actualiza item.name
//   - saveItems()
//   - render()
//
// - clearPacked()
//   - items = items.filter(item => !item.packed)
//   - saveItems()
//   - render()
//
// - clearAll()
//   - items = []
//   - saveItems()
//   - render()

// ==================================================
// 6) Event listeners (interacción del usuario)
// ==================================================
// A) submit en el form:
// - addForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     Lee itemInput.value
//     Si está vacío -> return
//     addItem(value)
//     Limpia input y focus()
//   })
//
// B) change en el filter dropdown:
// - filterSelect.addEventListener("change", () => render())
//
// C) input en el search (live search):
// - searchInput.addEventListener("input", () => render())
//
// D) click en clear buttons:
// - clearPackedBtn.addEventListener("click", () => clearPacked())
// - clearAllBtn.addEventListener("click", () => confirm(...) && clearAll())

// ==================================================
// 7) Event delegation (manejar clicks dentro del list)
// ==================================================
// - En vez de poner listeners en cada item, pon UNO en el ul.
//
// Clicks para buttons "Edit" y "Delete":
// - listEl.addEventListener("click", (e) => {
//     Busca el <li> más cercano: e.target.closest("li")
//     Si no hay, return
//     Lee id = li.dataset.id
//     Si el target es el button Delete -> deleteItem(id)
//     Si el target es el button Edit -> editItem(id)
//   })
//
// Cambios para el checkbox:
// - listEl.addEventListener("change", (e) => {
//     Si e.target es el checkbox:
//       Encuentra el li, lee id
//       togglePacked(id, e.target.checked)
//   })

// ==================================================
// 8) Startup (inicialización)
// ==================================================
// - items = loadItems() (si usas localStorage) o items = []
// - Llama render() al final para que aparezca la UI
