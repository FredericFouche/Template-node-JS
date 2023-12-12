const request = require('supertest');
const express = require('express');
const router = require('../app/router');

const app = express();
//ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

//router
app.use(router);

//public
app.use(express.static('public'));

describe('Test des routes', () => {
  test("GET / - devrait retourner la page d'accueil", async () => {
    const response = await request(app).get('/');
    console.log(response.text); // Afficher la réponse complète pour le débogage
    expect(response.statusCode).toBe(200);
  });

  test('GET /favicon.ico - devrait retourner le favicon', async () => {
    const response = await request(app).get('/favicon.ico');
    expect(response.statusCode).toBe(204);
  });

  test('GET /route-inexistante - devrait retourner une erreur 404', async () => {
    const response = await request(app).get('/route-inexistante');
    expect(response.statusCode).toBe(404);
  });
});
