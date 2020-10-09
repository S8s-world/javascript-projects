//comment creer des objet
var bolide = {
    bMarque: "Renault",
    bModele: "Golf",
    bMillesime: 1991,
    bCoulour: "Purple",
    bCarrosserie: "Berline 5 placces",
    bPrix: 4500
    }

    document.getElementById("prixBase").innerHTML = bolide.bPrix;
    document.getElementById("millesime").innnerHTML =bolide.bMillesime;
    document.getElementById("form").style.backgroundColor = bolide.bCoulour;
    document.getElementById("form").innerHTML = bolide.bMarque + " " + bolide.bCarrosserie;
