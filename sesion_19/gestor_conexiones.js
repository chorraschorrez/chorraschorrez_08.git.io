Notification.requestPermission().then(function(result()))



function mostrarNotificacion(mensaje) {
    Notification.requestPermission().then(function.result() {
        if (result=="granted") {
            console.log("ok");
            var notificacion = new Notification(mensaje, {
                body: mensaje 
            })
        }
    })
}