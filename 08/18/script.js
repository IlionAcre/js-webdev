let Edad = 24;
console.log(Edad);

console.log("nuevo ano");
Edad = 25;
console.log(Edad);

const anoNacimiento = 2001;
console.log(anoNacimiento);

var numMascotas = 3;
console.log(numMascotas);
numMascotas = 4;
console.log(numMascotas)

semestre = 9
console.log(semestre)

semestre = 10
console.log(semestre)

// snake case = nombre_de_la_variable
// camel case = nombreDeLaVariable
// NombreDeLaVariable = clases

// int - float
// numero - string - booleano - undefined - null


let edad;
console.log(typeof edad)

edad = 2025 - anoNacimiento
console.log(edad)

console.log(edad + 1 / 2);
console.log('Marta', 'Andrea', edad);

console.log(edad, edad ** 2)

// STRING FORMATTING

let nombreEx1 = "Ana";
let saludoEx1 = "Hola " + nombre + ", ¿cómo estás?";
// "Hola Ana, ¿cómo estás?"

let nombreEx2 = "Ana";
let saludoEx2 = `Hola ${nombre}, ¿cómo estás?`;
// "Hola Ana, ¿cómo estás?"

let nombreEx3 = "Ana";
let saludoEx3 = "Hola ".concat(nombre, ", ¿cómo estás?");
// "Hola Ana, ¿cómo estás?"


// peso / altura al cuadrado

// william. Peso: 60kg Talla: 170
// camila. Peso 55kg Talla: 172

let nombre = "William"
let peso = 60;
let talla = 1.70;

let imc = (peso / (talla ** 2 ));
console.log(nombre, imc);

mensaje = (`Hola, mi nombre es ${nombre + " Rodriguez"} y mi IMC es ${imc}`);
console.log(mensaje);


nombre = "Camila"
peso = 55;
talla = 1.72;

imc = (peso / (talla ** 2 ));
console.log(nombre + " " + imc);

let edad = 20;
console.log(edad);

edad++;
console.log(edad);

edad--;
console.log(edad);

edad += 'anos';
console.log(edad) 


let a = 'Hola';
let nombre = prompt("Como te llamas?");
let c = a.concat(" ", nombre, "!");
console.log(c);


// if / else if / else

const anoNacimiento = 2006;

let siglo;
if (anoNacimiento >= 2000) {
    siglo = 21;
} else {
    siglo = 20;
}

console.log("Siglo", siglo);


if (condición1) {
  // se ejecuta si condición1 es true
} else if (condición2) {
  // se ejecuta si condición1 es false y condición2 es true
} else {
  // se ejecuta si ninguna condición anterior fue true
}


let edadEx1 = 20;

if (edadEx1 < 13) {
  console.log("Eres un niño");
} else if (edadEx1 < 18) {
  console.log("Eres un adolescente");
} else {
  console.log("Eres un adulto");
}

let edadEx2 = 18;

if (edadEx2 >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

let edadEx3 = 18;
console.log(edadEx3 >= 18 ? "Mayor de edad" : "Menor de edad"); // Operador ternario

let edadEx4 = 20;

let categoria = edadEx4 < 13 ? "Niño"
             : edadEx4 < 18 ? "Adolescente"
             : "Adulto";

console.log(categoria); // "Adulto"
