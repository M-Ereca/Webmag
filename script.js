function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      let titreJournal = data.journal.nomJournal
      console.log(titreJournal);

      let TitrePhraseAccroche = data.journal.phraseAccroche
      console.log(TitrePhraseAccroche);

      let texteAppelAction = data.journal.texteAppelAction
      console.log(texteAppelAction);

      let articlePrincipalTitre = data.journal.articlePrincipal.titre
      console.log(articlePrincipalTitre);

      let articlePrincipaldate= data.journal.articlePrincipal.date
      console.log(articlePrincipaldate);

      let articlePrincipaldescription = data.journal.articlePrincipal.description
      console.log(articlePrincipaldescription);

      let articlePrincipaltheme = data.journal.articlePrincipal.theme
      console.log(articlePrincipaltheme);
      
      let articlePrincipalimage= data.journal.articlePrincipal.image
      console.log(articlePrincipalimage);

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 function affichelejournal() {
  let title = data.journal.nomJournal;
  console.log(title);
  let titleID = document.getElementById("title");
  console.log(titleID);
  titleID.insertAdjacentHTML("beforeend", title);
}
function afficheimage() {
  let image = data.journal.articlePrincipalimage;
  console.log(image);
  let imageID = document.getElementById("image")
  console.log(imageID);
  imageID.insertAdjacentHTML("beforeend", image)
 }
