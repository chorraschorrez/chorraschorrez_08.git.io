"use strict"

/*
class Pelicula {
    constructor (titulo, director, año){
        this.titulo = titulo;
        this.director = director;
        this.director = director;
        this.año = año;
    }
    saludar(){
        console.log (`Hola, soy ${this.titulo}}`);
    }
}

let elResplandor = new Pelicula("El Resplandor", "Kubrick", 1975);
console.log("elResplandor="+elResplandor);

elresplandor.saludar();
*/



 
/* Ejercicio. Modelar una hoja
*/
class Hoja {
    constructor (imagen, velocidad, tiempo_refresco, posicion_x, posicion_y, mover, parar){
            this.imagen= imagen;
            this.velocidad=velocidad; 
            this.tiempo_refresco = tiempo_refresco; 
            this.posicion_x = posicion_x;
            this.posicion_y = posicion_y;
            this.estado = "parado";
    }
    mover(){
            this.estado ="moviendose";
    }
    parar(){
        this.estado ="parado";
    }
}

//let hoja1 = new Hoja("....jpg", 100, 0, 1);  //////



let hoja1 = new Hoja();  //////

console.log("hoja1="+hoja1);



