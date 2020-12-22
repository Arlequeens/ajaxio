// Lecture serveur
$.get('http://srvapi/api/stagiaires', function (db) {
        initTab(db);
});

// Remplissage tableau
function initTab(db) {
    for (let i = 0; i < db.length; i++) {
        //definition des variables
        var tr = document.createElement("tr");
        var tBody = document.getElementById("idBody");
        tBody.appendChild(tr);
        var th = document.createElement("th");
        th.setAttribute("scope", "row");
        tr.appendChild(th);
        th.innerHTML = db[i].id;

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        tr.appendChild(td1);
        td1.innerHTML = db[i].prenom;

        tr.appendChild(td2);
        td2.innerHTML = db[i].nom;

        tr.appendChild(td3);
        td3.setAttribute("class", "d-flex justify-content-end");
        var btn1 = document.createElement("button")
        btn1.setAttribute("type", "button");
        btn1.setAttribute("class", "btn btn-success mx-1");
        btn1.innerHTML = "Modifier";
        td3.appendChild(btn1);
        var btn2 = document.createElement("button")
        btn2.setAttribute("type", "button");
        btn2.setAttribute("class", "btn btn-danger mx-1");
        btn2.innerHTML = "Supprimer";

        td3.appendChild(btn2);
    }
}

// Contrôle expression régulière
// Auteur: Nico / Cathy
function isOK(obj, expression) {
    var monReg = new RegExp(expression);
    var chaine = document.getElementById(obj + 'TXT');
    oSaisie = monReg.test(chaine);
}

// Ajouter un stagiaire
// Auteur: Thomas
$("#btnAjout").on("click", ajout);
function ajout () {
    confirm("Confirmation d'ajout");
    // confirm("Confirmez vous l'ajout");
}

// Modifier un stagiaire
// Auteur: Thomas
$(".btn-modif").on("click", modification);
function modification () {
    confirm("Confirmation de modification");
    // confirm("Confirmez vous l'ajout");
}

// Modifier un stagiaire
// Auteur: Thomas
$(".btn-suppr").on("click", suppression);
function suppression () {
    confirm("Confirmation de modification");
    // confirm("Confirmez vous l'ajout");
}