// siii comentarios
"use strict";

// const listaPrueba = [2, "paaaaaa", null, 64, 0, ""];

// function limpiar(listaParaLimpiar) {
//   const listaLimpia = [];
//   if (listaParaLimpiar[0]) listaLimpia.push(listaParaLimpiar[0]);
//   if (listaParaLimpiar[1]) listaLimpia.push(listaParaLimpiar[1]);
//   if (listaParaLimpiar[2]) listaLimpia.push(listaParaLimpiar[2]);
//   if (listaParaLimpiar[3]) listaLimpia.push(listaParaLimpiar[3]);
//   if (listaParaLimpiar[4]) listaLimpia.push(listaParaLimpiar[4]);
//   return listaLimpia;
// }

// console.log(listaPrueba);
// console.log(limpiar(listaPrueba));

// let tieneLicencia = false;
// const pasastePrueba = true;

// if (pasastePrueba) tieneLicencia = true;
// if (tieneLicencia) console.log("Puedes conducir");

// const interface = "asdasd";
// const private = 34;

// for (inicializacion, condicion, actualizacion) {
//     ejecucion
//}

// for (let i = 1; i <= 9; i++) {
//   console.log(i);
// }

// Es igual que

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// const listaPrueba = [2, "paaaaaa", null, 64, 0, "", 34, "asdas", [2, 3]];

// // Se puede utilizar para iterar listas
// for (let i = 0; i < listaPrueba.length; i++) {
//   console.log(listaPrueba[i]);
// }

// const listaFrutas = ["Manzana", "Pera", "Banano", "Fresa", "Mora"];

// for (let num = 0; num < listaFrutas.length; num++) {
//   console.log(`El objeto ${listaFrutas[num]} esta en la posisicion ${num}`);
// }

// // Y tambien se pueden usar al en reverso
// // El siguiente loop imprime los objetos de una lista al revés
// for (let num = listaFrutas.length - 1; num >= 0; num--) {
//   console.log(`El objeto ${listaFrutas[num]} esta en la posisicion ${num}`);
// }

// for (inicializacion; condicion; actualizacion) {
//     ejecucion
//}

// Por último, se pueden utilizar dentro de funciones
function cuadrados(listaParaModificar) {
  const listaNueva = [];
  for (let i = 0; i < listaParaModificar.length; i++) {
    listaNueva.push(listaParaModificar[i] ** 2);
  }
  return listaNueva;
}

console.log(cuadrados([2, 3, -5, 4]));
