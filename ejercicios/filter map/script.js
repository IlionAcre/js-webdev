"use strict";

/*
Crea una función que reciba un array de números y devuelva solo los que sean múltiplos de 3 o 5,
pero no de ambos al mismo tiempo.
Ejemplo de entrada:
[3, 5, 10, 12, 15, 18, 20]
Ejemplo de salida:
[3, 5, 10, 12, 18, 20]
*/

/*
Crea una función que reciba una lista de palabras y un número mínimo de letras, y devuelva
únicamente las palabras que cumplan TODAS estas condiciones:
1) después de recortar espacios, pasar a minúsculas y quitar acentos,
2) tengan como mínimo esa cantidad de letras,
3) no contengan dígitos,
4) no tengan el mismo carácter repetido 3 o más veces de forma consecutiva.
La función debe regresar las palabras ya normalizadas (minúsculas y sin acentos).
Ejemplo de entrada:
["  sol  ", "montaña", "mar2", "cielo", "coooool", "Árbol", "pingüino"], 4
Ejemplo de salida:
["montana", "cielo", "arbol", "pinguino"]
*/

/*
Crea una función que reciba una lista de objetos con las propiedades "nombre", "edad", "roles" (array),
"ciudad" y "activo" (booleano), y devuelva solo aquellos objetos que cumplan:
- edad par estrictamente mayor a 20,
- (activo es true) O (roles tiene 2 o más elementos),
- ciudad NO está en una lista negra dada,
- el nombre tiene al menos dos palabras.
Ejemplo de entrada:
[
  { nombre: "Ana María",   edad: 22, roles: ["dev","qa"],              ciudad: "Bogotá",   activo: true  },
  { nombre: "Luis",        edad: 24, roles: ["ops"],                    ciudad: "Medellín", activo: false },
  { nombre: "Sara López",  edad: 28, roles: ["dev","lead","mentor"],    ciudad: "Cali",     activo: false },
  { nombre: "Pedro",       edad: 21, roles: ["support","ops"],         ciudad: "Lima",     activo: true  },
  { nombre: "Juan Pérez",  edad: 32, roles: [],                        ciudad: "Bogotá",   activo: true  }
],
["Lima"]
Ejemplo de salida:
[
  { nombre: "Ana María",  edad: 22, roles: ["dev","qa"],           ciudad: "Bogotá", activo: true  },
  { nombre: "Sara López", edad: 28, roles: ["dev","lead","mentor"],ciudad: "Cali",   activo: false },
  { nombre: "Juan Pérez", edad: 32, roles: [],                     ciudad: "Bogotá", activo: true  }
]
*/

/*
Crea una función que reciba un array de temperaturas en °C y regrese un nuevo array
con las temperaturas convertidas a °F usando la fórmula F = C * 9/5 + 32.
Ejemplo de entrada:
[0, 20, 37, 100]
Ejemplo de salida:
[32, 68, 98.6, 212]
*/

/*
Crea una función que reciba un array de personas y regrese un nuevo array de objetos con:
- username: primera letra del nombre + apellido normalizado (sin acentos, sin espacios/guiones, solo letras),
  todo en minúsculas y limitado a 12 caracteres en total,
- domain: el dominio extraído del email,
- display: "nombre apellido <email>" en minúsculas (sin alterar acentos/guiones).
Ejemplo de entrada:
[
  { firstName: "María José", lastName: "De la Oña",   email: "maria.oj@example.com" },
  { firstName: "Juan",       lastName: "Pérez-Gómez", email: "juan.perez@example.com" }
]
Ejemplo de salida:
[
  { username: "mdelaona",    domain: "example.com", display: "maría josé de la oña <maria.oj@example.com>" },
  { username: "jperezgomez", domain: "example.com", display: "juan pérez-gómez <juan.perez@example.com>" }
]
*/

/*
Crea una función que reciba un array de publicaciones y regrese un nuevo array de objetos con:
- id, title,
- slug: en minúsculas, sin acentos, solo caracteres alfanuméricos y guiones; espacios a "-", múltiples guiones colapsados a uno,
  sin guiones iniciales/finales,
- preview: un resumen de hasta 30 caracteres SIN cortar palabras (si excede, corta en el último espacio antes del límite y agrega "..."),
- readingTime: tiempo de lectura en minutos redondeado hacia arriba (math.ceil), asumiendo 200 palabras por minuto.
Ejemplo de entrada:
[
  { id: 1, title: "Hola Mundo!",   content: "Bienvenido a mi blog de JavaScript." },
  { id: 2, title: "Trucos y Tips", content: "Consejos prácticos para escribir código limpio." }
]
Ejemplo de salida:
[
  {
    id: 1,
    title: "Hola Mundo!",
    slug: "hola-mundo",
    preview: "Bienvenido a mi blog de...",
    readingTime: 1
  },
  {
    id: 2,
    title: "Trucos y Tips",
    slug: "trucos-y-tips",
    preview: "Consejos prácticos para...",
    readingTime: 1
  }
]
*/

