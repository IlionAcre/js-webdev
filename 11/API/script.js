// REST Countries — Continentes únicos y conteo por continente
// ---------------------------------------------------------------
// Conceptos: Set, reduce
// ---------------------------------------------------------------
// Enunciado:
//
// Consulta la API: https://restcountries.com/v3.1
//    para obtener todos los países del mundo.
//
// Extrae el continente (campo "continents") de cada país.
//     - Algunos países pueden tener más de un continente.
//
// Crea un Set con todos los continentes únicos.
//
// Usa reduce para contar cuántos países hay en cada continente.

// JSONPlaceholder — Métricas de posts de "Bret"
// ---------------------------------------------------
// Conceptos: map, filter, reduce
//
// ENUNCIADO (paso a paso):
// 1) Llama a https://jsonplaceholder.typicode.com/users y encuentra el usuario con username === "Bret".
// 2) Llama a https://jsonplaceholder.typicode.com/posts y filtra los posts por userId del usuario encontrado.
// 3) Calcula:
//    a) totalPosts
//    b) promedioTituloChars (longitud promedio de los títulos)
//    c) titulosLargos (títulos con longitud > promedio)
// 4) Imprime el objeto con las métricas.
//

// TheMealDB — Ranking de ingredientes por frecuencia
// --------------------------------------------------------
// Conceptos: Map, reduce, filter (sin flatMap)
//
// ENUNCIADO (paso a paso):
// 1) Llama a https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
// 2) Para cada receta, extrae los campos strIngredient1..strIngredient20.
// 3) Normaliza cada ingrediente (trim + toLowerCase) y descarta vacíos.
// 4) Usa un Map para contar frecuencia por ingrediente.
// 5) Devuelve/imprime el Top 5 (mayor a menor) en forma:
//    [{ ingrediente, veces }, ...]
//

// TVMaze — Búsqueda múltiple con deduplicación y agregados
// --------------------------------------------------------------
// Conceptos: Set, Map, filter, reduce (sin flatMap)
//
// ENUNCIADO (paso a paso):
// 1) Para queries = ["office","star","war"], llama a https://api.tvmaze.com/search/shows?q={q}.
// 2) Combina todos los resultados en un solo array (agrega item.show).
// 3) Deduplícalos por show.id usando Map (id -> show).
// 4) Calcula:
//    a) total de shows
//    b) promedioRating = promedio de show.rating.average (ignora nulos)
//    c) porLenguaje = conteo por show.language
//    d) top3PorRuntime = los 3 shows con mayor show.runtime (ignora nulos)
// 5) Imprime el objeto con las métricas.
//
