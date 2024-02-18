var Movie = /** @class */ (function () {
    function Movie(_titulo, _director, _presupuesto) {
        this.titulo = _titulo;
        this.director = _director;
        this.presupuesto = _presupuesto;
    }
    return Movie;
}());
var movie1 = new Movie("Titulo", "Director", 10000000);
console.log(movie1.titulo); // Es variable pública
// Uso de variable private. OBSERVAR QUE EN ESTE CASO CONVIENE QUE LA VARIABLE PRIVATE SE LLAME CON UN _ AL COMIENZO!!!
var Movie_encapsulada = /** @class */ (function () {
    function Movie_encapsulada(_titulo, _director, _presupuesto) {
        this.titulo = _titulo;
        this.director = _director;
        //this.presupuesto = _presupuesto;
    }
    Object.defineProperty(Movie_encapsulada.prototype, "presupuesto", {
        get: function () {
            return this.presupuesto;
        },
        set: function (nuevoPresupuesto) {
            this._presupuesto = nuevoPresupuesto;
        },
        enumerable: false,
        configurable: true
    });
    return Movie_encapsulada;
}());
