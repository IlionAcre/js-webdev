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

// Escribe una función `aplicarATodos que reciba un arreglo de números
// y una función `f` (que transforma un número) y retorne un NUEVO arreglo con la
// transformación aplicada.
const numeros1 = [1, 2, 3];
const duplicar = x => x * 2;
const obtenerCuadrado = x => x * x;
const convertirATexto = x => String(x);

console.log(aplicarATodos(numeros1, duplicar)); // [2, 4, 6]
console.log(aplicarATodos(numeros1, obtenerCuadrado)); // [1, 4, 9]
console.log(aplicarATodos(numeros1, convertirATexto)); // ["1","2","3"]

// Implementa `ordenarPor(arr, criterio)` que ordene una copia del arreglo `arr`
// usando una función `criterio(x)` que calcule una "clave" para comparar.
// No uses `localeCompare` ni opciones avanzadas.
// Ejemplo: ordenarPor personas por longitud del nombre y por edad.

const personas = [
  { nombre: "Ana", edad: 29 },
  { nombre: "Sebastián", edad: 22 },
  { nombre: "Luz", edad: 34 },
];

const porLongitudNombre = p => p.nombre.length;
const porEdad = p => p.edad;

console.log(ordenarPor(personas, porLongitudNombre).map(p => p.nombre)); // ["Luz","Ana","Sebastián"]
console.log(ordenarPor(personas, porEdad).map(p => p.edad)); // [22,29,34]

// Recibe una lista de objetos y un objeto `mapaFunciones` donde
// cada clave representa un campo y su valor es una función que transforma ese campo.
// La función debe devolver una NUEVA lista de objetos donde
// cada campo haya sido transformado solo si existe una función asignada para él.

const productos = [
  { nombre: "  café  ", precio: 3.14159, stock: 10 },
  { nombre: "TE", precio: 2.71828, stock: 5 },
];

const mapeo = {
  nombre: s => s.trim().toLowerCase(),
  precio: p => Math.round(p * 100) / 100,
};

console.log(transformarCampos(productos, mapeo));
// [
//   { nombre: "café", precio: 3.14, stock: 10 },
//   { nombre: "te",   precio: 2.72, stock: 5  }
// ]

// Escribe `crearContador(inicial)` que devuelva una función. Cada vez que se llame,
// incrementa internamente el contador y retorna su valor actual. El estado debe ser privado.

console.log(contador()); // 6
console.log(contador()); // 7
console.log(contador()); // 8

// Crea `acumulador` que devuelve dos funciones: `aplicar(valor)` y `valor()`.
// `aplicar` actualiza el estado con `operacion(estado, valor)` y `valor` devuelve el estado.
// Usa closure para mantener el estado.

// Solución de ejemplo:
const suma = (a, b) => a + b;
const acc = acumulador(suma, 0);
acc.aplicar(10);
acc.aplicar(5);
console.log(acc.valor()); // 15

// Crea la función `crearHistorialNumerico()`.
// Debe devolver un objeto con estos métodos:
//  - `agregar(valor)`: añade un número al historial interno.
//  - `promedio()`: devuelve el promedio de todos los valores agregados.
//  - `maximo()`: devuelve el valor más alto del historial.
//  - `reiniciar()`: borra todos los valores guardados.
// El arreglo interno con los números debe mantenerse privado dentro del closure.

const h = crearHistorialNumerico();
h.agregar(10);
h.agregar(5);
h.agregar(20);
console.log(h.promedio()); // 11.666...
console.log(h.maximo()); // 20
h.reiniciar();
console.log(h.promedio()); // 0

/**************************************************************************/

// ============================================================
// Calculadora flexible de precios de suscripción
// ============================================================
/*
Dispones de:
- preciosPorNivel: Map (nivel → precio base mensual)
- cuponesPorcentaje: Map (codigoCupon → porcentajeDescuento)
- clientesVIP: Set de userId VIP

Implementar:

1) crearSelectorPrecioBase(mapaPreciosPorNivel)
   → devuelve selectorPrecioBase(nivel, tipoPlan)
   - Si nivel no existe, devuelve { ok: false, mensaje }
   - Si tipoPlan no es "mensual" ni "anual", igual.
   - Si todo está bien, devuelve { ok: true, precio }

2) aplicarSi(condicion, transformador)
   → devuelve una función (valor) que aplica transformador(valor) solo si condicion es true.

3) crearCalculadoraPrecio(configImpuestos, selectorPrecioBase)
   → devuelve calcularPrecio(pedido, estrategiaDescuentoFn, loggerFn?)

   - pedido: { usuarioId, nivel, tipoPlan, cupon?, pagoEnCuotas? }
   - estrategiaDescuentoFn recibe:
       { precioBase, pedido, cuponesPorcentaje, clientesVIP }
     y devuelve un número (monto de descuento).
   - loggerFn (opcional) recibe un objeto con detalle del cálculo.

   calcularPrecio debe:
   - usar selectorPrecioBase
   - calcular descuento (acotado entre 0 y precioBase)
   - aplicar recargo del 5% si pagoEnCuotas === true (usando aplicarSi)
   - aplicar impuesto (1 + impuesto)
   - sumar recargoPasarela
   - devolver:
       { ok: true, totalFinal, detalle }
     o, si algo está mal:
       { ok: false, mensaje }
*/

