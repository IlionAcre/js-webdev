"use strict";

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array);

// let arraypares = array.filter(elemento => elemento % 2 === 0);

// console.log(arraypares);

// // function filtrarPorPares(array) {
// //   const nuevoArray = [];
// //   for (let elemento of array) {
// //     if (elemento % 2 === 0) {
// //       console.log(elemento);
// //       nuevoArray.push(elemento);
// //     }
// //   }
// //   return nuevoArray;
// // }

// // console.log(filtrarPorPares(array));
// // console.log(array);

// let letra = "z";
// console.log(letra >= "0" && letra <= "9");

// let constanteTemperatura = 273; // Se pasa EL VALOR, una copia, no se pasa la posicion de memoria
// function cambiarTemperatura(variable, temperatura) {
//   variable = temperatura;
// }
// console.log(constanteTemperatura);
// cambiarTemperatura(constanteTemperatura, 300);
// console.log(constanteTemperatura);

// const objetoTemperatura = { temperatura: 273 }; // Se pasa la REFERENCIA, es decir la posicion de memoria donde esta el objeto
// function cambiarTemperatura(objeto, temperatura) {
//   objeto.temperatura = temperatura;
// }
// console.log("Ahora objeto");
// console.log(objetoTemperatura);
// cambiarTemperatura(objetoTemperatura, 300);
// console.log(objetoTemperatura);

// const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nuevoArreglo = arreglo
//   .map((n, i) => {
//     if (i % 2 === 0) {
//       return n * 2;
//     }
//   })
//   .filter(n => n);

// console.log(nuevoArreglo);

// const palabras = [
//   "  sol  ",
//   "montaña",
//   "mar2",
//   "cielo",
//   "coooool",
//   "Árbol",
//   "pingüino",
// ];
// console.log(palabras);
// const palabrasLimpias = palabras
//   .map(palabra => {
//     return palabra
//       .trim()
//       .toUpperCase()
//       .replace("Á", "A")
//       .replace("É", "E")
//       .replace("Í", "I")
//       .replace("Ó", "O")
//       .replace("Ú", "U");
//   })
//   .filter(palabra => palabra.length >= 5);

// const palabrasLimpias = palabras
//   .filter(palabra => palabra.length >= 5)
//   .map(palabra => {
//     return palabra
//       .trim()
//       .toUpperCase()
//       .replace("Á", "A")
//       .replace("É", "E")
//       .replace("Í", "I")
//       .replace("Ó", "O")
//       .replace("Ú", "U");
//   });

// console.log(palabrasLimpias);

// const nuevoMapa = new Map();

// nuevoMapa.set("a", 1);
// nuevoMapa.set("b", 2);
// nuevoMapa.set("c", 3);
// nuevoMapa.set("d", 4);
// nuevoMapa.set("e", 5);
// nuevoMapa.set("f", 6);

// nuevoMapa.forEach((value, key, todoElMapa) => {
//   console.log(key, value, todoElMapa);
// });

// const set = new Set();
// set.add("asd");
// set.add("ds");
// set.add("s");
// set.add("ff");
// set.forEach((value, index, todoElSet) => {
//   console.log(value, index, todoElSet);
// });

// const nuevoMapa2 = new Map(nuevoMapa);

// const personas = [
//   {
//     firstName: "María José",
//     lastName: "De la Oña",
//     email: "maria.oj@example.com",
//   },
//   {
//     firstName: "Juan",
//     lastName: "Pérez-Gómez",
//     email: "juan.perez@example.com",
//   },
//   { firstName: "Sara", lastName: "López", email: "sara.lopez@example.com" },
//   { firstName: "Pedro", lastName: "Pérez", email: "pedro.perez@example.com" },
//   { firstName: "Juan", lastName: "Pérez", email: "juan.perez@example.com" },
// ];

// const nombres = personas.map(
//   persona => persona.firstName + " " + persona.lastName
// );
// console.log(nombres);
