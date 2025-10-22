"use strict";

// --- Config ---
let cafeAbierto = true; // boolean
let tasaImpuesto = 0.08; // number
let moneda = "USD"; // string
let maxItemsPorPedido = 5; // number

// --- “Base de datos” en memoria ---
const menu = [
  { id: 1, nombre: "Espresso", precio: 2.5, stock: 30 },
  { id: 2, nombre: "Americano", precio: 2.75, stock: 28 },
  { id: 3, nombre: "Latte", precio: 3.75, stock: 26 },
  { id: 4, nombre: "Cappuccino", precio: 3.5, stock: 24 },
  { id: 5, nombre: "Flat White", precio: 3.8, stock: 20 },
  { id: 6, nombre: "Mocha", precio: 4.1, stock: 18 },
  { id: 7, nombre: "Macchiato", precio: 3.1, stock: 16 },
  { id: 8, nombre: "Cold Brew", precio: 3.2, stock: 22 },
  { id: 9, nombre: "Affogato", precio: 4.2, stock: 12 },
  { id: 10, nombre: "Matcha Latte", precio: 4.0, stock: 15 },
  { id: 11, nombre: "Chai Latte", precio: 3.9, stock: 14 },
  { id: 12, nombre: "Té Negro", precio: 2.1, stock: 25 },
  { id: 13, nombre: "Té Verde", precio: 2.3, stock: 25 },
  { id: 14, nombre: "Croissant", precio: 2.0, stock: 20 },
  { id: 15, nombre: "Brownie", precio: 2.5, stock: 18 },
  { id: 16, nombre: "Muffin Arándanos", precio: 2.4, stock: 16 },
  { id: 17, nombre: "Bagel", precio: 2.2, stock: 14 },
  { id: 18, nombre: "Sándwich Pavo", precio: 4.5, stock: 10 },
  { id: 19, nombre: "Yogur con Granola", precio: 3.0, stock: 12 },
  { id: 20, nombre: "Jugo Naranja", precio: 2.8, stock: 20 },
  { id: 21, nombre: "Agua Mineral", precio: 1.5, stock: 40 },
  { id: 22, nombre: "Chocolate Caliente", precio: 3.3, stock: 18 },
  { id: 23, nombre: "Tostada Avocado", precio: 4.8, stock: 10 },
  { id: 24, nombre: "Cheesecake", precio: 3.9, stock: 12 },
];

const pedidos = []; // { id, cliente, items: [{idProducto, cantidad}], pagado, total }
let secuenciaIdPedido = 1;

// --- Promociones como objeto con métodos (usar this y logical assignment) ---
const promociones = {
  activa: false,
  nombre: undefined,
  descuento: undefined,
  activar(nombre, descuento) {
    // usar ||=, ??=, &&= para gestionar flags/valores iniciales.
  },
  desactivar() {
    // desactiva promo; restablece valores de forma segura.
  },
  aplicar(total) {
    // si activa, aplica descuento y devuelve total ajustado.
    // Usar short-circuiting y toFixed; manejar nullish (??).
  },
};

// ==========================
// Funciones
// ==========================

// 1) Saludo y defaults (primitivas, ||, &&, ??)
function saludarCliente(nombre, preferencia) {
  // devolver string con nombre (|| "Invitado") y preferencia (?? "sin preferencia").
  // Usar && para añadir texto extra solo si existe preferencia válida.
}

// 2) Mostrar menú (for clásico)
function imprimirMenu(lista) {
  // recorrer con for (i=0; i<...; i++) y hacer console.log de cada producto.
  // NO usar map/filter.
}

// 3) Entrada controlada (while / validación)
function pedirCantidad(maxIntentos) {
  // simular o validar cantidad > 0 con while e intentos; fallback por short-circuiting.
}

// 4) Crear pedido (destructuring de array y objeto)
function crearPedido(cliente, items) {
  // tomar primer item con array destructuring y defaults;
  // usar object destructuring para idProducto/cantidad; push al array pedidos.
}

// 5) Agregar item (do..while + límite por pedido)
function agregarItem(pedidoId, idProducto, cantidad) {
  // buscar pedido; validar cafeAbierto; contar items con forEach;
  // do..while para la estructura y validar maxItemsPorPedido.
}

// 6) Obtener precio (for..of + nullish)
function obtenerPrecio(idProducto) {
  // usar for..of sobre menu; devolver precio o null si no existe.
}

