//configuration fichier router
//Import du Router Express
const express = require('express');
const controller = require('../app/controller/controller');

//Initialisation du router
const router = express.Router();
//importation des controllers
router.get('/', controller.homePage);
//route pour le favicon
router.get('/favicon.ico', controller.favicon);

//exportation du router
module.exports = router;