//configuration de base du serveur express

//importation des modules
const express = require("express");
const path = require("path");

//importation du router
const router = require("./router/router");

// Créer une app express
const app = express();

//configuration ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//configuration du dossier static
app.use(express.static("public"));

//configuration du server
app.use(router);

//définition du port
const PORT = 3000;

//lancement du server
app.listen(PORT, () => {
  console.log(
    `Serveur lancé sur le port : ${PORT}, il est disponible à l'adresse : http://localhost:${PORT}`
  );
});
