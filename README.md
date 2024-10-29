# Demo All funds Backend y MongoDB

Version NodeJS -> 20.18.0

## Instalación del proyecto

De primera mano, hay que instalar la base de datos, para ello cree una carpeta y dentro meti el compose.yml y cree una carpeta llamada data para acceder a los datos del contendor

### compose.yml

```bash
services:
  mongodb:
    image: mongo:8.0
    container_name: mongodb
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin  
      - MONGO_INITDB_ROOT_PASSWORD=allfundstest1234  
      - MONGO_INITDB_DATABASE=allfunds  
    volumes:
      - mongodb_data:/data/db 

volumes:
  mongodb_data:
```

Y para acceder a la base de datos, hay que descargar el cliente de base de datos MongoDBCompass y meter esta URL para acceder a ella:

```bash
mongodb://admin:allfundstest1234@85.208.20.120:27017
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
