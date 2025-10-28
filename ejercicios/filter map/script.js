"use strict";

// Agarrar solo los numeros mayores que 10
const nums = [7, "k", 15, null, 22, 9];

// Convierte cada string en "LEN=<longitud> - <string>"
const cielo = ["sol", "luna"]; // => ["LEN=3 - sol", "LEN=4 - luna"]

// De usuarios {nombre, puntos}, quédate con puntos >= 50 y mapea a "⭐ <nombre> (<puntos>)".
const usuarios = [
  { nombre: "Pepe", puntos: 100 },
  { nombre: "Sara", puntos: 50 },
  { nombre: "Juan", puntos: 10 },
  { nombre: "Maria", puntos: 20 },
  { nombre: "Luis", puntos: 30 },
]; // ["⭐ Pepe (100)", "⭐ Sara (50)"]

// Mantén solo strings que:
// No estén vacíos al hacer trim(), y
// No contengan dígitos (0-9).
const strings = [" hola ", "js2", "", "React", "  ", "Vue3", "node"];
// / [" hola ", "React", "node"]

//Normaliza nombres propios a Title Case (primera letra de cada palabra en mayúscula, resto minúsculas).
const nombres = ["aNA mAríA", "lUiS PÉreZ"];
// ["Ana María","Luis Pérez"]

// De productos {name, price, active}
// Filtra active === true y price numérico y > 0
// Mapea a {id: index+1, name: TitleCase(name), price: número con 2 decimales}
const productos = [
  { name: "cepillo dental", price: 5, active: true },
  { name: "PASTA", price: "N/A", active: true },
  { name: "enjuague bucal", price: 12.9, active: true },
  { name: "x", price: -3, active: true },
];
// [
//   { id:1, name:"Cepillo Dental", price:5.00 },
//   { id:2, name:"Enjuague Bucal", price:12.90 }
// ]

// haz una funcion que dada una lista de números,
// devuelve una nueva lista sin repetidos,
// preservando el primer orden de aparición.
// [1, 2, 2, 3, 1] -> [1, 2, 3]

// haz una funcion que devuelva la intersección de dos listas sin repetidos.
// [1, 2, 3, 4], [3, 4, 5] -> [3, 4]

// haz una funcion que dado un universo U y una lista de subconjuntos S,
// seleccione un conjunto mínimo de subconjuntos que cubran todos los elementos de U.
// U = ["a","b","c","d"], S = [["a","b"],["b","c"],["c","d"],["a","d"]] -> [["a","b"],["c","d"]]

// haz una funcion que cuente cuántas veces aparece cada palabra en una cadena separada por espacios.
// "sol sol luna" -> {sol: 2, luna: 1}

// haz una funcion que dado un texto y un número k,
// retorne las k palabras más frecuentes.
// "a a b c c c", k=2 -> ["c", "a"]

// haz una funcion que agrupe palabras que sean anagramas entre sí.
// ["acto", "taco", "cosa", "saco"] -> [["acto","taco"],["cosa","saco"]]

// haz una funcion que, dada una lista de frases,
// devuelva un Map donde cada palabra sea una clave,
// y su valor sea un Set con todas las frases (índices) en las que aparece esa palabra.
// ["el sol brilla", "la luna brilla", "el sol sale"] ->
// Map {
//   "el" => Set {0, 2},
//   "sol" => Set {0, 2},
//   "brilla" => Set {0, 1},
//   "la" => Set {1},
//   "luna" => Set {1},
//   "sale" => Set {2}
// }
