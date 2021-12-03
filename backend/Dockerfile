FROM node:lts-slim

# Creazione della directory dell'app
WORKDIR /usr/src/app

# Installazione delle dipendenze dell'app
COPY package*.json ./

RUN npm install

# Copia del codice sorgente
COPY . .

# Esposizione della porta e avvio dell'app
EXPOSE 5000
CMD [ "npm", "start" ]