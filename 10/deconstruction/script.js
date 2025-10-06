"use strict";

const restaurante = {
  nombre: "El Buen Sabor",
  tipo: "Tapas",
  abierto: true,
  aforo: 40,
  direccion: { ciudad: "Sevilla", calle: "C/ Feria 12" },
  categorias: ["Tapas", "Bebidas"],

  menu: ["Tortilla española", "Patatas bravas", "Croquetas", "Gazpacho"],
  horarios: [
    { dia: "Lun-Vie", abre: "13:00", cierra: "23:00" },
    { dia: "Sáb-Dom", abre: "12:00", cierra: "00:00" },
  ],
};

let nombre = "Paty";
console.log(nombre);
console.log(typeof nombre);
nombre = 23;
console.log(nombre);
console.log(typeof nombre);
