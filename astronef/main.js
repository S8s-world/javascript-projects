// Variables
var vHisto = document.getElementById("hHistoire");
var vPied  = document.getElementById("hPied");
var vQuest = document.getElementById("hQuestion");
var vRep   = document.getElementById("hReponse");
var vSaisie   = document.getElementById("hTaRep");
var vBtnEnvoi = document.getElementById("hEnvoyer");

var vTabRep = [];

/* Auditeur de clic du bouton qui déclenchera lireReponse() */
vBtnEnvoi.addEventListener("click", lireReponse);

// Appel de la fonction pour poser la 1ère question
poserQuestion(0); 

/* Pose la question selon le numéro transmis */
function poserQuestion(numQuest) {
    vRep.style.display = "block";
    vTabRep.length = numQuest;
    switch (numQuest) {
        case 0:
            vQuest.innerHTML = "Prêt pour l'aventure ?";
            break;
        case 1:
            vQuest.innerHTML = "Mars ou Terre ?";
            break;
        case 2:
            vQuest.innerHTML = "Risquer ou Rentrer.";
            break;
        default:
            break;
    }
}

/* Récupère la saisie, la formate en capitales, la stocke dans le tableau et appelle continuerHistoire() */
function lireReponse() {
    var repEnCap = vSaisie.value.toUpperCase();
    vTabRep.push(repEnCap);
    vSaisie.value = "";
    continuerHistoire(vTabRep.length - 1);
}

/* Affiche un épisode ou une erreur si saisie non gérable */
function continuerHistoire(numRep) {
    switch (numRep) {
        case 0:
            if (vTabRep[0] === "OUI") {
                vHisto.innerHTML = document.getElementById("hRepEpi01").innerHTML;
                poserQuestion(1);
            } else if (vTabRep[0] === "NON") {
                vHisto.innerHTML = document.getElementById("hRepEpi02").innerHTML;
                poserQuestion(0);
            } else {
                vHisto.innerHTML = document.getElementById("hErr0").innerHTML;
                poserQuestion(0);
            }
            break;
        case 1:
            if (vTabRep[1] === "MARS") {
                vHisto.innerHTML = document.getElementById("hRepEpi11").innerHTML;
                poserQuestion(2);
            } else if (vTabRep[1] === "TERRE") {
                vHisto.innerHTML = document.getElementById("hRepEpi12").innerHTML;
                terminer();
            } else {
                vHisto.innerHTML = document.getElementById("hErr1").innerHTML;
                poserQuestion(1);
            }
            break;
        case 2:
            if (vTabRep[2] === "RISQUER") {
                vHisto.innerHTML = document.getElementById("hRepEpi21").innerHTML;
                terminer();
            } else if (vTabRep[2] === "RENTRER") {
                vHisto.innerHTML = document.getElementById("hRepEpi22").innerHTML;
                terminer();
            } else {
                vHisto.innerHTML = document.getElementById("hErr2").innerHTML;
                poserQuestion(2);
            }
            break;
        default:
            vHisto.innerHTML = "C'est la fin de l'aventure!";
            break;
    }
}

/* Termine l'histoire et masque le champ de saisie */
function terminer() {
    vHisto.innerHTML += "<p>F I N.</p>";
    vQuest.innerHTML = "";
    vRep.style.display = "none";
}
