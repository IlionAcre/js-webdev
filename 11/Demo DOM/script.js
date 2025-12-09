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

// const arr = [1, 2, 3, 4, 5];
// const updated = arr.with(1, 99999);
// console.log(arr);
// console.log(updated);

// const updated2 = arr.with(-1, "Z");
// console.log(updated2);

// const scores = [10, 20, 30];
// const updated3 = scores.with(1, scores[1] + 5);
// console.log(scores);
// console.log(updated3);

/// Object.groupBy --- Array.from --- uso del constructor de Array y arr.fill

// const counter = {
//   value: 0,
//   name: "counter",
//   type: "object",
//   inc(step = 1) {
//     console.log(this);
//     // this.value += step;
//     // console.log("Counter:", this.value);
//   },
// };

// const counterOutside = counter.inc;

// counter.inc(10);
// counterOutside.call(counter);

// const catalogo = {
//   prefijo: "prod-",
//   obtenerCodigosOrdenados(productos) {
//     const mapearCodigo = function (producto) {
//       return `${this.prefijo}${producto.id}`;
//     };
//     // const mapearCodigoFixed = mapearCodigo.bind(catalogo);
//     // productos.flatMap(p => mapearCodigoFixed(p))

//     productos.flatMap(p => mapearCodigo.call(catalogo, p));
//     productos.flatMap(p => mapearCodigo.apply(catalogo, [p]));
//   },
// };

// const listaProductos = [{ id: 101 }, { id: 205 }, { id: 102 }];

// console.log(catalogo.obtenerCodigosOrdenados(listaProductos));
// Esperado: [ 'PROD-101', 'PROD-102', 'PROD-205' ]

// Object.groupBy()

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // pares: [2, 4, 6, 8, 10]
// // impares: [1, 3, 5, 7, 9]
// const agrupadosPorPar = Object.groupBy(numeros, n => {
//   return n % 2 === 0 ? "pares" : "impares";
// });

// console.log(agrupadosPorPar);

// const agrupadosPorTamano = Object.groupBy(numeros, n => {
//   if (n < 3) return "pequeño";
//   if (n < 6) return "mediano";
//   return "grande";
// });
// console.log(agrupadosPorTamano);

// const inventario = [
//   { nombre: "manzana", precio: 10, tipo: "fruta" },
//   { nombre: "pera", precio: 20, tipo: "fruta" },
//   { nombre: "naranja", precio: 30, tipo: "fruta" },
//   { nombre: "plátano", precio: 40, tipo: "vegetal" },
//   { nombre: "cebolla", precio: 50, tipo: "vegetal" },
//   { nombre: "tomate", precio: 60, tipo: "vegetal" },
//   { nombre: "lechuga", precio: 70, tipo: "vegetal" },
//   { nombre: "lima", precio: 80, tipo: "fruta" },
//   { nombre: "mango", precio: 90, tipo: "fruta" },
//   { nombre: "uva", precio: 100, tipo: "fruta" },
// ];

// const agrupadosPorTipo = Object.groupBy(inventario, item => item.tipo);
// console.log(agrupadosPorTipo);

// const usuarios = [
//   { nombre: "Ana", edad: 30 },
//   { nombre: "Luis", edad: 17 },
//   { nombre: "Javier", edad: 10 },
//   { nombre: "Bea", edad: 20 },
//   { nombre: "Sofia", edad: 15 },
// ];

// const porEtapa = Object.groupBy(usuarios, ({ edad }) => {
//   if (edad < 13) return "Ninez";
//   if (edad < 18) return "Adolescia";
//   return "Adultez";
// });

// const porEtapa2 = Object.groupBy(usuarios, u => {
//   if (u.edad < 13) return "Ninez";
//   if (u.edad < 18) return "Adolescia";
//   return "Adultez";
// });

// console.log(porEtapa);
// console.log(porEtapa2);

// Array.from()
// const arrayVacio = Array.from({ length: 6 }, (_, i) =>
//   i >= 1 && i <= 4 ? 5 : undefined
// );
// console.log(arrayVacio);

// const palabra = "Sara";
// console.log(Array.from(palabra));

// const numerosRepetidos = [1, 2, 2, 2, 3, 4, 1, 3, 4];
// const numerosUnicosDuplicados = Array.from(
//   new Set(numerosRepetidos),
//   n => n * 2
// );
// console.log(numerosUnicosDuplicados);

// 31 - 36
// const rango = Array.from({ length: 6 }, (_, i) => i + 31);
// console.log(rango);

// const abecedario = Array.from({ length: 26 }, (_, i) => {
//   return String.fromCharCode(65 + i);
// });
// console.log(abecedario);

