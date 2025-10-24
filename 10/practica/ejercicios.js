const cadena = {
  nombre: "Frutalia Express",
  tasaImpuesto: 0.07,
  tiendas: [
    {
      id: "ST-BOG-01",
      ciudad: "Bogotá",
      // encontrarCantidad('FR-APL', 'FR-BAN', 'FR-ONG', 'FR-BANANA');\
      // 250
      inventario: {
        frutas: [
          { sku: "FR-APL", nombre: "Manzana", precio: 1.1, stock: 20 },
          { sku: "FR-BAN", nombre: "Banano", precio: 0.5, stock: 30 },
          { sku: "FR-MGO", nombre: "Mango", precio: 1.8, stock: 40 },
        ],
        verduras: [
          { sku: "VG-TMT", nombre: "Tomate", precio: 0.9, stock: 90 },
          { sku: "VG-ONG", nombre: "Cebolla", precio: 0.7, stock: 140 },
        ],
        granos: [
          { sku: "GR-RCE", nombre: "Arroz 1kg", precio: 1.4, stock: 300 },
        ],
      },
      mensajeros: [
        { id: "CR-101", nombre: "Lina", activo: true, capacidad: 6 },
        { id: "CR-102", nombre: "Jairo", activo: false, capacidad: 8 },
      ],
    },
    {
      id: "ST-MDE-02",
      ciudad: "Medellín",
      inventario: {
        frutas: [
          { sku: "FR-APL", nombre: "Manzana", precio: 1.2, stock: 60 },
          { sku: "FR-PIN", nombre: "Piña", precio: 2.3, stock: 25 },
        ],
        verduras: [
          { sku: "VG-LET", nombre: "Lechuga", precio: 1.0, stock: 45 },
        ],
        granos: [],
      },
      mensajeros: [
        { id: "CR-201", nombre: "Sara", activo: true, capacidad: 5 },
        { id: "CR-202", nombre: "Leo", activo: true, capacidad: 7 },
      ],
    },
  ],
  clientes: [
    {
      id: "CU-01",
      nombre: "Esteban",
      tiendaPreferidaId: "ST-BOG-01",
      pedidos: [
        {
          pedidoId: "OR-9001",
          items: [
            { sku: "FR-APL", cantidad: 4 },
            { sku: "VG-TMT", cantidad: 2 },
          ],
          cupon: { codigo: "WELCOME10", descuento: 0.1 },
          entregado: true,
        },
        {
          pedidoId: "OR-9002",
          items: [{ sku: "GR-RCE", cantidad: 1 }],
          cupon: null,
          entregado: false,
        },
      ],
    },
    {
      id: "CU-02",
      nombre: "María",
      tiendaPreferidaId: "ST-MDE-02",
      pedidos: [
        {
          pedidoId: "OR-9101",
          items: [
            { sku: "FR-PIN", cantidad: 1 },
            { sku: "FR-APL", cantidad: 6 },
          ],
          cupon: undefined,
          entregado: false,
        },
      ],
    },
  ],
  promociones: {
    activo: true,
    estacional: {
      verano: { codigo: "SUMR5", descuento: 0.05 },
    },
  },
  configuracion: {
    entrega: {
      maximoPorMensajeroPorDia: 8,
    },
    banderas: {
      permitirBackorder: false,
      preciosExperimentales: null,
    },
  },
};

/* 1) FOR (classic for loop)
   Objetivo: Usando un bucle `for` clásico, 
   calcula el stock total de todos los productos de frutas en TODAS las tiendas
   del objeto `cadena`. 
   Guarda el número en una variable llamada `totalStockFrutas`. 
   No uses map/filter. */

// let listaFrutas = ["papaya", "mango", "banana", "kiwi"];

// for (let i = 0; i < listaFrutas.length; i++) {
//   console.log(listaFrutas[i]);
// }

/* 2) FOR...OF
   Objetivo: Itera `tiendas` con `for...of` y construye un arreglo `skusBogota` que contenga los SKUs de TODOS los productos
   (frutas, verduras, granos) disponibles solo en la tienda de la ciudad "Bogotá". Evita duplicados sin usar Set. */

/* 3) FOR...IN
   Objetivo: Para la tienda de Bogotá, usa `for...in` para iterar sobre las categorías del objeto `inventario`
   (frutas/verduras/granos) y cuenta cuántas categorías distintas tienen al menos un producto con stock < 50.
   Guarda el conteo en `categoriasBajoStock`. */

// let objetoPersona = {
//   nombre: "Pepe",
//   edad: 25,
//   sexo: "M",
//   direccion: {
//     calle: "Calle 1",
//     numero: 123,
//     ciudad: "Bogotá",
//   },
// };

// for (const propiedad in objetoPersona) {
//   // propiedad = 'direccion'
//   // console.log(objetoPersona['direccion']);
//   console.log(objetoPersona[propiedad]);
// }

