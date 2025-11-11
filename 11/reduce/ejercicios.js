"use strict";

// const numeros = [1, 2, 3, 4, 5, 6];

// let sumaTotal = numeros.reduce((acumulador, elemento) => {
//   return acumulador + elemento;
// }, 0);

// console.log(sumaTotal);

// promedio = promedio / numeros.length;
// console.log(promedio);

// const palabras = ["sol", "luna", "sol", "luna", "sol"];

// let totalLetras = palabras.reduce((acumulador, elemento) => {
//   return acumulador + elemento.length;
// }, 100);

// console.log(totalLetras);

// const conteo = palabras.reduce((acumulador, palabra) => {
//   acumulador[palabra] = (acumulador[palabra] || 0) + 1;
//   return acumulador;
// }, {});

// console.log(conteo);

// const productos = [
//   { nombre: "Manzana", tipo: "fruta" },
//   { nombre: "Naranja", tipo: "fruta" },
//   { nombre: "Pera", tipo: "vegetal" },
//   { nombre: "Pimiento", tipo: "vegetal" },
//   { nombre: "Papa", tipo: "Tuberculo" },
// ];

// const agrupado = productos.reduce((acumulador, producto) => {
//   if (!acumulador[producto.tipo]) acumulador[producto.tipo] = [];
//   acumulador[producto.tipo].push(producto.nombre);
//   return acumulador;
// }, {});
// console.log(agrupado);

async function tvmazeAgregados() {
  const queries = ["office", "star", "war"];
  const acumulado = [];

  // 1/2) Descarga y combina
  for (const q of queries) {
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`
    );
    const lista = await res.json();
    for (const item of lista) {
      if (item && item.show) acumulado.push(item.show);
    }
  }

  // 3) Dedupe por id usando Map
  const porId = new Map();
  for (const show of acumulado) {
    if (show && typeof show.id === "number") porId.set(show.id, show);
  }
  const shows = Array.from(porId.values());

  // 4a) total
  const total = shows.length;

  // 4b) promedioRating (ignorar nulos/no numéricos)
  const ratings = shows
    .map(s => s?.rating?.average)
    .filter(r => typeof r === "number");
  const promedioRating = ratings.length
    ? ratings.reduce((a, b) => a + b, 0) / ratings.length
    : 0;

  // 4c) conteo por lenguaje
  const porLenguaje = shows.reduce((acc, s) => {
    const lang = s?.language || "Desconocido";
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});

  // 4d) top 3 por runtime
  const top3PorRuntime = shows
    .filter(s => typeof s.runtime === "number")
    .sort((a, b) => b.runtime - a.runtime)
    .slice(0, 3)
    .map(s => ({ id: s.id, name: s.name, runtime: s.runtime }));

  // 5) Salida
  console.log({ total, promedioRating, porLenguaje, top3PorRuntime });
}

tvmazeAgregados();
