let numeros = [3, 8, 12, -3];

// Con función anónima,,,

// OPCIÓN 1 - CON FUNCIÓN ANÓNIMA
numeros = numeros.map (function(numero){
    let doble = numero * 2;
    return doble;
}
);

console.log("con función anónima: "+numeros);  //con función anónima: 6,16,24,-6


// OPCIÓN 2 - CON FUNCIÓN "NORMAL"

function calcularDoble(numero){
    return numero*2; 
}

numeros = numeros.map(calcularDoble);

console.log("con función normal: "+numeros);  // con función normal: 12,32,48,-12  (OBSERVAR, YA HEMOS MULTIPLICADO DOS VECES AQUÍ)