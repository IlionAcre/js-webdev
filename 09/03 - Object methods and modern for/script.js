"use strict";

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   if (i === 6) {
//     break; // Se detiene el bucle cuando i llega a 5
//   }
//   i++;
// }

// console.log("Bucle terminado");

// let i = 0;

// while (i < 20) {
//   i++;

//   if (i % 2 === 0) {
//     continue; // Salta los números pares
//   }

//   console.log(i);
// }

// let gonzalo = {
//   primerNombre: "Gonzalo",
//   ultimoNombre: "Garcia",
//   fechaNacimiento: 2001,
//   nacionalidad: "Colombiano",
//   amigos: ["Andres", "Camila", "Fernando"],
//   licenciaConducir: false,
//   edad: null,

//   calcularEdad: function () {
//     this.edad = 2025 - this.fechaNacimiento;
//     return this.edad;
//   },

//   // peso / altura al cuadrado

//   aprobarLicencia: function () {
//     this.licenciaConducir = true;
//     console.log("La licencia ha sido aprobada.");
//   },

//   saludar() {
//     console.log(`Hola, mi nombre es ${this.primerNombre} ${this.ultimoNombre}`);
//   },
// };

// let andres = {
//   primerNombre: "Andres",
//   ultimoNombre: "Garcia",
//   edad: 24,
//   nacionalidad: "Colombiano",
// };

// console.log(gonzalo.primerNombre);
// console.log(gonzalo.fechaNacimiento);
// console.log(gonzalo.calcularEdad());

// console.log(gonzalo.licenciaConducir);
// gonzalo.aprobarLicencia();
// console.log(gonzalo.licenciaConducir);

// console.log(gonzalo.edad);

// gonzalo.saludar();
// gonzalo.saludar();
// andres.saludar(); // Error, no existe

// // Object.keys(objeto);
// let gonzaloLlaves = Object.keys(gonzalo); // ['primerNombre', 'ultimoNombre'...]
// console.log(gonzaloLlaves);
// let andresLlaves = Object.keys(andres); // ['primerNombre', 'ultimoNombre'...]
// console.log(andresLlaves);

// // Object.values(objeto);
// let gonzaloValues = Object.values(gonzalo); // ['primerNombre', 'ultimoNombre'...]
// console.log(gonzaloValues);
// let andresValues = Object.values(andres); // ['primerNombre', 'ultimoNombre'...]
// console.log(andresValues);

// // Object.entries(objeto);
// let gonzaloEntries = Object.entries(gonzalo); // ['primerNombre', 'ultimoNombre'...]
// console.log(Object.entries(gonzalo));
// let andresEntries = Object.entries(andres); // ['primerNombre', 'ultimoNombre'...]
// console.log(andresEntries);

// delete objeto.propiedad
// console.log(andres.edad);
// delete andres.edad;
// console.log(andres.edad);

let listaUsuarios = [
  { nombre: "ana123", contrasena: "asdf123" },
  { nombre: "javier24", contrasena: "fresas" },
  { nombre: "sofia_cantante", contrasena: "c0m1n0" },
  { nombre: "fernando", contrasena: "asdf123" },
];

function encontrarUsuario(nombre, lista) {
  let usuario;
  for (let i = 0; i < lista.length; i++) {
    if (nombre === lista[i]["nombre"]) {
      usuario = lista[i];
    }
  }
  return usuario;
}

let eleccionUsuario;
let usuario;

while (true) {
  eleccionUsuario = prompt("Por favor digite su nombre de usuario: ");

  if (eleccionUsuario.toLowerCase() === "cerrar") {
    console.log("Ha decidido cerrar la sesion.");
    break;
  }

  usuario = encontrarUsuario(eleccionUsuario, listaUsuarios);

  if (usuario) {
    console.log("Usuario encontrado " + usuario["nombre"]);
    break;
  }
}

let eleccionContrasena;
let intentos = 3;

while (intentos > 0) {
  eleccionContrasena = prompt("Digite su contrasena.");

  if (eleccionContrasena === usuario.contrasena) {
    console.log("Contrasena correcta.");
    break;
  } else {
    console.log("Contrasena incorrecta.");
  }

  intentos--; // En algun punto intentos se convierte en 0

  if (intentos === 0) {
    console.log("La cuenta ha sido bloqueada por muchos intentos.");
    break;
  }

  console.log("Intentos restantes " + intentos);
}

INVENTARIO = [{}];
