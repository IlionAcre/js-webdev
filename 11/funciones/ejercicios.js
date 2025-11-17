"use strict";

// Por valor - Los tipos primitivos

// let nombre = "John";

// let nombre2 = nombre;

// console.log(nombre);
// console.log(nombre2);

// nombre = "Jane";

// console.log(nombre);
// console.log(nombre2);

// Por referencia

// let persona1 = { nombre: "John" };
// let persona2 = { ...persona1 };

// console.log(persona1);
// console.log(persona2);

// persona1.nombre = "Jane";

// console.log(persona1);
// console.log(persona2);

// const bookings = [];

// const createBooking = function (
//   flightNumber,
//   numPassengers = 1,
//   price = 100 * numPassengers
// ) {
//   const booking = {
//     flightNumber,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// function saludar(nombre = "invitado") {
//   console.log(`Hola ${nombre}`);
// }

// saludar("Sara");
// saludar();

// function procesar(datos, logger = "Procesando") {
//   console.log(`${logger} - ${datos.length}...`);
// }

// procesar([1, 2, 3, 4], "Utilizando");
// procesar([1, 2, 3, 4]);

// function sumarTodos(...numeros) {
//   return numeros.reduce((acc, n) => acc + n, 0);
// }

// console.log(sumarTodos(1, 2));

// function combineNames(firstName, ...lastNames) {
//   console.log(firstName, lastNames);
//   const joinedLastNames = lastNames.join(" ");
//   console.log(joinedLastNames);
//   return `${firstName} ${joinedLastNames}`;
// }

// console.log(combineNames("John", "Doe", "Jr.", "Williams"));

// function validarTipos(...args) {
//   return args.map(arg => typeof arg);
// }

// console.log(validarTipos(1, "a", true, {}, []));

// function configureApp({
//   theme = "light",
//   language = "en",
//   secureMode = false,
// }) {
//   console.log(
//     `Theme: ${theme}\nLanguage: ${language}\nSecure Mode: ${secureMode}`
//   );
// }
// configureApp({ language: "es", theme: "dark", secureMode: true });
// configureApp({});

////// Funciones como parametro - High Order Functions

// function unaPalabra(palabra) {
//   return palabra.replaceAll(" ", "");
// }

// function primeraPalabra(palabra) {
//   return palabra.split(" ")[0];
// }

// function mayus(palabra) {
//   return palabra.toUpperCase();
// }

// function minus(palabra) {
//   return palabra.toLowerCase();
// }

// function transformador(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// }

// transformador("Hey, esta string esta larga", unaPalabra);
// console.log("-------------");
// transformador("Hey, esta string esta larga", primeraPalabra);
// console.log("-------------");
// transformador("Hey, esta string esta larga", mayus);
// console.log("-------------");
// transformador("Hey, esta string esta larga", minus);

// function imprimirSaludo(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// setTimeout(() => imprimirSaludo("Juan"), 2000);

// function filtrar(arr, fn) {
//   return arr.filter(fn);
// }

// const esPar = n => n % 2 === 0;
// const esMultiplo3 = n => n % 3 === 0;
// const esMayorQueLength = (n, _, arr) => n > arr.length;

// console.log(filtrar([1, 2, 3, 4, 5, 6], esPar)); // [2,4,6]
// console.log(filtrar([1, 2, 3, 4, 5, 6, 9], esMultiplo3)); // [3,6]
// console.log(filtrar([1, 2, 3, 4, 5, 6, 9], esMayorQueLength)); // [1,2,3,4,5,6]

// function transformador(str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
// }

// const forProcessing = {
//   "Almacenar a temperatura ambiente": str => str.toUpperCase(),
//   "Envase y empaque original": str => str.toLowerCase(),
//   "Mantengase fuera del alcance de los ninos": str =>
//     str.toUpperCase().split(" "),
//   "Mantengase refrigerado": str => str.slice(0, str.length / 2),
// };

// for (const [key, value] of Object.entries(forProcessing)) {
//   transformador(key, value);
// }

// Closures

// function contador() {
//   let count = 0;
//   let anotherCount = "Im another count";
//   console.log(count);
//   console.log(anotherCount);
//   return function () {
//     count++;
//     return count;
//   };
// }

// const c = contador();
// console.log(c());
// console.log(c());
// console.log(c());
// console.dir(c);

// const d = contador();
// console.log(d());
// console.log(d());

// console.log(c());

// console.dir(c);
// console.dir(d);

// const papa = "asd";

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const saludarConHey = greet("Hey");
// const saludarConHola = greet("Hola");

// saludarConHey("Sara");
// saludarConHola("Sara");

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     // console.log(a * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// const h = function () {
//   const b = 888;
//   f = function () {
//     return b;
//   };
// };

// h();
// f();
// console.dir(f);

// console.log(f);

// function crearMultiplicador(factor) {
//   return function (n) {
//     return n * factor;
//   };
// }

// const duplicador = crearMultiplicador(2);
// const triplicador = crearMultiplicador(3);
// const cuadriplicador = crearMultiplicador(4);

// console.log(duplicador(10)); // 20
// console.log(duplicador(5)); // 10
// console.log(duplicador(1)); // 2
// console.log(triplicador(10)); // 30
// console.log(cuadriplicador(10)); // 40

// function mostrarNombreConDelay(nombre) {
//   const nombrar = function () {
//     console.log(`Hola ${nombre}`);
//   };
//   console.dir(nombrar);
//   return setTimeout(nombrar, 2000);
// }

