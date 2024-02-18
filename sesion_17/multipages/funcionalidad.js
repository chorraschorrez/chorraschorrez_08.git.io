const POS_MENU_ON="0px";
const POS_MENU_OFF="-70%";
const menu = document.querySelector("#menu");
menu.onclick=function(e){
    console.log("menu.onclick");
    if (menu.style.left === POS_MENU_ON) {
        menu.style.left = POS_MENU_OFF;
    } else {
        menu.style.left = POS_MENU_ON;
    }
}

/* Lista de objetos (necesitan tag de usuario: class="opcion") contenidos el panel Menu. 
Cada opción apunta a cada una de las N pantallas seleccionables. 
*/
let opciones = document.querySelectorAll(".opcion"); 

// Recorrer cada opción (li "pantalla 1", li "Pantalla 2", ...)
opciones.forEach(opcion => {

    console.log("opcion,,,="+opcion);

    opcion.addEventListener("click",(e)=>{
        document.querySelectorAll(".pantalla").forEach(pantalla => {

            console.log("e,,,="+e);
            
            if (pantalla.id==e.target.getAttribute("screen")){
                document.querySelector(`#${pantalla.id}`).style.display = "block";
            } else {
                document.querySelector(`#${pantalla.id}`).style.display = "none";
            }

        })
    });

});

let botonScreen3 = document.querySelector("#boton_screen_3");
botonScreen3.onclick= function(e){
    console.log("boton_screen_3 click");
};


