# Ceci est un fichier bash qui permet d'automatiser l'initialisation de l'environnement de travail et de ses outils
# Auteur: Frédéric Fouché
# Initialisation du projet npm
npm init -y
# installation des dépendances avec npm install
npm install
# Demander à l'utilisateur de saisir un port
read -p "Veuillez saisir un port : " port
# Générer le contenu du fichier .env avec le port saisi par l'utilisateur
echo "PORT=$port" > .env

# Créer le fichier .gitignore
touch .gitignore
# Ajouter le contenu du fichier .gitignore
echo "node_modules" > .gitignore
# Ajouter le fichier .env au fichier .gitignore
echo ".env" >> .gitignore

# Demander à l'utilisateur s'il souhaite initialiser et configurer Git
read -p "Voulez-vous initialiser et configurer Git pour ce projet ? (y/n) " init_git

if [ "$init_git" = "y" ]; then
    # Initialiser Git
    git init

    # Ajouter des fichiers à Git
    read -p "Voulez-vous ajouter des fichiers à Git ? (y/n) " add_git
    if [ "$add_git" = "y" ]; then
        git add .
    fi

    # Faire un commit initial
    read -p "Voulez-vous faire un commit initial ? (y/n) " commit_git
    if [ "$commit_git" = "y" ]; then
        # Demander à l'utilisateur de saisir un message de commit
        read -p "Veuillez saisir un message de commit : " message
        git commit -m "Initialisation du projet avec le message : $message"
    fi

    # Configurer un dépôt distant
    read -p "Voulez-vous configurer un dépôt distant ? (y/n) " remote_git
    if [ "$remote_git" = "y" ]; then
        read -p "Veuillez saisir l'URL de votre dépôt distant : " url
        git remote add origin "$url"

        # Pousser les modifications vers le dépôt distant
        read -p "Voulez-vous pousser vos modifications vers le dépôt distant ? (y/n) " push_git
        if [ "$push_git" = "y" ]; then
            git push -u origin master
        fi
    fi
fi


# Proposer à l'utilisateur le Lancement du serveur
read -p "Voulez-vous lancer le serveur ? (y/n) " launch
# Si l'utilisateur saisit y, alors lancer le serveur
if [ $launch = "y" ]
then
    # Lancer le serveur
    npm start
fi

# Animation de fin
echo "Initialisation terminée !"
echo "Merci d'avoir utilisé ce script !"
echo "A bientôt !"
echo "par Frédéric Fouché"

# Fin du script
exit 0
