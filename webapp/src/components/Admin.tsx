import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Prenotazione } from '../models/Prenotazione';

export const Admin: React.FunctionComponent = () => {
    
    let [listaPrenotazioni, setListaPrenotazioni] = useState<Prenotazione[]>([]);
    let [isLoading, setIsLoading] = useState<boolean>(false);

    const getPrenotazioni = () => {
        setIsLoading(true);
         axios.get("http://localhost:5000/prenotazione")
            .then(
                res => {const listaDiPrenotazioneDalDatabase = res.data.map((data: any) => {
                    let prenotazione: Prenotazione = {
                        _id: data._id,
                        nome: data.nome,
                        cognome: data.cognome,
                        cellulare: data.cellulare,
                        email: data.email,
                        azienda: data.azienda,
                        dataPrenotazione: data.dataPrenotazione,
                        oraArrivo: data.oraArrivo,
                        oraUscita: data.oraUscita,
                        sala: data.sala,
                        tavolo: data.tavolo,
                        codicePrenotazione: data.codicePrenotazione,
                        dataCreazione: data.dataCreazione,
                        dataModifica: data.dataModifica
                    };
                console.log(prenotazione)
                return prenotazione
            })
            setListaPrenotazioni(listaDiPrenotazioneDalDatabase)
        }).catch(
            error => {
                console.error("error", error)
            }
        ).finally(
            () => {
                setIsLoading(false);
            }
        )
    }

    const elementPrenotazioniTable: JSX.Element[] = listaPrenotazioni.map((prenotazione) =>{
        return(
            <tr key={prenotazione._id}>
                <td>{prenotazione.nome}</td>
                <td>{prenotazione.cognome}</td>
                <td>{prenotazione.cellulare}</td>
                <td>{prenotazione.dataPrenotazione}</td>
                <td>{prenotazione.oraArrivo}</td>
                <td>{prenotazione.oraUscita}</td>
                <td>{prenotazione.sala}</td>
                <td>{prenotazione.tavolo}</td>
            </tr>
        );
    });

    useEffect(() => {
        getPrenotazioni();
    }, []);
    
    return <>
    <div className="container my-5 admin">
        <span className="text-center"><h1>Lista prenotazioni</h1></span>
        <hr />

        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">Cognome</th>
                <th scope="col">Cellulare</th>
                <th scope="col">Data</th>
                <th scope="col">Ora di Arrivo</th>
                <th scope="col">Ora di Uscita</th>
                <th scope="col">Sala</th>
                <th scope="col">Tavolo</th>
                </tr>
            </thead>
            <tbody>
                {isLoading === false && <>
                    {elementPrenotazioniTable}
                </>}
            </tbody>
        </table>

    </div>
    </>
}