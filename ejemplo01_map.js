function convertirAMayusculas (palabra){
    palabraMayusculas = palabra.toUpperCase();
    return palabraMayusculas;
}

let Lista = new Array ("palabra1", "palabra2", "palabra3");

// Modo tradicional
for (let i=0;i<lista.length;i++){
    lista[i] = convertirAMayusculas(lista[i]);
}
);
console.log(Lista);
 
// Modo Map
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(function (){
    elemento = elemento.toUpperCase();
    return elemento;
);
/*
Lista.forEach(palabra => {
    convertirAMayusculas(palabra);
});
console.log(Lista);
*/


function escribirEmail (alumno) {
    console.log (`confirmamos que su dirección de correo es $alumno`)
}

let alumnos = [
    {nombre: "Fernando", email : "fernando@gmail.com"},
    {nombre: "Jesús", email : "jesus@gmail.com"}
];

alumnos.map(escribirEmail);

/* Crear array con tres Productos (nombre, precio unitario y número de unidades). 
Usando map del array, mostrar la siguiente información por consola: 
Fabada Litoral: 3 unidades, 1.5 eur /unidad. Total 4.5 eur. 
Usar interpolación con el $. 
*/

let productos = [
    {nombre: "Fabada Litoral", unidades : 3, totalPrecio : 4.5},
    {nombre: "Jesús", email : "jesus@gmail.com"}
];