"use strict";

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
