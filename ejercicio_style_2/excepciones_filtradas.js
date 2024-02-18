class ArgumentUndefinedError {
    constructor (message){
        this.message = message;
    }
}

class TypeArgumentError {
    constructor (message){
        this.message = message;
    }
}


function suma(s2,s2){
    if(s1===undefined || s2===undefined){
        throw new ArgumentUndefinedError("Ni s1 ni s2 pueden ser undefined"); 
    }
    if (typeof s2 != 'number') {
        throw new TypeArgumentError("s2 tiene que ser un número");
    }
    return s1+s2;
}


try {
    //let resultado = suma(1, 2);
    let resultado = suma(5, '4');
    console.log (resultado);
} catch (e){
    if (e instanceof ArgumentUndefinedError){
        console.log("Error tipo undefined:")+e.message;
    } else if (e instanceof TypeArgumentError){
        console.log("Error tipo type:")+e.message;
    } else{
        console.log("Error desconocido:"+e.message);
    }
}







/*
Ejercicio
==
Función que guarde en un fichero la dirección de email y la contraseña de un usuario. 
- Si la cirección de email no contiene @ lanzamos excepción
- Si el tamaño de la contraseña <6, lanzamos error. 
- El nombre del fichero será erl texto anterior a la @ de la dirección email, con la extension: user. 
*/
const fs = require("node:fs");

class EmailIncorrectoError {
    constructor (message) {
        this.message = message;
    }
}

class TamañoPasswordInsuficienteError {
    constructor (message){
        this.message = message;
    }
}


function guardarCredenciales(email,password){
    const TAMAÑO_MINIMO = 6;
    if(!email.includes('@')){
        throw new EmailIncorrectoError("El email deben contener el símbolo: @. "); 
    }
    console.log(password.length);
    if (password.length<TAMAÑO_MINIMO) {
        throw new TamañoPasswordInsuficienteError("La password debe contener al menos 6 caracteres. ");
    }
    //archivoCrear(nombreFichero);
    //return "OK";
    try {
        let nombreArchivo = email.substring(0,email.indexOf('@'));
        fs.writeFileSync(nombreArchivo, email+":"+password);
        console.log("Creado archivo: "+nombreArchivo);
    } catch (e){
        console.error("Ha ocurrido al trara de escribir el fihero: "+e.message);
        throw e;
    }
}

/*
function archivoCrear(nombreFichero){
    console.log("función no disponible");
    //const data = fs.readFileSync('/Users/tardes/test.txt', 'utf8');
}
 */


/*
try {
    guardarCredenciales("unemail@algo.com","");
    //let resultado = suma(1, 2);
    let resultado = suma(5, '4');
    console.log (resultado);
} catch (e){
    if (e instanceof ArgumentUndefinedError){
        console.log("Error tipo undefined: ")+e.message;
    } else if (e instanceof TamañoPasswordInsuficienteError){
        console.log("Error tipo type: ")+ e.message;
    } else{
        console.log("Error desconocido: "+e.message);
    }
}
*/

console.log("1234".length);

try {
    guardarCredenciales("fernando.paniagua@gmail.com", "1234");
} catch (e) {
    if (e instanceof EmailIncorrectoError ) {
        console.error("Email incorrecto");
    } else if (e instanceof TamañoPasswordInsuficienteError) {
        console.error("Tamaño dde password insuficiente");
    } else {
        console.error("No se ha identificado qué clase de error es. e.message="+e.message);
    }
}