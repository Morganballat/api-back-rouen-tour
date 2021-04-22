// Module afin d'utiliser un fichier .env regroupant nos paramètres prédéfinis, par exemple le numéro du port d'écoute.
// utile car ce fichier est local et n'est mais exporté, je peux donc travailler avec des données sensibles localement sans avoir à retaper toutes les informations
// Par exemple: les informations pour me connecter à ma base de données.
require('dotenv').config();

//Définition du port sur lequel notre serveur sera configuré.
const port = process.env.PORT || 5049;

// Module nécessaire à la création d'un serveur.
const express = require('express');

//Mise à disposition du serveur dans une constante (app par convention).
const app = express();

//lancement du serveur sur son port d'écoute.
app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
