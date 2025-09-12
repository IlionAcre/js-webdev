"use strict";

// let objetoVacio = { algo: "asd" };

// console.log(objetoVacio);

// objetoVacio["algo"] = 123;
// console.log(objetoVacio);

// objetoVacio["otraCosa"] = "Esto es nuevo";
// console.log(objetoVacio);

// objetoVacio["nuevaCosa"] = "esto es nuevo";
// console.log(objetoVacio);

// let palabra = "Hola";
// console.log(palabra);

// palabra[0] = "W";
// console.log(palabra);

// let palabras = ["Hola", "asd", 123];
// console.log(palabras);

// palabras[0] = "Wola";
// console.log(palabras);

// let objetoAEvaluar = "";

// if (!objetoAEvaluar) {
//   console.log("Se cumple");
// }

// string.replace(old, new);

function normalizar(palabra) {
  let npalabra = palabra.replace("á", "a");
  return npalabra;
}

console.log(normalizar("mámáááámamá"));

console.log("naranja".replace("j", "J"));
