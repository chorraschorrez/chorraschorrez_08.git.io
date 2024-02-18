const hoja = document.querySelector("#div-hoja");
const DELTA =1;
var x=200;
var y=200;


/*
setInterval( ()=> {
    console.log ("MUEVE"); 
    hoja.style.left = (x+=DELTA)+"px";
},17,17);  // Se ejecuta cuando... 
*/

console.log("aaa x="+(x));

setInterval( ()=> {
    console.log ("MUEVE pos_y="+y); 
    hoja.style.top = (y+=DELTA)+"px";
    if (y>window.innerHeight){
        y=-100;
        x = Math.random()* window.innerWidth;
        hoja.computedStyleMap.left = x+"px";
    }
},17,17);  // Se ejecuta cuando... 