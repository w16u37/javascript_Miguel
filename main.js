let nombre = prompt("Ingresa tus nombres:");
let apellido = prompt("Ingresa tus apellidos:");
let correo = prompt("Hola " + nombre + " Ingresa tu correo:");
const codi1 = 1234;
let codi2 = prompt("Ingresa aquí el código enviado a tu correo " + correo + ":");

switch (codi2) {
    case 1:
        if (codi2 === codi1) {
            alert("El código ingresado es correcto, Bienvenido");
        }        
        break;

    default:
        while (codi2 != codi1) {
        alert("El código ingresado es incorrecto");
        codi2 = prompt("Intente nuevamente");   
        }
}

// while (codi2 != codi1) {
//     alert("El código ingresado es incorrecto");
//         codi2 = prompt("Intente nuevamente");
    
//     } if (codi2 === codi1) {
//         alert("El código es correcto, Bienvenido");
//     }