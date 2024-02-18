
/*
Ejercicio. 
Servicio Web que retorne carátulas de videojuetos (title, image). 

1-   https://www.mockable.io/   

Obtendremos nuestra URL de mock, ej.:
http://demo3010501.mockable.io/caratulas

* URL imágenes:   zzzzz https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/   zzzzzz
https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/gameboy_covers.json   <- No baneada

login con gmail. saldrá mi dominio ( ... mockable.io ). Crear mocks: manage. Rest Mock. Dar nombre al servicio web. EJ. ...... mockable.io/caratulas. Responderá 
pegamos cosa como: 

[
{
    {
        "title" : "The Addams Family"
    }
    ...
}
] 

- Crear carpeata ejercicio_dom
crear en index.html  
style.css 

ver ejemplos rest en sesión9, carpeta omdb. 
*/


//const URL="http://demo3010501.mockable.io/caratulas";  https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/

// No baneada: 
const URL="https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/gameboy_covers.json";   

var juegos;

function getJSONFronURL(url){
    var xmlHttp = new XMLHttpRequest;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4){
            if (xmlHttp.status = 200)  {
                juegos = JSON.parse(xmlHttp.responseText);  //zzzzz
                procesarRespuesta(juegos);
            } else {
                console.error("Ha ocurrido un error: " + xmlHttp.status);
                throw "Ha ocurrido un error: " + xmlHttp.status;
            }
        }
    }
    xmlHttp.open("GET", encodeURI(url),true);
    xmlHttp.send();
} 
function procesarRespuesta(juegos){  // Con el chorro de bytes devuelto por el servidor, hacer... (pintar datos de carátulas de juegos)
    console.log(juegos);
    
    //
    ////juegos= JSON.parse();

    // Recorrer cada carátula de juego, y se pinta su ficha:
    juegos.forEach(juego => {
        generarFicha((juego));        
    });



}
function generarFicha(juego){
    const URL_IMAGEN = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";
    
    let articulo = document.createElement("article");
    articulo.setAttribute('class', 'vj');  // Asignamos un atributo class con valor vj

    let titulo = document.createElement("h3");
    let textoTitulo = document.createTextNode(juego.title);

    let imagen = document.createElement("img");

    imagen.src = URL_IMAGEN+juego.image;
    articulo.appendChild(titulo);

    articulo.appendChild(textoTitulo);
    articulo.appendChild(imagen);

    document.querySelector("#main").appendChild(articulo);
}

document.querySelector("#iBuscador").addEventListener("keydown", ()=>{
    document.querySelector("#main").innerHTML="";
    let textoBuscado = document.querySelector("#iBuscador").value.trim().toUpperCase(); 
    let juegosFiltrados = juegos.filter ((juego)=> {
        return juego.title.toUpperCase().includes(textoBuscado);
    });
    procesarRespuesta(juegosFiltrados);
});


getJSONFronURL(URL);

