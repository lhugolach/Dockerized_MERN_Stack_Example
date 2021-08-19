import React from 'react';
//import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
    return <>
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient rounded-2 mt-3">
        <div className="container-fluid">

            <Link className="navbar-brand text-white" to="/">
              <img src="..." alt="" width="30" height="30" className="d-inline-block align-text-top me-3" />
              Nome Azienda
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prenotazione">Prenotazione</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Chi siamo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Contatti</a>
              </li>
            </ul>
            <Link className="nav-link" to="/admin">Area Dipendenti</Link>
        </div>
    </nav>
    </>
}