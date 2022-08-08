const codi1 = 1234;
let nombre = prompt("Ingresa tus nombres:");
let apellido = prompt("Ingresa tus apellidos:");

// función para el registro del usuario
function registoUsuario() {
    let correo = prompt("Hola " + nombre + " Ingresa tu correo:");
    let codi2 = prompt("Ingresa aquí el código enviado a tu correo " + correo + ":");
    switch (codi2) {
        case "!= codi1":
            while (codi2 != codi1) {
                alert("El código ingresado es incorrecto");
                codi2 = prompt("Intente nuevamente");   
                }
                break;   
        case "codi1":
                if (codi2 = codi1) {
                    alert("El código ingresado es correcto, Bienvenido");
                }
                break;
        default:
                while (codi2 == "") {
                alert("Debe ingresar el código para continuar:");
                codi2 = prompt("Intente nuevamente");   
                }
                break;
    }
}

// Validamos si la clave es correcta
function validaUsuario() {
    let dni = prompt("Para validar sus datos, ingrese su número de DNI:");
    do {
        dni = prompt("Vuelva a ingresar su DNI:");
    } while (dni != "12345678");
}

// Saludamos al usuario ya validado
function saludarUsuario() {
    if (codi1 === 1234) {
        alert("El código ingresado es correcto, Bienvenido");
    }   
}

// Corriendo el programa
registoUsuario();
validaUsuario();
saludarUsuario();

let actividad = prompt("Seleccione un tipo de actividad: \n1.Préstamo \n2.Inversión \n3.Depósito");
switch (actividad) {
    case "1":
        let presta = parseInt(prompt("Ingrese el monto del prestamo"));
        if (presta > "1000") {
            alert("Excelente usted tiene una tasa preferente del 10%");
            let inter = presta * 0.10;
            let prestaTotal = inter + presta;
            let cuota = prestaTotal / 12;
            alert("Usted estaría pagando una cuota mensual de:" + " " + cuota + " soles. Durante un año");            
        }
            else {
                alert("Su tasa de préstamo es del 20%");
                let inter2 = presta * 0.20;
                let prestaTotal2 = inter2 + presta;
                let cuota2 = prestaTotal2 / 12;
                alert("Usted estaría pagando una cuota mensual de:" + " " + cuota2 + " soles. Durante un año");
            } 
    break;

    case "2":
    
    break;

    case "3":
    
    break;

    default:
        break;
}


