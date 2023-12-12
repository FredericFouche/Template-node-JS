//configuration de base du serveur express
//import de dotenv
require('dotenv').config();
//importation des modules
const express = require('express');
const path = require('path');
const utilsModule = require('./app/utils');
const sqlite = require('sqlite3');

// import db depuis /app/models/models.js
const db = require('./app/models/models');

//morgan pour les logs
const morgan = require('morgan');

//importation du router
const router = require('./app/router');

// Créer une app express
const app = express();

//configuration ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views'));

//configuration de morgan
const morganMode = process.env.MORGAN_MODE;
if (morganMode === 'dev') {
    app.use(morgan('dev'));
} else {}

//configuration du dossier static
app.use(express.static('public'));

//Enregistrement des locals - pour fournir des données communes à chaque vue
app.use(utilsModule.setLocals);
//configuration du server
app.use(router);

//définition du port
const PORT = process.env.PORT || 3000;

//lancement du server
app.listen(PORT, () => {
    console.log(
        `Serveur lancé sur le port : ${PORT}, il est disponible à l'adresse : http://localhost:${PORT}`
    );
});