function clasificarFuncionRenal() {
    var tfg = parseFloat(document.getElementById("TFG").value);

    if (tfg < 0) {
        document.getElementById("Resultado").textContent = "Por favor, introduzca un valor de TFG válido.";
    } else {
        var categoria;
        if (tfg >= 90) {
            categoria = "Normal";
        } else if (tfg >= 60 && tfg < 90) {
            categoria = "Leve disminución";
        } else if (tfg >= 30 && tfg < 60) {
            categoria = "Disminución moderada";
        } else if (tfg >= 15 && tfg < 30) {
            categoria = "Disminución grave";
        } else if (tfg < 15) {
            categoria = "Insuficiencia renal en etapa terminal";
        }
        document.getElementById("Resultado").textContent = "La categoría de la función renal es: " + categoria + ".";
        alert("La categoría de la función renal es: " + categoria + ".");
    }
}

function limpiarFormulario() {
    document.getElementById("TFG").value = "";
    document.getElementById("Resultado").textContent = "";
}
