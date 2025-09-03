"use strict";

let i = 0;

while (i < 10) {
  console.log(i);
  if (i === 5) {
    break; // Se detiene el bucle cuando i llega a 5
  }
  i++;
}

console.log("Bucle terminado");

i = 0;

while (i < 10) {
  i++;

  if (i % 2 === 0) {
    continue; // Salta los números pares
  }

  console.log(i);
}
