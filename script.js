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
      let articlePrincipal = data.journal.articlePrincipal
      console.log(articlePrincipal);

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici