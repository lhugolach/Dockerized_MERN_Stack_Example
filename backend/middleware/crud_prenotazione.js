const Prenotazione = require('../model/prenotazione');

module.exports = {
    createPrenotazione: async (req) => {
        let prenotazione = req.body
        const newPrenotazione = new Prenotazione({
            nome: prenotazione.nome,
            cognome: prenotazione.cognome,
            cellulare: prenotazione.cellulare,
            email: prenotazione.email,
            azienda: prenotazione.azienda,
            dataPrenotazione: prenotazione.dataPrenotazione,
            oraArrivo: prenotazione.oraArrivo,
            oraUscita: prenotazione.oraUscita,
            sala: prenotazione.sala,
            tavolo: prenotazione.tavolo,
            codicePrenotazione: Math.floor(Math.random() * (999999 - 100000)),
            dataCreazione: datelocal(new Date()),
            dataModifica: null
        });
        try {
            const result = await newPrenotazione.save();
            console.log("Prenotazione inserita");
            return result;
        } catch (err) {
            console.log(err);
            let error = {
                error:"Non sono riuscito a creare la prenotazione"
            }
            return error 
        } 
    },
    getPrenotazione: async (req) => {
        let filter = req.body
        try {
            let filterName = Object.keys(filter)
            if (filterName !== undefined && filterName.length > 0) {
                const result = await Prenotazione.find(filter);
                console.log("GET prenotazione")
                return result;
            } else {
                const result = await Prenotazione.find();
                console.log("GET lista prenotazioni")
                return result
            }
            
        } catch (err) {
            let error = {
                error:"Non sono riuscito a trovare la prenotazione"
            }
            return error 
        } 
    },
}

datelocal = date => date.setUTCHours(date.getUTCHours()+1)