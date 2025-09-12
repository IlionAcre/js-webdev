"use strict";

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
          { name: "Andrea", role: "Ingeniera de Obras " },
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
          { name: "Rosa", role: "Supervisora", salario: 100000 },
          { name: "Daniel", role: "Operario" },
          { name: "Andres", role: "Supervisora" },
          { name: "Javier", role: "Operario" },
          { name: "Andrea", role: "Operaria" },
          { name: "Petra", role: "Operario" },
        ],
      },
    ],
  },
];

let empleados = companias[3]["departments"][1]["employees"];
// console.log(empleados);

// For of solo en arrays y strings por ahora, coge el objeto como tal
// let ejemplo = [0, 'asd', "lalala", null, [0,1]]
// Si hago for (let objetito of ejemplo)
// objetito va a ser 0, luego 'asd', luego 'lalala', luego null y por ultimo [0,1]

// For in casi siempre en objects u objetos donde la key sea importante
// agarra el nombre de la key o el index
// let ejemplo = {fruta: 'naranja', cantidad: 200, precio: 500, color: naranja}
// Si hago for (let item in ejemplo)
// item va ser "fruta", "cantidad", "precio" y "color"
// literalmente los nombres de las propiedades, no su contenido

// for (let empleado of empleados) {
//   console.log("Este es un empleado.");
//   for (let caracteristica in empleado) {
//     console.log(caracteristica + ": " + empleado[caracteristica]);
//   }
//   console.log("..............................");
// }

// .toUpperCase()

// let resultado = {
//   nombres: ["ANA", "JUAN", "PEDRO"],
//   ciudades: ["MADRID", "LIMA", "BOGOTÁ"],
//   lenguajes: ["JS", "PYTHON", "GO"],
// };
// for (let propiedad in resultado) {
//   console.log(propiedad);
// }

// console.log(";;;;;;;;;;;;;;;;;;;;;;;;;");

// resultado["color"] = "Amarillo";
// for (let propiedad in resultado) {
//   console.log(propiedad);
// }

// let frutas = ["Manzana", "Pera", "Zanahoria"];

// for (let elemento of frutas) {
//   console.log(elemento);
// }

let resultado = {
  nombres: ["ANA", "JUAN", "PEDRO"],
  ciudades: ["MADRID", "LIMA", "BOGOTÁ"],
  lenguajes: ["JS", "PYTHON", "GO"],
};

for (let elemento in resultado) {
  for (let elementito in elemento) {
    console.log(elementito);
  }
}
