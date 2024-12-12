#Makefile
SHELL := /bin/bash
include .env
export VERSION
export NAME
export REGISTRY_NAME

# Cible par défaut
all: help



build_symfony:
	@docker build --tag ${REGISTRY_NAME}${NAME}-php-api:latest --tag ${REGISTRY_NAME}${NAME}-php-api:${VERSION} --file configs/php-fpm/Dockerfile .

push_symfony: build_symfony
	@docker push ${REGISTRY_NAME}${NAME}-php-api:latest
	@docker push ${REGISTRY_NAME}${NAME}-php-api:${VERSION}


build_vite:
	@docker build --tag ${REGISTRY_NAME}${NAME}-vite-gui:latest --tag ${REGISTRY_NAME}${NAME}-vite-gui:${VERSION} --file configs/php-fpm/Dockerfile .

push_vite: build_vite
	@docker push ${REGISTRY_NAME}${NAME}-vite-gui:latest
	@docker push ${REGISTRY_NAME}${NAME}-vite-gui:${VERSION}

up_symfony:
	@docker compose -f compose.php.yaml up

up_express:
	@docker compose -f compose.node.yaml up


help:
	@echo "Makefile pour exécuter des commandes pour le projet '${NAME}'"