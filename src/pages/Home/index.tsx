import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="application-container">
          <h1>Desafio Github API</h1>
          <h5>Bootcamp Spring React - DevSuperior</h5>
          <Link to="/profile">
            <button className="btn btn-primary btn-md start-button">Começar</button>
          </Link>
        </div>
    );
};

export default Home;
