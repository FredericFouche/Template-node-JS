//fichier qui contient les fonctions utilitaires
const utilsModule = {
  setLocals(req, res, next) {
    res.locals = {
      // définition des locals
    };

    // next permet de passer au prochain middleware
    next();
  },
};

module.exports = utilsModule;
