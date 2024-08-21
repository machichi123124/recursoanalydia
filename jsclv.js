function calcularVolumenLiquido(){
    var dosis = document.getElementById("Dosis").value;
    var concentracion = document.getElementById("Concentracion").value;
    var volumen = dosis / concentracion;
    
    document.getElementById("Resultado").textContent = "Cálculo del volumen a Administrar es " + volumen;
    alert(volumen);
}
function Borrar(){
	document.getElementById("Dosis").value = "";
	document.getElementById("Concentracion").value = "";
    document.getElementById("Resultado").textContent = "";
    
}