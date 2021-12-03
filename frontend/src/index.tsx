import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from './components/Admin';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { CreatePrenotazione } from './components/CreatePrenotazione';
import './styles/style.css'

let App: React.FunctionComponent = () => {
  return <>
    <div className="container justify-content-center">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/prenotazione">
            <CreatePrenotazione />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  </>   
}

ReactDOM.render( <App />, document.getElementById('root'));