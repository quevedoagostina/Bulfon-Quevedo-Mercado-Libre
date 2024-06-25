import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <img src="/images/logo.png" alt="Mercado Libre Logo" />
    </div>
    <nav className="header-nav">
      <Link to="/">Inicio</Link>
    </nav>
  </header>
);

export default Header;
 