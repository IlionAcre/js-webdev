"use strict";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);

let arraypares = array.filter(elemento => elemento % 2 === 0);

console.log(arraypares);

// function filtrarPorPares(array) {
//   const nuevoArray = [];
//   for (let elemento of array) {
//     if (elemento % 2 === 0) {
//       console.log(elemento);
//       nuevoArray.push(elemento);
//     }
//   }
//   return nuevoArray;
// }

// console.log(filtrarPorPares(array));
// console.log(array);
