function Calcular() {
    var A = +document.getElementById('Años').value;
    var LPM = 220 - A;
    alert("Frecuencia Cardíaca Máxima: " + LPM + " latidos por minuto");
}

function limpiarFormulario() {
    document.getElementById("Años").value = "";
}