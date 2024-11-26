# Trying-tech Symfony

Ce projet a pour but de tester la technologie Symfony.

## Installation

Pour lancer l'application exécuter : `docker compose up`  
- on peut ajouter l'option `-d` pour qu'il tourne en `deamon`

Pour la création du projet symfony, utiliser symfony-cli par le conteneur :   
- `docker exec -it ${CONTAINER_NAME} symfony new symfony --webapp`
- déplacer les fichiers pour qu'ils soient dans le dossier `symfony` top level du projet
- **et relancer le conteneur**

### Utilisation

On retrouvera dans cette application, le tutoriel de base de Symfony, avec :
- le contrôleur Lucky et la route number, donnant la route : `/lucky/number`
- 

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
