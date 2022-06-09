var aOfPersonnes= [];
			aOfPersonnes[0]= [];
			aOfPersonnes[0]["prenom"]= "Guillian";
			aOfPersonnes[0]["nom"]= "Aufrère";
			aOfPersonnes[0]["age"]= "24";
			aOfPersonnes[0]["tel"]= "0600000001";
			aOfPersonnes[0]["mail"]= "Guillian@afpa.fr";

			aOfPersonnes[1]= [];
			aOfPersonnes[1]["prenom"]= "Julie";
			aOfPersonnes[1]["nom"]= "Barenne";
			aOfPersonnes[1]["age"]= "27";
			aOfPersonnes[1]["tel"]= "0600000002";
			aOfPersonnes[1]["mail"]= "Julie@afpa.fr";

			aOfPersonnes[2]= [];
			aOfPersonnes[2]["prenom"]= "Benjamin";
			aOfPersonnes[2]["nom"]= "Roma-Sacconney";
			aOfPersonnes[2]["age"]= "28";
			aOfPersonnes[2]["tel"]= "0600000003";
			aOfPersonnes[2]["mail"]= "Benjamin@afpa.fr";

			aOfPersonnes[3]= [];
			aOfPersonnes[3]["prenom"]= "Aurelien";
			aOfPersonnes[3]["nom"]= "Bernal";
			aOfPersonnes[3]["age"]= "34";
			aOfPersonnes[3]["tel"]= "0600000004";
			aOfPersonnes[3]["mail"]= "Aurelien@afpa.fr";

			aOfPersonnes[4]= [];
			aOfPersonnes[4]["prenom"]= "Jacques";
			aOfPersonnes[4]["nom"]= "Coja";
			aOfPersonnes[4]["age"]= "30";
			aOfPersonnes[4]["tel"]= "0600000005";
			aOfPersonnes[4]["mail"]= "Jacques@afpa.fr";

			aOfPersonnes[5]= [];
			aOfPersonnes[5]["prenom"]= "JiJou";
			aOfPersonnes[5]["nom"]= "Pagan";
			aOfPersonnes[5]["age"]= "29";
			aOfPersonnes[5]["tel"]= "0600000006";
			aOfPersonnes[5]["mail"]= "JiJou@afpa.fr";
			
			function constructTable()	{
				var i;

				var sHTML= "";
				sHTML+= "<thead>";
				sHTML+= "<tr>";
				sHTML+= "<td>Prénom</td>";
				sHTML+= "<td>Nom</td>";
				sHTML+= "<td>Email</td>";
				sHTML+= "<td>Editer</td>";
				sHTML+= "<td>Supprimer</td>";
				sHTML+= "</tr>";
				sHTML+= "</thead>";
				sHTML+= "<tbody>";

				for (i=0; i<aOfPersonnes.length; i++)	{
					sHTML+= "<tr>";
					sHTML+= "<td>" + aOfPersonnes[i]["prenom"] + "</td>";
					sHTML+= "<td>" + aOfPersonnes[i]["nom"] + "</td>";
					sHTML+= "<td>" + aOfPersonnes[i]["mail"] + "</td>";
					sHTML+= "<td onClick=\"editPersonne(" + i + ")\">Editer</td>";
					sHTML+= "<td>Supprimer</td>";
					sHTML+= "</tr>";
				}
				
				sHTML+= "</tbody>";
				$('#table_personnes').html(sHTML);
			}
			
			function ajoutPersonne()	{
				var iLongueur= aOfPersonnes.length;
				aOfPersonnes[iLongueur]= [];
				aOfPersonnes[iLongueur]["prenom"]= $('#prenom').val();
				aOfPersonnes[iLongueur]["nom"]= $('#nom').val();
				aOfPersonnes[iLongueur]["age"]= $('#age').val();
				aOfPersonnes[iLongueur]["tel"]= $('#telephone').val();
				aOfPersonnes[iLongueur]["mail"]= $('#email').val();
				constructTable();
			}

			function majPersonne()	{
			}

			function supprimPersonne()	{
			}
			
			var iIndiceEditionEncours;
			function editPersonne(iIndiceEdit)	{
				alert("iIndiceEdit = " + iIndiceEdit);
				iIndiceEditionEncours= iIndiceEdit;
				$('#prenom').val( aOfPersonnes[iIndiceEdit]["prenom"] );
			}

			// CONFIGURATION DATATABLE
			const configuration = {
				"stateSave": false,
				"order": [[1, "asc"]],
				"pagingType": "simple_numbers",
				"searching": true,
				"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"]], 
				"language": {
					"info": "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
					"emptyTable": "Aucun utilisateur",
					"lengthMenu": "_MENU_ Utilisateurs par page",
					"search": "Rechercher : ",
					"zeroRecords": "Aucun résultat de recherche",
					"paginate": {
						"previous": "Précédent",
						"next": "Suivant"
					},
					"sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
					"sInfoEmpty":      "Utilisateurs 0 à 0 sur 0 sélectionnée",
				},
				"columns": [
					{
						"orderable": true
					},
					{
						"orderable": true
					},
					{
						"orderable": true
					},
					{
						"orderable": false
					},
					{
						"orderable": false
					}
				],
				'retrieve': true
			};

			var tables;
			$(document).ready(function() {
				constructTable();
				// INIT DATATABLE
				tables = $('#table_personnes').DataTable(configuration);
			});