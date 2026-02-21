// "use strict";

// // Loops control

// // EJERCICIO 1
// // Enunciado: Dado el array `scores1`, recorre con un classic `for` y construye un nuevo array `status1`.
// // - Si score >= 70 => "pass"
// // - Si no => "fail"
// // Luego imprime `status1` como string separado por ", " usando join().
// // const scores1 = [95, 60, 72, 40, 70];

// // const status1 = [];
// // for (let i = 0; i < scores1.length; i++) {
// //   status1.push(scores1[i] >= 70 ? "pass" : "fail");
// // }

// // console.log(status1);
// // EJERCICIO 2
// // Enunciado: Usa `for...of` para sumar SOLO los números que sean odd (impares) en `nums2`.
// // Imprime la suma final.
// const nums2 = [3, 10, 7, 2, 9, 8, 1];

// // EJERCICIO 3
// // Enunciado: Dado el object `inventory3`, usa `for...in` para crear un array de strings con el formato:
// // "key=value" SOLO si el value es > 0. Luego imprime el array.
// const inventory3 = { apples: 3, bananas: 0, oranges: 2, pears: 0, mangos: 5 };

// // EJERCICIO 4
// // Enunciado: Usa `forEach` para transformar `words4` en un object `stats4` con:
// // - totalChars: total de caracteres sumando todas las palabras
// // - longest: la palabra más larga (si empatan, la primera)
// // Imprime `stats4`.
// const words4 = ["hi", "javascript", "map", "reduce", "loops"];

// // EJERCICIO 5
// // Enunciado: Simula un mini login con `while` + `switch`.
// // Tienes un array `attempts5` de passwords que el usuario va probando en orden.
// // - La password correcta es "open-sesame".
// // - Usa `while` para iterar intentos hasta acertar o hasta 4 intentos.
// // - En cada intento usa `switch` para imprimir:
// //   * "empty" si es "" (string vacío)
// //   * "too short" si length < 6
// //   * "wrong" si no coincide con la correcta
// //   * "success" si coincide
// // Al final imprime "locked" si no tuvo éxito.
// const attempts5 = ["", "123", "sesame", "open-sesame", "whatever"];
// const correct5 = "open-sesame";

// // EJERCICIO 6
// // Enunciado: Usa `do...while` para generar un string `result6` con números desde 1 hasta `n6`,
// // pero reemplaza:
// // - múltiplos de 3 por "Fizz"
// // - múltiplos de 5 por "Buzz"
// // - múltiplos de ambos por "FizzBuzz"
// // Usa concat con "-" (dash) entre tokens. Imprime el resultado.

// let contador = 3;

// do {
//   console.log(contador);
//   contador++;
// } while (contador > 3 && contador < 10);

// console.log("nuevo contador", contador);

// // 4 5 6 7 8 9

// const tags = ["new"];
// console.log(tags);
// const tags_modified = tags.map(tag => `<span class="pill tag">#${tag}</span>`);
// console.log(tags_modified);
// console.log(tags_modified.join(""));

// const buildings = [
//   { type: "house", price: 1000, sqft: 200 },
//   { type: "apartment", price: 2000, sqft: 100 },
//   { type: "condo", price: 3000, sqft: 150 },
//   { type: "house", price: 4000, sqft: 50 },
//   { type: "house", price: 2000, sqft: 200 },
//   { type: "apartment", price: 200, sqft: 100 },
// ];

// const counter = {};

// for (const building of buildings) {
//   counter[building.type] = (counter[building.type] ?? 0) + 1;
// }

// console.log(counter);

// const mapa = new Map();

// mapa.set("a", 1);
// mapa.set("c", 5);
// mapa.set("b", 6);

// const array = Array.from(mapa.entries())
// //   .filter(([_, v]) => v > 3)
// //   .map(([k, v]) => `${k}=${v}`);
// // console.log(array);
// // console.log(mapa.entries());

// const arr1 = [];

// for (const entry of mapa.entries()) {
//   arr1.push(entry);
// }
// console.log(arr1);

// const control = {
//   operation: "multiply",
//   args: [2, 4],
// };

// const helpers = {
//   sample: 4,
//   sum(n1, n2) {
//     return n1 + n2;
//   },

//   multiply: (n1, n2) => n1 * n2,
// };

// console.log(helpers[control.operation](...control.args));

// const arrToSum = [4, 6];
// function sum(n1, n2) {
//   return n1 + n2;
// }

// // console.log(sum(...arrToSum));
// console.log(arrToSum);
// console.log(...arrToSum);
// console.log(4, 6);

const carritoCompras = {
  carrito: new Map(),
  agregarObjeto(nombre, cantidad) {
    this.carrito.set(nombre, cantidad);
  },
};

const carritoVentas = {
  carrito: new Map(),
  agregarObjeto(nombre, cantidad) {
    this.carrito.set(nombre, cantidad);
  },
};

carritoCompras.agregarObjeto("manzana", 2);
console.log(carritoCompras.carrito);

carritoVentas.agregarObjeto("papa", 3);
console.log(carritoVentas.carrito);
