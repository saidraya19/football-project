Tachkila Atlas FC

Application web pour gérer un club de football : les joueurs, la composition de l'équipe en 4-4-2 et les matchs.

Les pages
Effectif (Effectif.html) : gérer les joueurs.
Composition (index.html) : placer les joueurs sur le terrain.
Matchs (matchs.html) : gérer les matchs et les scores.
Fonctionnalités

Effectif

Ajouter, modifier et supprimer un joueur (nom, numéro, poste, âge, situation).
Situation : En Forme ou Blessé.
Choisir un capitaine.
Rechercher un joueur par nom et filtrer par poste.
Pagination : 4 joueurs par page.

Composition

Terrain en 4-4-2.
Choisir la position de chaque joueur ou le mettre sur le banc.
Un joueur ne peut jouer qu'à un poste compatible avec le sien.
Une position déjà prise ne peut pas être reprise.
Un joueur blessé ne peut pas être placé sur le terrain.

Matchs

Ajouter, modifier et supprimer un match.
Le statut (À venir ou Joué) dépend de la date et de l'heure.
Saisir et modifier le score, avec le résultat (Victoire, Défaite ou Nul).
Filtrer les matchs et rechercher par adversaire.

En général

Validation des formulaires avec des regex.
Messages de succès et d'erreur.
Données sauvegardées avec localStorage.
Interface adaptée au mobile et à l'ordinateur.
Règles de validation
Nom : 3 à 30 lettres.
Numéro : de 1 à 99, unique.
Âge : de 15 à 50 ans.
Score : entier de 0 à 99.
Technologies
HTML5, CSS3
JavaScript (modules, DOM, événements)
Tailwind CSS
Regex
localStorage
Git et GitHub
Structure
index.html          Composition
Effectif.html       Effectif
matchs.html         Matchs
main.js             script de la composition
effectif.js         script de l'effectif
matchs.js           script des matchs
functions.js        fonctions des joueurs
matchs_function.js  fonctions des matchs
data.js             données, regex et localStorage
doms.js             sélecteurs de la page Matchs
style.css           styles
img.jpg             image du terrain
Installation
Cloner le dépôt Git.
Ouvrir le projet dans Visual Studio Code.
Lancer index.html avec Live Server.

Le projet utilise des modules JavaScript, il faut donc passer par Live Server (pas d'ouverture directe du fichier).

Auteur

Said Raya