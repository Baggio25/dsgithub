import React from 'react';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
          <h1>Desafio Github API</h1>
          <h5>Bootcamp Spring React - DevSuperior</h5>
          <a href="/">
            <button className="btn btn-primary btn-md start-button">Começar</button>
          </a>
        </div>
    );
};

export default Home;
