function calcularCantidadSoluto() {
    var concentracion = parseFloat(document.getElementById("Concentracion").value);
    var volumen = parseFloat(document.getElementById("Volumen").value);

    if (isNaN(concentracion) || isNaN(volumen) || concentracion <= 0 || volumen <= 0) {
        document.getElementById("Resultado").textContent = "Por favor, introduzca valores válidos.";
    } else {
        var cantidadSoluto = concentracion * volumen;
        document.getElementById("Resultado").textContent = "La cantidad de soluto necesaria es " + cantidadSoluto.toFixed(2) + " mg.";
        alert("La cantidad de soluto necesaria es " + cantidadSoluto.toFixed(2) + " mg.");
    }
}

function Borrar() {
    document.getElementById("Concentracion").value = "";
    document.getElementById("Volumen").value = "";
    document.getElementById("Resultado").textContent = "";
}
