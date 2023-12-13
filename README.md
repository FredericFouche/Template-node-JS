# Template Node.js de base

Ce dépôt est un modèle de projet Node.js de base pour vous aider à démarrer rapidement vos projets. Il inclut une structure de base, des dépendances courantes et des fichiers de configuration.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- Node.js : [Télécharger Node.js](https://nodejs.org/)
- npm (gestionnaire de paquets Node.js) : npm est généralement installé avec Node.js.

## Configuration sans utiliser le fichier .sh

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/FredericFouche/Template-node-JS.git
```

2. Accédez au répertoire du projet en exécutant la commande suivante :

```bash
cd template-node-js
```

3. Installez les dépendances du projet

```bash
npm install
```

4. Lancez le serveur de développement :

```bash
npm run dev
```

5. Lancez le serveur de production :

```bash
npm start
```

6. Accédez au serveur de développement dans votre navigateur :

```bash
http://localhost:3000
```

7. Lancez les tests avec jest et supertest:

```bash
npm test
```

## Configuration en utilisant le fichier .sh

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/FredericFouche/Template-node-JS.git
```

2. Accédez au répertoire du projet en exécutant la commande suivante :

```bash
cd template-node-js
```

3. Exécutez le fichier `launch.sh` :

```bash
./launch.sh
```

Il est possible que votre ordinateur vous demande l'autorisation d'exécuter le fichier, dans ce cas, acceptez. Il peut y avoir un soucis de droit d'exécution sur le fichier.

4. Configuration launch.sh :

Le fichier bash va vous poser quelques questions pour configurer le projet, ces questions concernent git/github, npm et le lancement du serveur.

- git/github : le fichier bash va vous demander si vous souhaitez initialiser un dépôt git et le lier à un dépôt github. Si vous répondez oui, il vous demandera l'url du dépôt github. Si vous répondez non, il ne fera rien.

- npm : le fichier bash va installer les dépendances du projet et initialiser npm dans votre dépôt local.

- lancement serveur : le fichier bash va vous demander si vous souhaitez lancer le serveur de développement. Si vous répondez oui, il va lancer le serveur de développement. Si vous répondez non, il ne fera rien.

5. Accédez au serveur de développement dans votre navigateur :

```bash
http://localhost:3000
```

Le serveur de développement est accessible à l'adresse suivante : http://localhost:3000, mais vous pouvez modifier le port dans le fichier `app.js` ou le fichier `.env`. Le serveur de développement est configuré pour se recharger automatiquement à chaque modification des fichiers du projet. Le serveur comprends une base de donnée SQLite qui est créée automatiquement au lancement du serveur, elle est initialisée avec quelques valeurs sans intérêt mais qui permettent de visualiser la structure.

## Structure du projet

Ce template respecte l'architecture MVC (Modèle-Vue-Contrôleur), voici sa structure :

```
template-node-js
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── public
│   ├── css
│   │   └── style.css
│   ├── img
│   └── js
│       └── script.js
├── app
│   ├── router.js
│   ├── utils.js
│   ├── middleware
│   │   └── 404.js
│   ├── controller
│   │   └── controller.js
│   ├── models
│   │   └── model.js
│   │   └── info.json
│   └── views
│       ├── 404.ejs
│       ├── index.ejs
│       └── layout.ejs
└── __tests__
    └── app.test.js
```

- `app.js` : fichier principal du projet, il contient la configuration du serveur.
- `package.json` : fichier de configuration du projet, il contient la liste des dépendances et des scripts.
- `package-lock.json` : fichier généré automatiquement par npm pour gérer les dépendances.
- `public` : dossier contenant les fichiers statiques (css, images, javascript).
- `router` : dossier contenant les fichiers de routage.
- `models` : dossier contenant les fichiers de modèles.
- `views` : dossier contenant les fichiers de vues.
- `middleware` : dossier contenant les fichiers de middleware.
- `controller` : dossier contenant les fichiers de contrôleurs.
- `__tests__` : dossier contenant les fichiers de tests.

## Dépendances

- [Express](https://expressjs.com/) : framework web minimaliste pour Node.js.
- [EJS](https://ejs.co/) : moteur de template pour Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv) : module qui charge les variables d'environnement à partir d'un fichier `.env`.
- [morgan](https://www.npmjs.com/package/morgan) : module qui permet de logger les requêtes HTTP.
- [sqlite3](https://www.npmjs.com/package/sqlite3) : module qui permet de manipuler une base de données SQLite.

## Dépendances de développement

- [jest](https://jestjs.io/) : framework de test pour Node.js.
- [supertest](https://www.npmjs.com/package/supertest) : module qui permet de tester les requêtes HTTP.

## Auteurs

- Frédéric Fouché.
