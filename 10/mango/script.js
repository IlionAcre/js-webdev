"use strict";

const h1 = document.querySelector("h1");
h1.innerText = "Textonuevoooo";

const botonesMango = document.querySelectorAll(".boton");
const liMango = document.querySelector("#mango");

function agrandarMango() {
  liMango.classList.toggle("li-grande");
}

for (let boton of botonesMango) {
  boton.addEventListener("click", agrandarMango);
}

// keydown -> Solo se activa una vez, no se repite. Se activa cuando se presiona la tecla
// keyup -> Se activa solo una vez, y se activa solo cuando se libera la tecla
// keypress -> Se activa tantas veces como este presionada la tecla. Es decir, si dejo la tecla presionada, se activa varias veces

document.addEventListener("keydown", evento => {
  if (evento.key === "Enter") {
    liMango.classList.toggle("li-grande");
  }
});