// const palabra = "Sara";
// const arrSara = Array.from(palabra, ele => {
//   console.log(ele);
//   return ele.toUpperCase();
// });

// arr.fill(value, start, end)
// const numeros1 = new Array(6);
// numeros1.fill(1, 1, 4);
// console.log(numeros1);

// const numeros2 = [1, 2, 3, 4, 5, 6];
// numeros2.fill(0, 1, 4);
// console.log(numeros2);

// const letras = "1237823492";
// console.log(
//   Array.from(letras)
//     .fill("*", 0, letras.length - 4)
//     .join("")
// );

// const matriz = new Array(3).fill(null);
// console.log(matriz);

// const transactions = [
//   { id: 101, clientId: "C-A", amount: 500 },
//   { id: 102, clientId: "C-B", amount: 2000 },
//   { id: 103, clientId: "C-A", amount: -9999 }, // DATO CORRUPTO (Índice 2)
//   { id: 104, clientId: "C-C", amount: 300 },
//   { id: 105, clientId: "C-B", amount: 100 },
// ];

// const fixedTransactions = transactions.with(2, {
//   ...transactions[2],
//   amount: 1500,
// });

// const byClient = Object.groupBy(fixedTransactions, c => c.clientId);

// const clientSummary = Array.from(
//   Object.entries(byClient),
//   ([otraForma, transactions]) => {
//     const totalAmount = transactions.reduce((acc, t) => acc + t.amount, 0);
//     return { otraForma, totalAmount };
//   }
// );

// console.log(clientSummary);

// const entries = Object.entries(byClient);
// for (const [key, value] of entries) {
//   console.log(value);
// }

// const arrayPersonas = [
//   { nombre: "Sara", edad: "22", rh: "A+" },
//   { nombre: "Ana", edad: "30", rh: "B+" },
//   { nombre: "Luis", edad: "17", rh: "C-" },
//   { nombre: "Javier", edad: "10", rh: "D-" },
//   { nombre: "Bea", edad: "22", rh: "E+" },
//   { nombre: "Sofia", edad: "15", rh: "F-" },
// ];
// const mapPersonas = new Map(arrayPersonas.map(p => [p.edad, p.rh]));
// console.log(mapPersonas);

// [[key1, value1], [key2, value2], [key3, value3]]

// const sara = { nombre: "Sara", edad: "22", rh: "A+" };

// const mapaPersonas = new Map([
//   ["marca", "lenovo"],
//   ["pulgadas", 13],
//   ["color", "negro"],
// ]);
// // [[key1, value1], [key2, value2], [key3, value3]]
// console.log(mapaPersonas);

// console.log(listaPersonas);
// const mapaPersonas2 = new Map(listaPersonas);
// console.log(mapaPersonas2);

// const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsDobles = arrayNums.map(n => {
//   if (n % 2 === 0) return n * 2;
//   return n;
// });
// console.log(numsDobles);

// const arrayPersonas = [
//   { nombre: "Sara", edad: "22", rh: "A+" },
//   { nombre: "Ana", edad: "30", rh: "B+" },
//   { nombre: "Luis", edad: "17", rh: "C-" },
//   { nombre: "Javier", edad: "10", rh: "D-" },
//   { nombre: "Bea", edad: "22", rh: "E+" },
//   { nombre: "Sofia", edad: "15", rh: "F-" },
// ];
// const arrayPersonasMod = arrayPersonas.map(p => {
//   return { ...p, inicial: p.nombre[0] };
// });
// console.log(arrayPersonasMod);

// en JS todos los numeros son floats
// console.log(23 === 23.0);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// convertir a int
// console.log(Number("23"));
// console.log(Number("23px")); // NaN
// console.log(Number.parseInt("23px")); // 23
// console.log(Number.parseInt("x23px")); // NaN
// console.log(Number.parseInt("     23px   ")); // 23
// console.log(Number.parseInt("     2.7rem   ")); // 2 -> Te corta la parte decimal
// console.log(Number.parseFloat("     2.7rem   ")); // 2.7

// checkear si es un numero
// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23.23)); // false
// console.log(Number.isInteger(NaN)); // false

// console.log(Number.isNaN(NaN)); // true
// console.log(23 / 0); // Infinity
// console.log(Number.isNaN(23 / 0)); // false -> Si es un numero
// console.log(Number.isNaN("23" - 7)); // false -> Si es un numero

// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite(23)); // true
// console.log(Number.isFinite("asdasd")); // false
// console.log(Number.isFinite(23 / 0)); // false -> da Infinity

