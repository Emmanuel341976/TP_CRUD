function constructTable() {
  var i;

  var sHTML = "";
  sHTML += "<thead class='thead-dark'>";
  sHTML += "<tr>";
  sHTML += "<th>Titre</th>";
  sHTML += "<th>Année de sortie</th>";
  sHTML += "<th>Réalisateur</th>";
  sHTML += "<th>Acteur</th>";
  sHTML += "<th>Genre</th>";
  sHTML += "<th>Classement</th>";
  sHTML += "<th>Type</th>";
  sHTML += "<th>Support</th>";
  sHTML += "<th>Prêt</th>";
  sHTML += "<th>Visionné</th>";
  sHTML += "<th>Note</th>";
  sHTML += "<th>SteelBox</th>";
  sHTML += "<th>Editer</th>";
  sHTML += "<th>Supprimer</th>";
  sHTML += "</tr>";
  sHTML += "</thead>";
  sHTML += "<tbody>";

  for (i = 0; i < aOfvideotheque.length; i++) {
    sHTML += "<tr>";
    sHTML += "<td>" + aOfvideotheque[i]["titre"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["annee"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["realisateur"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["acteur"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["genre"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["classement"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["type"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["support"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["pret"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["visione"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["note"] + "</td>";
    sHTML += "<td>" + aOfvideotheque[i]["steelBox"] + "</td>";
    sHTML += '<td><button type="button" onClick="editFilm(' + i + ')" class="btn-primary" id="btn_ajouter">Editer</button></td>';
    sHTML += '<td><button type="button" onClick="supprimFilm(' + i + ')" class="btn-danger" id="btn_ajouter">Supprimer</button></td>';
    sHTML += "</tr>";
  }

  sHTML += "</tbody>";
  document.getElementById("table_films").innerHTML = sHTML;
}

var aOfvideotheque = [];
aOfvideotheque[0] = [];
aOfvideotheque[0]["titre"] = "Assasin's Creed";
aOfvideotheque[0]["annee"] = "2016";
aOfvideotheque[0]["realisateur"] = "Justin Kurzel";
aOfvideotheque[0]["acteur"] = "Michael Fassbender";
aOfvideotheque[0]["genre"] = "Science-fiction";
aOfvideotheque[0]["classement"] = "-12 ans";
aOfvideotheque[0]["type"] = "Film";
aOfvideotheque[0]["support"] = "Blu Ray 4K";
aOfvideotheque[0]["pret"] = "Oui";
aOfvideotheque[0]["visione"] = "Non";
aOfvideotheque[0]["note"] = "2";
aOfvideotheque[0]["steelBox"] = "Oui";

aOfvideotheque[1] = [];
aOfvideotheque[1]["titre"] = "Le seigneur des anneaux la communauté de l'anneau";
aOfvideotheque[1]["annee"] = "2001";
aOfvideotheque[1]["realisateur"] = "Peter Jackson";
aOfvideotheque[1]["acteur"] = "Elijah Wood";
aOfvideotheque[1]["genre"] = "Fantasy";
aOfvideotheque[1]["classement"] = "Tout Public";
aOfvideotheque[1]["type"] = "Film";
aOfvideotheque[1]["support"] = "DVD";
aOfvideotheque[1]["pret"] = "Non";
aOfvideotheque[1]["visione"] = "Oui";
aOfvideotheque[1]["note"] = "5";
aOfvideotheque[1]["steelBox"] = "Non";

aOfvideotheque[2] = [];
aOfvideotheque[2]["titre"] = "Heroes";
aOfvideotheque[2]["annee"] = "2006";
aOfvideotheque[2]["realisateur"] = "Tim Kring";
aOfvideotheque[2]["acteur"] = "Milo Ventimiglia";
aOfvideotheque[2]["genre"] = "Science-fiction";
aOfvideotheque[2]["classement"] = "-16 ans";
aOfvideotheque[2]["type"] = "Série";
aOfvideotheque[2]["support"] = "DVD";
aOfvideotheque[2]["pret"] = "Non";
aOfvideotheque[2]["visione"] = "Non";
aOfvideotheque[2]["note"] = "5";
aOfvideotheque[2]["steelBox"] = "Non";

aOfvideotheque[3] = [];
aOfvideotheque[3]["titre"] = "Chaos";
aOfvideotheque[3]["annee"] = "2005";
aOfvideotheque[3]["realisateur"] = "Tony Giglio";
aOfvideotheque[3]["acteur"] = "Jason Statham";
aOfvideotheque[3]["genre"] = "Policier";
aOfvideotheque[3]["classement"] = "-12 ans";
aOfvideotheque[3]["type"] = "Film";
aOfvideotheque[3]["support"] = "DVD";
aOfvideotheque[3]["pret"] = "Oui";
aOfvideotheque[3]["visione"] = "Oui";
aOfvideotheque[3]["note"] = "3";
aOfvideotheque[3]["steelBox"] = "Oui";

aOfvideotheque[4] = [];
aOfvideotheque[4]["titre"] = "Land Of The Dead";
aOfvideotheque[4]["annee"] = "2005";
aOfvideotheque[4]["realisateur"] = "George Andrew Romero";
aOfvideotheque[4]["acteur"] = "John Leguizamo";
aOfvideotheque[4]["genre"] = "Horreur";
aOfvideotheque[4]["classement"] = "-16 ans";
aOfvideotheque[4]["type"] = "Film";
aOfvideotheque[4]["support"] = "DVD";
aOfvideotheque[4]["pret"] = "Oui";
aOfvideotheque[4]["visione"] = "Oui";
aOfvideotheque[4]["note"] = "4";
aOfvideotheque[4]["steelBox"] = "Oui";

aOfvideotheque[5] = [];
aOfvideotheque[5]["titre"] = "Ce que veulent les femmes";
aOfvideotheque[5]["annee"] = "2000";
aOfvideotheque[5]["realisateur"] = "Nancy Meyers";
aOfvideotheque[5]["acteur"] = "Mel Gibson";
aOfvideotheque[5]["genre"] = "Comédie";
aOfvideotheque[5]["classement"] = "Tout Public";
aOfvideotheque[5]["type"] = "Film";
aOfvideotheque[5]["support"] = "DVD";
aOfvideotheque[5]["pret"] = "Oui";
aOfvideotheque[5]["visione"] = "Non";
aOfvideotheque[5]["note"] = "4";
aOfvideotheque[5]["steelBox"] = "Non";

aOfvideotheque[6] = [];
aOfvideotheque[6]["titre"] = "Bad Taste";
aOfvideotheque[6]["annee"] = "1987";
aOfvideotheque[6]["realisateur"] = "Peter Jackson";
aOfvideotheque[6]["acteur"] = "Terry Potter";
aOfvideotheque[6]["genre"] = "Horreur";
aOfvideotheque[6]["classement"] = "-16 ans";
aOfvideotheque[6]["type"] = "Film";
aOfvideotheque[6]["support"] = "DVD";
aOfvideotheque[6]["pret"] = "Non";
aOfvideotheque[6]["visione"] = "Oui";
aOfvideotheque[6]["note"] = "4";
aOfvideotheque[6]["steelBox"] = "Non";

aOfvideotheque[7] = [];
aOfvideotheque[7]["titre"] = "Tai-Chi Master";
aOfvideotheque[7]["annee"] = "1993";
aOfvideotheque[7]["realisateur"] = "Yuen Woo-ping";
aOfvideotheque[7]["acteur"] = "Jet Li";
aOfvideotheque[7]["genre"] = "Arts martiaux";
aOfvideotheque[7]["classement"] = "Tout Public";
aOfvideotheque[7]["type"] = "Film";
aOfvideotheque[7]["support"] = "DVD";
aOfvideotheque[7]["pret"] = "Non";
aOfvideotheque[7]["visione"] = "Non";
aOfvideotheque[7]["note"] = "5";
aOfvideotheque[7]["steelBox"] = "Oui";

aOfvideotheque[8] = [];
aOfvideotheque[8]["titre"] = "Jin Roh";
aOfvideotheque[8]["annee"] = "1998";
aOfvideotheque[8]["realisateur"] = "Hiroyuki Okiura";
aOfvideotheque[8]["acteur"] = "";
aOfvideotheque[8]["genre"] = "Anime";
aOfvideotheque[8]["classement"] = "-18 ans";
aOfvideotheque[8]["type"] = "Film";
aOfvideotheque[8]["support"] = "DVD";
aOfvideotheque[8]["pret"] = "Non";
aOfvideotheque[8]["visione"] = "Oui";
aOfvideotheque[8]["note"] = "5";
aOfvideotheque[8]["steelBox"] = "Oui";

aOfvideotheque[9] = [];
aOfvideotheque[9]["titre"] = "Skyfall";
aOfvideotheque[9]["annee"] = "2012";
aOfvideotheque[9]["realisateur"] = "Sam Mendes";
aOfvideotheque[9]["acteur"] = "Daniel Craig";
aOfvideotheque[9]["genre"] = "Action";
aOfvideotheque[9]["classement"] = "Tout Public";
aOfvideotheque[9]["type"] = "Film";
aOfvideotheque[9]["support"] = "Blu Ray";
aOfvideotheque[9]["pret"] = "Non";
aOfvideotheque[9]["visione"] = "Non";
aOfvideotheque[9]["note"] = "4";
aOfvideotheque[9]["steelBox"] = "Non";

aOfvideotheque[10] = [];
aOfvideotheque[10]["titre"] = "Le choc des titans";
aOfvideotheque[10]["annee"] = "2010";
aOfvideotheque[10]["realisateur"] = "Louis Leterrier";
aOfvideotheque[10]["acteur"] = "Sam Worthington";
aOfvideotheque[10]["genre"] = "Fantastique";
aOfvideotheque[10]["classement"] = "Tout Public";
aOfvideotheque[10]["type"] = "Film";
aOfvideotheque[10]["support"] = "Blu Ray";
aOfvideotheque[10]["pret"] = "Oui";
aOfvideotheque[10]["visione"] = "Non";
aOfvideotheque[10]["note"] = "2";
aOfvideotheque[10]["steelBox"] = "Oui";

aOfvideotheque[11] = [];
aOfvideotheque[11]["titre"] = "Les mondes de Ralph";
aOfvideotheque[11]["annee"] = "2011";
aOfvideotheque[11]["realisateur"] = "Rich Moore";
aOfvideotheque[11]["acteur"] = "";
aOfvideotheque[11]["genre"] = "Animation";
aOfvideotheque[11]["classement"] = "Tout Public";
aOfvideotheque[11]["type"] = "Film";
aOfvideotheque[11]["support"] = "Blu Ray";
aOfvideotheque[11]["pret"] = "Non";
aOfvideotheque[11]["visione"] = "Oui";
aOfvideotheque[11]["note"] = "4";
aOfvideotheque[11]["steelBox"] = "Non";

function ajoutFilm() {
  var iLongueur = aOfvideotheque.length;
  aOfvideotheque[iLongueur] = [];
  aOfvideotheque[iLongueur]["titre"] = document.querySelector("#titre").value;
  aOfvideotheque[iLongueur]["annee"] = document.querySelector("#annee").value;
  aOfvideotheque[iLongueur]["realisateur"] = document.querySelector("#realisateur").value;
  aOfvideotheque[iLongueur]["acteur"] = document.querySelector("#acteur").value;
  aOfvideotheque[iLongueur]["genre"] = document.querySelector("#genre").value;
  aOfvideotheque[iLongueur]["classement"] = document.querySelector("#classement-select").value;
  aOfvideotheque[iLongueur]["type"] = document.querySelector("#type").value;
  aOfvideotheque[iLongueur]["support"] = document.querySelector("#support-select").value;
  aOfvideotheque[iLongueur]["pret"] = document.querySelector('input[name="pret"]:checked').value;
  aOfvideotheque[iLongueur]["visione"] = document.querySelector('input[name="visione"]:checked').value;
  aOfvideotheque[iLongueur]["note"] = document.querySelector("#note").value;
  if (document.querySelector("#steelBox").checked){
  aOfvideotheque[iLongueur]["steelBox"] = "Oui";}
  else{aOfvideotheque[iLongueur]["steelBox"] = "Non";}
  constructTable();
  resetForm();
}

function resetForm(){
document.getElementById("titre").value="";
document.getElementById("annee").value="";
document.getElementById("realisateur").value="";
document.getElementById("acteur").value="";
document.getElementById("classement-select").value="";
document.getElementById("genre").value="";
document.getElementById("type").value="";
document.getElementById("support-select").value="";
document.getElementById("note").value="";
document.getElementById("oui").checked=true;
document.getElementById("yes").checked=true;
document.getElementById("steelBox").checked=false;

}

function majFilm() {

  aOfvideotheque[iIndiceEditionEncours] = [];
  aOfvideotheque[iIndiceEditionEncours]["titre"] = document.querySelector("#titre").value;
  aOfvideotheque[iIndiceEditionEncours]["annee"] = document.querySelector("#annee").value;
  aOfvideotheque[iIndiceEditionEncours]["realisateur"] = document.querySelector("#realisateur").value;
  aOfvideotheque[iIndiceEditionEncours]["acteur"] = document.querySelector("#acteur").value;
  aOfvideotheque[iIndiceEditionEncours]["genre"] = document.querySelector("#genre").value;
  aOfvideotheque[iIndiceEditionEncours]["classement"] = document.querySelector("#classement-select").value;
  aOfvideotheque[iIndiceEditionEncours]["type"] = document.querySelector("#type").value;
  aOfvideotheque[iIndiceEditionEncours]["support"] = document.querySelector("#support-select").value;
  aOfvideotheque[iIndiceEditionEncours]["pret"] = document.querySelector('input[name="pret"]:checked').value;
  aOfvideotheque[iIndiceEditionEncours]["visione"] = document.querySelector('input[name="visione"]:checked').value;
  aOfvideotheque[iIndiceEditionEncours]["note"] = document.querySelector("#note").value;
  if (document.querySelector("#steelBox").checked){
  aOfvideotheque[iIndiceEditionEncours]["steelBox"] = "Oui";}
  else{aOfvideotheque[iIndiceEditionEncours]["steelBox"] = "Non";}
  constructTable();
  resetForm();


}

function supprimFilm(iIndiceSupprim) {
  var choice = confirm("Vous allez supprimer la fiche n° : " + iIndiceSupprim + ". Etes-vous sûr?");
    if (choice){
      aOfvideotheque.splice(iIndiceSupprim, 1);

    }
    constructTable();
}

var iIndiceEditionEncours;
function editFilm(iIndiceEdit) {
  alert("Vous allez éditer la fiche n° : " + iIndiceEdit);
  iIndiceEditionEncours = iIndiceEdit;
  document.querySelector("#titre").value = aOfvideotheque[iIndiceEdit]["titre"];
  document.querySelector("#annee").value = aOfvideotheque[iIndiceEdit]["annee"];
  document.querySelector("#realisateur").value = aOfvideotheque[iIndiceEdit]["realisateur"];
  document.querySelector("#acteur").value = aOfvideotheque[iIndiceEdit]["acteur"];
  document.querySelector("#genre").value = aOfvideotheque[iIndiceEdit]["genre"];
  document.querySelector("#type").value = aOfvideotheque[iIndiceEdit]["type"];
  document.getElementById("classement-select").value = aOfvideotheque[iIndiceEdit]["classement"];
  document.getElementById("support-select").value = aOfvideotheque[iIndiceEdit]["support"];
  if (aOfvideotheque[iIndiceEditionEncours]["pret"] === "Oui"){
    document.querySelector("#oui").checked = true;
  }
  else{
    document.querySelector("#non").checked = true;
  }
  if (aOfvideotheque[iIndiceEditionEncours]["visione"] === "Oui"){
    document.querySelector("#yes").checked = true;
  }
  else{
    document.querySelector("#no").checked = true;
  }

  document.querySelector("#note").value = aOfvideotheque[iIndiceEdit]["note"];
  if (aOfvideotheque[iIndiceEdit]["steelBox"] === "Oui"){
    document.querySelector("#steelBox").checked = true;
  }
  else{
    document.querySelector("#steelBox").checked = false;
  }
}

// // CONFIGURATION DATATABLE
// const configuration = {
//   stateSave: false,

//   order: [[1, "asc"]],

//   pagingType: "simple_numbers",

//   searching: true,

//   lengthMenu: [
//     [5, 10, 25, 50, 100, -1],
//     ["Cinq", "Dix", "Vingt cinq", "Cinquante", "Cent", "Tout"],
//   ],

//   language: {
//     info: "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
//     emptyTable: "Aucun utilisateur",
//     lengthMenu: "_MENU_ Utilisateurs par page",
//     search: "Rechercher : ",
//     zeroRecords: "Aucun résultat de recherche",
//     paginate: {
//       previous: "Précédent",
//       next: "Suivant",
//     },
//     sInfoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
//     sInfoEmpty: "Utilisateurs 0 à 0 sur 0 sélectionnée",
//   },

//   columns: [
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: true,
//     },
//     {
//       orderable: false,
//     },
//     {
//       orderable: false,
//     },
//   ],

//   retrieve: true,
// };

var tables;
$(document).ready(function () {
  constructTable();
  // INIT DATATABLE
  // tables = $("#table_films").DataTable(configuration);
});