const preciosPorNivel = new Map([
  ["basico", 50],
  ["intermedio", 80],
  ["avanzado", 120],
]);

const cuponesPorcentaje = new Map([
  ["BIENVENIDA10", 0.1],
  ["BLACK20", 0.2],
]);

const clientesVIP = new Set(["u1", "u3"]);

const selectorPrecioBase = crearSelectorPrecioBase(preciosPorNivel);

const calcularPrecioColombia = crearCalculadoraPrecio(
  { impuesto: 0.19, recargoPasarela: 3 },
  selectorPrecioBase
);

const estrategiaDescuentos1 = ({
  precioBase,
  pedido,
  cuponesPorcentaje,
  clientesVIP,
}) => {
  let descuento = 0;
  if (clientesVIP.has(pedido.usuarioId)) descuento += precioBase * 0.15;
  if (pedido.cupon && cuponesPorcentaje.has(pedido.cupon)) {
    descuento += precioBase * cuponesPorcentaje.get(pedido.cupon);
  }
  if (pedido.tipoPlan === "anual") descuento += precioBase * 0.05;
  return descuento;
};

const loggerConsola = detalle => {
  console.log("Detalle cálculo pedido:", detalle);
};

const resultado1 = calcularPrecioColombia(
  {
    usuarioId: "u1",
    nivel: "intermedio",
    tipoPlan: "anual",
    cupon: "BIENVENIDA10",
    pagoEnCuotas: true,
  },
  estrategiaDescuentoEjemplo,
  loggerConsola
);

console.log(resultado1);
// {
//   ok: true,
//   totalFinal: 702.7199999999999,
//   detalle: {
//     precioBase: 800,
//     descuento: 240,
//     subtotal: 588,
//     totalConImpuesto: 699.7199999999999,
//     totalFinal: 702.7199999999999,
//     pedido: { ...igual al pasado... }
//   }
// }

// ============================================================
// Sistema de notificaciones con canales variables (...args)
// ============================================================
/*
Enunciado:

Dispones de:
- preferenciasPorUsuario: Map (userId → { canalesPreferidos: Set<string>, idioma: string })
- usuariosDestino: Set de objetos { id, nombre }

Implementar:

1) crearFormateadorMensaje(plantillasPorIdioma)
   → devuelve formatearMensaje(usuario, mensajeBase)
   - Usa usuario.idioma (o "es" si no existe) para elegir plantilla.
   - Devuelve un string con el mensaje final.

2) crearDespachadorNotificaciones(preferenciasPorUsuario, formateadorMensaje)
   → devuelve notificar(usuariosDestinoSet, mensajeBase, ...canales)

   - ...canales es una cantidad variable de funciones canal.
   - Cada canal es:
        canal(usuarioDestino, mensajeFormateado, meta)
     y tiene una propiedad:
        canal.meta = { canalId: string }

   notificar debe:
   - recorrer usuariosDestinoSet
   - obtener sus preferencias en preferenciasPorUsuario
   - formatear el mensaje con formateadorMensaje
   - para cada canal, si canal.meta.canalId está en canalesPreferidos del usuario,
     llamar al canal
   - devolver un Array:
        [{ userId, canalId }]
*/

const preferenciasPorUsuario = new Map([
  [
    "u1",
    {
      canalesPreferidos: new Set(["email", "push"]),
      idioma: "es",
    },
  ],
  [
    "u2",
    {
      canalesPreferidos: new Set(["email"]),
      idioma: "en",
    },
  ],
  [
    "u3",
    {
      canalesPreferidos: new Set(["push"]),
      idioma: "es",
    },
  ],
]);

const usuariosRegistrados = new Map([
  ["u1", { id: "u1", nombre: "Ana" }],
  ["u2", { id: "u2", nombre: "Mark" }],
  ["u3", { id: "u3", nombre: "Carlos" }],
]);

const plantillas = {
  es: (nombre, mensajeBase) => `Hola ${nombre}, ${mensajeBase}`,
  en: (nombre, mensajeBase) => `Hi ${nombre}, ${mensajeBase}`,
};

const formateadorMensaje = crearFormateadorMensaje(plantillas);
const despachador = crearDespachadorNotificaciones(
  preferenciasPorUsuario,
  formateadorMensaje
);

const canalEmail = crearCanalEmail();
const canalPush = crearCanalPush();

const usuariosDestino = new Set([
  usuariosRegistrados.get("u1"),
  usuariosRegistrados.get("u2"),
  usuariosRegistrados.get("u3"),
]);

const resumenEnvios = despachador(
  usuariosDestino,
  "tienes novedades importantes en tu cuenta.",
  canalEmail,
  canalPush
);

console.log(resumenEnvios);

// [
//   { userId: "u1", canalId: "email" },
//   { userId: "u1", canalId: "push" },
//   { userId: "u2", canalId: "email" },
//   { userId: "u3", canalId: "push" }
// ]
