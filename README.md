# Template Node.js de base

Ce dépôt est un modèle de projet Node.js de base pour vous aider à démarrer rapidement vos projets. Il inclut une structure de base, des dépendances courantes et des fichiers de configuration.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- Node.js : [Télécharger Node.js](https://nodejs.org/)
- npm (gestionnaire de paquets Node.js) : npm est généralement installé avec Node.js.

## Configuration

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

Le serveur de développement est accessible à l'adresse suivante : http://localhost:3000, mais vous pouvez modifier le port dans le fichier `app.js`. Le serveur de développement est configuré pour se recharger automatiquement à chaque modification des fichiers du projet.

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
├── router
│   └── router.js
├── models
│   └── model.js
└── views
    ├── 404.ejs
    ├── index.ejs
    └── layout.ejs
```

- `app.js` : fichier principal du projet, il contient la configuration du serveur.
- `package.json` : fichier de configuration du projet, il contient la liste des dépendances et des scripts.
- `package-lock.json` : fichier généré automatiquement par npm pour gérer les dépendances.
- `public` : dossier contenant les fichiers statiques (css, images, javascript).
- `router` : dossier contenant les fichiers de routage.
- `models` : dossier contenant les fichiers de modèles.
- `views` : dossier contenant les fichiers de vues.

## Dépendances

- [Express](https://expressjs.com/) : framework web minimaliste pour Node.js.
- [EJS](https://ejs.co/) : moteur de template pour Node.js.

## Dépendances de développement

- Aucune pour l'instant

## Auteurs

- Frédéric Fouché.
