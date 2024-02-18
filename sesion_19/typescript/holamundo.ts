let nombre:string;
let edad:number;
let contento:boolean; 
let estado:any;  
nombre = "Fernando";
//nombre = 8;

let edades:number[] = new Array(); // number[];
//edades = 8 // ERROR
edades.push(1);

let nombres = new Array<string>();
nombres.push("Jose");
//nombres.push(8); // Error

let altura;  // ¿Tipo? any 
altura = 175; // OK
altura = "Un metro"; // OK



// Tipo combinado (vale un tipo o el otro)
let argumento:string|boolean;
argumento = "Un texto";
argumento = true;
//  argumento = 3;   // ERROR


// Type aliases
type direccion = string;   // El tipo 'direccion', es lo mismo que string
let midireccion:direccion = "Alcorcón";
if (midireccion==="Alcorcón"{
    console.log("Son lo mismo");
}

// Type aliases aplicado a objetos
type punto = {x:number, y:number};
let origen:punto = {x:10, y:8};
let destino:punto = {x:15, y:8};




