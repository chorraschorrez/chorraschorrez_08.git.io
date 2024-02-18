document.querySelector("#bEnviar").onclick = function() {
    console.log("Leyendo mensaje...")
    const texto = document.querySelector("#mensaje").value;
    enviarTexto(texto);
}


//receptor es opcional, por eso lo ponemos así, con valor por defecto: EVERYBODY 
function enviarTexto(texto, emisor, receptor="EVERYBODY"){
    console.log("Enviando texto...:" + texto);
    const newKey = push(child (ref(database), 'mensajes')).key;
    const data = {};
    data[newKey]
}
