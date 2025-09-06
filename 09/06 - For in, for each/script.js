"use strict";

let listaUsuarios = [
  {
    nombre: "ana123",
    contrasena: "asdf123",
    edad: 24,
    nacionalidad: "colombiana",
  },
  { nombre: "javier24", contrasena: "fresas", fechaNacimiento: 1999 },
  {
    nombre: "sofia_cantante",
    contrasena: "c0m1n0",
    hobbies: ["leer", "dibujar", "contar frijoles"],
  },
  { nombre: "fernando", contrasena: "asdf123", mascotas: 3 },
];

const primerUsuario = {
  nombre: "ana123",
  contrasena: "asdf123",
  edad: 25,
  amigos: ["Juan", "Andrea", "Maria"],
};

// for (let propiedad in primerUsuario) {
//   console.log(propiedad);
// }

// Es bueno para iterar objetos
// for (let usuario of listaUsuarios) {
//   console.log(`Las caracteristicas de ${usuario.nombre} son:`);
//   for (let caracteristica in usuario) {
//     console.log(`${caracteristica}: ${usuario[caracteristica]}`);
//   }
// }

//// Generalmente no se usa con listas
// for (let item in listaUsuarios) {
//   console.log(item);
// }

let listaPrueba = [
  "asdd",
  23,
  ["asd", "sss"],
  null,
  undefined,
  "vasos",
  "mouse",
  NaN,
  { nombre: "fernando", contrasena: "asdf123", mascotas: 3 },
  999,
];

// for (let i = 7; i >= 2; i--) {
//   console.log(listaPrueba[i]);
//   console.log(i * 10);
// }

for (let objeto of listaPrueba) {
  console.log(typeof objeto);
}

const estudiantes = [
  ["Juan", [7, 8, 9]],
  ["María", [10, 9, 10]],
  ["Pedro", [5, 6, 4]],
];

// for (let [nombre, listaNotas] of estudiantes) {
//   for (let letra of nombre) {
//     console.log(letra);
//   }
//   for (let nota of listaNotas) {
//     console.log(nota * 10);
//   }
// }

let companias = [
  {
    name: "SoftSolutions",
    departments: [
      {
        name: "Desarrollo",
        employees: [
          { name: "Ana", role: "Frontend Developer" },
          { name: "Luis", role: "Backend Developer" },
        ],
      },
      {
        name: "Soporte",
        employees: [
          { name: "Carla", role: "Help Desk" },
          { name: "Pedro", role: "Customer Support" },
        ],
      },
    ],
  },
  {
    name: "Creative Minds",
    departments: [
      {
        name: "Publicidad",
        employees: [
          { name: "Jorge", role: "Copywriter" },
          { name: "Lucía", role: "Art Director" },
        ],
      },
      {
        name: "Social Media",
        employees: [
          { name: "María", role: "Community Manager" },
          { name: "Santiago", role: "Content Creator" },
        ],
      },
    ],
  },
  {
    name: "BuildIt",
    departments: [
      {
        name: "Arquitectura",
        employees: [
          { name: "Paula", role: "Arquitecta Jefe" },
          { name: "Esteban", role: "Diseñador CAD" },
        ],
      },
      {
        name: "Ingeniería Civil",
        employees: [
          { name: "Felipe", role: "Ingeniero de Estructuras" },
          { name: "Andrea", role: "Ingeniera de Obras" },
        ],
      },
    ],
  },
  {
    name: "FastLogistics",
    departments: [
      {
        name: "Transporte",
        employees: [
          { name: "Miguel", role: "Conductor" },
          { name: "Raúl", role: "Coordinador de rutas" },
        ],
      },
      {
        name: "Almacén",
        employees: [
          { name: "Rosa", role: "Supervisora" },
          { name: "Daniel", role: "Operario" },
        ],
      },
    ],
  },
];
