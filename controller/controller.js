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
};

//exportation du controller
module.exports = controller;
