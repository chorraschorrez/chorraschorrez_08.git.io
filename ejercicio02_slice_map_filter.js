/*
Ejercicio, cambiar a mayúsculas, coger sólo los de extensión jpg, etc. 
*/
let mascotas = ["perrito.jpg","gatito.avi","loro.mp3","galápago.docx","gallo.jpg"];

mascotas = mascotas.map((mascota)=>mascota.toUpperCase());  // Transorm to uppercase
mascotas = mascotas.filter((mascota) => mascota.endsWith(".JPG"));  // array with only JPG files
mascotas = mascotas.map( (mascota)=>mascota.slice(0,mascota.lastIndexOf(".")));  // array with file base name, without extension 

console.log(mascotas); //  ['PERRITO', 'GALLO']

/* 
Reducir resultado 
*/ 
