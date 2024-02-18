class Enemigo {
    constructor(nombre, imagen, x, y, ancho, alto, salud, velocidad, ctx){
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
        console.log("Moviendo...:"+ this.nombre);
        this.x = this.x + this.velocidad;
        if (this.x > 500){
            this.velocidad=-this.velocidad;
        }
    }
    disparar(){

    }

    morir(){

    }
    dibujar(){
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
}