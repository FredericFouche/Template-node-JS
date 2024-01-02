// configuration de base du serveur express
// import de dotenv
require('dotenv').config();

// importation des modules
const express = require('express');

// importation de express-session
const session = require('express-session');

// importation de fs
const fs = require('fs');

// importation de path
const path = require('path');

// morgan pour les logs
const morgan = require('morgan');

// importation des utils
const utilsModule = require('./app/utils');

// import 404
const controller404 = require('./app/middleware/404');

// import db depuis /app/models/models.js
const db = require('./app/models/models');

db.initDb();

// importation du router
const router = require('./app/router');

// Créer une app express
const app = express();

// configuration ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views'));

// configuration de morgan
const morganMode = process.env.MORGAN_MODE;
if (morganMode === 'dev') {
  app.use(morgan('dev'));
} else {
}

// configuration du dossier static
app.use(express.static('public'));

// configuration de express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Enregistrement des locals - pour fournir des données communes à chaque vue
app.use(utilsModule.setLocals);
// configuration du server
app.use(router);

// middleware sitemap
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// configuration de la 404
app.use(controller404.notFoundMiddleware);

// définition du port
const PORT = process.env.PORT || 3000;

// lancement du server
app.listen(PORT, () => {
  console.log(
    `Serveur lancé sur le port : ${PORT}, il est disponible à l'adresse : http://localhost:${PORT}`
  );
});
