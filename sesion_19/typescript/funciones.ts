function sumar(a:number, b:number):number {
    let resultado:number = a+b;
    return resultado;
}

//sumar(true, 8);    // EDITOR DA ERROR DE SINTÁXIS



// Aquí ponemos como tipos anónimos (en los argumentos de la función)
function calcularDistancia(punto1:{x:number, y:number}, punto2:{x:number, y:number}):void{

}
calcularDistancia({x:5, y:8}, {x:9, y:10});


// Funciones sin argumentos opcionales: 
function saludar(nombre:string){
    console.log("Hola " + nomnbre);
}

saludar("José Rafael");
//saludar();   // ERROR. Argumento NO opcional



// Funciones con argumentos opcionales (usar ?): 
function despedir(nombre?:string){
    console.log("Hola " + nombre);
}
despedir("José Rafael");
despedir();   // OK. Argumento opcional


