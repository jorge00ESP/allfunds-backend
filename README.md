# Demo All funds Backend y MongoDB

Version NodeJS -> 20.18.0

## Instalación del proyecto

De primera mano, hay que instalar la base de datos, en mi caso lo hice con un comando de docker:

```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

Y para acceder a la base de datos, hay que descargar el cliente de base de datos MongoDBCompass y meter esta URL para acceder a ella:

```bash
mongodb://85.208.20.120:27017/
```

Una vez ya esta la base de datos encendida, para instalar el backend, hay que descargar el proyecto de github y en la carpeta raiz del proyecto ejecutar:

```bash
npm install
```
Para iniciar el proyecto:

```bash
npm start
```

## Despliegue del proyecto en DOCKER

Para meter el proyecto en un contendor de docker, he creado en una carpeta los archivos Dockerfile, compose.yml y una carpeta llamada "project" en la que van metidos todos los archivos de proyecto, menos la carpeta node_modules:

### Dockerfile

```bash
FROM node:20.18.0

WORKDIR /app

COPY ./project/* .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

```

### compose.yml

```bash
services:
  node-backend:
    build:
      context: ./
      dockerfile: Dockerfile
    container_name: allfunds-node-backend
    ports:
      - "4001:3000"
    volumes:
      - ./project/:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

Una vez creados los archivos y meter los archivos dentro de la carpeta "project", solo falta desplegar el contenedor:

```bash
docker-compose up -d
```
