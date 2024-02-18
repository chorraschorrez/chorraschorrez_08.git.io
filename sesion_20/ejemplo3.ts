class Movie{
    titulo:string;
    director:string;
    presupuesto:number;
    constructor(_titulo:string, _director:string, _presupuesto:number) {
        this.titulo = _titulo;
        this.director = _director;
        this.presupuesto = _presupuesto;
    }
}

let movie1:Movie = new Movie("Titulo", "Director", 10_000_000);
console.log(movie1.titulo);   // Es variable pública


// Uso de variable private. OBSERVAR QUE EN ESTE CASO CONVIENE QUE LA VARIABLE PRIVATE SE LLAME CON UN _ AL COMIENZO!!!
class Movie_encapsulada{
    titulo:string;
    director:string;
    private _presupuesto:number;
    constructor(_titulo:string, _director:string, _presupuesto:number) {
        this.titulo = _titulo;
        this.director = _director;
        //this.presupuesto = _presupuesto;
    }
    get presupuesto():number{
        return this.presupuesto;
    }
    set presupuesto(nuevoPresupuesto:number){
        this._presupuesto =nuevoPresupuesto;
    }
}


