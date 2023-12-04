//configuration fichier router
// Import du Router Express
const express = require("express");
const controller = require("../controller/controller");

// Initialisation du router
const router = express.Router();

//importation des controllers
router.get("/", controller.homePage);

//exportation du router
module.exports = router;
