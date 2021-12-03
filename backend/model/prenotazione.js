const mongoose = require('mongoose');

const prenotazioneSchema = new mongoose.Schema({
    nome:{
        type: String, 
        required:true
    },
    cognome:{
        type: String, 
        required:true
    },
    cellulare:{
        type: String, 
        required:true
    },
    email:{
        type: String, 
        required:true
    },
    azienda:{
        type: String
    },
    dataPrenotazione:{
        type: String, 
        required:true
    },
    oraArrivo:{
        type: String, 
        required:true
    },
    oraUscita:{
        type: String, 
        required:true
    },
    sala:{
        type: String, 
        required:true
    },
    tavolo:{
        type: String, 
        required:true
    },
    codicePrenotazione:{
        type: Number, 
        required:true
    },
    dataCreazione:{
        type: Date, 
        required:true
    },
    dataModifica:{
        type: Date
    },
});

module.exports = mongoose.model('prenotazione', prenotazioneSchema);