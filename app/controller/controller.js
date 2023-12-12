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
    erreur404: (req, res) => {
        res.status(404).render('404', {
                info: info,
                date: new Date().getFullYear(),
            }),
            console.log('Erreur 404');
    },
};

//exportation du controller
module.exports = controller;