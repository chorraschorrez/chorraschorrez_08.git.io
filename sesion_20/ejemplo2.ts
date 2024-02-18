class Pelicula{
    titulo:string;
    numeroTemporadas:number;
    constructor(_titulo:string, _numeroTemporadas:number=0) {
        this.titulo = _titulo;
        this.numeroTemporadas = _numeroTemporadas;
    }
}

let pelicula:Pelicula = new Pelicula("Batman", 2);



// Serie es parecido pero el segundo argumento es opcional (_numeroTemporadas)
class Serie {
    titulo:string;
    numeroTemporadas:number;
    constructor(_titulo:string, _numeroTemporadas?:number) {
        this.titulo = _titulo;
        this.numeroTemporadas = _numeroTemporadas;
    }
}

let serie1:Serie = new Serie("Batman", 2);
let serie2:Serie = new Serie("Batman");
console.log(serie2.numeroTemporadas);  // undefined

//let serie3:Serie = new Serie();  // AVISA DEL ERROR EN LOS ARGUMENTOS
