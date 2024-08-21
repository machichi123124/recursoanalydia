function calcularDosis() {
    var peso = parseFloat(document.getElementById("Peso").value);
    var dosisRecomendada = parseFloat(document.getElementById("DosisRecomendada").value);

    if (isNaN(peso) || isNaN(dosisRecomendada) || peso <= 0 || dosisRecomendada <= 0) {
        document.getElementById("Resultado").textContent = "Por favor, introduzca valores válidos.";
        return;
    }

    var dosisTotal = peso * dosisRecomendada;
    document.getElementById("Resultado").textContent = "La dosis total a administrar es " + dosisTotal.toFixed(2) + " mg.";
    alert("La dosis total a administrar es " + dosisTotal.toFixed(2) + " mg.");
}

function Borrar() {
    document.getElementById("Peso").value = "";
    document.getElementById("DosisRecomendada").value = "";
    document.getElementById("Resultado").textContent = "";
}
