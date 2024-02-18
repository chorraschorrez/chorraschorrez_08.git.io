let alumno1 = {
    nombre : "Mercedes",
    edad : 25
}


let mascota1 = {
    nombre : "Naranjito",
    forma : "Esférica",
    especie : "Naranja",
}

console.log(mascota1);
mascota1.peso=15; 

console.log(mascota1);  // Muestra la nueva propiedad peso

delete mascota1.peso;

console.log(mascota1);  // Ya se eliminó la propiedad peso

if ("peso" in mascota1){
    console.log(mascota1.peso); // undefined
}else {
    console.log ("No tiene peso");
}
