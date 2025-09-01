"use strict";

// function difSim(listaGrande) {
//   const resultados = [];
//   const lista1 = listaGrande[0];
//   const lista2 = listaGrande[1];

//   for (let i = 0; i < lista1.length; i++) {
//     if (!lista2.includes(lista1[i])) resultados.push(lista1[i]);
//   }

//   for (let i = 0; i < lista2.length; i++) {
//     if (!lista1.includes(lista2[i])) resultados.push(lista2[i]);
//   }

//   return resultados;
// }

// let listaTest = [
//   [2, 4, 6, 8, 10],
//   [3, 4, 5, 6, 7, 10, 11, 12],
// ];

// console.log(listaTest);

// console.log(difSim(listaTest));

// *
// **
// ***
// ****

// function triangulo(num) {
//   for (let i = 1; i <= num; i++) {
//     let fila = "";
//     for (let j = 1; j <= i; j++) {
//       fila += "*";
//     }
//     console.log(fila);
//   }
// }

// triangulo(10);

// Break

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
//   if (i === 2) break;
// }

// Continue

// for (let i = 10; i >= 0; i--) {
//   console.log(i);

//   if (i % 2 !== 0 && i !== 3) {
//     console.log(`Se va a ignorar la ejecucion de este ${i}`);
//     continue;
//   }
//   if (i === 3) {
//     console.log("Encontramos el numero, rompiendo el loop");
//     break;
//   }
//   console.log("El numero anterior es par");
// }

// [0, 7, 4, 6, 8, 2][
//   // 6
//   (0, 7, 4, 6)
// ][
//   // 7
//   (0, 7)
// ];

for (let i = 1; i <= 5; i++) {
  console.log(`En este momento, la XXXXX es igual a ${i}`);
  for (let j = 5; j >= 1; j--) {
    console.log(`En este momento, la YYYYY es igual a ${j}`);
  }
}
