"use strict";

// let stringPrueba = "  Hola       mundo  JS   soy    nuevo  ";

// function removerEspacios(texto) {
//   texto = texto.trim();
//   let listaTexto = texto.split(" ");
//   let nuevaListaTexto = [];
//   for (let palabra of listaTexto) {
//     if (palabra) {
//       nuevaListaTexto.push(palabra);
//     }
//   }
//   texto = nuevaListaTexto.join(" ");

//   return texto;
// }
// console.log(stringPrueba);
// console.log(removerEspacios(stringPrueba));
// console.log(removerEspacios("  Cualquier    string que   se  nos ocurra"));

// let persona = { nombre: "Paty", contador: 3 };

// let llave = "nombre";
// console.log(persona[llave]);

// llave = "contador";
// console.log(persona[llave]);

// For EACH - Para iterar sobre un array
// array.forEach(funcion(elemento, indice, array)) -> Para iterar sobre un array
// La funcion se ejecuta automaticamente y puede recibir hasta 3 parametros
// No permite el uso de BREAK ni CONTINUE

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numeros.forEach(num => {
//   console.log(num * 10);
// });

const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
// colores.forEach((color, lugarDondeSeEncuentraElObjeto) => {
//   if (lugarDondeSeEncuentraElObjeto % 2 === 0) {
//     colores[lugarDondeSeEncuentraElObjeto] = color.toUpperCase();
//   }
// });
// console.log(colores);

// colores.forEach((objetoDelArray, indice, elMismoArrayQueLlamaLaFuncion) => {
//   console.log(objetoDelArray, indice, elMismoArrayQueLlamaLaFuncion);
// });

colores.forEach((color, indice) => {
  if (indice % 2 === 0) {
    colores[indice] = color.toUpperCase();
  } else {
    colores[indice] = "Este color era indigno";
  }
});
console.log(colores);
