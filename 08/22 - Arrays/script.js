
// setTimeout(() => {
//   console.log("Esto se ejecuta luego de 6s");
// }, 6000)

// setTimeout(() => {
//   console.log("Han pasado 4 segundos!");
// }, 4000);

// function mostrarMensaje() {
//   console.log("Han pasado 2 segundos!");
// }

// setTimeout(mostrarMensaje, 2000); 

// const amigo1 = 'Sara';
// const amigo2 = 'Andres';
// const amigo3 = 'Ivan';

// console.log(amigo1);
// console.log(amigo2);
// console.log(amigo3);

// const amigos = ['Sara', 'Andres', 'Ivan'];
// console.log(amigos);

// console.log(amigos[0]);
// console.log(amigos[3]);

// const conocidos = new Array('Sofia', 'Camilo', 'Pedro');
// console.log(conocidos);

// // Poner un elemento al final
// const nuevoLength = amigos.push("Javier");
// console.log(amigos);
// console.log(nuevoLength);
// // Poner un elemento al principio
// const nuevoLenght2 = amigos.unshift("Franco");
// console.log(amigos);
// console.log(nuevoLenght2);
// // Eliminar un elemento del final
// const amigoEliminado = amigos.pop();
// console.log(amigos);
// console.log(amigoEliminado);
// // Eliminar un elemento del principio
// const amigoEliminado2 = amigos.shift();
// console.log(amigos);
// console.log(amigoEliminado2);
// // Conocer la posicion de un elemento
// const posicionIvan = amigos.indexOf('Ivan');
// console.log(posicionIvan);

// const posicionTiberio = amigos.indexOf(234234);
// console.log(posicionTiberio);
// // Conocer si un elemento esta en el array
// const existe = amigos.includes('Sara');
// console.log(existe);

// // Conocer la longitud (cantidad de objetos) de un array
// const cantidadAmigos = amigos.length;
// console.log(cantidadAmigos);

// const ultimoAmigo = amigos[2];
// console.log(ultimoAmigo)





// function primerElemento(lista) {
//   const primero = lista[0];
//   return primero;
// }


// const enemigos = ['Sofia', 'Camilo', 'Pedro'];
// // console.log(enemigos);
// enemigos[1] = 'Jose';
// // console.log(enemigos);

// const javier = ['Javier', 'Gomez', 20, enemigos, ['Maria', 'Juan']];
// // console.log(javier);

// console.log(primerElemento(['SOFIA', 'Camilo', 'Pedro']));



const listaDeListas = [[2, 4, 5], [2, 4, 6], [2, 6, 8]];

function cudradoDePromedios(numeros) {
  const promedio1 = (numeros[0][0] + numeros[0][1] + numeros[0][2]) / numeros[0].length;
  const promedio2 = (numeros[1][0] + numeros[1][1] + numeros[1][2]) / numeros[0].length;
  const promedio3 = (numeros[2][0] + numeros[2][1] + numeros[2][2]) / numeros[0].length;

  const sumaDeCuadrados = promedio1 ** 2 + promedio2 ** 2 + promedio3 ** 2;
  return sumaDeCuadrados;
}

console.log(cudradoDePromedios(listaDeListas));