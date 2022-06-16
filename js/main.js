function constructTable() {
  var i;

  var sHTML = "";
  sHTML += "<thead>";
  sHTML += "<tr>";
  sHTML += "<td>Titre</td>";
  sHTML += "<td>Année de sortie</td>";
  sHTML += "<td>Réalisateur</td>";
  sHTML += "<td>Acteur</td>";
  sHTML += "<td>Genre</td>";
  sHTML += "<td>Classement</td>";
  sHTML += "<td>Type</td>";
  sHTML += "<td>Support</td>";
  sHTML += "<td>Prêt</td>";
  sHTML += "<td>Visionné</td>";
  sHTML += "<td>Note</td>";
  sHTML += "<td>Editer</td>";
  sHTML += "<td>Supprimer</td>";
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
    sHTML += '<td onClick="editPersonne(' + i + ')">Editer</td>';
    sHTML += "<td>Supprimer</td>";
    sHTML += "</tr>";
  }

  sHTML += "</tbody>";
  $("#table_films").html(sHTML);
}

var aOfvideotheque = [];
aOfvideotheque[0] = [];
aOfvideotheque[0]["titre"] = "Assasin's Creed";
aOfvideotheque[0]["miniature"] = "";
aOfvideotheque[0]["annee"] = "2016";
aOfvideotheque[0]["realisateur"] = "Justin Kurzel";
aOfvideotheque[0]["acteur"] = "Michael Fassbender";
aOfvideotheque[0]["genre"] = "Science-fiction";
aOfvideotheque[0]["classement"] = "-12";
aOfvideotheque[0]["type"] = "Film";
aOfvideotheque[0]["support"] = "BR 4K UHD";
aOfvideotheque[0]["pret"] = false;
aOfvideotheque[0]["visione"] = true;
aOfvideotheque[0]["note"] = "2";

aOfvideotheque[1] = [];
aOfvideotheque[1]["titre"] =
  "Le seigneur des anneaux la communauté de l'anneau";
aOfvideotheque[1]["miniature"] = "";
aOfvideotheque[1]["annee"] = "2001";
aOfvideotheque[1]["realisateur"] = "Peter Jackson";
aOfvideotheque[1]["acteur"] = "Elijah Wood";
aOfvideotheque[1]["genre"] = "Fantasy";
aOfvideotheque[1]["classement"] = "Tout public";
aOfvideotheque[1]["type"] = "Film";
aOfvideotheque[1]["support"] = "DVD";
aOfvideotheque[1]["pret"] = false;
aOfvideotheque[1]["visione"] = true;
aOfvideotheque[1]["note"] = "5";

aOfvideotheque[2] = [];
aOfvideotheque[2]["titre"] = "Heroes";
aOfvideotheque[2]["miniature"] = "";
aOfvideotheque[2]["annee"] = "2006";
aOfvideotheque[2]["realisateur"] = "Tim Kring";
aOfvideotheque[2]["acteur"] = "Milo Ventimiglia";
aOfvideotheque[2]["genre"] = "Science-fiction";
aOfvideotheque[2]["classement"] = "-16";
aOfvideotheque[2]["type"] = "Série";
aOfvideotheque[2]["support"] = "DVD";
aOfvideotheque[2]["pret"] = false;
aOfvideotheque[2]["visione"] = true;
aOfvideotheque[2]["note"] = "5";

aOfvideotheque[3] = [];
aOfvideotheque[3]["titre"] = "Chaos";
aOfvideotheque[3]["miniature"] = "";
aOfvideotheque[3]["annee"] = "2005";
aOfvideotheque[3]["realisateur"] = "Tony Giglio";
aOfvideotheque[3]["acteur"] = "Jason Statham";
aOfvideotheque[3]["genre"] = "Policier";
aOfvideotheque[3]["classement"] = "-12";
aOfvideotheque[3]["type"] = "Film";
aOfvideotheque[3]["support"] = "DVD";
aOfvideotheque[3]["pret"] = false;
aOfvideotheque[3]["visione"] = true;
aOfvideotheque[3]["note"] = "3";

