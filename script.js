function verificarRespuesta() {

    // Obtener opción seleccionada
    let respuesta = document.querySelector('input[name="respuesta"]:checked');

    // Verificar si seleccionó algo
    if (respuesta == null) {
        alert("Selecciona una respuesta");
        return;
    }

    // Revisar respuesta
    if (respuesta.value == "20") {
        alert("¡Correcto! El cerebro consume aproximadamente el 20% de la energía del cuerpo.");
    } else {
        alert("Respuesta incorrecta. Intenta nuevamente.");
    }
}