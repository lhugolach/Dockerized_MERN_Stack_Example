import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const CreatePrenotazione: React.FunctionComponent = () => {

    const history = useHistory();
    const currentDate = new Date().toLocaleDateString('en-ZA').replaceAll("/", "-");

    const [formNome, setFormNome] = useState<string>("");
    const [formCognome, setFormCognome] = useState<string>("");
    const [formCell, setFormCell] = useState<string>("");
    const [formEmail, setFormEmail] = useState<string>("");
    const [formAzienda, setFormAzienda] = useState<string>("");
    const [formData, setFormData] = useState<string>(currentDate);
    const [formArrivo, setFormArrivo] = useState<string>("");
    const [formUscita, setFormUscita] = useState<string>("");
    const [formSala, setFormSala] = useState<string>("");
    const [formTavolo, setFormTavolo] = useState<string>("");

    const create = async (nome: string, cognome: string, cellulare: string, email: string, azienda: string, dataPrenotazione: string, oraArrivo: string, oraUscita: string, sala: string, tavolo: string) => {
        const newPrenotazione = {
            nome: nome,
            cognome: cognome,
            cellulare: cellulare,
            email: email,
            azienda: azienda,
            dataPrenotazione: dataPrenotazione,
            oraArrivo: oraArrivo,
            oraUscita: oraUscita,
            sala: sala,
            tavolo: tavolo
        }
        
        try{ 
            const result = await axios.post("http://localhost:5000/prenotazione", newPrenotazione)
            if (result.data.error === undefined) {
                return history.push("/admin")
            }
            else {
                window.alert("Inserisci tutti i dati nei campi obbligatori")
            }
            console.debug(result.data.error)
        } catch(error) {
            console.error("error", error)
        }
    }

    const handleSubmit = async (event: any) =>  {
        event.preventDefault();
        await create(
            formNome,
            formCognome,
            formCell,
            formEmail,
            formAzienda,
            formData,
            formArrivo,
            formUscita,
            formSala,
            formTavolo
        );
    }

    return <>
    <form className="container my-5" onSubmit={handleSubmit}>
        <span className="text-center"><h1>Prenotazione</h1></span>
        <hr />
        {/* Prima riga */}
        <div className="row mt-5">
            <div className="col-4">
                <label className="form-label">Nome*</label>
                <input type="input" className="form-control" required value={formNome} onChange={(event) => {
                let inputValue = event.target.value;
                setFormNome(inputValue);
            }}/>
            </div>
            <div className="col-4">
                <label className="form-label">Cognome*</label>
                <input type="input" className="form-control" required value={formCognome} onChange={(event) => {
                let inputValue = event.target.value;
                setFormCognome(inputValue);
            }}/>
            </div>
            <div className="col-4">
                <label className="form-label">Cellulare*</label>
                <input type="tel" pattern="[0-9]{3}(| |-)[0-9]{6,}" className="form-control" required value={formCell} onChange={(event) => {
                let inputValue = event.target.value;
                setFormCell(inputValue);
            }}/>
            </div>
        </div>
        {/* Seconda riga */}
        <div className="row mt-4">
            <div className="col-4">
                <label className="form-label">Email*</label>
                <input type="email" pattern="\S+@\S+\.\S+$" className="form-control" required value={formEmail} onChange={(event) => {
                let inputValue = event.target.value;
                setFormEmail(inputValue);
            }}/>
            </div>
            <div className="col-4">
                <label className="form-label">Azienda</label>
                <input type="input" className="form-control" value={formAzienda} onChange={(event) => {
                let inputValue = event.target.value;
                setFormAzienda(inputValue);
            }}/>
            </div>
        </div>
        {/* Terza riga */}
        <div className="row mt-4">
            <div className="col-4">
                <label className="form-label">Data prenotazione*</label>
                <input type="date" className="form-control" min="2020-01-01" required defaultValue={formData} onChange={(event) => {
                let inputValue = event.target.value;
                setFormData(inputValue);
            }}/>
            </div>
            <div className="col-4">
                <label className="form-label">Ora di arrivo*</label>
                <input type="time" className="form-control" required value={formArrivo} onChange={(event) => {
                let inputValue = event.target.value;
                setFormArrivo(inputValue);
            }}/>
            </div>
            <div className="col-4">
                <label className="form-label">Ora di uscita*</label>
                <input type="time" className="form-control" required value={formUscita} onChange={(event) => {
                let inputValue = event.target.value;
                setFormUscita(inputValue);
            }}/>
            </div>
        </div>
        {/* Quarta riga */}
        <div className="row mt-4">
            <div className="col-4">
                <label className="form-label">Sala*</label>
                <select className="form-select" required defaultValue={formSala} onChange={(event) => {
                let inputValue = event.target.value;
                setFormSala(inputValue);
            }}>
                <option value="" disabled>Seleziona...</option>
                <option value="Sala 1">Sala 1</option>
                <option value="Sala 2">Sala 2</option>
                <option value="Sala 3">Sala 3</option>
                <option value="Sala 4">Sala 4</option>
                </select>
            </div>
            <div className="col-4">
                <label className="form-label">Tavolo*</label>
                <select className="form-select" required defaultValue={formTavolo} onChange={(event) => {
                let inputValue = event.target.value;
                setFormTavolo(inputValue);
            }}>
                <option value="" disabled>Seleziona...</option>
                <option value="Tavolo 1">Tavolo 1</option>
                <option value="Tavolo 2">Tavolo 2</option>
                <option value="Tavolo 3">Tavolo 3</option>
                <option value="Tavolo 4">Tavolo 4</option>
                </select>
            </div>
        </div>
        {/* Quinta riga */}
        <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <button className="btn btn-primary" type="submit">Conferma prenotazione</button>
        </div>
    </form>
    </>
}