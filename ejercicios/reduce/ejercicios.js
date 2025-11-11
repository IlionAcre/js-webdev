"use strict";

/************************************
 * Suma de números pares
 * Dado [1,2,3,4,5,6] devuelve 12.
 ************************************/

/****************************************************
 * Contar cuántos números están por encima del promedio del arreglo.
 * Ejemplo: [2,4,6,8] → promedio=5 → hay 2 mayores
 ****************************************************/

/********************************************************************
 * 3) Calcular resumen de un carrito de compras
 *
 * Crea una función que reciba una lista de objetos `items`, donde
 * cada objeto representa un producto con las siguientes propiedades:
 *
 *   - cat: categoría del producto (string)
 *   - precio: precio unitario (number)
 *   - qty: cantidad comprada (number)
 *   - gravaIVA: indica si el producto paga IVA (boolean)
 *
 * La función debe devolver un objeto resumen con:
 *
 *   - subtotal → suma de todos los (precio * qty)
 *   - iva → monto total de IVA aplicado SOLO a los productos con gravaIVA=true,
 *           usando una tasa del 19% (por defecto)
 *   - total → subtotal + iva
 *   - porCategoria → objeto que acumule el subtotal por cada categoría
 *
 * Ejemplo:
 * -----------------------------------------------------------
 * const items = [
 *   { cat: "libros", precio: 40, qty: 1, gravaIVA: false },
 *   { cat: "tech",   precio: 10, qty: 3, gravaIVA: true },
 *   { cat: "tech",   precio: 25, qty: 1, gravaIVA: true }
 * ];
 *
 * Resultado esperado:
 * {
 *   subtotal: 85,          // (40) + (10*3) + (25)
 *   iva: 9.5,              // solo sobre los tech => (55 * 0.19)
 *   total: 94.5,           // 85 + 9.5
 *   porCategoria: {
 *     libros: 40,
 *     tech: 45
 *   }
 * }
 ********************************************************************/

/********************************************************************
 * Combina map + filter + reduce
 * De usuarios activos, toma sus compras (array), filtra productos
 * con nombre >= 4 letras y qty > 0, suma cantidades por producto
 * y devuelve el TOP N por cantidad desc.
 ********************************************************************/
// const users = [
//   {active:true,  compras:[{name:"cafe", qty:2},{name:"te", qty:5}]},
//   {active:false, compras:[{name:"cafe", qty:7}]},
//   {active:true,  compras:[{name:"te", qty:1},{name:"cacao", qty:3}]}
// ];
// console.log(topProductos(users, 2)); // [["te",6], ["cacao",3]]

function topProductos(users, N) {
  const totales = {};

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user.active && user.compras) {
      const compras = user.compras;

      for (let j = 0; j < compras.length; j++) {
        const item = compras[j];
        const nombre = item.name;
        const cantidad = item.qty;

        if (nombre.length >= 4 && cantidad > 0) {
          if (totales[nombre]) {
            totales[nombre] += cantidad;
          } else {
            totales[nombre] = cantidad;
          }
        }
      }
    }
  }

  const pares = [];
  for (const prod in totales) {
    pares.push([prod, totales[prod]]);
  }

  for (let i = 0; i < pares.length - 1; i++) {
    for (let j = i + 1; j < pares.length; j++) {
      if (pares[j][1] > pares[i][1]) {
        const temp = pares[i];
        pares[i] = pares[j];
        pares[j] = temp;
      }
    }
  }

  const resultado = [];
  for (let i = 0; i < N && i < pares.length; i++) {
    resultado.push(pares[i]);
  }

  return resultado;
}

const users = [
  {
    active: true,
    compras: [
      { name: "cafe", qty: 2 },
      { name: "te", qty: 5 },
    ],
  },
  { active: false, compras: [{ name: "cafe", qty: 7 }] },
  {
    active: true,
    compras: [
      { name: "te", qty: 1 },
      { name: "cacao", qty: 3 },
    ],
  },
];

console.log(topProductos(users, 2)); // [["te",6], ["cacao",3]]
