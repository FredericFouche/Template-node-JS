#!/bin/bash

if [ "$(id -u)" != "0" ]; then
    echo "Ce script doit être exécuté avec des droits d'administration."
    echo "Veuillez exécuter ce script avec 'sudo' ou en tant que root."
    exit 1
fi

# Fonction pour demander à l'utilisateur de saisir une valeur avec une option par défaut
ask_with_default() {
    prompt="$1 [$2]: "
    read -p "$prompt" input
    echo "${input:-$2}"
}

# Initialisation du projet npm
echo "Initialisation du projet npm..."
npm init -y
npm install

# Demander à l'utilisateur de saisir un port
port=$(ask_with_default "Veuillez saisir un port" 3000)

# Générer le contenu du fichier .env avec le port saisi par l'utilisateur
echo "PORT=$port" > .env

# Créer le fichier .gitignore
if [ ! -f .gitignore ]; then
    echo "Création du fichier .gitignore..."
    echo "node_modules" > .gitignore
    echo ".env" >> .gitignore
fi

# Demander à l'utilisateur s'il souhaite initialiser et configurer Git
init_git=$(ask_with_default "Voulez-vous initialiser et configurer Git pour ce projet ? (y/n)" "y")

if [ "$init_git" = "y" ]; then
    # Initialiser Git
    git init

    # Ajouter des fichiers à Git
    add_git=$(ask_with_default "Voulez-vous ajouter des fichiers à Git ? (y/n)" "y")
    if [ "$add_git" = "y" ]; then
        git add .
    fi

    # Faire un commit initial
    commit_git=$(ask_with_default "Voulez-vous faire un commit initial ? (y/n)" "y")
    if [ "$commit_git" = "y" ]; then
        message=$(ask_with_default "Veuillez saisir un message de commit" "Initial commit")
        git commit -m "Initialisation du projet avec le message : $message"
    fi

    # Configurer un dépôt distant
    remote_git=$(ask_with_default "Voulez-vous configurer un dépôt distant ? (y/n)" "n")
    if [ "$remote_git" = "y" ]; then
        url=$(ask_with_default "Veuillez saisir l'URL de votre dépôt distant")
        git remote add origin "$url"

        # Pousser les modifications vers le dépôt distant
        push_git=$(ask_with_default "Voulez-vous pousser vos modifications vers le dépôt distant ? (y/n)" "y")
        if [ "$push_git" = "y" ]; then
            git push -u origin master
        fi
    fi
fi

# Demander à l'utilisateur s'il souhaite créer une configuration ESLint
init_eslint=$(ask_with_default "Voulez-vous créer une configuration ESLint ? (y/n)" "y")

if [ "$init_eslint" = "y" ]; then
    # Créer une configuration ESLint
    npx eslint --init
fi

# Mettre à jour les dépendances du projet
echo "Mise à jour des dépendances du projet..."
npm update
echo "Mise à jour terminée !"

# Proposer à l'utilisateur de lancer le serveur
launch=$(ask_with_default "Voulez-vous lancer le serveur ? (y/n)" "y")
if [ "$launch" = "y" ]; then
    # Lancer le serveur
    npm start
fi

# Animation de fin
echo "Initialisation terminée !"
echo "Merci d'avoir utilisé ce script !"
echo "A bientôt !"
echo "Frédéric Fouché"

# Fin du script
exit 0