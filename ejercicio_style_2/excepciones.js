
"use strict" 
 

// let resultado=null;

function sumar(...sumandos) {
    resultado = sumandos.reduce( (a,b) => a+b );
    return resultado;
}


let resultado=null;

try {
    resultado = sumar(1,3);
    console.log(resultado);
} catch (elError){
    console.error(elError.message);
}


try {
    let resultado = sumar();
    console.log(resultado);
} catch (elError){
    console.error(elError.message);
}


resultado = sumar(1,3);
console.log(resultado);

resultado = sumar(-1,3);
console.log(resultado);