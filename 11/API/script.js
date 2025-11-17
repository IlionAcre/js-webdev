// REST Countries — Continentes únicos y conteo por continente
// Tienes: https://restcountries.com/v3.1/all?fields=name,continents
// Debe retornar:
//  - un Set con continentes únicos
//  - un objeto { continente: cantidadDePaíses }

// JSONPlaceholder — Métricas de posts de "Bret"
// Tienes: https://jsonplaceholder.typicode.com/users, /posts
// Debe retornar:
//  - totalPosts
//  - promedioTituloChars
//  - titulosLargos (array de títulos > promedio)

// TheMealDB — Ranking de ingredientes por frecuencia
// Tienes: https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
// Debe retornar:
//  - Top 5 ingredientes más frecuentes en forma [{ ingrediente, veces }, ...]

// TVMaze — Búsqueda múltiple con deduplicación y agregados
// Tienes: queries = ["office","star","war"], https://api.tvmaze.com/search/shows?q={q}
// Debe retornar:
//  - total (número de shows únicos)
//  - promedioRating (ignorando nulos)
//  - porLenguaje { idioma: conteo }
//  - top3PorRuntime [{ id, name, runtime }]
