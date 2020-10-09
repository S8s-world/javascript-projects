document.getElementById("monPara").innerHTML = "Et voici <em> TON</em> paragraphe !" ;
var chose1;
var chose2;
var chose3;
document.getElementById("btChangerListe").onclick = saisirListe;
function saisirListe() {
    chose1 = prompt("Saisir l'activite 1 : ");
    chose2 = prompt("Saisir l'activite 2 : ");
    chose3 = prompt("Saisir l'activite 3 : ");
    actualiserListe();
}
function actualiserListe() {
    document.getElementById("acti1").innerHTML = chose1;
    document.getElementById("acti2").innerHTML = chose2;
    document.getElementById("acti3").innerHTML = chose3;
}