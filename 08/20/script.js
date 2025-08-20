// setTimeout(funcionCallback, tiempoEnMilisegundos);

// setTimeout(function() {
//   console.log("Esto se ejecuta luego de 1s");
// }, 1000);

// setTimeout(() => {
//   console.log("Han pasado 2 segundos!");
// }, 2000);

// function mostrarMensaje() {
//   console.log("Han pasado 2 segundos!");
// }

// setTimeout(mostrarMensaje, 2000); 

// No se usa mostrarMensaje() porque eso la ejecutaria de inmediato



// function procesarRegistro(datosUsuario) {
//     const { email, password, edad, pais } = datosUsuario;
    
//     // Guard clause - salir temprano si hay error
//     if (!email || !email.includes('@')) {
//         return { success: false, message: "Email inválido" };
//     } else {
//         console.log("Email válido, continuando validaciones...");
        
//         if (!password || password.length < 8) {
//             return { success: false, message: "Contraseña debe tener al menos 8 caracteres" };
//         } else {
//             console.log("Contraseña válida, verificando edad...");
            
//             if (edad >= 18) {
//                 return { success: true, message: "Usuario registrado correctamente" };
//             } else {
//                 console.log("Usuario menor de edad, verificando país...");
                
//                 if (pais === "Mexico" || pais === "Colombia") {
//                     return { success: true, message: "Registro permitido para menores en este país" };
//                 } else {
//                     return { success: false, message: "Menores de edad no permitidos en este país" };
//                 }
//             }
//         }
//     }
// }

function saludar(nombre, edad) {
    console.log('asdasd')
    return `Hola ${nombre}, tu edad es ${edad}.`
}

const nombre = prompt('Como te llamas?');
const edadUsuario = prompt('Cuantos anos tienes?');

const resultado = saludar(nombre, edadUsuario) + 'asdasdasd';

console.log(resultado);
