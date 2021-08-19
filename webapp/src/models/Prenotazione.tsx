export interface Prenotazione {
    readonly _id: string;
    readonly nome: string;
    readonly cognome: string;
    readonly cellulare: string;
    readonly email: string;
    readonly azienda: string;
    readonly dataPrenotazione: string;
    readonly oraArrivo: string;
    readonly oraUscita: string;
    readonly sala: string;
    readonly tavolo: string;
    readonly codicePrenotazione: number;
    readonly dataCreazione: Date;
    readonly dataModifica: Date;
}