/* 
##### @CACHE. @MANUAL CACHE.

===========================

@libro online (y pdf)
https://www.eni-training.com/cs/ediciones/olr
-Activacion: 
P9XR67TDC6KW

Cuenta: 19-01-2024 aprox. 17:39
fran300@hotmail.com
Mycursojs01.

- Libro en web: 
https://www.eni-training.com/portal/client/mediabook/home



@omdbapi.com
--
chorraschorrez@gmail.com

omdbapi.com/apikey=cc1e061a&t=Batman&r=json


function findMovie(title){
    const API_KEY = 'cc1e061a';
}


*/


/* 
map @Modo Map
*/
let Lista = new Array ("palabra1", "palabra2", "palabra3");

// Modo tradicional
for (let i=0;i<lista.length;i++){
    lista[i] = convertirAMayusculas(lista[i]);
};
console.log(Lista);
 
// Modo Map
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(function (){
    elemento = elemento.toUpperCase();
    return elemento;
);


/* 
Reducir resultado 
*/ 



/* 
##### @FILTER

let dias = ['Lunes','Martes','Miércoles','Jueves','Viernes'];

//Opción 1 - Función anónima
let diasM = dias.filter(function(dia){
    return dia.toUpperCase().startsWith('M');
});
console.log(diasM);

//Opción 2 - Función arrow
let diasR = dias.filter(dia => {
    return dia.toUpperCase().includes('R');
});
console.log(diasR);

*/

/*
Ejercicio, cambiar a mayúsculas, coger sólo los de extensión jpg, etc. 
*/
let mascotas = ["perrito.jpg","gatito.avi","loro.mp3","galápago.docx","gallo.jpg"];

mascotas = mascotas.map((mascota)=>mascota.toUpperCase());  // Transorm to uppercase
mascotas = mascotas.filter((mascota) => mascota.endsWith(".JPG"));  // array with only JPG files
mascotas = mascotas.map( (mascota)=>mascota.slice(0,mascota.lastIndexOf(".")));  // array with file base name, without extension 

console.log(mascotas); //  ['PERRITO', 'GALLO']


/*
Simular, fake web service server (rest, responds json)
https://app.beeceptor.com/
Use account from: google gmail
    chorraschorrez@gmail.com
    (My,,,01.)Mychorraschorrez01.

- End point: chorras (e.g. chorras.free.app.beeceptor.com   )

Poner en chrome, devuelve un json (respuesta de servidor con json): 
https://dummyjson.com/products/1
*/ 









// @http a mano, @manualmente:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="Ficha">
        <h1 id="title"></h1>
    </div>
    <div>
        <img id="imagen" width="100px">
    </div>    
    <div>
        <h1 id="description"></h1>
    </div>   

    
</body>
</html>
/*</head>
<script>
    const URL = "https://dummyjson.com/products/1";
    var xmlHttp = new XMLHttpRequest     // Funciones callback, son las hechas por parte de alguien (hay un cambio en la petición, por tanto esa función se ejecuta).
    xmlHttp.onreadystatechange = function () {  // Ojo ésta función no se ejecuta aún, sólo está escrita
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){ // Si ya ha respondido y es OK...
            console.log(xmlHttp.responseText);
            mostrar(JSON.parse(xmlHttp.responseText));  // Metodo de clase (ESTÁTICO)
        }
    }
    xmlHttp.open("GET", URL, false); // Abrir petición de tipo GET (false es que es asíncrona, espero le respuesta)
    xmlHttp.send(null); // 

    function mostrar(producto){
        document.querySelector("#title").innerHTML=producto.title;
        //console.debug("producto.title:"+producto.title);  // iPhone 9
        document.querySelector("#imagen").setAttribute("src",producto.thumbnail);         //console.debug("producto.title:"+producto.title);
        
        document.querySelector("#description").innerHTML=producto.description;
        document.querySelector("#description").setAttribute("src",producto.description);
    }

</script>

</html>

*/
