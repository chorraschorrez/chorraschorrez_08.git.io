"use strict"

var cesta = [];
//∫var cesta = Array();


function mostrarCesta(item){
    console.log(cesta);
}

function agregarProducto(item){
    cesta.push(item);
}

agregarProducto("Queso");
mostrarCesta();


/*
HTML botón añadir a la cesta, campo con contenido cesta. 
*/

