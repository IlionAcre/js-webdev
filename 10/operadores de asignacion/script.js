"use strict";

// const diasSemana = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];

// const horariosApertura = {
//   lun: {
//     abrir: 12,
//     cerrar: 22,
//   },
//   mar: {
//     abrir: 11,
//     cerrar: 23,
//   },
//   mie: {
//     abrir: 0, // Abierto 24 horas
//     cerrar: 24,
//   },
// };

// const restaurante = {
//   nombre: "Clásico Italiano",
//   ubicacion: "Via Angelo Tavanti 23, Florencia, Italia",
//   categorias: ["Italiana", "Pizzería", "Vegetariana", "Orgánica"],
//   menuEntradas: ["Focaccia", "Bruschetta", "Pan de Ajo", "Ensalada Caprese"],
//   menuPrincipal: ["Pizza", "Pasta", "Risotto"],

//   horariosApertura: horariosApertura,

//   pedir(entradaIndex, principalIndex) {
//     return [
//       this.menuEntradas[entradaIndex],
//       this.menuPrincipal[principalIndex],
//     ];
//   },

//   pedirDomicilio({
//     entradaIndex = 1,
//     principalIndex = 0,
//     hora = "20:00",
//     direccion,
//   }) {
//     console.log(
//       `¡Pedido recibido! ${this.menuEntradas[entradaIndex]} y ${this.menuPrincipal[principalIndex]} serán entregados en ${direccion} a las ${hora}`
//     );
//   },

//   pedirPasta(ing1, ing2, ing3) {
//     console.log(`Aquí está tu deliciosa pasta con ${ing1}, ${ing2} y ${ing3}`);
//   },

//   pedirPizza(ingredientePrincipal, ...otrosIngredientes) {
//     console.log(ingredientePrincipal);
//     console.log(otrosIngredientes);
//   },
// };

// Shortcircuit of || and &&

// console.log(3 || "Sara");
// console.log("" || "Sara");
// let apertura = restaurante.horariosApertura || "No se encontraron los horarios";
// console.log(apertura);
// console.log(true || 0);
// console.log(undefined || false);
// console.log(undefined || 0 || "" || "Sara" || 23 || null);
// console.log(restaurante.horariosApertura.sab.abrir || "No abren"); // Es un error
// console.log(restaurante.horariosApertura.sab.abrir ?? "No abren"); // Es un error

// let capacidad = restaurante.capacidad ? restaurante.capacidad : 0;
// let capacidad2 = restaurante.capacidad || 0;

// console.log(3 && "Sara");
// console.log(0 && "Sara");
// console.log("Sara" && undefined && "otroNombre");

// function ordenarAlimento({ frutas, verduras, carnes = "Pollo", leguminosas }) {
//   console.log("fruta:", frutas);
//   console.log("verdura:", verduras);
//   console.log("carne:", carnes);
//   console.log("leguminosa:", leguminosas);
// }

// let alimentos = {
//   verduras: "Tomate",
//   leguminosas: "Garbanzo",
//   frutas: "Manzana",
// };

// ordenarAlimento(alimentos);

// if (rest]rante.pedirMariscos("Pepe", "Pedro");
// }

// restaurante.pedirPizza && restaurante.pedirPizza(["Pepe", "Pedro", "Papa"]);

// let { categorias: _, ...nuevoRestaurante } = restaurante;
// console.log(nuevoRestaurante);

const diasSemana = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];

const horariosApertura = {
  [diasSemana[0]]: {
    abrir: 12,
    cerrar: 22,
  },
  [`diaDeLaSemana-${2 + 4}`]: {
    abrir: 11,
    cerrar: 23,
  },
  [diasSemana[5]]: {
    abrir: 0, // Abierto 24 horas
    cerrar: 24,
  },
};

