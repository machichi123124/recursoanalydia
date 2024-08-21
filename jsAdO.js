function Calcular(){
    var Longitud = parseFloat(document.getElementById("Longitud").value);
    var Ancho = parseFloat(document.getElementById("Ancho").value);
    var Area = Longitud * Ancho;
    
    document.getElementById("Resultado").textContent = "El área calculada es " + Area + " cm²";
    alert(Area);
}
function limpiarFormulario() {
	document.getElementById("Longitud").value = "";
	document.getElementById("Ancho").value = "";
    document.getElementById("Resultado").textContent = "";
}
