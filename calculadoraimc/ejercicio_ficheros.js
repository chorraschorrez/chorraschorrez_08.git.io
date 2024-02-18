
//import {writeFile} from 'node:fs';   
// ó la siguiente notación: 
const fs = require ('node:fs');

const contenido = 'Soy un texto';

fs.writeFile("./salida.txt", contenido, err=> {
    if (err){
        console.error(err);
    }else {
        console.log ("OK"); 
    }
})


/* Ejercicio: función 
* Recibe como argumento un objeto Pelicula, título, genero, año.como
* Recibe como argumento nombre de fichero (por defecto es película.txt). 
* Escribir en el fichero los datos de la Pelicula. 
*/ 


let pelicula = {
    "titulo" : "Titanic", 
    "genero" : "James Cameron", 
    "sinopsis" : "Un barco que se hunde. "
};



guardaPelicula(pelicula);

/*
function dameTextoPelicula(pelicula) {
    let textoPelicula = "";
    //textoPelicula =+ "titulo="+pelicula.titulo;
    

    return textoPelicula;
}
*/

function guardaPelicula (peliculaObjeto, fichero = "pelicula.txt"){
    console.log(peliculaObjeto); 
    let contenido = `Título:${pelicula.titulo}. Director:${pelicula.director}. Sinopsis:${pelicula.sinopsis}}` ;// dameTextoPelicula(peliculaObjeto);
    //contenido = JSON.stringify();  // Serialización o Stringificación (chorro de bytes)

    fs.writeFile(`/${fichero}`, contenido, err=> {
        if (err){
            console.error(err);
        }else {
            console.log ("OK"); 
        }
    })
    
    /*
    */

}