const restaurante = {
  nombre: "Clásico Italiano",
  ubicacion: "Via Angelo Tavanti 23, Florencia, Italia",
  categorias: ["Italiana", "Pizzería", "Vegetariana", "Orgánica"],
  menuEntradas: ["Focaccia", "Bruschetta", "Pan de Ajo", "Ensalada Caprese"],
  menuPrincipal: ["Pizza", "Pasta", "Risotto"],

  horariosApertura,

  pedir(entradaIndex, principalIndex) {
    return [
      this.menuEntradas[entradaIndex],
      this.menuPrincipal[principalIndex],
    ];
  },

  pedirDomicilio({
    entradaIndex = 1,
    principalIndex = 0,
    hora = "20:00",
    direccion,
  }) {
    console.log(
      `¡Pedido recibido! ${this.menuEntradas[entradaIndex]} y ${this.menuPrincipal[principalIndex]} serán entregados en ${direccion} a las ${hora}`
    );
  },

  pedirPasta(ing1, ing2, ing3) {
    console.log(`Aquí está tu deliciosa pasta con ${ing1}, ${ing2} y ${ing3}`);
  },

  pedirPizza(ingredientePrincipal, ...otrosIngredientes) {
    console.log(ingredientePrincipal);
    console.log(otrosIngredientes);
  },
};

// let rest1 = { nombre: "Restaurante Italiano", capacidad: 20 };
// let rest2 = { nombre: "Restaurante Pepe", owner: "Pepe" };

// // rest1.capacidad = rest1.capacidad || 10;
// rest1.capacidad = rest1.capacidad > 10 || 10;
// // rest2.capacidad = rest1.capacidad || 10;
// rest2.capacidad ||= 10;
// console.log(rest1.capacidad);

// const base = 25;
// const altura = 10;

// const cuadrado = { base: base, altura: altura };
// console.log(cuadrado);

// const cuadrado2 = { base, altura };
// console.log(cuadrado2);

// console.log(horariosApertura);

// let a = "";
// a = a || "Por defecto";
// // console.log(a);

// a ||= "Por defecto";
// console.log(a);

// let x = 7;
// let y = 3;
// x && (x = y);
// x &&= y;
// console.log(x);

// let c = 0; // No hay nulidad
// c ??= 10;
// console.log(c);

// let b = [1, 2];
// b &&= b.length;
// console.log(b);

// // Estructuras
// let opts = {};
// let index = {};
// let key = "items";

// // Interfaz / window
// let win = { width: undefined };
// let score = undefined;
// let mode = "";
// let path = undefined,
//   basePath = "/app";

// Entorno / configuración
// let env = { PORT: "", TIMEOUT: "" };
// let cfg = { port: undefined, timeout: undefined };

// cfg.port ??= Number(env.PORT);
// cfg.port ||= 8080;
// console.log(cfg.port);

// Usuario / texto;
// let user = { name: "" };
// let bio = "   Hola, este es un texto de ejemplo que podría ser más largo.   ";
// (user.name ||= "anon"), (user.name &&= user.name.trim().toUpperCase());
// console.log(user.name);

// (bio ??= ""),
//   (bio &&= bio.trim()),
//   (bio &&= bio.length > 40 ? bio.slice(0, 40) : bio);
// console.log(bio);

// Números / rangos
// let n = 4,
//   min = 0,
//   max = 100;

// (n ??= 0), (n &&= Math.max(min, Math.min(max, n)));
// console.log(n);

// Token
// let token = undefined;
// function genToken() {
//   let randomNumber = Math.random();
//   return "tk_" + randomNumber.toString(36).slice(2);
// }
// (token ??= genToken()), (token &&= token.replace("tk_", "aa"));
// console.log(token);

// let palabraLarga = "Esternocleidomastoideo";
// console.log(palabraLarga.slice(10, 12));

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.slice(2, 5));

// // Iterar las keys

// for (const key of Object.keys(restaurante3)) {
//   console.log(`${key}: ${restaurante3[key]}`);
// }

// for (const key in restaurante3) {
//   console.log(`${key}: ${restaurante3[key]}`);
// }

// // Iterar los values
// for (const value of Object.values(restaurante3)) {
//   console.log(value);
// }

// // Iterar ambos
// for (const [key, value] of Object.entries(restaurante3)) {
//   console.log(`${key}: ${value}`);
// }

const restaurante3 = {
  nombre: "Clásico Italiano",
  capacidad: 20,
  horariosApertura: {
    abrir: 12,
    cerrar: 22,
  },
};

// console.log(restaurante3.horariosApertura?.lun?.abrir);
// console.log(restaurante3.horariosApertura?.abrir);

// console.log(restaurante3.pedir?.(1, 3));
// console.log(restaurante.pedir?.(1, 3));

//