/* 4) forEach
   Objetivo: Crea un arreglo `nombresMensajerosActivos` con los 
   nombres de todos los mensajeros ACTIVOS en TODAS las `tiendas`.
   Usa al menos un `forEach` en tu solución. */

// let array = ["papa", "mama", "perro", "gato"];

// array.forEach((miembro, indice) => {
//   for (let letra of miembro) {
//     if (letra === "a") {
//       console.log(miembro, indice);
//       break;
//     }
//   }
// });

/* 5) WHILE
   Objetivo: Comenzando desde el índice 0 del arreglo `mensajeros` 
   de la tienda de Medellín, usa un bucle `while` para agregar
   los IDs de los mensajeros a un arreglo `idsMensajerosMDEHastaCapacidad7` 
   HASTA que encuentres el primer mensajero cuya
   `capacidad` sea >= 7, incluyéndolo. (Detente una vez lo incluyas.) */

/* 6) ARRAY DESTRUCTURING
   Objetivo: De los dos primeros productos de `frutas` de la tienda de Bogotá, usa desestructuración de arreglo para extraer sus `sku`
   en variables `primerSkuFruta` y `segundoSkuFruta`. No accedas por índice después; usa las variables desestructuradas. */

// const coordenadas = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let [x, y] of coordenadas) {
//   console.log(y);
// }

/* 7) OBJECT DESTRUCTURING
   Objetivo: De `cadena.configuracion.entrega`, desestructura `maximoPorMensajeroPorDia` a una variable con el mismo nombre y
   crea un string `reglaEntrega` así: "Máximo por mensajero: X". Usa desestructuración en la asignación. */

// const objetoPrueba = {};
// console.log(objetoPrueba);

// objetoPrueba["persona"] = "Sara";
// objetoPrueba["edad"] = 22;
// objetoPrueba["sexo"] = "F";
// console.log(objetoPrueba);

/* 8) SPREAD OPERATOR (...)
   Objetivo: Construye un nuevo objeto `instantaneaBogota` que copie superficialmente la tienda de Bogotá, pero con una propiedad
   adicional `marcaDeTiempo` (usa Date()). Usa el operador spread al menos una vez para objetos y otra para arreglos. */

// let persona = { nombre: "Sara", edad: 22, sexo: "F" };
// console.log(persona);

// let personaMejorada = { ...persona, fecha: Date() };
// console.log(personaMejorada);

// let restaurante = {
//   nombre: "Clásico Italiano",
//   direccion: "Via Angelo Tavanti 23, Florencia, Italia",
//   categorias: ["Italiana", "Pizzería", "Vegetariana", "Orgánica"],
//   menuEntradas: ["Focaccia", "Bruschetta", "Pan de ajo", "Ensalada Caprese"],
//   menuPrincipal: [{}, "Pasta", "Risotto"],
// };

// let restaurante2 = { ...restaurante.menuPrincipal };
// console.log(restaurante2);
// let arreglo = [1, 2, 3, 6, 7, 8, 9];
// let [n1, n2, , ...resto] = arreglo;
// console.log(n1, n2, resto);

/* 9) REST PATTERN & REST PARAMETERS
   Objetivo: Escribe una función `sumarStocks(...skus)` que reciba cualquier número de strings SKU y retorne la suma de sus stocks
   encontrados a través de TODAS las categorías en la tienda de Bogotá. Usa parámetros rest y el patrón rest en al menos una desestructuración. */

// function resta(...numeros) {
//   console.log(codigo);
//   console.log(numeros);

// let resultado = 0;
// for (let n of numeros) {
//   resultado -= n;
// }
// console.log(resultado);
// }

// resta(12323, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// let exampledict = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let { a, ...newDict } = exampledict;
// console.log(newDict);

/* 10) SHORT-CIRCUITING LOGICAL OPERATORS (&& and ||)
   Objetivo: Crea una variable `cuponPromoOFallback` que se convierta en el primer código de cupón verdadero encontrado en los `pedidos`
   de Esteban, O la cadena "SIN_PROMO" si ninguno es verdadero. Usa solo el cortocircuito con `||` y `&&` para navegar/revisar. */

// let nombre = undefined;

// if (nombre === undefined || nombre === null) {
//   nombre = "Maria";
// }
// nombre ?? (nombre = "Sandra");
// nombre ??= "Maria";

// console.log(nombre);

// if (!nombre) {
//   nombre = "Maria";
// }

// nombre || (nombre = "Sandra");
// nombre ||= "Petra";

// console.log(nombre);

// if (nombre) {
//   nombre = "Maria";
// }

// nombre && (nombre = "Sandra");
// nombre &&= "Maria";
// console.log(nombre);

/* 11) NULLISH COALESCING (??)
   Objetivo: Lee `cadena.configur acion.banderas.preciosExperimentales` y crea una variable `preciosExp`
   que por defecto sea `false` SOLO cuando el valor sea nullish (null o undefined). Usa `??`. */

