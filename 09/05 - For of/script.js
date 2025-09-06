"use strict";

// for ... of -- > Para objetos iterables
// Objeto en el cual puedo recorrer sus elementos uno por uno

// let frutas = ["Manzana", "Pera", "Banano", "Mora"];
// let fobia = "AgOrAFObia";

// // for (let i = 0; i < frutas.length; i++) {
// //   console.log(frutas[i]);
// // }

// console.log(fobia[0]);

// for (let fruta of frutas) {
//   console.log(fruta);
// }

let numeros = [2, 3, 5, 12];

for (let numero of numeros) {
  console.log(numero - 10);
}

for (let letra of fobia) {
  console.log(letra.toLowerCase());
}

let inventario = {
  manzana: { nombre: "manzana", precio: 600, cantidad: 20 },
  pera: { nombre: "pera", precio: 2000, cantidad: 10 },
  banano: { nombre: "banano", precio: 200, cantidad: 40 },
};

let entradasInventario = Object.entries(inventario);

for (let [_, value] of entradasInventario) {
  for (let [key2, value2] of Object.entries(value)) {
    console.log(key2, value2);
  }
}

// for (let i = 0; i < entradasInventario.length; i++) {
//   console.log(
//     entradasInventario[i][1]["nombre"],
//     entradasInventario[i][1]["cantidad"]
//   );
// }

// for (let lista of entradasInventario) {
//   console.log(lista[1]["nombre"], lista[1]["cantidad"]);
// }

// let listaCoordenadas = [
//   [2, 4],
//   [3, 5],
//   [6, 7],
//   [10, 20],
// ];

// for (let [x, y] of listaCoordenadas) {
//   console.log(y);
// }

// for ... in
