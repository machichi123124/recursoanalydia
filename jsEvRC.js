function evaluarRiesgo() {
    var presion = +document.getElementById("presion").value;
    var riesgo;

    if (presion < 120) {
        riesgo = "Normal";
    } else if (presion < 140) {
        riesgo = "Prehipertensión";
    } else {
        riesgo = "Hipertensión";
    }

    document.getElementById("resultado").textContent = "Riesgo Cardiovascular: " + riesgo;
}

function limpiarFormulario() {
    document.getElementById("presion").value = "";
    document.getElementById("resultado").textContent = "";
}
