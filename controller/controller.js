//configuration controller de base
const controller = {
  //methode pour la page d'accueil
  homePage: (req, res) => {
    res.render("index", {
      title: "Template Node de base",
      message: "Bienvenue sur le template nodeJS préconfiguré de Fred",
      dependances: ["express", "ejs"],
      auteur: "Fred",
      linkContact: "#",
      linkGithub: "https://github.com/FredericFouche/Template-node-JS",
      date: new Date().getFullYear(),
    });
  },
  favicon: (req, res) => {
    res.status(204).end();
  },
  erreur404: (req, res) => {
    res.status(404).render("404", {
      title: "404",
      message: "Page non trouvée",
      linkGithub: "https://github.com/FredericFouche/Template-node-JS",
    }),
      console.log("Erreur 404");
  },
};

//exportation du controller
module.exports = controller;
