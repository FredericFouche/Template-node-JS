//sqlite 3
const sqlite = require('sqlite3');
//configuration de la bdd
const db = new sqlite.Database('./app/models/db.sqlite');
//création d'une table "info"
db.run(`CREATE TABLE IF NOT EXISTS info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page TEXT,
    content TEXT,
    author TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

//insertion de données dans la table "info"
db.run(
    `INSERT INTO info (page, content, author) VALUES ('home', 'Bienvenue sur le template de base de nodeJS', 'Fred')`
);
db.run(
    `INSERT INTO info (page, content, author) VALUES ('about', 'A propos de moi', 'Fred')`
);
db.run(
    `INSERT INTO info (page, content, author) VALUES ('contact', 'Contactez moi', 'Fred')`
);

//message de confirmation
console.log('La base de données a bien été initialisée');

//export de la bdd
module.exports = db;