//importation info
const info = require('../models/info');

const controller404 = {
    notFoundMiddleware(req, res, next) {
        res.status(404).render('404', {
            info: info, // Assurez-vous que 'info' est accessible dans ce contexte
            date: new Date().getFullYear(),
        });
    },
};
//exportation du controller
module.exports = controller404;