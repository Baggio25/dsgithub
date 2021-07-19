import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar main-nav">
            <a href="/" className="nav-logo-text">
                <h4>Github API</h4>
            </a>
        </nav>
    );
};

export default Navbar;
