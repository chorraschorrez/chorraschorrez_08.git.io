
const URL_IMAGE = "http://";   //,,,
  

const canvas = document.getElementById("pantalla");
const ctx = canvas.getContext("2d");

function dibujarPantalla(){
    // Rectángulo
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 600, 800);

    // Texto
    ctx.fillStyle = "#FFFFFF";
    ctx.font="48px serif";
    ctx.fillText("SCORE", 10, 58);

    // Línea
    ctx.strokeStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(50,700); // 
    ctx.lineTo(550,700);
    ctx.stroke();
}


try {
    const ANCHO_ENEMIGO = 50;
    const NUMERO_FILAS = 50;
    const NUMERO_COLUMNAS = 50;
    const anchoMarciano = 50;
    let enemigos [];
    for (let i=0; i<5; i++){
        for (let j=0;i<5:j++) {
            enemigos.push(new Enemigo("Alien"+i, "marcianito",i*200, 100, 100, 100, 50, 2, ctx));
        }
    }


    let enemigo1 = new Enemigo("Alien", "marcianito", 100, 100, 100, 100, 50, 0.1, ctx);
    let enemigo2 = new Enemigo("Alien_02", "marcianito", 200, 100, 100, 100, 50, 2, ctx);

    /* 
    setInterval(() => {
            dibujarPantalla();
            enemigo1.mover();
            enemigo1.dibujar();
    }, 17);
    */
    setInterval(() => {

    }, interval);

} catch (e){
    console.error(e);
}
