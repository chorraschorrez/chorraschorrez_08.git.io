
var ID_APP = "guasap.id";

// Intentar recuperar el ID del usuario de la app (Ej. Fernando, estará en la BD de Firebase)
let id  = localStorage.getItem(ID_APP);
if (id != null) {
    document.querySelector("#identificador").value = id;
}

document.querySelector("#bLogin").onclick = ()=> {
    console.log("Guardando Credenciales");
    localStorage.setItem(ID_APP, document.querySelector("#identificador").value);
    id = document.querySelector("#identificador").value;
}