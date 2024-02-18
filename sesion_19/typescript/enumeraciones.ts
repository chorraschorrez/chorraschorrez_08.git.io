let videoconsola:string;
videoconsola = "PlaySTation";
videoconsola = "Pleyesteision";  // Problema con el valor


enum VideoconsolasXL {
    Playstation5="PS5", 
    Playstation4="PS4", 
    Playstation3="PS3", 
    XBoxSeries="XBS", 
    XBoxOne="XBO", 
    NintendoSwitch="NS"
}

let miVideoConsola:VideoconsolasXL = VideoconsolasXL.Playstation4;


let miVideoConsola_XL:VideoconsolasXL = VideoconsolasXL.Playstation4;
if(miVideoConsola_XL==="PS4") {
    console.log("Es una PS4");
}


/*   
//Experimento del profe: 
let miVC:VideoconsolasXL = VideoconsolasXL["PS3" as keyof typeof VideoconsolasXL];
console.log(miVC);

if (miVC===VideoconsolasXL.Playstation3) {
    console.log("BRAVO!");
}
*/

