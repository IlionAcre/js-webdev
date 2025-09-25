"use strict";

const persona = {
  nombre: "Paty",
  edad: 25,
  sexo: "Masculino",
  direccion: {
    calle: "Calle de la casa",
    numero: 123,
    ciudad: "Ciudad de la casa",
  },
};

prompt(`${persona["nombre"]} tiene ${persona["edad"]} años.`);