aOfvideotheque[4] = [];
aOfvideotheque[4]["titre"] = "Land Of The Dead";
aOfvideotheque[4]["miniature"] = "";
aOfvideotheque[4]["annee"] = "2005";
aOfvideotheque[4]["realisateur"] = "George Andrew Romero";
aOfvideotheque[4]["acteur"] = "John Leguizamo";
aOfvideotheque[4]["genre"] = "Horreur";
aOfvideotheque[4]["classement"] = "-16";
aOfvideotheque[4]["type"] = "Film";
aOfvideotheque[4]["support"] = "DVD";
aOfvideotheque[4]["pret"] = false;
aOfvideotheque[4]["visione"] = true;
aOfvideotheque[4]["note"] = "4";

aOfvideotheque[5] = [];
aOfvideotheque[5]["titre"] = "Ce que veulent les femmes";
aOfvideotheque[5]["miniature"] = "";
aOfvideotheque[5]["annee"] = "2000";
aOfvideotheque[5]["realisateur"] = "Nancy Meyers";
aOfvideotheque[5]["acteur"] = "Mel Gibson";
aOfvideotheque[5]["genre"] = "Comédie";
aOfvideotheque[5]["classement"] = "Tout public";
aOfvideotheque[5]["type"] = "Film";
aOfvideotheque[5]["support"] = "DVD";
aOfvideotheque[5]["pret"] = false;
aOfvideotheque[5]["visione"] = true;
aOfvideotheque[5]["note"] = "4";

aOfvideotheque[6] = [];
aOfvideotheque[6]["titre"] = "Bad Taste";
aOfvideotheque[6]["miniature"] = "";
aOfvideotheque[6]["annee"] = "1987";
aOfvideotheque[6]["realisateur"] = "Peter Jackson";
aOfvideotheque[6]["acteur"] = "Terry Potter";
aOfvideotheque[6]["genre"] = "Horreur";
aOfvideotheque[6]["classement"] = "-16";
aOfvideotheque[6]["type"] = "Film";
aOfvideotheque[6]["support"] = "DVD";
aOfvideotheque[6]["pret"] = false;
aOfvideotheque[6]["visione"] = true;
aOfvideotheque[6]["note"] = "4";

aOfvideotheque[7] = [];
aOfvideotheque[7]["titre"] = "Tai-Chi Master";
aOfvideotheque[7]["miniature"] = "";
aOfvideotheque[7]["annee"] = "1993";
aOfvideotheque[7]["realisateur"] = "Yuen Woo-ping";
aOfvideotheque[7]["acteur"] = "Jet Li";
aOfvideotheque[7]["genre"] = "Arts martiaux";
aOfvideotheque[7]["classement"] = "Tout public";
aOfvideotheque[7]["type"] = "Film";
aOfvideotheque[7]["support"] = "DVD";
aOfvideotheque[7]["pret"] = false;
aOfvideotheque[7]["visione"] = true;
aOfvideotheque[7]["note"] = "5";

aOfvideotheque[8] = [];
aOfvideotheque[8]["titre"] = "Jin Roh";
aOfvideotheque[8]["miniature"] = "";
aOfvideotheque[8]["annee"] = "1998";
aOfvideotheque[8]["realisateur"] = "Hiroyuki Okiura";
aOfvideotheque[8]["acteur"] = "";
aOfvideotheque[8]["genre"] = "Anime";
aOfvideotheque[8]["classement"] = "Tout public";
aOfvideotheque[8]["type"] = "Film";
aOfvideotheque[8]["support"] = "DVD";
aOfvideotheque[8]["pret"] = false;
aOfvideotheque[8]["visione"] = true;
aOfvideotheque[8]["note"] = "5";

aOfvideotheque[9] = [];
aOfvideotheque[9]["titre"] = "Skyfall";
aOfvideotheque[9]["miniature"] = "";
aOfvideotheque[9]["annee"] = "2012";
aOfvideotheque[9]["realisateur"] = "Sam Mendes";
aOfvideotheque[9]["acteur"] = "Daniel Craig";
aOfvideotheque[9]["genre"] = "Action";
aOfvideotheque[9]["classement"] = "Tout public";
aOfvideotheque[9]["type"] = "Film";
aOfvideotheque[9]["support"] = "Blu ray";
aOfvideotheque[9]["pret"] = false;
aOfvideotheque[9]["visione"] = true;
aOfvideotheque[9]["note"] = "4";

