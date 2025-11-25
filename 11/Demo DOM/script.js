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

/// Todos los remove element funcionan con NODOS
// 1. element.remove()
const spanHijo = c1.querySelectorAll("p")[1];

// spanHijo.remove();

// 2. parent.removeChild(element)
// c1.removeChild(spanHijo);

// 3. element.innerHTML = ""
// c1.firstChild.innerHTML = "";
// spanHijo.textContent = "sopa";

// 4. while (element.firstChild) element.removeChild(element.firstChild);
// console.log(c1.firstChild);
// while (c1.firstChild) {
//   c1.removeChild(c1.firstChild);
// }

// 5. element.replaceWith(element.cloneNode(false))
// c1.replaceWith(c2.cloneNode(false));

// 6. element.outerHTML = ""
// c1.outerHTML = "<p>Este texto fue añadido con <strong>outerHTML</strong>.</p>";

// FIND array.find(callback)
// FINDLAST array.findLast(callback)
// FINDINDEX array.findIndex(callback)
// FINDLASTINDEX array.findLastIndex(callback)
// const arrayPrueba = [1, 2, 3, 4, 5, 6, 7, 5, 9, 5];
// const numMayorQue10 = arrayPrueba.find(n => n === 19);
// console.log(numMayorQue10);

// const usuarios = [
//   { nombre: "Ana", edad: 9, rol: "user" },
//   { nombre: "Sebastián", edad: 12, rol: "user" },
//   { nombre: "Luz", edad: 34, rol: "admin" },
// ];

// const mayorEdad = usuarios.findLastIndex(u => u.rol === "user");
// console.log(mayorEdad);

/// sort function

// console.log([10, 5, 60, 8].sort((a, b) => a - b));
// console.log(
//   ["Banana", "Amarillo", "arroz", "Zorro"].sort((a, b) => {
//     const x = a.toLowerCase();
//     const y = b.toLowerCase();
//     if (x < y) return -1;
//     if (x > y) return 1;
//     return 0;
//   })
// );

// const personas = [
//   { nombre: "Luis", edad: 30 },
//   { nombre: "Ana", edad: 30 },
//   { nombre: "Bea", edad: 20 },
//   { nombre: "Javier", edad: 10 },
//   { nombre: "Cocacola", edad: 20 },
//   { nombre: "Sofia", edad: 50 },
// ];

// console.log(
//   personas.sort((a, b) => {
//     console.log(a.nombre, b.nombre);
//     console.log("/////////////////");
//     if (a.edad !== b.edad) return a.edad - b.edad;
//     if (a.nombre < b.nombre) return -1;
//     if (a.nombre > b.nombre) return 1;
//     return 0;
//   })
// );

// Sort espera un numero
// Si el numero es negativo, a debe ir antes que b
// Si el numero es positivo, a debe ir despues que b
// Si el numero es 0, estan empatados, entonces no se cambian

// localeCompare() Es un metodo de los strings
// los compara 'De forma correcta', arreglando tildes, alfabetos

// console.log(
//   ["Banana", "Amarillo", "arroz", "Zorro"].sort((a, b) => {
//     const x = a.toLowerCase();
//     const y = b.toLowerCase();
//     if (x < y) return -1;
//     if (x > y) return 1;
//     return 0;
//   })
// );
// console.log(
//   ["Banana", "Amarillo", "arroz", "Zorro"].sort((a, b) =>
//     a.toLowerCase().localeCompare(b.toLowerCase())
//   )
// );

// console.log(
//   personas.sort((a, b) => {
//     console.log(a.nombre, b.nombre);
//     console.log("/////////////////");
//     if (a.edad !== b.edad) return a.edad - b.edad;
//     return a.nombre.localeCompare(b.nombre);
//   })
// );

// .every() y .some()
// Te devuelven boolean
// Every devuelve true si todos los elementos cumplen la condición
// Some devuelve true si al menos un elemento cumple la condición

// console.log([1, 2, 3].every(n => n > 0));
// const inputs = ["Jose", "Perez", "Colombia", ""];
// console.log(inputs.every(input => input.length > 0));
// const pedidos = [
//   { precio: 100, pagado: true },
//   { precio: 200, pagado: true },
//   { precio: 400, pagado: true },
// ];
// console.log(pedidos.every(pedido => pedido.pagado));

