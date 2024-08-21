function calcularIMC() {
    var peso = parseFloat(document.getElementById("Peso").value);
    var altura = parseFloat(document.getElementById("Altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("Resultado").textContent = "Por favor, introduzca valores válidos.";
        return;
    }

    var imc = peso / (altura * altura);
    document.getElementById("Resultado").textContent = "El Índice de Masa Corporal (IMC) es " + imc.toFixed(2);
    alert("El Índice de Masa Corporal (IMC) es " + imc.toFixed(2));
}

function Borrar() {
    document.getElementById("Peso").value = "";
    document.getElementById("Altura").value = "";
    document.getElementById("Resultado").textContent = "";
}