"use strict";

// function normalizar(palabra) {
//   let npalabra = palabra.replaceAll("á", "a");
//   return npalabra;
// }

// console.log(normalizar("mámáááámamá"));

// console.log("naranja".replace("j", "J"));

// METODOS DE LOS STRINGS

let palabra = "Hola"; // Objeto iterable
let saludo = "Hola Sara, como estas?";

// // string.length -> devuelve la longitud de la string
// console.log(palabra.length); // 4
// console.log(saludo.length); // 22

// // string.includes(substring) -> devuelve true si la string contiene la substring
// console.log(palabra.includes("a"));
// console.log(palabra.includes("u"));
// console.log(saludo.toLowerCase().includes("sara"));
// //       "hola sara, como estas?".includes("sara")

// // string.startsWith(substring) -> devuelve true si la string empieza por la substring
// console.log(palabra.startsWith("H"));
// console.log(palabra.startsWith("h"));
// console.log(saludo.startsWith("Hola"));

// // string.endsWith(substring) -> devuelve true si la string termina por la substring
// console.log(palabra.endsWith("a"));
// console.log(palabra.endsWith("A"));
// console.log(saludo.endsWith("tas?"));

// // string.indexOf(substring) -> devuelve la posicion de la primera aparicion de la substring en la string
// console.log(palabra.indexOf("a")); // -> regresa el index de la PRIMERA ocurrencia
// console.log(saludo.indexOf("Sara")); // -> index del primer objeto encontrado, en este caso, el index de S
// console.log(palabra.indexOf("u")); // -> regresa -1 si el objeto no se encuentra
// console.log(saludo.indexOf("a"));

// // string.lastIndexOf(substring) -> devuelve la posicion de la ultima aparicion de la substring en la string
// console.log(saludo.lastIndexOf("a")); // -> regresa el index de la ULTIMA ocurrencia
// console.log(saludo.lastIndexOf("Sara")); // -> index de la primera letra del ultimo objeto encontrado, en este caso, el index de S
// console.log(saludo.lastIndexOf("x")); // -> regresa -1 si el objeto no se encuentra

// // string.Slice(start, end) -> devuelve una nueva string con las letras del indice start hasta el indice end
// // start = Primer caracter a devolver
// // end = El caracter despues del ultimo a devolver
// // Es mayor o igual a 0, y es menor que 2, pero no menos o IGUAL a 2,. entonces el ultimo caracter es el indice 1.
// console.log(saludo.slice(0, 2)); // -> "Ho"
// console.log(saludo.slice(5, 9)); // -> "Sara"
// console.log(saludo.slice(30, 35)); // -> "" Si se dan valores incorrectos

// // string.toLowerCase() -> devuelve una nueva string con todas las letras en minúsculas
// // string.toUpperCase() -> devuelve una nueva string con todas las letras en mayúsculas

// // string.replace(old, new) -> devuelve una nueva string con la primera ocurrencia letras reemplazadas por el nuevo texto
// console.log(saludo.replace("a", "AaAaA")); // "Reemplaza solo la primera ocurrencia"
// console.log(saludo.replace("a", "")); // "Reemplazar por una string vacia para eliminar un caracter"

// string.replaceAll(old, new) -> devuelve una nueva string con TODAS las letras reemplazadas por el nuevo texto
// console.log(saludo.replaceAll("a", "AaAaA")); // "Reemplaza solo la primera ocurrencia"
// console.log(saludo.replaceAll("a", "")); // "Reemplazar por una string vacia para eliminar un caracter"
// console.log(saludo.replaceAll("u", "")); //
// console.log(saludo.replaceAll("Sara", "Fabian"));

// // string.split(separator) -> devuelve un array con las partes de la string separadas por el separador
// console.log(saludo.split(" ")); // -> devuelve un array con las partes de la string separadas por el espacio
// console.log(saludo.split("a")); // -> devuelve un array con las partes de la string separadas por el espacio
// console.log(palabra.split(" ")); // -> devuelve el numero de partes de la string
// // Contar el numero de palabras en una string
// console.log(saludo.split(" ").length);

// // array.join(separator) -> devuelve una nueva string con todas las partes de la array separadas por el separador
// let saludoSeparado = saludo.split(" ");
// console.log(saludoSeparado);
// console.log(saludoSeparado.join("-"));

// // string.trim() -> devuelve una nueva string con todos los espacios eliminados al principio y al final
// // string.trimStart() -> devuelve una nueva string con todos los espacios eliminados al principio
// // string.trimEnd() -> devuelve una nueva string con todos los espacios eliminados al final
// let saludoDesarreglado = "   Hola   Sara, como estas?   ";
// console.log(saludoDesarreglado);
// console.log(saludoDesarreglado.length); // -> devuelve la longitud de la string

// let saludoArreglado = saludoDesarreglado.trim();
// console.log(saludoDesarreglado.trim()); // Le quita todos los espacios al principio y al final
// console.log(saludoArreglado.length);

// console.log(saludoDesarreglado.trimStart()); // Le quita todos los espacios al principio
// console.log(saludoDesarreglado.trimEnd()); // Le quita todos los espacios al final

// saludoDesarreglado = saludoDesarreglado.trimStart(); // Si quiero guardar el cambio en la misma varible

// string.repeat(cantidades) -> Para repetir una string x cantidad de veces ''
// 'a'.repear(8) = 'aaaaaaaa'

// let parrafo =
//   "   HoY QuIeRo PrAcTiCaR jAvAsCrIpT, EsToY HaCiEnDo EjErCiCiOs CoN StRiNgS y Me PaReCe DiVeRtIdO aPrEnDeR AsI.  ";
// parrafo = parrafo.trim();
// parrafo = parrafo.toLowerCase();
// let primeraLetra = parrafo[0].toUpperCase();
// let restoDeLetras = parrafo.slice(1);
// console.log(primeraLetra);
// console.log(restoDeLetras);
// parrafo = primeraLetra + restoDeLetras;
// console.log(parrafo);

// console.log(parrafo[0].toLocaleUpperCase());
// parra
// console.log(parrafo);

let nombre = "xxxxx";
console.log(nombre);

console.log(nombre + "an");

console.log(nombre);

let numTargeta = "123423453456"; // ********3456
