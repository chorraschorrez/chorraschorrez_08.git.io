"strict use"

/* 
Ejercicio. Función que: 
==
cuadrado de un número
Si el número es negativo lanza excepción
Si es par lanza excepcion

Programar la llamada a la función gesstionand los errores
Crear un bloque finally que muestre el texto: FIN. 

*/

function calcularCuadrado(numero){
    // Validar argumento. OJO, el orden importa, pues es más importante mirar primero si es negativo. 
    if(numero%2==0){
        throw new Exception ("Error, el numero es par");
    }
    if(numero <0){
        throw new Exception ("Error, el numero es negativo");
    }


    let resultado = numero **2;
    return resultado;
}

var resulCuadrado= 0;

try {
    resulCuadrado = calcularCuadrado(2);
    
    console.log ("resulCuadrado="+resulCuadrado);
} catch (err) {
    console.error(err.message);
    console.log("KO");
} finally{
    //console.log("DESPUES DEL TRY-CATCH. El programa ha finalizado inesperadamente por un error. ");
}




try {
    resulCuadrado = calcularCuadrado(-2);
    
    console.log ("resulCuadrado="+resulCuadrado);
} catch (err) {
    console.error(err.message);
    console.log("KO por numero negativo");
} finally{
    //console.log("DESPUES DEL TRY-CATCH. El programa ha finalizado inesperadamente por un error. ");
}


try {
    resulCuadrado = calcularCuadrado(2);
    
    console.log ("resulCuadrado="+resulCuadrado);
} catch (err) {
    console.error(err.message);
    console.log("KO por numero par");
} finally{
    //console.log("DESPUES DEL TRY-CATCH. El programa ha finalizado inesperadamente por un error. ");
}


try(){
    let resultado;
    resultado =calcularCuadrado();
}