/*
Crea una función que reciba:
- orders: un array de órdenes con la forma
  {
    orderId: string|number,
    userId: string|number,
    status: "paid" | "refunded" | "pending",
    coupon?: string,
    items: [{ sku: string, qty: number, price: number }]
  }
- skuBlacklist: array de SKUs prohibidos
- coupons: objeto o Map con descuentos porcentuales por cupón (0–1), p. ej. { WELCOME: 0.1 } => Significa que el cupon WELCOME tiene un descuento del 10%
- minDistinct: número mínimo de SKUs distintos que un usuario debe haber comprado (en órdenes "paid") para ser incluido

La función debe:
1) considerar solo órdenes con status === "paid";
2) excluir ítems cuyo sku esté en skuBlacklist;
3) aplicar el descuento del cupón a la SUMA de la orden (si trae cupón), nunca por ítem;
4) acumular por usuario: { userId, total, uniqueSkus } (uniqueSkus es un array sin repetidos);
5) filtrar usuarios con menos de minDistinct SKUs distintos;
6) regresar un array de objetos { userId, total, uniqueSkus } ordenado por total desc.

Ejemplo de entrada:
orders =
[
  {
    orderId: 1, userId: "u1", status: "paid", coupon: "WELCOME",
    items: [
      { sku: "ITM-A", qty: 2, price: 10 },
      { sku: "ITM-B", qty: 1, price: 20 },
      { sku: "ITM-X", qty: 1, price: 100 }
    ]
  },
  {
    orderId: 2, userId: "u2", status: "paid",
    items: [
      { sku: "ITM-B", qty: 2, price: 20 },
      { sku: "ITM-C", qty: 1, price: 5 }
    ]
  },
  {
    orderId: 3, userId: "u1", status: "pending",
    items: [
      { sku: "ITM-C", qty: 3, price: 5 }
    ]
  }
]
skuBlacklist = ["ITM-X"]
coupons = { WELCOME: 0.1 }
minDistinct = 2

Ejemplo de salida:
[
  { userId: "u2", total: 45, uniqueSkus: ["B", "C"] },
  { userId: "u1", total: 36, uniqueSkus: ["A", "B"] }
]
*/

/*
Usa la API pública de JSONPlaceholder (https://jsonplaceholder.typicode.com/) para:

1) Hacer una llamada a /posts.
2) Filtrar los posts con dos reglas configurables:
   - Lista de userId permitidos.
   - Longitud mínima del título (en número de palabras).
3) Transformar (map) cada post filtrado a un objeto:
   - id
   - userId
   - title
   - titleUpper (título en mayúsculas)
   - firstWord (primera palabra del título, si existe)
4) Construir:
   - Un Map con conteo de posts por userId.
   - Un Set con todas las primeras palabras únicas de los títulos filtrados.
5) Devolver un objeto con:
   - posts: Array transformado (mantener el orden original).
   - countsByUser: Map con conteos por userId.
   - firstWords: Set de primeras palabras únicas.
   - summary: métricas sencillas.

Parámetros configurables:
- postsUrl (por defecto: "https://jsonplaceholder.typicode.com/posts")
- allowedUserIds (Array de números, por defecto: [1, 2, 3])
- minTitleWords (por defecto: 3)

*/

/* ============================
   Líneas para probarlo 
   ============================ */

// // Caso 1: parámetros por defecto
// (async () => {
//   const resultado1 = await procesarPosts({});
//   console.log("Resumen (por defecto):", resultado1.summary);
//   console.log("Primeros 5 posts:", resultado1.posts.slice(0, 5));
// })();

// // Caso 2: permitir solo userId 5 y 7, títulos de 4+ palabras
// (async () => {
//   const resultado2 = await procesarPosts({
//     allowedUserIds: [5, 7],
//     minTitleWords: 4,
//   });
//   console.log("Resumen (userId 5 y 7, min 4 palabras):", resultado2.summary);
// })();

// // Caso 3: todos los usuarios 1..10, títulos de 2+ palabras
// (async () => {
//   const resultado3 = await procesarPosts({
//     allowedUserIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     minTitleWords: 2,
//   });
//   console.log("Resumen (1..10, min 2 palabras):", resultado3.summary);
// })();
