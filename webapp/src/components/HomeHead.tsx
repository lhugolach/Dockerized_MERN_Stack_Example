import React from 'react';
import { Link } from 'react-router-dom';

export const HomeHead: React.FunctionComponent = () => {
  return <>
    <div className="home-head mt-3 mb-3">
      <div className="home-head-color">
        <p className="head-title ms-4 pt-5">
          Head
        </p>
        <p className="head-text ms-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloribus eaque dolorum laudantium explicabo repellat mollitia nulla debitis, vel fuga pariatur natus dolore sit harum consectetur adipisci animi obcaecati saepe!
        </p>
      </div>
    </div>
    <div className="d-grid gap-2 col-6 mx-auto">
      <Link className="btn btn-primary" type="button" to="/prenotazione">Prenota il tuo posto!</Link>
    </div>
    <hr />
  </>
}