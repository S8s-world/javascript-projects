var jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
var ciel  = ["Soleil", "Eclaircies", "Nuages épars", "Couvert", "Pluie", "Neige", "Orage", "Brume"];
var maxTemp = 36;
var minTemp = 5;

genererMeteo();

function genererMeteo() {
  for (var i = 0; i < jours.length; i++) {
    var mtDuJour = ciel[Math.floor(Math.random() * ciel.length)];
    var tmDuJour  = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    var txtPrev = "<div id='" + jours[i] + "' class='" + mtDuJour + 
"'>Prévisions pour " + jours[i] + ": <br><b>" + mtDuJour + 
" et " + tmDuJour + " degrés.</b></div>";
    document.getElementById("Meteo5Jours").innerHTML += txtPrev; 
  }
}