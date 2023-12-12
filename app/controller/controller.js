const info = require('../models/info');

//configuration controller de base
const controller = {
    //methode pour la page d'accueil
    homePage: (req, res) => {
        res.render('index', {
            info: info,
            date: new Date().getFullYear(),
        });
    },
    favicon: (req, res) => {
        res.status(204).end();
    },
};

//exportation du controller
module.exports = controller;