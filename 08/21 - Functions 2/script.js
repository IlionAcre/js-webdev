
// function sumaDeCuadrados(num1, num2)  {
//   const cuadrado1 = num1 ** 2;
//   const cuadrado2 = num2 ** 2;
//   console.log(cuadrado1 + cuadrado2);
// }

// let resultado = sumaDeCuadrados(2, 3);
// console.log(resultado);




// function resultadoPrestamo(morosidades, ingreso, score, codeudor) {
//   let resultado;
//   if (morosidades > 1 || score < 550) {
//     resultado = 'Rechazado por riesgo';
//   } else if ((ingreso >= 3000 || score >= 700) && !morosidades) {
//     resultado = 'Aprobado preferencial';
//   } else if ((ingreso >= 2000 || score >= 650) && !morosidades) {
//     resultado = 'Aprobado estandar';
//   } else if ((ingreso >= 1500 || score >= 600) && codeudor) {
//     resultado = 'Aprobado con codeudor';
//   } else {
//     resultado = 'Rechazado';
//   }
//   return resultado;
// }

// let morosidades = Number(prompt('Morosidades'));
// let ingreso = Number(prompt('ingreso'));
// let score = Number(prompt('score'));
// let codeudor = prompt('codeudor');
// codeudor = codeudor === 'si' ? true : false;

// let resultadoCredito = resultadoPrestamo(morosidades, ingreso, score, codeudor);

// console.log(resultadoCredito);





// let resultado = ecuacion(135, 2, 3);

// function ecuacion(num1, num2, num3) {
//   const denominador = sumaDeCuadrados(num2, num3);
//   return num1 / denominador;
// }

// function sumaDeCuadrados(num1, num2)  {
//   const cuadrado1 = num1 ** 2;
//   const cuadrado2 = num2 ** 2;
//   return cuadrado1 + cuadrado2;
// }


// num1, num2, num3 = num1 / (num2**2 + num3**2)

// console.log(resultado);

function calcEdad1(anoNacimiento) { // DECLARACION
  return 2025 - anoNacimiento;
}
console.log(calcEdad1(1996)); // 29


const calcEdad2 = function(anoNacimiento) { // EXPRESION O VALOR
  return 2025 - anoNacimiento;
}
console.log(calcEdad2(2001)); // 24


const calcEdad3 = anoNacimiento => 2025 - anoNacimiento;
console.log(calcEdad3(2024)); // 1


const anosHastaPensionarse = (anoNacimiento, nombre) => {
  const edad = calcEdad3(anoNacimiento); // 2025 - anoNacimiento
  const edadParaPension = 65 - edad;
  return `Te faltan ${edadParaPension} anos, ${nombre}`;
}
const edadParaPension = anosHastaPensionarse(1996, 'Fabian');
console.log(edadParaPension);




// setTimeout(funcionCallback, tiempoEnMilisegundos);

setTimeout(function() {
  console.log("Esto se ejecuta luego de 1s");
}, 1000);

setTimeout(() => {
  console.log("Esto se ejecuta luego de 6s");
}, 6000)

setTimeout(() => {
  console.log("Han pasado 4 segundos!");
}, 4000);

function mostrarMensaje() {
  console.log("Han pasado 2 segundos!");
}

setTimeout(mostrarMensaje, 2000); 

// No se usa mostrarMensaje() porque eso la ejecutaria de inmediato




// Función para validar que un número sea positivo
// Función que calcula el área de un rectángulo
// Función que genera un mensaje con el área


// Ejemplos de uso
console.log(generarMensaje(5, 10));  // El área del rectángulo es: 50
console.log(generarMensaje(-3, 7));  // Los valores ingresados no son válidos.
console.log(generarMensaje(4, "a")); // Los valores ingresados no son válidos.
