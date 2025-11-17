"use strict";
// 1. innerHTML
// Estamos modificando la propiedad innerHTML de un elemento
// Acepta una string formateada como HTML

const c1 = document.getElementById("c1");
c1.innerHTML = "<p>Este texto fue añadido con <strong>innerHTML</strong>.</p>";
c1.innerHTML += "<span>asdasdasd</strong>.</span>";
c1.innerHTML += "<p>aaaaaaaa</strong>.</p>";

// 2. appendChild
// Añadimos un nodo (elemento HTML) dentro de otro creado con el método createElement
const c2 = document.getElementById("c2");
// const nuevaDiv = document.createElement("div");
// nuevaDiv.textContent = "Este elemento fue añadido con appendChild";
// nuevaDiv.innerHTML =
//   "<p>Este texto fue añadido con <strong>appendChild</strong>.</p>";
// c2.appendChild(nuevaDiv);
const nuevoP = document.createElement("p");
nuevoP.innerText = "Este texto fue añadido con appendChild.";
// nuevoP.innerHTML = "Este texto fue añadido con <strong>appendChild</strong>.";
// console.log(nuevoP.innerHTML);
// console.log(nuevoP.innerText);
const nuevoP2 = document.createElement("p");
nuevoP2.innerText = "Noooooooooooooooooooooooo.";
c2.appendChild(nuevoP);
c2.appendChild(nuevoP2);

// 3. append / prepend
// Meter al principio (prepend) o al final (append) de un elemento
// ya sea texto o un nodo
const elC3 = document.getElementById("elementoC3");
const strong1 = document.createElement("strong");
strong1.textContent = "Inicio";
const strong2 = document.createElement("strong");
strong2.textContent = "Final";
elC3.append(strong2);
elC3.prepend(strong1);

// 4. insertAdjacentHTML
// Acepta una posicion y una string formateada como HTML
// Inserta el elemento como hijo en la posicion indicada
const ref4 = document.getElementById("ref4");
const p1 = document.createElement("p");

ref4.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
ref4.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
ref4.insertAdjacentHTML("beforeend", "<p>beforeend</p>");
ref4.insertAdjacentHTML("afterend", "<p>afterend</p>");

// 5. insertBefore
// Inserta un nodo antes de otro nodo
const c5List = document.getElementById("c5");
const li = document.createElement("li");
li.textContent = "Insertado antes de B";
c5List.insertBefore(li, c5List.children[1]);
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Nuevo elemento insertado antes de B";
c5List.replaceChild(nuevoLi, c5List.children[1]);

// 6. replaceChild
// Reemplaza un nodo hijo por un nodo nuevo
const c6 = document.getElementById("c6");
const old6 = document.getElementById("old6");
const nuevo6 = document.createElement("span");
nuevo6.textContent = "Se reemplaza el elemento completo.";
c6.replaceChild(nuevo6, old6);

// 1. element.remove()

// 2. parent.removeChild(element)

// 3. element.innerHTML = ""

// 4. while (element.firstChild) element.removeChild(element.firstChild);

// 5. element.replaceWith(element.cloneNode(false))

// 6. element.outerHTML = ""