/* 12) LOGICAL ASSIGNMENT OPERATORS (&&=, ||=, ??=)
   Objetivo: Crea un objeto `caracteristicas = { entregaMismoDia: undefined, backorder: cadena.configuracion.banderas.permitirBackorder }`.
   Luego usa operadores lógicos de asignación para:
     - Establecer `entregaMismoDia` en true SOLO si es nullish (usa `??=`).
     - Asegurar que `backorder` permanezca estrictamente verdadero si ya lo es; de lo contrario asígnale `false`
       utilizando combinaciones de `&&=` y `||=`.
     - Agregar una nueva clave `promosEnVivo` inicializada a `cadena.promociones.activo` solo si `backorder` es falsy (usa `||=`).
   Usa ||=, &&= y ??= al menos una vez de forma apropiada. */

/* 13) OPTIONAL CHAINING (?.)
   Objetivo: Lee de forma segura el descuento de verano desde `cadena.promociones.estacional.verano.descuento` usando `?.`.
   Si existe, guárdalo en `descuentoVerano`; de lo contrario guarda 0. Puedes combinar con `??`, pero debes usar `?.`. */

// restaurante = {
//   nombre: "Clásico Italiano",
//   direccion: "Via Angelo Tavanti 23, Florencia, Italia",
//   categorias: ["Italiana", "Pizzería", "Vegetariana", "Orgánica"],
//   comidas: {
//     menuEntradas: ["Focaccia", "Bruschetta", "Pan de ajo", "Ensalada Caprese"],
//     menuPrincipal: ["Pizza", "Pasta", "Risotto"],
//   },
//   horarios: "12:00-23:00",
//   pedir(entradaIndex, principalIndex) {
//     return [
//       this.menuEntradas[entradaIndex],
//       this.menuPrincipal[principalIndex],
//     ];
//   },
// };

// horarios = {
//   lunes: { entrada: "12:00", salida: "13:00" },
//   martes: { entrada: "13:00", salida: "14:00" },
//   miercoles: { entrada: "14:00", salida: "15:00" },
//   jueves: { entrada: "15:00", salida: "16:00" },
//   viernes: { entrada: "16:00", salida: "17:00" },
//   sabado: { entrada: "17:00", salida: "18:00" },
//   domingo: { entrada: "18:00", salida: "19:00" },
// };

// restaurante.pedirCena?.(1, 2);

const persona = {
  nombre: "Sara",
  telefono: "(555) 123-4567",
};
console.log(persona);
persona.edad = 22;
persona["apellido"] = "Perez";

console.log(persona);

/* H1) Auditoría de Inventario (for...in + for...of + short-circuit + ??)
   Objetivo: Construye un objeto `auditoria` con claves por id de tienda. Para cada tienda, itera categorías con `for...in`,
   luego productos con `for...of`. Para cada producto, si `stock` es 0 O (`precio` ?? 0) es 0, registra el SKU bajo `auditoria[idTienda]`.
   Usa cortocircuito para inicializar `auditoria[idTienda]` solo cuando sea necesario. */

/* H2) Plan de Carga de Mensajeros (forEach + while + optional chaining)
   Objetivo: Para cada tienda, crea un objeto `planCarga[idTienda] = []`. Usa `forEach` sobre los mensajeros activos y un bucle `while`
   para agregar tantos envíos de prueba (strings "DLV") como la `capacidad` del mensajero, pero NO excedas
   `cadena.configuracion?.entrega?.maximoPorMensajeroPorDia ?? 6`. */

/* H3) Cumplimiento de Pedidos de Clientes (destructuring + spread + &&= / ||= / ??=)
   Objetivo: Para cada cliente, crea un clon superficial en `resumenes` usando spread. Desestructura `tiendaPreferidaId` y el primer
   pedido `pedidos[0]`. Si el primer pedido tiene cupón (por ejemplo `cupon?.codigo`), asegúrate de que `resumenes[i].primerCupon` lo use;
   de lo contrario asigna "NINGUNO" con `??=`.
   Además, si `entregado` es verdadero, agrega un campo `estado` y usa `&&=` para mantener "ENTREGADO"
   (de lo contrario usa `||=` para asignar "PENDIENTE"). */

/* H4) Constructor de Etiquetas de Precio (for + rest params + array destructuring + optional chaining)
   Objetivo: Escribe `construirEtiquetasPrecio(...pares)` donde cada par sea [idTienda, sku]. Usando un bucle `for` sobre los `pares`,
   y desestructurando `[idTienda, codigoSku]` cada vez, busca ese producto (de cualquier categoría) en la tienda.
   Crea un arreglo `etiquetas` de strings como "ID | NOMBRE | $PRECIO(+impuesto)". Si el producto falta, usa optional chaining para omitir
   y agrega "ID | FALTANTE | N/D". Usa `cadena.tasaImpuesto` para el precio final. */

// For in
// Array destructuring con for loop