// mostrarNombreConDelay("Juan");
// mostrarNombreConDelay("Andres");

// function crearContador(inicio = 0) {
//   let cuenta = inicio;
//   return {
//     incrementar() {
//       cuenta++;
//     },
//     decrementar() {
//       cuenta--;
//     },
//     valor() {
//       return cuenta;
//     },
//   };
// }

// const contadorA = crearContador(0);
// const contadorB = crearContador(0);
// contadorA.incrementar();
// contadorA.incrementar();
// contadorA.incrementar();
// contadorA.decrementar();
// console.log(contadorA.valor()); // 2
// console.log(contadorB.valor()); // 2

// function unaVez(fn) {
//   let ejecutada = false;
//   let resultado;

//   return function (...args) {
//     if (!ejecutada) {
//       resultado = fn(...args);
//       console.log(`Se ha ejecutado la función ${fn.name}`);
//       ejecutada = true;
//     }
//     return resultado;
//   };
// }

// function inicializar() {
//   console.log("Inicializando...");
//   return 42;
// }

// const inicializarUnaVez = unaVez(inicializar);

// console.log(inicializarUnaVez());
// console.log(inicializarUnaVez());
// console.log(inicializarUnaVez());

// let num = 2;
// let num2 = -3;

// function absoluteSum(a, b) {

//   const absolute = function (n) {
//     console.log(a, b);
//     return Math.abs(n);
//   };

//   return absolute(a) + absolute(b);
// }

// console.log(absoluteSum(num, num2));

// const sara = {
//   nombre: "Sara",
//   anoNacimiento: 2001,
//   // calculadEdad: function () {
//   //   const self = this;
//   //   const calcularValorAbsoluto = function () {
//   //     console.log(self);
//   //     return Math.abs(self.anoNacimiento);
//   //   };
//   //   return 2025 - calcularValorAbsoluto();
//   // }, // Metodo de los objetos, la palabra "this" hace referencia al objeto actual

//   calculadEdad: function () {
//     const calcularValorAbsoluto = () => {
//       console.log(this);
//       return Math.abs(this.anoNacimiento);
//     };
//     return 2025 - calcularValorAbsoluto();
//   }, // Metodo de los objetos, la palabra "this" hace referencia al objeto actual

//   saludar: function () {
//     console.log(`Holaaa`);
//   },
// };

// console.log(sara.calculadEdad());

// function calcularEdad() {
//   console.log(this); // En las funciones (no arrow), el this es undefined;
//   return 2025;
// }

// const calcularEdadArrow = () => {
//   console.log(this); // En las arrow functions, el this es tomado de un contexto mayor;
//   // En este caso, como estamos en top-level, el contexto es global
//   return 2025;
// };

// console.log(calcularEdadArrow());

// console.log(sara.calculadEdad());

// This dentro de un EventListener se refiere al elemento que emite el evento

// new, call, apply, bind

// const fabian = {
//   nombre: "Fabian",
//   anoNacimiento: 1996,
// };

// fabian.calculadEdad = sara.calculadEdad;
// fabian.saludar = sara.saludar;
// console.log(sara.calculadEdad());
// console.log(fabian.calculadEdad());

const americanAirlines = {
  airline: "American Airlines",
  code: "AA",
  bookings: [],
  book(flightNumber, name) {
    console.log(`${this.airline} booking ${flightNumber} for ${name}`);
    this.bookings.push({ flightNumber, name });
  },
};

// americanAirlines.book("123", "Sara");
// americanAirlines.book("456", "Fabian");
// console.log(americanAirlines.bookings);

const avianca = {
  airline: "Avianca",
  code: "AV",
  bookings: [],
};

const latam = {
  airline: "LATAM",
  code: "LA",
  bookings: [],
};

// const airline = "Default";
// const bookings = [];

const book = americanAirlines.book;

// book("789", "Juan"); Esto no funciona

// book.call(avianca, "789", "Juan");
// console.log(avianca.bookings);

// book.call(latam, "789", "Juan");
// console.log(latam.bookings);

// book.call(americanAirlines, "789", "Juan");
// console.log(americanAirlines.bookings);

// americanAirlines.book.call(avianca, "789", "Juan");
// console.log(avianca.bookings);

// americanAirlines.book("789", "Juan");
// console.log(americanAirlines.bookings);

// const params = ["789", "Juan"];

// book.apply(avianca, params);
// console.log(avianca.bookings);

// book.call(latam, ...params);
// console.log(latam.bookings);

// bind

// const bookAvianca = book.bind(avianca);
// bookAvianca("789", "Juan");
// bookAvianca("233", "Fabian");

// const bookLatam = book.bind(latam);
// bookLatam("789", "Juan");
// bookLatam("233", "Fabian");

// const vuelo123AA = americanAirlines.book.bind(americanAirlines, "123");
// // vuelo123AA("Juan");
// // vuelo123AA("Fabian");

// const flightFunctions = {};

// for (let i = 123; i < 126; i++) {
//   flightFunctions[i] = book.bind(americanAirlines, i);
// }

// flightFunctions["123"]("Juan");
// flightFunctions["124"]("Juan");
// flightFunctions["125"]("Juan");
// console.log(americanAirlines.bookings);

// const addTax = (rate, value) => value + value * rate;
// const addIVA = addTax.bind(null, 0.19);
// const addCT = addTax.bind(null, 0.17);

// console.log(addIVA(100)); // 190
// console.log(addCT(100)); // 170

// function sumarNumeros(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sumarNumeros(1, 2);
