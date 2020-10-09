document.getElementById("tete").style.borderTop ="5px black solid";
//Documen.getElementById("tete").style.transform = "rotate(-15deg)";
document.getElementById("tete").style.transform = "rotate(-15deg)";
document.getElementById("nez").style.borderRadius ="50%";
document.getElementById("brasDroit").style.backgroundColor ="green";
//document.getElementById("oeilDroit").style.borderRadius =" yellow dotted";
document.getElementById("bouche").style.backgroundColor = "#993399";
document.getElementById("oeilGauche").style.border ="dotted  #ff4d94 4px";
document.getElementById("corps").style.borderRadius ="30px ";
document.getElementById("corps").style.border = "5px dotted purple";
document.getElementById("corps").style.backgroundColor ="blue";
document.getElementById("tete").style.backgroundColor = "orange";
document.getElementById("brasGauche").style.backgroundColor ="black";
document.getElementById("nez").style.backgroundColor = "#e62e00";
var vOeilD = document.getElementById("oeilDroit");
var vOeilG = document.getElementById("oeilGauche");
var vBrasG = document.getElementById("brasGauche");

vOeilD.addEventListener("click", monterDescendre);
vOeilG.addEventListener("click", monterDescendre);
vBrasG.addEventListener("click", decalerGD);
function monterDescendre(e) {
	var robotPart = e.target;
	var pos = 0;
	var id = setInterval(frame, 10) //toutes les 10ms
	function frame() {
		robotPart.style.top = pos + '%';
		pos++;
		if (pos === 20){
			clearInterval(id);
		}
	
	}
}

function decalerGD(e) {
	var gauche = 0;
	var robotPart = e.target;
	
	var id = setInterval(frame, 10)
	function frame() {
		robotPart.style.left = gauche + '%';
		gauche++;
		if (gauche === 70){
			clearInterval(id);
}
}
}

