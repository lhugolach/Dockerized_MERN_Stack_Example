const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const Prenotazione = require('./middleware/crud_prenotazione');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://mongo:27017/mern-example", 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(res => {
  console.log("MongoDb connected");

  app.post('/prenotazione', async function(req, res) {
    let resp = await Prenotazione.createPrenotazione(req)
    res.send(resp);
  });

  app.get('/prenotazione', async function(req, res) {
    let resp = await Prenotazione.getPrenotazione(req)
    res.send(resp);
  });

  app.listen(5000, (req, res) => {
    console.log(`Server is running on 5000 port.`);
  });

}).catch(err => console.log(err))