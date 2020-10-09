/*document.getElementByID("btnCde").addEventListener("click", gererCde);
function gererCde {
    var nbrPizzas = document.getElementById("chNbrPiz").value;
    var typePizza = document.getElementById("chTypePizza").value;
    var livVille  = document.getElementById("chLivVille").value;
    var anniv     = document.getElementById("chCliNai").value;

    var prixCde = calculerPrix(nbrPizzas, typePizza);
    var livFrais = calculerLivraison(prixCde, livVille, anniv);
    var ticket = "<p>Merci pour votre commande.</p>";

    if (livFrais === 0) {
        ticket += "<p>Livraison gratuite !</p>";
    } else {
        ticket += "<p>La livraison est de " + livFrais +"€."; }
        ticket += "<p>Soit au total " + (prixCde + livFrais) +"€.";

        if (anniv === "chOui") {
            ticket += "<p>Et bon anniversaire !</p>";
    }
    document.getElementById("affTicket").innerHTML = ticket;
}

function calculerPrix(nbrPizzas, typePizza) {
    var prixCde = Number(nbrPizzas) * 10;
    var supplement = 0;

    if (typePizza === "pRoyale") {
        supplement = Number(nbrPizzas) * 2;
    }

    prixCde += supplement;
    return prixCde;
}
function calculerLivraison(prixCde, livVille, anniv) {
    var livFrais = 0;

    if (((livVille === "En ville") && (prixCde > 10)) || (anniv === "chOui")) {
        livFrais = 0;
    } else {
        livFrais = 5;
    }
    return livFrais;
}*/






// 14: Pizzeria JS
document.getElementById("btnCde").addEventListener("click", gererCde);

function gererCde() {
    // Récupération des valeurs du formulaire
    var nbrPizzas = document.getElementById("chNbrPiz").value;
    var typePizza = document.getElementById("chTypePizza").value;
    var livVille  = document.getElementById("chLivVille").value;
    var anniv     = document.getElementById("chCliNai").value;

    var prixCde = calculerPrix(nbrPizzas, typePizza);
    var livFrais = calculerLivraison(prixCde, livVille, anniv);

    var ticket = "<p>Merci pour votre commande.</p>";

    if (livFrais === 0) {
        ticket += "<p>Livraison gratuite !</p>";
    } else {
        ticket += "<p>La livraison est de " + livFrais +"€.";
    }
    ticket += "<p>Soit au total " + (prixCde + livFrais) +"€.";
    if (anniv === "chOui") {
      ticket += "<p>Et bon anniversaire !</p>";
    }
    // Affiche le ticket de caisse
    document.getElementById("affTicket").innerHTML = ticket;
}

function calculerPrix(nbrPizzas, typePizza) {
    var prixCde = Number(nbrPizzas) * 10;
    var supplement = 0;

    if (typePizza === "pRoyale") {
        supplement = Number(nbrPizzas) * 2;
    }

    prixCde += supplement;
    return prixCde;
}

function calculerLivraison(prixCde, livVille, anniv) {
    var livFrais = 0;

    if (((livVille === "En ville") && (prixCde > 10)) || (anniv === "chOui")) {
        livFrais = 0;
    } else {
        livFrais = 5;
    }
    return livFrais;
}