abstract class Calculadora {
    abstract sumar (s1:any, s2:any):void;  // Ojo argumentos deben ser any, para poder usar en implementaciones otros args como number o string
}

class CalculadoraDecimal extends Calculadora {
    sumar(s1: number, s2: number) {
        console.log("Suma decimal");
    }
}


class CalculadoraHexadecimal extends Calculadora {
    sumar(s1: number, s2: number) {
        console.log("Suma hexadecimal");
    }
}

function calcular(c:Calculadora){
    c.sumar(3,5);
}

let miCalculadora = new CalculadoraHexadecimal();
calcular(miCalculadora);


