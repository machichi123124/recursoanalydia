function clasificarFuncionPulmonar() {
    var vef1 = +document.getElementById("vef1").value;
    var clasificacion;

    if (vef1 >= 80) {
        clasificacion = "Normal";
    } else if (vef1 >= 50) {
        clasificacion = "Moderada";
    } else {
        clasificacion = "Severa";
    }

    document.getElementById("resultado").textContent = "Clasificación de la Función Pulmonar: " + clasificacion;
}

function limpiarFormulario() {
    document.getElementById("vef1").value = "";
    document.getElementById("resultado").textContent = "";
}