// console.log(+"20PX");
// console.log("20");
// console.log(+"20"); // Te transforma un numero de string a number
// // pero el numero no puede estar acompañado de otro caracter

// Metodos mas usados de Math

// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.5)); // 5 Si el decima es mayor o igual a 5, redonda hacia arriba
// console.log(Math.floor(4.3)); // 4 Redonda hacia abajo
// console.log(Math.ceil(4.3)); // 5 Redonda hacia arriba
// console.log(Math.trunc(4.5)); // Te mocha la parte decimal

// console.log(Math.max(4, 6, 2, 1, 8)); // 8, te regresa el mayor numero
// console.log(Math.min(4, 6, 2, 1, 8)); // 1, te regresa el menor numero

// console.log(Math.random()); // Te da un numero aleatorio entre 0 y 0.9999...

// console.log(Math.abs(-4)); // 4 Te regresa el numero absoluto

// console.log(Math.sign(-4)); // -1 Te regresa el signo del numero (En forma de 1 o -1)

// console.log(Math.sqrt(16)); // 4 Te da la raíz cuadrada

// console.log(Math.cbrt(27)); // 3 Te da la raíz cúbica

// console.log(Math.pow(2, 4)); // 2** 4 Te da el resultado de 2 elevado a 4

// console.log(Math.log(100)); // 2 Te da el logaritmo natural de 100

// console.log(Math.exp(2)); // 2 Te da el resultado de e elevado a 2

// console.log(Math.PI);

// console.log(Math.cos(Math.PI / 2)); // 1 Te da el coseno de 90 grados

// console.log(Math.sin(Math.PI / 2)); // 0 Te da el seno de 90 grados

// console.log(Math.tan(Math.PI / 4)); // 1 Te da el tangente de 45 grados

// console.log(9007199254741000n);

// console.log(90071992547410032423420n + 9007234234032423420n);

// console.log(Math.sqrt(16n));

// console.log(2323n + BigInt(9007234234032423420));

// let bigNumber = 9007234234032423420n;

// console.log(2323n * BigInt(bigNumber));

// console.log(20n < 10);
// console.log(20n == 20);
// console.log(typeof 20n);
// console.log(20n == "20");

// console.log(bigNumber + " is really biiig");

// console.log(11n / 3n);
// console.log(11 / 3);

// Date management
// const now = new Date();
// console.log(now);

// console.log(new Date("July 20, 2026"));
// console.log(new Date("Aug 02 2020 19:24:24"));

// const future = new Date(2037, 10, 19, 19, 15, 12, 999);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getMilliseconds());
// // console.log(future.getTime()); // Todos los segundos que han pasado desde el 1/1/1970
// // console.log(future.setTime(900000000001));
// console.log(future);
// console.log(typeof future);
// console.log(typeof future.toISOString());
// console.log(future);

// console.log("aaaaaaaaaaaaaaaaaaa");
// console.log(future.toISOString()); // IMPORTANTE 2037-11-20T00:15:12.999Z
// console.log(future.toString()); // Thu Nov 19 2037 19:15:12 GMT-0500 (hora estándar de Colombia)
// console.log(future.toDateString()); // Thu Nov 19 2037
// console.log(future.toTimeString()); // 19:15:12 GMT-0500 (hora estándar de Colombia)
// console.log(future.toLocaleString("en-ES")); // 19/11/2037, 19:15:12
// console.log(future.toLocaleDateString("en-ES")); // 19/11/2037
// console.log(future.toLocaleTimeString("en-ES")); // 19:15:12

// console.log(future.getUTCHours());
// console.log(future.getUTCMinutes());
// console.log(future.getUTCSeconds());
// console.log(future.getUTCMilliseconds());
// console.log(future.getUTCFullYear());
// console.log(future.getUTCMonth());
// console.log(future.getUTCDate());

// const fecha = Date.parse("2010-10-20T20:15:12.999Z");
// console.log(fecha);

// const date1 = new Date("2020-01-01");
// const date2 = new Date("2024-01-02");

// const dif = 1000 * 60 * 120; //-(date1 - date2);
// const operadorDias = 1000 * 60 * 60 * 24;
// const operadorMeses = 1000 * 60 * 60 * 24 * 30;
// const operadorAnos = 1000 * 60 * 60 * 24 * 30 * 12;
// const operadorSemestres = 1000 * 60 * 60 * 24 * 30 * 6;

// console.log(dif / (1000 * 60 * 60 * 24 * 30 * 12));

// console.log(dif);
// console.log(dif / operadorDias);
// console.log(Math.trunc(dif / operadorMeses));
// console.log(Math.trunc(dif / operadorAnos));
// console.log(Math.trunc(dif / operadorSemestres));

