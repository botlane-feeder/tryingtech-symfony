# Dockerfile
FROM node:20.15 as build

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/. .
RUN npm run build

# Mise en place d'un Nginx pour servir les fichiers frontend
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./configs/vite/nginx.conf /etc/nginx/conf.d/default.conf