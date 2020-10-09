var vDateJour = document.getElementById("divDateJour");
var vBtnQF = document.getElementById("btnQF");

vBtnQF.addEventListener("click", afficherConseil);
var d = new Date();
afficherDate;
function afficherDate() {
  vDateJour.innerHTML = d.toDateString();

}
function afficherConseil() {
  var numJourSem = d.getDay();
  var monConseil;

  switch (numJourSem) {
    case 0:
      monConseil = "Un peu de repos bien merite.";
      break;
    case 1:
      monConseil = "Fais ce que tu as a faire, voyons.";
      break;
    case 2:
      monConseil = "Prends le temps de regarder la nature !";
      break;
    case 3:
      monConseil = "Un petit dejeuner copieux, c'est mieux.";
      break;
    case 4: 
    monConseil = "Apprends quelque chose de plus par jour.";
    break;
    case 5: 
    monConsil = "Tu es le meillure de Mond.";
    break;
    case 6: 
     monConseil = "Essayon le neuveu langage.";
    break;
    default: 
    monConseil = "Bizare, bizare, autant que etrange.";
    break;

  }
  document.getElementById("divConseil").innerHTML = monConseil;
}