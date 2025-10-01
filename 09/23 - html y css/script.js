"use strict";

const h1 = document.querySelector("h1");
h1.innerText = "Textonuevoooo";

const botonesMango = document.querySelectorAll(".boton");
const liMango = document.querySelector("#mango");

// botonMango.addEventListener("click", () => {
//   liMango.style.backgroundColor = "rgba(208, 49, 28, 1)";
// });

function agrandarMango() {
  if (!liMango.classList.contains("li-grande")) {
    liMango.classList.add("li-grande");
  } else {
    liMango.classList.remove("li-grande");
  }
}

for (let boton of botonesMango) {
  boton.addEventListener("click", agrandarMango);
}

// # fontSize
// # fontFamily
// # color
// # backgroundColor
// # border
// # cursor
// # height
// # width
// # margin
