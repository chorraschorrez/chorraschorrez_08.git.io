var cesta = new Array();

document.querySelector("#bAgregar").addEventListener("click", agregarProducto{  // Ojo la llamada agregarProductoGuay no lleva el: ()
    agregarProductoGuay(); 
}

document.querySelector("#bMostrar").addEventListener("click", agregarProducto{  // Ojo la llamada agregarProductoGuay no lleva el: ()
    agregarProductoGuay(); 
}



function agregarProducto(){
    console.log("Botón Agregar pulsado");
    const producto = document.querySelector("#iProducto").value;
    if (producto.trim().length(0)){   // Un input que está vacio retorna un string vacío (no un null)
        console.log("Se agrega producto con nombre correcto, no vacío...");
        cesta.push(producto);
    }
}
    console.log(" a agregar producto:"+producto);
);

function mostrarCestaCutre(){
    if (cesta.length==0){
        document.querySelector("#cesta-cutre").innerHTML=cesta;
    } else {

    }
}

function mostrarCestaGuay(){
    // ...
    let divCesta = document.querySelector("#cesta-guay");
    if (cesta.length==0){
        document.querySelector("#cesta-cutre").innerHTML=cesta;
    } else {
        divCesta.innerHTML+=`<br${item}>`;
    }
}