/*
Ejercicio.

Crear en TS una clase:
Alumno,
con constructor:
- Nombre
- Email
- telf., opcional
- Direccion Postal (interface con calle, número y localidad)
- Fecha de nacimiento (privado), con su get y set. Que provoque exception si es menor de  edad.

Métodos:
- CalcularCoeficiente, recibe un número y devuelve un número (simular, no hace nada).
- ObtenerEficiencia. Igual que el anterior. Privado!

*/
var Alumno = /** @class */ (function () {
    // Ojo el argumento _telefono debe ser el último por ser opcional:
    function Alumno(_nombre, _email, _direccionPostal, _fechaNacimiento, _telefono) {
        this.nombre = _nombre;
        this.email = _email;
        this._telefono = _telefono;
        this.direccionPostal = _direccionPostal;
    }
    Object.defineProperty(Alumno.prototype, "fechaNacimiento", {
        /*
            //this.fechaNacimiento = _fechaNacimiento;
            let edad = 2024 -this._fechaNacimiento;
            this.fechaNacimiento = 0;
      
            if (edad > 18) {
                    this._fechaNacimiento = _fechaNacimiento
                } else {
                    throw new Exception ("Error, el alumno no puede ser menor de edad!");
                }
            }
                }
            */
        get: function () {
            if (this.isMenorDeEdad()) {
                throw new Error("El Alumno no debe ser menor de edad!");
            }
            return this._fechaNacimiento;
        },
        set: function (fechaNacimiento) {
            this._fechaNacimiento;
        },
        enumerable: false,
        configurable: true
    });
    /*
    get telefono (){
        return this._telefono;
    }
    set telefono (telf){
        _telefono = _telf;
    }
    */
    Alumno.prototype.isMenorDeEdad = function () {
        var ahoraMS = new Date().getTime();
        var nacimientoMS = this._fechaNacimiento.getTime();
        return ahoraMS - nacimientoMS < Alumno.NUM_MS_18_AÑOS;
    };
    Alumno.NUM_MS_18_AÑOS = 18 * 365 * 24 * 60 * 60 * 1000;
    return Alumno;
}());
var direccionPostalJR = { calle: "San José", numero: 18, localidad: "Madrid" };
//
var joseRafael = new Alumno("Jose Rafael", "jr@gmail.com", direccionPostalJR, new Date(1975, 12, 22), "916111441");
try {
    console.log(joseRafael.fechaNacimiento);
    ;
}
catch (e) {
    console.error(e);
}
