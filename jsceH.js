function clasificarHidratacion() {
    var agua = +document.getElementById("agua").value;
    var estado;

    if (agua < 1.5) {
        estado = "Deshidratado";
    } else if (agua <= 2.5) {
        estado = "Hidratación Normal";
    } else {
        estado = "Sobrehidratación";
    }

    document.getElementById("resultado").textContent = "Estado de Hidratación: " + estado;
}

function limpiarFormulario() {
    document.getElementById("agua").value = "";
    document.getElementById("resultado").textContent = "";
}