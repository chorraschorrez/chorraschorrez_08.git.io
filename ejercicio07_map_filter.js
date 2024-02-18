/*
Crear un array con objetos Serie que tienen los atributos: 
- Titulo
- Número de temporadas
- Plataforma (Netflix, Prime, HBO, etc.)
Con Map, vamos a construir un nuevo array con los mismos objetos pero añadiendo el atributo "en-emision" que tendrá valor true y convirtiendo el títuloa a mayúsculas. 
Con Filter, obtener la lista de series que se proyectan en Netflix y que tiene más de una temporada. 
*/

/*
let numerosArr = [1,2,3];
numerosArr.length;
*/

let series = [
    {titulo:"Serie 1", numero_temporadas:1, plataforma:"netflix"},
    {titulo:"Serie 2", numero_temporadas:2, plataforma:"hbo"}, 
    {titulo:"Serie 3", numero_emporadas:4, plataforma:"netflix"},
    {titulo:"Serie 3", numero_emporadas:1, plataforma:"netflix"},
    {titulo:"Serie 4", numero_temporadas:3, plataforma:"prime"}
]; 

let series_modificadas = series.map(serie => {
    serie.en_emision=true;
    serie.titulo= serie.titulo.toUpperCase();
    return serie;
}
);

let series_netflix_mas_de_una_temporada = series_modificadas.filter(serie => {
    return (serie.plataforma.toUpperCase()== "NETFLIX" && serie.numero_temporadas > 1);
}
);

function mostrarLista (lista){
    if (lista instanceof Array) {
        lista.forEach(serie => console.log(serie));
    } else {
        console.log("No se puede mostrar, no es una lista");
    }
    lista.forEach(serie => console.log(serie));
}

mostrarLista(series_netflix_mas_de_una_temporada);

// USAR EN VEZ DE FILTER, FIND para serie buscada, la primera que cumpla la condición. 