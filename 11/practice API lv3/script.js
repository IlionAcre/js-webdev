// ===== DOM refs =====
const form = document.getElementById("searchForm");
const queryInput = document.getElementById("queryInput");
const ingredientInput = document.getElementById("ingredientInput");
const results = document.getElementById("results");

// ===== State =====
let lastMeals = [];

// ===== Helpers =====
const API_URL = (q = "") =>
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${q
    .trim()
    .replaceAll(" ", "+")}`;

const setLoading = () => {
  results.innerHTML = `<div class="empty">Cargando recetas…</div>`;
};

const setEmpty = (msg = "Sin resultados. Intenta otra búsqueda.") => {
  results.innerHTML = `<div class="empty">${msg}</div>`;
};

// Normalize one meal from API → object we can render easily
function normalizeMeal(meal) {
  // Build ingredients array from strIngredient1..20, pairing measures
  const indices = Array.from({ length: 20 }, (_, i) => i + 1);
  const ingredients = indices
    .map(i => {
      const ing = (meal[`strIngredient${i}`] || "").trim();
      const meas = (meal[`strMeasure${i}`] || "").trim();
      if (!ing) return null;
      return meas ? `${ing} (${meas})` : ing;
    })
    .filter(Boolean); // remove null/empty → uses .filter()

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory || "—",
    area: meal.strArea || "—",
    thumb: meal.strMealThumb,
    tags: (meal.strTags || "").split(",").filter(Boolean),
    ingredients, // array of strings
  };
}

// Render a list of meals → uses .map() to create HTML
function renderMeals(meals) {
  if (!meals || meals.length === 0) {
    setEmpty();
    return;
  }

  const html = meals
    .map(
      m => `
      <article class="card">
        <img src="${m.thumb}" alt="${m.name}" />
        <div class="card-body">
          <div class="card-title">${m.name}</div>
          <div class="card-meta">
            <span>Categoria: ${m.category}</span> · 
            <span>Región: ${m.area}</span>
          </div>
          <div class="ingredients">
            <strong>Ingredientes:</strong>
            ${m.ingredients.slice(0, 6).join(" · ")}${
        m.ingredients.length > 6 ? "…" : ""
      }
          </div>
        </div>
      </article>
    `
    )
    .join("");

  results.innerHTML = html;
}

// Apply ingredient filter on client side → uses .filter()
function applyIngredientFilter() {
  const needle = ingredientInput.value.trim().toLowerCase();
  if (!needle) {
    renderMeals(lastMeals);
    return;
  }

  const filtered = lastMeals.filter(m =>
    m.ingredients.some(line => line.toLowerCase().includes(needle))
  );
  renderMeals(filtered);

  if (lastMeals.length && filtered.length === 0) {
    setEmpty(`No se encontraron recetas con el ingrediente: "${needle}"`);
  }
}

// Fetch recipes by name/query
async function searchRecipes(q) {
  setLoading();
  try {
    const res = await fetch(API_URL(q));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const meals = (data.meals || []).map(normalizeMeal); // uses .map()
    lastMeals = meals;
    applyIngredientFilter(); // render with current ingredient filter (if any)
  } catch (err) {
    console.error(err);
    setEmpty("Ocurrió un error al buscar. Intenta de nuevo.");
  }
}

// ===== Events =====
form.addEventListener("submit", e => {
  e.preventDefault();
  searchRecipes(queryInput.value || "");
});

ingredientInput.addEventListener("input", applyIngredientFilter);

// Initial search (optional)
searchRecipes("chicken");
