# Use the official PHP image from the Docker Hub
FROM php:8.3-fpm

# Install system dependencies
#  - wget pour installer symfony-cli
#  - git pour créer une nouveau projet
RUN apt-get update && apt upgrade -y && apt-get install -y \
    wget \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
# With apt cleaning, to be lighter

# Configure git
RUN git config --global user.email "you@example.com"
RUN git config --global user.name "MyName"

# Install symfony-cli
RUN wget https://get.symfony.com/cli/installer -O - | bash
RUN export PATH="$HOME/.symfony5/bin:$PATH"
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

# Copy existing application directory contents
COPY symfony/ /var/www/

# Set working directory
WORKDIR /var/www/symfony

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies - FOR PROD
# Ajouter un .dockerignore, avec vendor/ puis faire un composer install
# RUN composer install
# RUN composer install --optimize-autoloader --no-dev

