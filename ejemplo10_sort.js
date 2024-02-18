let coches = [
    {marca:"VW", precio:7000, velocidad:240}, 
    {marca:"VW", precio:800, velocidad:120}, 
    {marca:"VW", precio:20000, velocidad:170},
    {marca:"Seat", precio:800, velocidad:130}
]; 

function compararCochesPorPrecio(coche1, coche2){        // Decide qué coche cuesta menos. Result = 0 -> "Tienen igual valor"; NEGATIVO->"El primer coche es peor";
    return (coche1.precio - coche2.precio);
}

function compararCochesPorVelocidad(coche1, coche2){        // Decide qué coche corre más. Result = 0 -> "Tienen igual valor"; NEGATIVO->"El primer coche es peor";
    return (coche2.velocidad - coche1.velocidad);
}



function compararCochesPorPrecioAsYVelocidad(coche1, coche2){        // Decide qué coche es mejor. Result = 0 -> "Tienen igual valor"; NEGATIVO->"El primer coche es peor";
////Ordenar por precio ascendente y velocidad descendente
    valorGlobal = 0;
    if (coche1.precio != coche2.precio){  // Si tienen igual precio...
        return coche2.precio - coche2.precio;
    } else {
        erturn coche2.velocidad - coche1.velocidad;    
    }

    return valorGlobal;
}


// Ojo, sort sí modifica el array (no hace falta asignar a un array nuevo): 
coches.sort((c1, c2) => c1.precio - c2.precio)
console.log("Con operador arrow");
coches.forEach(element => {
    console.log(element);
}
);  

                


