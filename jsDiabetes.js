function clasificarRiesgoDiabetes() {
    var glucosa = parseFloat(document.getElementById("Glucosa").value);

    if (glucosa < 0) {
        document.getElementById("Resultado").textContent = "Por favor, introduzca un nivel de glucosa válido.";
    } else {
        var riesgo;
        if (glucosa < 100) {
            riesgo = "Normal";
        } else if (glucosa >= 100 && glucosa < 126) {
            riesgo = "Prediabetes";
        } else if (glucosa >= 126) {
            riesgo = "Diabetes";
        }
        document.getElementById("Resultado").textContent = "El riesgo de diabetes del paciente es: " + riesgo + ".";
        alert("El riesgo de diabetes del paciente es: " + riesgo + ".");
    }
}

function limpiarFormulario() {
    document.getElementById("Glucosa").value = "";
    document.getElementById("Resultado").textContent = "";
}