// console.log([1, 2, 3].some(n => n > 2));
// const inputs = ["Jose", "Perez", "Colombia", ""];
// console.log(inputs.some(input => input.length === 0));
// const pedidos = [
//   { precio: 100, pagado: false },
//   { precio: 200, pagado: true },
//   { precio: 400, pagado: true },
// ];
// console.log(pedidos.some(pedido => !pedido.pagado));

// const isEven = n => n % 2 === 0;
// const isGreaterThan10 = n => n > 10;
// const isLessThan20 = n => n < 20;

// const predicates = [isEven, isGreaterThan10, isLessThan20];

// const applyPredicates = n => predicates.some(p => p(n));

// console.log(applyPredicates(21));
// console.log(applyPredicates(11));
// console.log(applyPredicates(12));

// // flat
// // aplana un array hasta un nivel indicado
// // si no se indica, aplana hasta el nivel 1
// // no modifica el array original, te regrese un nuevo array
// const arr1 = [1, [[2, [3, 4, null], 5], 6], 7, 8, [9, 10], null, undefined];
// console.log(arr1.flat(20).filter(n => n));
// console.log(arr1);

// const pages = [
//   [{ id: 1 }, { id: 2 }, { id: 3 }],
//   [{ id: 4 }, [{ id: 5 }, { id: 6 }]],
//   [{ id: 7 }, { id: 8 }, { id: 9 }],
// ];
// console.log(pages.flat(2));

// flatMap

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr2.flatMap(n => [n, n * 2]));

// const phrases = [
//   "I'm a little teapot",
//   "How about a little teapot",
//   "I'm a little teapot",
//   "How about a little teapot",
// ];
// const words = phrases.flatMap(phrase => phrase.split(" "));
// console.log(words);

// const slots = [
//   { start: 0, end: 2 },
//   { start: 3, end: 5 },
//   { start: 6, end: 8 },
//   { start: 9, end: 11 },
// ];

// const hours = slots
//   .map(slot => {
//     const resultado = [];
//     for (let h = slot.start; h < slot.end; h++) {
//       resultado.push({ from: h, to: h + 1 });
//     }
//     return resultado;
//   })
//   .flat(2);

// console.log(hours);

// Non-destructive methods
// const arr = [1, 2, 8, 9, 10, 23, 45, 67, 89, 123];
// const arr2 = [...arr].reverse();
// const arr3 = arr.toReversed();
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// const users = [
//   { name: "Luis", age: 30 },
//   { name: "Ana", age: 30 },
//   { name: "Bea", age: 20 },
//   { name: "Javier", age: 10 },
// ];

// const reservedNames = users.map(user => user.name).toReversed();
// console.log(users);
// console.log(reservedNames);

// const nums = [4, 6, 1, 8, 3];
// const sortedNums = nums.toSorted((a, b) => a - b); // sort toSorted();

// console.log(nums);
// console.log(sortedNums);

// const people = [
//   { name: "Luis", age: 30 },
//   { name: "Ana", age: 30 },
//   { name: "Bea", age: 20 },
//   { name: "Javier", age: 10 },
// ];

// const sortedPeople = people.toSorted((p1, p2) => {
//   if (p1.age !== p2.age) return p1.age - p2.age;
//   return p1.name.localeCompare(p2.name);
// });

// console.log(people);
// console.log(sortedPeople);
// console.log("Danna".toLowerCase().localeCompare("danna".toLowerCase()));

// Splice
//
// const a = [1, 2, 3, 4, 5];
// const deleted = a.toSpliced(0, 4); // Regresar como quedaria la lista original removiendo los elementos dados
// // SIN modificar la lista original
// console.log(a);
// console.log(deleted);

// const letters = ["a", "c", "d"];
// const withB = letters.toSpliced(1, 0, "b");
// console.log(letters);
// console.log(withB);

// const nums = [10, 20, 30, 40, 50];
// const edited = nums.toSpliced(1, 3, 99, 100);
// console.log(nums);
// console.log(edited);

///// with

const arr = [1, 2, 3, 4, 5];
const updated = arr.with(1, 99999);
console.log(arr);
console.log(updated);

const updated2 = arr.with(-1, "Z");
console.log(updated2);

const scores = [10, 20, 30];
const updated3 = scores.with(1, scores[1] + 5);
console.log(scores);
console.log(updated3);