aOfvideotheque[10] = [];
aOfvideotheque[10]["titre"] = "Le choc des titans";
aOfvideotheque[10]["miniature"] = "";
aOfvideotheque[10]["annee"] = "2010";
aOfvideotheque[10]["realisateur"] = "Louis Leterrier";
aOfvideotheque[10]["acteur"] = "Sam Worthington";
aOfvideotheque[10]["genre"] = "Fantastique";
aOfvideotheque[10]["classement"] = "Tout public";
aOfvideotheque[10]["type"] = "Film";
aOfvideotheque[10]["support"] = "Blu ray";
aOfvideotheque[10]["pret"] = false;
aOfvideotheque[10]["visione"] = true;
aOfvideotheque[10]["note"] = "2";

aOfvideotheque[11] = [];
aOfvideotheque[11]["titre"] = "Les mondes de Ralph";
aOfvideotheque[11]["miniature"] = "";
aOfvideotheque[11]["annee"] = "2011";
aOfvideotheque[11]["realisateur"] = "Rich Moore";
aOfvideotheque[11]["acteur"] = "";
aOfvideotheque[11]["genre"] = "Animation";
aOfvideotheque[11]["classement"] = "Tout public";
aOfvideotheque[11]["type"] = "Film";
aOfvideotheque[11]["support"] = "Blu ray";
aOfvideotheque[11]["pret"] = false;
aOfvideotheque[11]["visione"] = true;
aOfvideotheque[11]["note"] = "4";

function ajoutPersonne() {
  var iLongueur = aOfvideotheque.length;
  aOfvideotheque[iLongueur] = [];
  aOfvideotheque[iLongueur]["titre"] = $("#titre").val();
  aOfvideotheque[iLongueur]["annee"] = $("#annee").val();
  aOfvideotheque[iLongueur]["realisateur"] = $("#realisateur").val();
  aOfvideotheque[iLongueur]["acteur"] = $("#acteur").val();
  aOfvideotheque[iLongueur]["genre"] = $("#genre").val();
  aOfvideotheque[iLongueur]["classement"] = $("#classement").val();
  aOfvideotheque[iLongueur]["type"] = $("#type").val();
  aOfvideotheque[iLongueur]["support"] = $("#support").val();
  aOfvideotheque[iLongueur]["pret"] = $("#pret").val();
  aOfvideotheque[iLongueur]["visionne"] = $("#visionne").val();
  aOfvideotheque[iLongueur]["note"] = $("#note").val();
  constructTable();
}

function majPersonne() {}

function supprimPersonne() {}

var iIndiceEditionEncours;
function editPersonne(iIndiceEdit) {
  alert("iIndiceEdit = " + iIndiceEdit);
  iIndiceEditionEncours = iIndiceEdit;
  $("#titre").val(aOfvideotheque[iIndiceEdit]["titre"]);
  $("#annee").val(aOfvideotheque[iIndiceEdit]["annee"]);
  $("#realisateur").val(aOfvideotheque[iIndiceEdit]["realisateur"]);
  $("#acteur").val(aOfvideotheque[iIndiceEdit]["acteur"]);
  $("#genre").val(aOfvideotheque[iIndiceEdit]["genre"]);
  $("#type").val(aOfvideotheque[iIndiceEdit]["type"]);
  $("#classement").val(aOfvideotheque[iIndiceEdit]["classement"]);
  $("#type").val(aOfvideotheque[iIndiceEdit]["type"]);
  $("#note").val(aOfvideotheque[iIndiceEdit]["note"]);
}

// CONFIGURATION DATATABLE
const configuration = {
  stateSave: false,

  order: [[1, "asc"]],

  pagingType: "simple_numbers",

  searching: true,

  lengthMenu: [
    [10, 25, 50, 100, -1],
    ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"],
  ],

  language: {
    info: "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
    emptyTable: "Aucun utilisateur",
    lengthMenu: "_MENU_ Utilisateurs par page",
    search: "Rechercher : ",
    zeroRecords: "Aucun résultat de recherche",
    paginate: {
      previous: "Précédent",
      next: "Suivant",
    },
    sInfoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    sInfoEmpty: "Utilisateurs 0 à 0 sur 0 sélectionnée",
  },

  columns: [
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: false,
    },
    {
      orderable: false,
    },
  ],

  retrieve: true,
};

var tables;
$(document).ready(function () {
  constructTable();
  // INIT DATATABLE
  tables = $("#table_films").DataTable(configuration);
});
