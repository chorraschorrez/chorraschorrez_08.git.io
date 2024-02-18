
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
    ctx.moveTo(150,700); // 
    ctx.lineTo(1550,700);
    ctx.stroke();
}


try {
/*    
*/
    let enemigo1 = new Enemigo("Alien", "marcianito", 100, 100, 100, 100, 50, 2, ctx);
    
    setInterval(() => {
            dibujarPantalla();
            enemigo1.mover();
            enemigo1.dibujar();
    }, 17);

    let enemigo2 = new Enemigo("Alien_02", "marcianito_02", 200, 100, 100, 100, 50, 2, ctx);

    setInterval(() => {
        dibujarPantalla();
        enemigo2.mover();
        enemigo2.dibujar();
}, 53);


} catch (e){
    console.error(e);
}
