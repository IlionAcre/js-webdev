"use strict";

// let persona = "Sara";
// let x = 10;
// let y = 20;

// function primera(a) {
//   let b = 5;
//   console.log("Esto se ejecuta antes de segunda");
//   let c = segunda(a, b);
//   console.log("Esto se ejecuta despues de segunda");
//   console.log(c);
//   return c;
// }

// function segunda(a, b) {
//   let w = 30;
//   console.log(w);
//   console.log(a + b + w);
//   return a + w + b;
// }

// // console.log(y);
// console.log("Me estoy ejecutando");
// let resultado = primera(x);
// let resultado2 = segunda(x, y);

const restaurante = {
  nombre: "Clásico Italiano",
  direccion: "Via Angelo Tavanti 23, Florencia, Italia",
  categorias: ["Italiana", "Pizzería", "Vegetariana", "Orgánica"],
  menuEntradas: ["Focaccia", "Bruschetta", "Pan de ajo", "Ensalada Caprese"],
  menuPrincipal: ["Pizza", "Pasta", "Risotto"],

  ordenSencilla: function (entrada, principal) {
    console.log(`Orden recibida: ${entrada}, ${principal}`);
  },
};

// let [inicio = "Focaccia", fuerte = "Pasta"] = []; // Destructuring

// restaurante.ordenSencilla(inicio, fuerte);

let {
  nombre: nombreUsuario,
  direccion,
  menuPrincipal: [, segunda],
  gerente: personaImportante = "Ana",
} = restaurante;
console.log(nombreUsuario);
console.log(direccion);
console.log(segunda);
console.log(personaImportante);

// restaurante["ordenSencilla"](inicio, fuerte);

// let listaEjemplo = ["Arroz", "Papa", "Tomate"];
// console.log(listaEjemplo);
// let [[a, b, c], , comida2] = listaEjemplo;
// console.log(a);
// console.log(b);
// console.log(c);

// let listaDeListas = [
//   ["Arroz", "Papa", "Tomate"],
//   ["Pizza", "Pasta", "Ensalada"],
//   ["Café", "Pizza", "Pasta"],
// ];

// let [, , [com1, com2, com3]] = listaDeListas;
// console.log(com1);
// console.log(com2);
// console.log(com3);

// let granLista = [
//   [1, 2],
//   ["a", "b", "c"],
//   [true],
//   [{ nombre: "Ana" }, { nombre: "Luis" }],
//   [],
//   [["rojo", "verde"], ["azul"]],
//   [23, "x", false],
//   [{ id: 1 }, { id: 2 }],
//   ["sol", "luna"],
//   [3.14, 2.71, 1.41],
// ];

// for (let lista of granLista) {
//   let [item1 = "ITEM1", item2 = "ITEM2", item3 = 0] = lista;
//   console.log(`${item1}, ${item2}, ${item3}`);
//   console.log("-------------------------");
// }