// const month = 78;
// const day = String(5).padStart(2, "0");

// const monthFixed = String(month).length < 2 ? `0${month}` : month;

// console.log(monthFixed, day);

// const config = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   weekday: "long",
//   hour: "numeric",
//   hour12: false,
//   minute: "numeric",
// };

// const date = new Date(2015, 1, 20, 14, 30, 1);
// const language = navigator.language;
// const formatter = new Intl.DateTimeFormat(language, config);
// const dateFormatted = formatter.format(date);
// console.log(date);
// console.log(formatter);
// console.log(dateFormatted);

// Factorial
// function calcularFactorial(n) {
//   if (n === 1) return 1;
//   return n * calcularFactorial(n - 1);
// }
// console.log(calcularFactorial(6));

// Factorial

// function potenciaFactorial(base, exponente) {
//   console.log(base, exponente);
//   if (exponente === 0) return 1;
//   return base * potenciaFactorial(base, exponente - 1);
// }
// console.log(potenciaFactorial(3, 4));

// function sumarDigitos(n) {
//   if (n === 0) return 0;
//   const ultimoDigito = n % 10;
//   const restoDelNumero = Math.floor(n / 10);

//   return ultimoDigito + sumarDigitos(restoDelNumero);
// }

// console.log(sumarDigitos(857819));

// function fibonacci(n) {
//   if (n === 0) return 0; // Caso base
//   if (n === 1) return 1; // Caso base
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(0));

// function buscarEnTree(nodo, objetivo) {
//   if (nodo.value === objetivo) return nodo; // Caso base donde se encuentra
//   for (const hijo of nodo.children) {
//     if (buscarEnTree(hijo, objetivo)) return hijo; // Caso base recursivo donde se encuentra
//   }
//   return false; // Caso base donde no se encuentra nada
// }

const dateformat = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  hour12: false,
  minute: "numeric",
}).format(new Date());

const numberFormat = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(123400);

const collatorFormat = ["Zapato", "árbol", "ñafrar"].sort(
  new Intl.Collator("es").compare
);

const listFormat = new Intl.ListFormat("fr-FR", {
  style: "short",
  type: "disjunction",
}).format(["Zapato", "árbol", "ñafrar"]);

const displayNames = new Intl.DisplayNames(["es", "en"], {
  type: "region",
});

const segmenter = new Intl.Segmenter("es-ES", {
  granularity: "word",
});

const options = {
  style: "long",
  numeric: "always",
};
const relativeTimeFormat = new Intl.RelativeTimeFormat("en-US", options).format(
  -30,
  "day"
);

const pluralRulesFormat = new Intl.PluralRules("ar").select(11);

const localeFormat = new Intl.Locale("en-GB-u-hc-h24");

// setTimeout
// callback

function callback(name) {
  console.log(`Hola ${name}`);
}

const jhon5 = () => callback("Jhon5");
function jhon3() {
  callback("Jhon3");
}
function jhon1() {
  callback("Jhon1");
}

// setTimeout(jhon5, 5000);
// setTimeout(jhon3, 3000);
// setTimeout(jhon1, 1000);

// setInterval
// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// function ejecutarSecuencia(tareas, indice = 0) {
//   if (indice >= tareas.length) {
//     // Caso base
//     console.log("Tareas completadas");
//     return;
//   }
//   const { mensaje, retardo } = tareas[indice];
//   setTimeout(() => {
//     console.log(`Paso ${indice + 1}: ${mensaje}, con ${retardo}`); // Se ejecuta la tarea
//     ejecutarSecuencia(tareas, indice + 1);
//   }, retardo);
// }

// ejecutarSecuencia([
//   { mensaje: "Tarea 1", retardo: 5000 },
//   { mensaje: "Tarea 2", retardo: 2000 },
//   { mensaje: "Tarea 3", retardo: 3000 },
// ]);

function tareaCiclicaDinamica(frecuenciaInicial) {
  let ciclos = 0;
  let frecuenciaActual = frecuenciaInicial;
  const loop = () => {
    ciclos++;
    if (ciclos > 5 || frecuenciaActual < 100) {
      // Caso base
      console.log(`Ciclo detenido`);
      return;
    }
    console.log(
      `Ciclo ${ciclos}, frecuencia: ${frecuenciaActual.toFixed(0)}ms`
    );
    frecuenciaActual *= 0.5;
    setTimeout(loop, frecuenciaActual);
  };
  loop();
}

tareaCiclicaDinamica(5000);

// setTimeout(() => {
//   console.log("Tarea 1");
// }, 1000);

// setTimeout(() => {
//   console.log("Tarea 2");
// }, 100);
