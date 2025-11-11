"use strict";

// Puedes usar esta base si quieres verla explícita:
const BASE_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

// ===== 1. Select elements from the DOM =====
const form = document.getElementById("searchForm");
const queryInput = document.getElementById("queryInput");
const ingredientInput = document.getElementById("ingredientInput");
const results = document.getElementById("results");

// ===== 2. Create a variable to store the last fetched recipes =====
let lastMeals = [];

// ===== 3. Define a function to build the API URL =====
const API_URL = (q = "") => `${BASE_URL}${q.trim().replaceAll(" ", "+")}`;

// ===== 4. Define a function to show a "loading" message =====
const setLoading = () => {
  results.innerHTML = `<div class="empty">Cargando recetas…</div>`;
};

// ===== 5. Define a function to show a "no results" message =====
const setEmpty = (msg = "Sin resultados. Intenta otra búsqueda.") => {
  results.innerHTML = `<div class="empty">${msg}</div>`;
};

// ===== 6. Define a function to normalize each meal object =====
function normalizeMeal(meal) {
  // Construir arreglo de ingredientes (strIngredient1..20) emparejados con medidas
  const indices = Array.from({ length: 20 }, (_, i) => i + 1);
  const ingredients = indices
    .map(i => {
      const ing = (meal[`strIngredient${i}`] || "").trim();
      const meas = (meal[`strMeasure${i}`] || "").trim();
      if (!ing) return null;
      return meas ? `${ing} (${meas})` : ing;
    })
    .filter(Boolean); // remove null/empty

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory || "—",
    area: meal.strArea || "—",
    thumb: meal.strMealThumb,
    tags: (meal.strTags || "").split(",").filter(Boolean),
    ingredients, // array de strings
  };
}

// ===== 7. Define a function to render meals (use .map()) =====
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

// ===== 8. Define a function to apply the ingredient filter =====
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

// ===== 9. Define an async function to fetch recipes =====
async function searchRecipes(q) {
  setLoading();
  try {
    const res = await fetch(API_URL(q));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const meals = (data.meals || []).map(normalizeMeal);
    lastMeals = meals;
    applyIngredientFilter(); // render con el filtro actual (si existe)
  } catch (err) {
    console.error(err);
    setEmpty("Ocurrió un error al buscar. Intenta de nuevo.");
  }
}

// ===== 10. Add event listeners =====
form.addEventListener("submit", e => {
  e.preventDefault();
  searchRecipes(queryInput.value || "");
});

ingredientInput.addEventListener("input", applyIngredientFilter);

// ===== 11. Optionally, trigger an initial search =====
searchRecipes("chicken");
