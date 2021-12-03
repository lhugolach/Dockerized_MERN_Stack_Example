# Esempio MERN Stack Dockerizzato

Una struttura **MERN** è l'insieme delle tecnologie **M**ongoDB, **E**xpress, **R**eact, **N**ode.js che compongono un'architettura full-stack (front-end e back-end)

Questo esempio sfrutta le seguenti tecnologie per realizzare un'applicazione orientata a un sistema di prenotazioni per spazi coworking.

Il progetto contiene anche un esempio di deploy sfruttando la tecnologia di containerizzazione.
Attraverso **Docker** è possibile strutturare un ecosistema facilmente replicabile e semplice da aggiornare.

Questo progetto è stato realizzato per l'esame finale presso il corso di studio ITS FITSTIC "Alan Turing" di Cesena, A.A. 2020/2021

# Installazione

Attraverso il `docker-compose.yml` è possibile avviare l'intero progetto attraverso il seguente comando da terminale:
```bash
$ docker-compose up --build -d
```
In alternativa è possibile avviare tutti i vari componenti singolarmente:
- **backend**: nel file `server.js` è necessario cambiare la riga che permette la connesione con il database MongoDB, specificando un indirizzo
    ```js
    mongoose.connect("mongodb://localhost:27017/mern-example")
    ```
    Per questo esempio è necessario installare MongoDB localmente.

    Successivamente, per scaricare i pacchetti Node necessari e avviare l'applicazione, posizionarsi attraverso il terminale nella cartella specifica e lanciare i comandi:
    ```bash
    $ npm install
    $ npm start
    ```  
- **frontend**: per l'app React basta eseguire gli stessi comandi utilizzati per **backend**:
    ```bash
    $ npm install
    $ npm start
    ```
    L'applicazione web sarà disponibile all'indirizzo `http://localhost:3000/`

# Struttura del progetto

Il progetto è strutturato nella seguente gerarchia:
```
root/
│
├── backend/
│   ├── middleware/
|   |   └── crud_prenotazione.js
│   ├── model/
|   |   └── prenotazione.js
│   ├── dockerfile
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
|   |   ├── components/
|   |   ├── images/
|   |   ├── models/
|   |   ├── styles/
|   |   └── index.tsx
│   └── dockerfile
│
└── docker-compose.yml
```

<u>**backend**</u> contiene l'applicazione Node.js che gestisce ed espone le **REST API**. Attraverso **Express** smista le request provenienti dal front-end React, alle funzioni di **CRUD** (Create, Read, Update, Delete) interrogando e scrivendo il database **MongoDB**.

Questo progetto è possibile consultarlo nel dettaglio al repository dedicato: [Mongoose_Example](https://github.com/lhugolach/Mongoose_example)

<u>**frontend**</u>, sviluppato in **React Typescript**, consiste nella WebApp. Per dialogare con il back-end è stata utilizzata la libreria **axios** che permette di eseguire chiamate HTTP in modo semplice.

In dettaglio, nel componente `CreatePrenotazione.tsx` è presente il form di inserimento della prenotazione, che grazie all'utilizzo degli stati di React, è possibile recepire il contenuto degli input text e utilizzare i dati inseriti per eseguire la chiamata **POST**, necessaria al servizio **backend** per creare e inserire la prenotazione nel database.

Nel componente `Admin.tsx` è presente la parte amministrativa che visualizza le prenotazioni inserite nel database, e sempre con l'aiuto di axios, quindi con una chiamata **GET**, è possibile interrogare e recuperare i dati dal database MongoDB, disegnando infine la tabella. In questo caso la chiamata necessita l'utilizzo di un model `Prenotazione.tsx` che permette ad axios di incapsulare i dati in ingresso in un oggetto personalizzato.

Il `docker-compose.yml` è programmato per raggruppare quattro container insieme:
- **frontend** che attraverso il `dockerfile` al suo interno, scarica tutte le dipendenze del progetto ed espone il progetto alla porta dichiarata
  ```yml
    frontend:
        image: frontend_react
        build: ./frontend
        ports:
            - '3000:3000'
        container_name: Frontend_React
        restart: always
        depends_on:
            - backend
  ```
- **backend** stesso processo di frontend, sfruttando sempre il `dockerfile` al suo interno
  ```yml
    backend:
        image: backend
        build: ./backend
        ports:
            - '5000:5000'
        container_name: Backend
        restart: always
        depends_on:
            - mongo
  ```
- **MongoDB** il database che sfrutta invece l'immagine ufficiale scaricata dal Docker Hub
  ```yml
    mongo:
        image: mongo
        ports:
            - '27017:27017'
        container_name: MongoDB
        restart: always
        volumes:
            - dbdata:/data/db
            - dbconfig:/data/configdb
  ```
- **Mongo Express** aggiunge un'applicazione front-end che permette di visualizzare sul browser il database e il suo contenuto. É facoltativo, il progetto funziona anche senza questo componente.
  ```yml
    mongo-express:
        image: mongo-express
        ports:
            - "8081:8081"
        container_name: Mongo_Express
        restart: always
        environment:
            - ME_CONFIG_MONGODB_ENABLE_ADMIN=true
        depends_on:
            - mongo
  ```

# Dipendenze

<u>**Backend**</u> :
- [**Mongoose**](https://mongoosejs.com/)
- [**Express**](https://expressjs.com/)
- [**CORS**](https://github.com/expressjs/cors)
- [**Dotenv**](https://github.com/motdotla/dotenv) permette la gestione delle variabili d'ambiente

<u>**Frontend**</u> :
- [**Axios**](https://github.com/axios/axios)
- [**Bootstrap**](https://getbootstrap.com/) solo CSS tramite CDN (vedi [index.html](https://github.com/lhugolach/Dockerized_MERN_Stack_Example/blob/main/frontend/public/index.html))

# Requisiti
Per eseguire il progetto in versione containerizzata, è necessario soltanto installare [**Docker**](https://www.docker.com/)

Per eseguire il progetto localmente, è necessario installare:
- [**Node.js**](https://nodejs.org/)
- [**Typescript**](https://www.typescriptlang.org/), da installare su node per eseguire [React in versione Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [**MongoDB**](https://www.mongodb.com/)