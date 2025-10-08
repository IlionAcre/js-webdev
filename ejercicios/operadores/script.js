"use strict";

// 1 Intercambio múltiple
let a = 1,
  b = 2,
  c = 3; // reordenar: a=3, b=1, c=2

// 2 Destructuring anidado
const perfil = {
  id: 7,
  info: { nombre: "Luna", direccion: { ciudad: "Medellín", pais: "CO" } },
};
// extrae nombre, ciudad, pais

// 3 Spread + condición
const base = { rol: "user", activo: true };
const cambios = { activo: false, premium: true };
// combinar solo si activo es true

// 4 Rest en objeto
const producto = { id: 10, nombre: "Café", precio: 12000, stock: 50 };
// extrae nombre, precio, resto en infoExtra

// 5 Spread + transformación
const carrito = [
  { id: 1, precio: 5 },
  { id: 2, precio: 7 },
];
// crea carritoConIVA con total = precio * 1.19

// 6 ??= con valores nulos
let config = { modo: null, tema: undefined, idioma: "es" };
// asegura modo='auto' y tema='oscuro'

// 7 ||= con falsy
let titulo = "",
  subtitulo = 0,
  etiqueta = null;
// asigna defaults apropiados

// 8 Rest en función
// mostrarDatos({nombre:'Ana', edad:25}, 'admin', 'online', 'activo')

// 9 Destructuring + default
const data = { cliente: { nombre: "Carlos", direccion: { ciudad: "Bogotá" } } };
// extrae nombre, ciudad, pais='Colombia'

// 10 Spread + filtrado
const usuario = { id: 5, nombre: "Nina", rol: "admin", activo: true };
// copia todo menos rol

// 11 ||= y &&= juntos
let perfil2 = { nombre: "Luz", premium: false };
let ajustes = { tema: "claro" };
// si !premium => tema='oscuro'

// 12 Destructuring + rest
const datos = [10, 20, 30, 40];
// primero, sumaResto

// 13 ??= y &&=
let cfg = { modo: "manual", debug: null };
// debug=false si null, modo='auto' si truthy

// 14 Anidado + spread
const app = {
  name: "Shop",
  version: 2,
  modules: { auth: { enabled: true, users: 120 }, ui: { dark: false } },
};
// extrae enabled, resto en authRest, clona cambiando ui.dark=true

// 15 ||= &&= ??= mixto
let opciones = { color: undefined, size: "M", stock: 0 };
// color='negro' si no existe, size='L' si truthy, stock sin cambio

const juego = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// TODO 1: Crea un arreglo de jugadores para cada equipo en variables 'players1' y 'players2'.

// TODO 2: Para el Bayern Munich (equipo 1), crea 'gk' con el nombre del portero
// y 'fieldPlayers' con los 10 jugadores de campo restantes.

// TODO 3: Crea 'allPlayers' que contenga todos los jugadores de ambos equipos (22 en total).

// TODO 4: Crea 'players1Final' con todos los originales del equipo 1 más
// 'Thiago', 'Coutinho' y 'Perisic'.

// TODO 5: Basándote en 'juego.odds', crea variables para cada cuota:
// 'team1', 'draw' y 'team2'.

// TODO 6: Escribe la función 'printGoals' que reciba N nombres (no un arreglo)
// e imprima cada nombre y el total de goles (cantidad de argumentos).

// TODO 7: Imprime qué equipo es más probable que gane
// (la cuota más baja) SIN if/else ni operador ternario.
