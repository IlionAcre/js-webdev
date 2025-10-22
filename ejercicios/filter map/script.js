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
