function evaluarColesterol() {
    var colesterol = +document.getElementById("colesterol").value;
    var estado;

    if (colesterol < 200) {
        estado = "Deseable";
    } else if (colesterol < 240) {
        estado = "Limítrofe alto";
    } else {
        estado = "Alto";
    }

    document.getElementById("resultado").textContent = "Estado del Colesterol: " + estado;
}

function limpiarFormulario() {
    document.getElementById("colesterol").value = "";
    document.getElementById("resultado").textContent = "";
}
