/*defino la función suma*/
function suma(operando1, operando2) {
    return operando1 + operando2;
}

/*defino la función resta*/
function resta(operando1, operando2) {
    return operando1 - operando2;
}

/*defino la función multiplicacion*/
function multiplicacion(operando1, operando2) {
    return operando1 * operando2;
}

/*defino la función division; retorno error en el caso de la división con segundo operando 0*/
function division(operando1, operando2) {
    if (operando2 === 0) {
        return "error";
    } else {
        return operando1 / operando2;
    }
}

/*defino la función functionResultado que se ejecutará al presionar el botón Calcular*/
function functionResultado() {
    /*traigo desde el html operando1, operando2 y operador; a los dos primeros los vuelvo number, al hacerlo con la función Number
    todo el código funcionaba mal, así que lo hago con parseFloat*/
    let operando1 = parseFloat(document.getElementById("operando1").value);
    let operando2 = parseFloat(document.getElementById("operando2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    /*si los operandos no son números se muestra mensaje de error en donde iría el resultado*/
    if (isNaN(operando1) || isNaN(operando2)) {
        document.getElementById("resultado").style.color ="red";
        document.getElementById("resultado").innerHTML="ERROR: ingrese operandos válidos.";
        return;
    } 
    
    /*según el operador se ejecuta alguna de las funciones ya definidas*/
    switch(operador) {
        case "suma":
            resultado = suma(operando1, operando2);
            break;
        case "resta":
            resultado = resta(operando1, operando2);
            break;
        case "multiplicación":
            resultado = multiplicacion(operando1, operando2);
            break;
        case "división":
            resultado = division(operando1, operando2);
            break;
        default:
            /*en el caso de que no se ingrese ninguno de los operandos mencionados, muestra mensaje de error*/
            document.getElementById("resultado").style.color ="red";
            document.getElementById("resultado").innerHTML="ERROR: ingrese un operador válido.";
            return;
    }
    
    /*si el número absoluto de resultado es mayor o menor que el indicado, muestra mensaje de error*/
    if (Math.abs(resultado) > 9999999999 || Math.abs(resultado) < 0.000000001 && resultado !== 0) {
        document.getElementById("resultado").style.color ="red";
        document.getElementById("resultado").innerHTML="ERROR: el resultado es demasiado grande o demasiado pequeño para ser mostrado en pantalla.";
        return;
    }

    /*en el caso de que se haya ejecutado la función división y esta haya retornado error, se muestra mensaje de error*/
    if (resultado === "error") {
        document.getElementById("resultado").style.color ="red";
        document.getElementById("resultado").innerHTML="ERROR: la operación no es válida, no se puede dividir por cero.";
        return;
    }

    /*se muestra el resultado en el caso de que no hayan saltado mensajes de error*/
    document.getElementById("resultado").innerHTML=resultado;
}

/*función que se ejecutará al presionar el botón Limpiar, para limpiar los campos de operandos, operador y resultado*/
function borrarCampos() {
    document.getElementById("operando1").value="";
    document.getElementById("operador").selectedIndex = 0;
    document.getElementById("operando2").value="";
    document.getElementById("resultado").innerHTML="";
}