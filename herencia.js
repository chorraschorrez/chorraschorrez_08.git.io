/*
class Enemigo {
    constructor (nombre, salud, fortaleza, x, y){
        this.nombre = nombre;
        this.salud = salud;
        this.fortaleza= fortaleza;
        this.x = x;
        this.y = y;
    }
    atacar(){
        console.log(`Soy ${this.nombre} y acabo de morir`);
    }  
    recibirDanyo(cantidad){
        console.log(`Soy ${this.nombre} y estoy recibiendo daño`);
        this.salud = this.salud - cantidad;
        if (this.salud <= 0){
            this.morir();
        }
    }
    morir() {
        console.log(`Soy ${this.nombre} y acabo de morir`);
        console.log(`Soy ${this.nombre}: desaparezco y suena una explosión`);
        this.vivo = false;
    }
}

class EnemigoMovil extends Enemigo {
    constructor ()
    {
        this.x += deltaX;
        this.y += deltaY;
    }
    
    // Sobreescribir método
    morir(){
        console.log(`Soy ${this.nombre}: desaparezco y sufro gan dolor y aparece humo`);
        super.morir();
        this.vivo = false;
    }
}


let pinguino = new Enemigo("Pinguino", 50, 10, 10);
let joker = new EnemigoMovil("Joker", 100, 10, 10);

joker.atacar();
pinguino.atacar();
joker.desplazar(1, -1);  
//  pinguino.desplazar(1,1);  //error


pinguino.recibirDanyo(150);
*/







/* 
Ejercicio: 
Crear una clase FiguraGeometrica. Con atributo: nombre. 
- Las clases hijas (o: derivadas):
    - Cuadrado (dlongitud lado)
    - Triangulo
    - Rectangulo
    - Círculo (radio)
- Métodos: 
    - CalcularArea
*/

/*
class Figura  {
    constructor(numeroLados, longitudLado){
        this.numeroLados = numeroLados;
        this.longitudLado = longitudLado;
    }
    calcularArea(){
        resultado = this.numeroLados * this.longitudLado;
        console.log ("numeroLados="+numeroLados);
        return resultado;
    }
}


let cuadrado = new Figura(2, 3);

let resul = cuadrado.calcularArea();
console.log("resul="+resul);

 */

class FiguraGeometrica {
    constructor(nombre){
        this.nombre = nombre;
    }
    calcularArea(){
        throw new Serror ("El cálculo del área de la clase FiguraGeometrica no está implementado");
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(nombre, base, altura){
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        let area = (this.base * this.altura) / 2;
        return area;
    }
}


class Rectangulo extends FiguraGeometrica {
    constructor(nombre, alto, ancho){
        super(nombre);
        this.alto = alto;
        this.ancho = ancho;
    }
    calcularArea(){
        let area = (this.alto * this.ancho) ;
        return area;
    }
}



//OJO!! Cuadrado puede extender de rectángulo (sólo que tiene todos los lados iguales)
// (...)


//(...)


let t1 = new Triangulo("Triángulo", 3, 2);
console.log ("resTri="+t1.calcularArea());

