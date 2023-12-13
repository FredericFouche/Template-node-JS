//sqlite 3
const sqlite = require('sqlite3');
//configuration de la bdd
const db = new sqlite.Database('./app/models/db.sqlite');

function initDb() {
  db.serialize(() => {
    //création d'une table "info"
    db.run(
      `CREATE TABLE IF NOT EXISTS info (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        dependance TEXT,
        date DATETIME
    )`,
      (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('La table info a bien été créée');
      }
    );

    //initialisation de la bdd
    db.get('SELECT * FROM info WHERE name = ?', 'Fred', (err, row) => {
      if (err) {
        return console.error(err.message);
      }

      if (row === undefined) {
        const sql = `INSERT INTO info (name, dependance, date) VALUES ('Fred', 'sqlite3 - express - ejs - jest - supertest - dotenv - morgan', datetime('now'))`;
        db.run(sql, (err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log('Une entrée a bien été ajoutée dans la table info');
        });
      } else {
        console.log('La table info est déjà initialisée');
      }
    });
  });
}

//export de la bdd
module.exports = { db, initDb };
