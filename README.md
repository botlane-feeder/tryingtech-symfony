# Trying-tech Symfony

Ce projet a pour but de tester la technologie Symfony.

Ce projet est proposé avec :
- une GUI gérée par une application frontend par Vite.
- un serveur ExpressJS disponible pour servir 2 routes très simples
- un serveur Symfony disponible pour servir 2 routes très simples


## Installation

Pour lancer l'application, il faut choisir le backend à démarrer : 
- `docker compose -f compose.php.yaml up` : pour le PHP avec Symfony
- `docker compose -f compose.node.yaml up` : pour le NodeJS avec Express
- on peut ajouter l'option `-d` pour qu'il tourne en `deamon`

Pour la création du projet symfony, utiliser symfony-cli par le conteneur :   
- `docker exec -it ${CONTAINER_PHP_NAME} symfony new symfony --webapp`
- déplacer les fichiers pour qu'ils soient dans le dossier `symfony` top level du projet
- **et relancer le conteneur**

### Utilisation

L'application est disponible sur le port 9550 à l'url suivante `localhost:9580`.  
Tout les requêtes sont envoyées à l'application frontend, sauf les requêtes `/api` qui sont redirigées vers le backend, symfony ou express.

On retrouvera 2 fonctionnalités :  
- lancer un jet de deux dés
- calculer tous les nombres entiers jusqu'à une limite.

Les deux serveurs ont deux routes :
- `GET/api/roll-dice` : qui lance deux dès et retourne une réponse JSON `{number:(int)}`
- `GET/api/calculate-primes?limit=int` : qui calcule tous les nombres premiers jusqu'à la limite et retourne une réponse JSON `{primes:(int)}`

Ces deux routes sont interrogées par l'application.


## Configurations

### PHP-FPM

En utilisant PHP-FPM de base et en ajouter les prérequis

Pour le développement, il faut ajouter : 
- en logiciel Unix : git et wget
- symfony-cli
- configurer git pour pouvoir cloner le projet

### Nginx

En utilisant la version initiale et en configurant Nginx selon les [recommandations](https://symfony.com/doc/current/setup/web_server_configuration.html#nginx)


## Build

Pour build l'application, il faut lancer docker :  
- `docker build --file configs/php-fpm/Dockerfile .`

## Tests

Pour lancer les tests automatiques, il faut lancer les tests depuis le conteneur : 
- `docker exec -it ${CONTAINER_NAME} ./vendor/bin/phpunit tests/...`
