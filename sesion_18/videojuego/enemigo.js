class Enemigo {
    static velocidad = 1;
    constructor(nombre, imagen, x, y, ancho, alto, salud, velocidad, ctx){
        if (arguments.length!=8){
            throw new Error (`Constructor de Enemigo ha sido mal invocado:`);
        }
        this.nombre = nombre;
        this.imagen = document.getElementById(imagen);
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.salud = salud;
        this.velocidad = velocidad;
        this.ctx = ctx;
        /*
        setInterval( ()=> {
            this.mover();
            this.dibujar();
        }, 1000);
        */
    }
    mover(){
        /*
        console.log("Moviendo...:"+ this.nombre);
        this.x = this.x + this.velocidad;
        if (this.x > 500 || this.x<=0){
            this.velocidad=-this.velocidad;
        } */
        this.x = this.x + Enemigo.velocidad;
        if (this.x > 500) {
            this.x = 500;
            
        }
         || this.x<=0){
            this.velocidad=-this.velocidad;
        }     }
    disparar(){

    }

    morir(){

    }
    dibujar(){
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
}