/*
let hoy = new Date();
let shoy = Date();
console.log(typeof hoy);
console.log(typeof shoy);
console.log("hoy="+hoy);
console.log("shoy="+shoy);

console.log(hoy.getDate);
console.log(shoy.getDate);

console.log(hoy.getTimezoneOffset);  //

console.log(hoy.getHours); // En el momento de la ejecución: 16:00
console.log();  // (en UTC restamos 1) Serían las 15:00 

const options = {timeZone: "Europe/Madrid"};
console.log(hoy.toLocaleString("ru", options));
*/


/*
Ejercicio. 
En una web que aparezcan tres relojes digitales (refrescándose): 

Nueva York
La Habana
Moscú

setInterval usar. 

*/




//setInterval


setInterval(displayHello, 1000);

function displayHello() 
  //document.getElementById("demo").innerHTML += "Hello";
  console.debug("Hello");
};


d