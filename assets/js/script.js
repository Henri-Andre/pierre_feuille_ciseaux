
      // une fonction pour jouer
      function jouer(choixJoueur) {
        // l'IA
        let options = ["pierre", "papier", "ciseaux"];
        let choixIA = options[Math.floor(Math.random() * options.length)];

        // Le vainqueur
        if (choixJoueur === choixIA) {
          alert("Match nul !");
        } else if ((choixJoueur === "pierre" && choixIA === "ciseaux") || (choixJoueur === "papier" && choixIA === "pierre") || (choixJoueur === "ciseaux" && choixIA === "papier")) {
          alert("Vous avez gagné !");
          
          document.getElementById("score-joueur").innerHTML = parseInt(document.getElementById("score-joueur").innerHTML) + 1;
          if (parseInt(document.getElementById("score-joueur").innerHTML) === 3) {
            alert("Vous avez gagné la partie !");
            // réinitialise le score
            document.getElementById("score-joueur").innerHTML = 0;
            document.getElementById("score-ia").innerHTML = 0;
          }
        } else {
          alert("L'IA a gagné !");
          document.getElementById("score-ia").innerHTML = parseInt(document.getElementById("score-ia").innerHTML) + 1;
          // On vérifie si l'IA a gagné la partie
          if (parseInt(document.getElementById("score-ia").innerHTML) === 3) {
            alert("L'IA a gagné la partie !");
            // réinitialise le score
            document.getElementById("score-joueur").innerHTML = 0;
            document.getElementById("score-ia").innerHTML = 0;
          }
        }
      }
