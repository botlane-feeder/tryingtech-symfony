# Vite

C'est un *JS build Toll*, qui simplifie la manière de développer et de build une application frontend.

Son fonctionnement repose sur 2 principes :  
- servir l'application frontend en local pour le développement, comme un environnement de prod
- créer un bundle de tout le JS et CSS pour la production

La création de cet outil a pour objectif de simplifier et accélérer la manière de build. 

Depuis 2015, JS permet d'importer des modules, ce qui simplifie le découpage et l'importation pour le développement.
Vite crée des niveaux de modules JS pour charger le code instantannément.
Vite permet de mettre à jour en tournant le rechargement d'un module qui aurait été modifié, pour mettre à jour l'application sur le navigateur.
  - HMR Hot Module Replacement
Vite gère la configuration, pour build l'application pour la production.

## Lancement

Installer les despendances

```bash
npm install
```

Démarrer le serveur Vite

```bash
npm run dev
```

## Développer avec Vite

Le serveur Vite se base sur un point d'entrée, le fichier index.html.  
Ce fichier importe un script module `main.js`, qui fait tourner le programme de l'application frontend.

Le système Vite gère ensuite l'importation des modules et on peut décomposer l'application en différents types de fichiers :
- les composants qui vont gérer une partie de l'affichage
- les modules qui seront la sources de calcul de données, appelés par les composants

### Exemple



## Création d'une applicaiton Vite

```bash
npm create vite@latest ${frontendApp}
```