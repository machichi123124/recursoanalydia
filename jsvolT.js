function calcularVolumenTidal(){
    var Peso = document.getElementById("Peso").value;
    var VolT = 6 * Peso;
    document.getElementById("Resultado").textContent = "Cálculo del volumen Tidal es " + VolT;
    alert(VolT);
}
function limpiarFormulario() {
	document.getElementById("Peso").value = "";
    document.getElementById("Resultado").textContent = "";

}