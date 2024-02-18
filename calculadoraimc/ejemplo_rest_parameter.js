function sumar(s1, s2, s3=0){   // Sobrecarga del tercer argumento (si no llega nada, es sumar un cero-> no afecta)
    const resultado = s1 + s2 + s3;
    return resultado
}

const resultado = sumar([3,8,1,2]);

console.log("resultado="+resultado);


function sumarGuay(...numeros){
    const resultado = numeros.reduce( (a, b)=> a+b );
    return resultado;
}

const resultadoGuay = sumarGuay([3,8,1,2]);
console.log("resultadoGuay="+resultadoGuay);
