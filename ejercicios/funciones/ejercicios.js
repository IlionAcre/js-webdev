"use strict";

// Crea una función que reciba un precio y devuelva un string con la moneda y el símbolo.
// Usa valores por defecto para moneda="USD" y simbolo="$".
// Si el precio no es numérico, devuelve "NaN".

console.log(mostrarPrecio(100)); // "$100 USD"
console.log(mostrarPrecio(80, "EUR", "€")); // "€80 EUR"
console.log(mostrarPrecio("x")); // "NaN"

// Crea una función que reciba inicio, fin y paso (con valores por defecto)
// y devuelva un arreglo con los números desde inicio hasta fin (excluyendo fin).
// Si fin < inicio, el conteo debe ir hacia atrás automáticamente.

console.log(rango(0, 5)); // [0,1,2,3,4]
console.log(rango(5, 0)); // [5,4,3,2,1]
console.log(rango(10, 0, -3)); // [10,7,4,1]

// Crea una función que reciba muchos números y devuelva la suma de los valores únicos.
// Ignora los repetidos y los que no sean numéricos.

console.log(sumaUnica(2, 2, 3, 3, 3, 5)); // 10

// Crea una función que combine varios objetos en uno solo.
// Si una clave se repite y ambos valores son números, se suman.
// En los demás casos, el último valor reemplaza al anterior.
// Utilizar objeto.hasOwnProperty() para filtrar propiedades no definidas.

console.log(mezclarObjetos({ a: 1, b: 2 }, { a: 3, b: "x", c: 5 })); // {a:4,b:"x",c:5}

// Crea una función que construya una URL a partir de un objeto con:
// { base, path, params }, devolviendo base + "/" + path + "?a=b&c=d".
// Si no hay base, devuelve "".

console.log(
  construirURL({
    base: "https://api.com",
    path: "users",
    params: { page: 2, q: "test" },
  })
);
// "https://api.com/users?page=2&q=test"

// Crea una función que reciba un objeto { items, pagina, porPagina }
// y devuelva un objeto con:
// { datos, totalPaginas, anterior, siguiente }
// Los valores por defecto son pagina=1 y porPagina=3.

console.log(
  paginar({ items: [1, 2, 3, 4, 5, 6, 7, 8], pagina: 2, porPagina: 3 })
);
// { datos: [4, 5, 6], totalPaginas: 3, anterior: true, siguiente: true }

// Crea una función que reciba un rango [a,b] y una función fn.
// Devuelve un arreglo con el resultado de aplicar fn a cada número del rango.

console.log(
  aplicarARango([2, 5], function (x) {
    return x * 2;
  })
);
// [4,6,8,10]

// Crea una función que reciba tres funciones y devuelva una nueva
// que las aplique en orden: f3 → f2 → f1 sobre un valor dado.

function sumar1(n) {
  return n + 1;
}
function duplicar(n) {
  return n * 2;
}
function restar3(n) {
  return n - 3;
}

var nuevo = componer(sumar1, duplicar, restar3);
console.log(nuevo(5)); // (5-3)*2 +1 = 5

// Crea una función que reciba:
// - Un arreglo de productos {nombre, precio, qty}
// - Un objeto de opciones con impuestos y símbolo
// - Varias funciones de descuento como argumentos adicionales
// Usa valores por defecto y mezcla todos los conceptos anteriores.

function desc10(s) {
  return s * 0.9;
}
function desc5000(s) {
  return s - 5000;
}

var lista = [
  { nombre: "pan", precio: 2000, qty: 2 },
  { nombre: "leche", precio: 3000, qty: 1 },
];

console.log(
  resumenCarrito(
    lista,
    { impuesto: 0.19, simbolo: "$" },
    descuento10,
    resta5000
  )
);
// {
//   subtotal: "$1300",
//   impuesto: "$247",
//   total: "$1547",
//   porProducto: { pan: 4000, leche: 3000 }
// }
