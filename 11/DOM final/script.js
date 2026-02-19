"use strict";

// const button = document.querySelector("button");
// const buttonsNodeList = document.querySelectorAll("button");
// const buttons = document.getElementsByTagName("button");

// console.log(buttonsNodeList);
// console.log(buttons);

// buttonsNodeList[0].remove();
// console.log("Se removio un boton");

// console.log(buttonsNodeList);
// console.log(buttons);

// const buttonsNodeList2 = document.querySelectorAll("button");
// console.log(buttonsNodeList2);

const item1 = document.querySelector("#item1");
const nuevoItem = document.createElement("li");
nuevoItem.classList.add("item-existente");
nuevoItem.id = "nuevo-item";
nuevoItem.textContent = "NUEVO ITEM";
nuevoItem.style.backgroundColor = "#007bff";

// En estos 2 metodos, el elemento que llama el metodo es el elemento de referencia, inserta como hermano
// item1.before(nuevoItem);
// item1.after(nuevoItem);

// En estos metodos, el elemento que llama el metodo es el padre, inserta como hijo
const listaPadre = document.querySelector("#lista-padre");
// listaPadre.prepend(nuevoItem); // Mete al elemento al final
// listaPadre.append(nuevoItem); // Mete al elemento al final
// listaPadre.appendChild(nuevoItem); // Mete al elemento al final

// String formateada como HTML
const nuevoItem2 = '<li class="item-existente" id="nuevo-item">NUEVO ITEM</li>';

// Como hermano
// item1.insertAdjacentHTML("beforeend", nuevoItem2);
// item1.insertAdjacentHTML("afterbegin", nuevoItem2);

// Como hijo
// item1.insertAdjacentHTML("beforebegin", nuevoItem2);
// item1.insertAdjacentHTML("afterend", nuevoItem2);
