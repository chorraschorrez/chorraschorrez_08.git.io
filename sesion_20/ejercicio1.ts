
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


/*
class Alumno{
    nombre:string;
    email:string;
    private _telefono:string;
    direccionPostal:string;
    fechaNacimiento:number;
    constructor(_nombre:string, _email:string, _telefono:string, _direccionPostal:string, _fechaNacimiento:number) {
        this.nombre = _nombre;
        this.email = _email;
        this._telefono = _telefono;
        this.direccionPostal = _direccionPostal;
        //this.fechaNacimiento = _fechaNacimiento;
        let edad = 2024 -this.fechaNacimiento;
        this.fechaNacimiento = 0;
        if (edad > 18) {
                this.fechaNacimiento = _fechaNacimiento
            } else {
                throw new Exception ("Error, el alumno no puede ser menor de edad!");
            }
        }
    }
    get telefono (){
        return this._telefono;
    }
    set telefono (telf){
        _telefono = _telf;
    }
}
*/


interface DireccionPostal {
    calle:string;
    numero:number;
    localidad:string;
}


class Alumno{
    static readonly  NUM_MS_18_AÑOS = 18*365*24*60*60*1000;
    nombre:string;
    email:string;
    private _telefono:string;
    direccionPostal:DireccionPostal;
    private _fechaNacimiento:Date;
    // Ojo el argumento _telefono debe ser el último por ser opcional:
    constructor(
        _nombre:string, 
        _email:string, 
        _direccionPostal:DireccionPostal, 
        _fechaNacimiento:Date,
        _telefono:string)
         {
        this.nombre = _nombre;
        this.email = _email;
        this._telefono = _telefono;
        this.direccionPostal = _direccionPostal;
         }
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

    get fechaNacimiento():Date{
        if (this.isMenorDeEdad()){
            throw new Error ("El Alumno no debe ser menor de edad!"); 
        }
        return this._fechaNacimiento; 
    }

    set fechaNacimiento(fechaNacimiento:Date) {
        this._fechaNacimiento;
    }
    /*
    get telefono (){
        return this._telefono;
    }
    set telefono (telf){
        _telefono = _telf;
    }
    */
    
    private isMenorDeEdad():boolean {
        let ahoraMS = new Date().getTime();
        let nacimientoMS = this._fechaNacimiento.getTime();
        return ahoraMS-nacimientoMS<Alumno.NUM_MS_18_AÑOS;
    }
}


const direccionPostalJR:DireccionPostal = {calle:"San José",numero:18,localidad:"Madrid"};
//
let joseRafael = new Alumno("Jose Rafael", "jr@gmail.com",direccionPostalJR, new Date(1975,12,22), "916111441");

try{
    console.log(joseRafael.fechaNacimiento);
;} catch (e) {
    console.error(e);
}