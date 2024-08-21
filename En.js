function clasificarEstadoNutricional() {
    var imc = parseFloat(document.getElementById("IMC").value);

    if (imc <= 0) {
        document.getElementById("Resultado").textContent = "Por favor, introduzca un IMC positivo.";
    } else {
        var estado;
        if (imc < 18.5) {
            estado = "Bajo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            estado = "Peso saludable";
        } else if (imc >= 25 && imc < 29.9) {
            estado = "Sobrepeso";
        } else if (imc >= 30) {
            estado = "Obeso";
        }
        document.getElementById("Resultado").textContent = "El estado nutricional del paciente es: " + estado + ".";
        alert("El estado nutricional del paciente es: " + estado + ".");
    }
}

function limpiarFormulario() {
    document.getElementById("IMC").value = "";
    document.getElementById("Resultado").textContent = "";
}
