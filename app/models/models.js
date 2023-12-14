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
        //création d'une table "project_info"
        db.run(
            `CREATE TABLE IF NOT EXISTS project_info(
    id INTEGER PRIMARY KEY,
    title TEXT,
    message TEXT,
    author TEXT,
    contact_link TEXT,
    github_link TEXT,
    title_404 TEXT,
    message_404 TEXT
)`,
            (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('La table project_info a bien été créée');
            }
        );
        //création d'une table "dependencies"
        db.run(
            `CREATE TABLE IF NOT EXISTS dependencies(
    id INTEGER PRIMARY KEY,
    project_id INTEGER,
    name TEXT,
    link TEXT,
    FOREIGN KEY(project_id) REFERENCES project_info(id)
)`,
            (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('La table dependencies a bien été créée');
            }
        );
    });

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
    // vérification si la table project_info est vide
    db.get('SELECT * FROM project_info', (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        if (row === undefined) {
            const sql = `
      INSERT INTO project_info(title, message, author, contact_link, github_link, title_404, message_404)
      VALUES('Template Node de base', 'Bienvenue sur le template nodeJS préconfiguré de Fred', 'Fred', '#', 'https://github.com/FredericFouche/Template-node-JS', '404', 'Page non trouvée')
      `;
            db.run(sql, (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('Une entrée a bien été ajoutée dans la table project_info');
            });
        } else {
            console.log('La table project_info est déjà initialisée');
        }
    });

    // vérification si la table dependencies est vide
    db.get('SELECT * FROM dependencies', (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        if (row === undefined) {
            db.get(
                'SELECT * FROM project_info WHERE title = ?',
                'Template Node de base',
                (err, row) => {
                    if (err) {
                        return console.error(err.message);
                    }
                    const sql = `
          INSERT INTO dependencies(project_id, name, link)
          VALUES( ? , 'sqlite3', 'https://www.npmjs.com/package/sqlite3'),
              ( ? , 'express', 'https://www.npmjs.com/package/express'),
              ( ? , 'ejs', 'https://www.npmjs.com/package/ejs'),
              ( ? , 'jest', 'https://www.npmjs.com/package/jest'),
              ( ? , 'supertest', 'https://www.npmjs.com/package/supertest'),
              ( ? , 'dotenv', 'https://www.npmjs.com/package/dotenv'),
              ( ? , 'morgan', 'https://www.npmjs.com/package/morgan'),
              ( ? , 'ESLint', 'https://www.npmjs.com/package/eslint')
          `;
                    db.run(
                        sql, [row.id, row.id, row.id, row.id, row.id, row.id, row.id, row.id],
                        (err) => {
                            if (err) {
                                return console.error(err.message);
                            }
                            console.log(
                                'Une entrée a bien été ajoutée dans la table dependencies'
                            );
                        }
                    );
                }
            );
        } else {
            console.log('La table dependencies est déjà initialisée');
        }
    });
}

//export de la bdd
module.exports = { db, initDb };