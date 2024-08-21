function evaluarSaturacion() {
    var oxigeno = +document.getElementById("oxigeno").value;
    var estado;

    if (oxigeno >= 95) {
        estado = "Normal";
    } else if (oxigeno >= 90) {
        estado = "Baja";
    } else {
        estado = "Crítica";
    }

    document.getElementById("resultado").textContent = "Estado de Saturación de Oxígeno: " + estado;
}

function limpiarFormulario() {
    document.getElementById("oxigeno").value = "";
    document.getElementById("resultado").textContent = "";
}