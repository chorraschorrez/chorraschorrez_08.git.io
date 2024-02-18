"use script" 


const fs = require ('node:fs');
try {
    const data = fs.readFileSync('/Users/tardes/test.txt', 'utf8');  // Ruta podría no existir, y dar error la lectura
    console.log(data);
    console.log("TODO OK");
}catch(err) {
    console.error(err.message);
    console.log("KO");
} finally {
    console.log("DESPUES DEL TRY-CATCH");
}

console.log("SE TERMINÓ TRY-CATCH Y EL PROGRAMA");

