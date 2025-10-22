"use strict";

// Recorre los valores de inventario y:
// Si stock es null/undefined, colócale 0 usando ??=.
// Si precio es 0 y el producto no está descontinuado, súbele el precio a precioSugerido.
// Usa short-circuiting para marcar agotado: true cuando stock sea 0.
// Devuelve un arreglo con los nombres de productos cuyo agotado === true.
const inventario = {
  A1: {
    nombre: "Lapicero",
    stock: 0,
    precio: 0,
    precioSugerido: 2.5,
    descontinuado: false,
  },
  B2: {
    nombre: "Cuaderno",
    stock: 10,
    precio: 3.2,
    precioSugerido: 3.2,
    descontinuado: false,
  },
  C3: {
    nombre: "Borrador",
    stock: null,
    precio: 1.0,
    precioSugerido: 1.5,
    descontinuado: true,
  },
  D4: {
    nombre: "Regla",
    stock: undefined,
    precio: 0,
    precioSugerido: 1.0,
    descontinuado: false,
  },
};

// Con Object.keys valida que cada usuario tenga email y rol.
// Si falta email, asígnale "pending@correo.com" con ||=.
// Si falta rol, asígnale "invitado" con ??=.
// Construye y retorna un array de ids de usuarios que quedaron con email “pendiente”.
const usuarios = {
  u101: { nombre: "Ana", email: "", rol: "admin" },
  u102: { nombre: "Luis", rol: null },
  u103: { nombre: "Mia", email: "mia@x.io" },
  u104: { nombre: "Leo", email: "", rol: undefined },
};

// Toma las entradas [id, datos] y usa destructuring para extraer metrics?.views, metrics?.likes.
// Si views es undefined, colócale 0 con ??=.
// Si likes < 0, corrígelo a 0 (con short-circuiting).
// Crea un nuevo objeto resumen con { id, ratio: likes/(views||1) } por cada artículo y retorna un array de resúmenes.
const articulos = {
  a10: { titulo: "Intro", metrics: { views: 100, likes: 9 } },
  a20: { titulo: "Avanzado", metrics: { views: undefined, likes: -3 } },
  a30: { titulo: "Tips", metrics: null },
};

// Recorre con for…in el objeto pedidos (es un objeto plano, sin prototipo custom).
// Para cada pedido:
// Completa valores:
// Si falta el nombre del cliente, asignamos uno genérico
// En caso de que no tenga total definido, lo inicializamos en cero
// Aseguramos que el descuento siempre exista, aunque sea 0 (sin rebaja)
// Calcula totalFinal = total - total * descuento. Si totalFinal queda negativo, fuerzalo a 0 con short-circuiting.
// Usa short-circuiting y logical assignment:
// Si pagado es true pero totalFinal > 0, fuerza pagado &&= false.
// Si pagado es false y totalFinal === 0, márcalo pagado con ||= (pista: una forma es guardar un flag auxiliar).
// Crea y devuelve un arreglo resumen con objetos { id, cliente, totalFinal, estado }, donde estado sea "cerrado" si pagado === true y "pendiente" en caso contrario.
// Omite claves que empiecen por "_" (son meta-registros).
const pedidos = {
  p101: { cliente: "Ana", total: 120, descuento: 0.1, pagado: false },
  p102: { cliente: "", total: 0, descuento: null, pagado: false },
  p103: { cliente: "Luis", total: 80, descuento: 0.25, pagado: true },
  _tmp: { cliente: "TEST", total: 999, descuento: 1, pagado: false }, // omitir
  p104: { cliente: "Mia", total: 50, descuento: 0.6, pagado: false },
};