// 7) Recalcular total (for..of, ??, toFixed)
function recalcularTotal(pedidoId) {
  // sumar (precio ?? 0) * (cantidad ?? 1) con for..of;
  // aplicar impuesto; guardar en pedido.total.
}

// 8) Descontar stock (forEach anidado)
function descontarStock(pedidoId) {
  // por cada item del pedido, recorrer menu con for (clásico) y restar stock sin negativos.
}

// 9) Clonar/agregar producto (spread en objeto/array)
function agregarProductoBase(producto) {
  // crear copia con spread { ...producto } y default stock con ??;
  // push al mismo menu sin usar estructuras prohibidas.
}

// 10) Agregar varios items (rest params)
function agregarVariosItems(pedidoId, ...tuplas) {
  // tuplas: [[id,cant], ...]; recorrer con for y reutilizar agregarItem.
}

// 11) Cobrar pedido (integración + short-circuiting)
function cobrarPedido(pedidoId) {
  // usar recalcularTotal, promociones.aplicar y ?? para fallback;
  // pagado = true && cafeAbierto; llamar descontarStock.
}

// 12) Resumen de pedido (for..in + hasOwnProperty)
function imprimirResumenPedido(pedidoId) {
  // recorrer llaves propias del objeto pedido con for..in y hasOwnProperty;
  // formatear string simple.
}

// 13) Buscar pedidos de un cliente (for clásico, sin filter)
function encontrarPedidosDe(cliente) {
  // recorrer pedidos con for y acumular coincidencias en un array local.
}

// 14) Reporte ventas por producto (forEach + destructuring de items)
function totalVendidoPorProducto() {
  // totales[idProducto] = { cantidad, ingreso };
  // recorrer pedidos->items; obtener precio con for clásico sobre menu; acumular.
}

// 15) Snapshot estado (copias con spread, sin map; alternativa manual)
function snapshotEstado() {
  // clonar menu y pedidos sin usar map (ofrecer rama manual con for);
  // normalizar con ?? y asegurar booleanos/numéricos.
}

// 16) Actualizar precio de un producto (for + short-circuiting)
function actualizarPrecio(idProducto, nuevoPrecio) {
  // recorrer menu con for y actualizar si existe; validar número positivo.
}

// 17) Reponer stock (for..of / for)
function reponerStock(idProducto, unidades) {
  // aumentar stock hasta un máximo opcional; usar nullish para defaults.
}

// 18) Cerrar/Abrir café (logical assignment)
function alternarEstadoCafe(abrir) {
  // si abrir === true usar ||=; si abrir === false usar &&= para cerrar.
}

// 19) Aplicar cambio de moneda (objeto util + for..of)
function cambiarMoneda(nuevaMoneda, tasaConversion) {
  // actualizar moneda global; recorrer menu con for..of y ajustar precios (toFixed).
}

// 20) Normalizar pedido (destructuring + defaults)
function normalizarPedido(pedido) {
  // usar object destructuring con defaults para cliente, pagado, total e items.
}

// 21) Validar stock antes de cobrar (for..of + short-circuit)
function validarStockSuficiente(pedidoId) {
  // verificar que cada item tenga stock >= cantidad; devolver boolean.
}

// 22) Eliminar item del pedido (for + splice)
function eliminarItem(pedidoId, idProducto) {
  // recorrer items con for, encontrar índice y hacer splice; devolver éxito/fallo.
}

// 23) Cambiar cantidad de item (for + límites)
function cambiarCantidadItem(pedidoId, idProducto, nuevaCantidad) {
  // validar 1..max; actualizar cantidad y retornar boolean.
}

// 24) Listar productos sin stock (for clásico, sin filter)
function productosAgotados() {
  // construir array de ids/nombres con stock === 0 usando for.
}

// 25) Imprimir tablero de control (for..in objetos y for..of arrays)
function imprimirDashboard() {
  // imprimir totales, estado de promo, conteo de pedidos, etc.;
  // combinar for..in (propiedades) y for..of (listas).
}

// ==========================
// Flujo sugerido para pruebas manuales
// ==========================
function demoFlujo() {
  // crear pedido, agregar items, activar promo, cobrar, imprimir resúmenes.
  // Este bloque solo debe invocar a las funciones anteriores.
}

// Puedes usar: for, for..of, for..in, forEach, while, do..while, destructuring, spread/rest,
// short-circuit (&&, ||, ??), y logical assignment (&&=, ||=, ??=).
