"use strict";

// SETS
// const letrasUnicas = new Set("asjhkdkjasdhhajsdfvjasbdmjnasbdhjkgasd");

let comidasMexicanas = [
  "queso de cabra",
  "tacos",
  "burritos",
  "tacos de pescado",
  "queso de cabra",
  "queso de cabra",
  "pizza",
  "pasta",
];
const comidasUnicas = new Set(comidasMexicanas);
// console.log(comidasMexicanas);
// console.log(comidasUnicas);
// comidasUnicas.add("pozole");
// comidasUnicas.delete("burritos");
// console.log(comidasUnicas.has("tacos"));
// console.log(comidasUnicas.has("burritos"));
// // console.log(comidasUnicas[0]); Da undefined, el set no tiene posiciones
// for (const comida of comidasUnicas) {
//   console.log(comida);
// }

// // comidasUnicas.clear();
// // console.log(comidasUnicas);

// const comidasMexicanasU = new Set(comidasMexicanas);
// const comidasItalianasU = new Set([
//   "pizza",
//   "pasta",
//   "risotto",
//   "pizza",
//   "torta de queso",
//   "gnocchi",
//   "tacos",
//   "lasagna",
// ]);
// const comidasItalianasConLeche = new Set([
//   "pizza",
//   "pasta",
//   "torta de queso",
//   "lasagna",
// ]);

// console.log(comidasMexicanasU.union(comidasItalianasU));
// console.log(comidasMexicanasU.intersection(comidasItalianasU));
// console.log(comidasMexicanasU.difference(comidasItalianasU));
// console.log(comidasItalianasU.difference(comidasMexicanasU));
// console.log(comidasItalianasU.symmetricDifference(comidasMexicanasU));

// console.log(comidasItalianasConLeche.isSubsetOf(comidasMexicanasU));
// console.log(comidasItalianasConLeche.isSubsetOf(comidasItalianasU));

// console.log(comidasMexicanasU.isSupersetOf(comidasItalianasConLeche));
// console.log(comidasItalianasU.isSupersetOf(comidasItalianasConLeche));

// console.log(comidasItalianasU.isSubsetOf(comidasItalianasU));
// console.log(comidasItalianasU.isSupersetOf(comidasItalianasU));

const rest = new Map();
rest.set("nombre", "Clasico Italiano");
rest.set(1, "Florencia, Italia");
rest.set(2, "Lisboa, Portugal");
rest.set(true, "Esta abierto el restaurante");
// console.log(rest);

rest.set(false, "No está abierto");

rest
  .set("categorias", ["Italiana", "Pizza", "Vegetariana", "Orgánica"])
  .set("open", 11)
  .set("close", 23);

// console.log(rest);

const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categorias"));
// rest.delete("categorias");
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest.size);

// rest.set([1, 2], "Opciones");
// console.log(rest);
// console.log(rest.get([1, 2]));

// const arr = [1, 2];
// rest.set(arr, "Opciones");
// console.log(rest);
// console.log(rest.get(arr));

// const titulo = document.getElementsByClassName("title");
// console.log(titulo);

// rest.set(document.getElementsByClassName("title"), "Heading");
// console.log(rest);

const question = new Map([
  ["pregunta", "Cual es el mejor pais?"],
  [1, "Colombia"],
  [2, "Chile"],
  [3, "Perú"],
  [4, "México"],
  ["respuesta", 1],
  [true, "Bien! Respuesta correcta"],
  [false, "No es correcto, intenta de nuevo"],
]);

const openingHours = {
  lunes: 12,
  martes: 12,
  miércoles: 12,
  jueves: 11,
  viernes: 12,
};
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   console.log(key + " -- " + value);
// }

// console.log(question.entries());
// console.log(question.values());
// console.log(question.keys());

// Dado un arreglo de objetos con nombre y categoría,
// devuelve un Map donde cada clave sea la categoría y su valor sea un Set con los nombres únicos.
// Ejemplo:
// [{nombre: "manzana", categoria: "fruta"}, {nombre: "pera", categoria: "fruta"}, {nombre: "pollo", categoria: "carne"}, {nombre: "manzana", categoria: "fruta"}]
// -> Map { "fruta" => Set {"manzana", "pera"}, "carne" => Set {"pollo"} }

// function agrupar(array) {
//   let mapaCategoria = new Map(); // Mapa que vamos a retornar
//   let listaCategoria = new Set(); // Set que tiene todas las categorias encontradas || ej: ["fruta", "carne"]

//   for (let { categoria } of array) {
//     listaCategoria.add(categoria); // Llenar el set de categorias
//   }

//   for (let categoria of listaCategoria) {
//     let setCategoria = new Set(); // Set de nombres en cada categoria
//     for (let objeto of array) {
//       if (objeto.categoria === categoria) setCategoria.add(objeto.nombre);
//     }
//     console.log(categoria);
//     console.log(setCategoria);
//     console.log("---///////");
//   }
// }
// agrupar([
//   { nombre: "manzana", categoria: "fruta" },
//   { nombre: "pera", categoria: "fruta" },
//   { nombre: "pollo", categoria: "carne" },
//   { nombre: "manzana", categoria: "fruta" },
// ]);

// const newMap = new Map();
// const listaFruta = ["f", "r", "u", "t", "a"];

// const keyArray = [1, 2];

// newMap.set("fruta", new Set(["manzana", "pera"]));
// newMap.set(keyArray, "testeando");
// // console.log(newMap);

// // console.log(newMap.get(listaFruta.join("")));
// // console.log(newMap.get(keyArray));

// console.log(newMap.keys());
// console.log(newMap.values());
// console.log(newMap.entries());
// console.log(newMap.size);

// const correo = "juan.perez@gmail.com";
// console.log(correo.slice(correo.indexOf("@"), correo.lastIndexOf(".")));

const mapaContador = new Map();
mapaContador.set("minutos", 1);
mapaContador.set("segundos", 2);
console.log(mapaContador.get("minutos"));
mapaContador.set("minutos", 2);
console.log(mapaContador.get("minutos"));
