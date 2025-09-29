"use strict";

// const persona = {
//   nombre: "Paty",
//   edad: 25,
//   sexo: "Masculino",
//   direccion: {
//     calle: "Calle de la casa",
//     numero: 123,
//     ciudad: "Ciudad de la casa",
//   },
// };

// prompt(`${persona["nombre"]} tiene ${persona["edad"]} años.`);

// let contador = 0;

// while (true) {
//   console.log(`Este es el turno ${contador}`);
//   contador++;

//   if (contador > 3) {
//     break;
//   }
// }

// do {
//   console.log(`Este es el turno ${contador}`);
//   contador++;
// } while (contador < 3);

// while (true) {
//   console.log(`Este es el turno ${contador}`);
//   if (contador === 3) {
//     break;
//   }
//   contador++;
// }

// contador = 1 // `Este es el turno ${1}`// suma 1 a contador
// contador = 2 // `Este es el turno ${2}`// suma 1 a contador
// contador = 3 // `Este es el turno ${3}`// break

// let whileEncendido = true;
// let eleccionUsuario;

// while (whileEncendido) {
//   eleccionUsuario = prompt("Cual es tu comida favorita?");
//   if (eleccionUsuario === "costillas") {
//     console.log("¡Qué bien! ¡Te recomiendo!");
//     whileEncendido = false;
//   }
//   console.log("Esta parte de aca se ejecuta?");
// }

// const opcionesDePlato = ["papa", "pasta", "pizza", "sushi", "carne"];

// function elegirMenu() {
//   let eleccionUsuario;

//   while (true) {
//     let eleccionCorrecta = false;
//     eleccionUsuario = prompt("¿Qué quieres?");

//     for (let opcion of opcionesDePlato) {
//       if (eleccionUsuario.startsWith(opcion)) {
//         console.log("Buena elección!");
//         eleccionCorrecta = true;
//         break;
//       }
//     }

//     if (eleccionCorrecta) {
//       break;
//     }

//     console.log("No tenemos ese plato");
//   }
//   return eleccionUsuario;
// }

// let menuElegido = elegirMenu();
// console.log(menuElegido);

// const inventario = {
//   papa: 10,
//   pasta: 5,
//   pizza: 0,
//   sushi: 1,
//   carne: 3,
// };

// function validarPlato(plato) {
//   const opcionesDePlato = Object.keys(inventario);

//   for (let opcion of opcionesDePlato) {
//     if (plato.startsWith(opcion)) {
//       return true;
//     }
//   }
//   return false;
// }

// function validarInventario(plato) {
//   let palabraClave = plato.split(" ")[0];
//   for (let alimento in inventario) {
//     if (palabraClave === alimento && inventario[alimento] > 0) {
//       return true;
//     }
//   }
//   return false;
// }

// function elegirPlato() {
//   let eleccionUsuario;

//   while (true) {
//     eleccionUsuario = prompt("¿Qué quieres?");
//     if (validarPlato(eleccionUsuario)) {
//       console.log("Buena elección!");
//       if (validarInventario(eleccionUsuario)) {
//         console.log("Perfecto, tenemos ese plato disponible.");
//         break;
//       } else {
//         console.log("Que pena, no nos queda.");
//       }
//     } else {
//       console.log("No tenemos ese plato");
//     }
//   }

//   return eleccionUsuario;
// }

// console.log(elegirPlato());

const inventario = {
  papa: 10,
  pasta: 5,
  pizza: 0,
  sushi: 1,
  carne: 3,
};

// Dado un objeto inventario, hacer una funcion elegirPlato que
// pregunte al usuario por un plato y devuelve un plato valido
// el plato valido debe estar en el inventario y tener un valor mayor a 0
