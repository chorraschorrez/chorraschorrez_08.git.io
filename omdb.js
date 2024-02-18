


document.querySelector("#bBuscar").addEventListener("click", function(event) {  // Ojo la llamada agregarProductoGuay no lleva el: ()
    //console.log("Por aquí"); 
    let cadenaBusqueda = document.querySelector("#titulo").value;
    //console.log(cadenaBusqueda);
    findMovie(cadenaBusqueda);
});

function findMovie(title){
    console.log("Entrando en findMovie...");
    const API_KEY = 'cc1e061a';
    const URL = `http://www.omdbapi.com&apikey=${API_KEY}&t=${title}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status = 200) {
                generarFichaProcess(JSON.parse(xmlHttp.responseText))
            } else {
                console.error("Ha ocurrido un error" + xmlHttp.status);
                throw "Ha ocurrido un error " + xmlHttp.status;
            }
        } 
    }    
    console.debug(encodeURI(URL));
    xmlHttp.open("GET", encodeURI(URL), true); // encodeURI adapta la cadena URL al formato de la web
    xmlHttp.send();
}

function generarFichaProcess () {
    console.log("El servidor ha respondido con el JSON de la película: ");
    console.log(movie);
}

function generarFicha(movie){
/**/ 

let divFicha = document.createElement("div");
divFicha.id="ficha";
document.querySelector("#contenedor-fichas").appendChild(divFicha);

divFicha.appendChild(document.createElement("h1").appendChild(document.createTextNode(movie.title));
divFicha.appendChild(document.createElement("div").appendChild(document.createTextNode(movie.Released));
divFicha.appendChild(document.createElement("div").appendChild(document.createTextNode(movie.Runtime));

let divImagen = document.createElement("div");
let divImagen = document.createElement("img");

imgPoster.width=80;
imgPoster.id="div-imagen";



