"use strict";

// let x = 5;
// let y = 10;

// [x, y] = [y, x];

// Spread operator

// let arr = [7, 8, 9];
// console.log(arr);

// let badArr = [1, 2, 3, ...[30, 40, 50], 10];
// console.log(badArr);

// let newArr = [1, 2, 3, ...arr, 10];
// console.log(newArr);

const restaurante = {
  nombre: "Clásico Italiano",
  direccion: "Via Angelo Tavanti 23, Florencia, Italia",
  categorias: ["Italiana", "Pizzería", "Vegetariana", "Orgánica"],
  menuEntradas: ["Focaccia", "Bruschetta", "Pan de ajo", "Ensalada Caprese"],
  menuPrincipal: ["Pizza", "Pasta", "Risotto"],

  ordenSencilla: function (entrada, principal) {
    console.log(`Orden recibida: ${entrada}, ${principal}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Pedido de pasta con ingredientes: ${ing1}, ${ing2}, ${ing3}`);
  },
};

// restaurante.menuEntradas = [...restaurante.menuEntradas, "Pancakes"];
// console.log(restaurante.menuEntradas);
// console.log(newMenu);

// restaurante.menu = [...restaurante.menuEntradas, ...restaurante.menuPrincipal];
// console.log(restaurante.menu);

// let newOrder = ["Focaccia", "Pasta"];
// restaurante.ordenSencilla(...newOrder);

// let ingredientes = [
//   prompt("Ingrediente 1"),
//   prompt("Ingrediente 2"),
//   prompt("Ingrediente 3"),
// ];
// restaurante.orderPasta(...ingredientes);

// console.log(restaurante);

// const newRestaurante = { founder: "Fabian", ...restaurante, yearFounded: 2020 };
// console.log(newRestaurante);

// let nombre = "Sara";
// console.log(nombre);

// rest operator - rest pattern

// const [a, b, ...restoDeNumeros] = [9, 7];
// const [pizza, pasta, ...restoDeComidas] = [
//   ...restaurante.menuPrincipal,
//   ...restaurante.menuEntradas,
// ];
// console.log(pizza);
// console.log(pasta);
// console.log(restoDeComidas);

function add(...numeros) {
  console.log(numeros);
  let resultado = 0;
  for (let n of numeros) {
    resultado += n;
  }
  console.log(resultado);
}

add(2, 3);
add(7, 20, 10, 15, 7);
const x = [2, 3, 4, 6, 10, 23];
add(...x);

4 * (4 + 2);
