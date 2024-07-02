import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import CategoryMenu from './CategoryMenu';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="header">
      <div className="top-header">
        <Link to="/">
          <img src="/images/logo.png" alt="Mercado Libre Logo" className="logo" />
        </Link>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="shipping-info">
          <img src="/images/mapa.png" alt="Ubicación" className="map-icon" />
          <span>Enviar a Agustin - Rio Cuarto, Argentina</span>
        </div>
      </div>
      <div className="bottom-header">
        <nav className="nav-links">
          <CategoryMenu />
          <Link to="/">Ofertas</Link>
          <Link to="/">Historial</Link>
          <Link to="/">Supermercado</Link>
          <Link to="/">Moda</Link>
          <Link to="/">Mercado Play</Link>
          <Link to="/">Vender</Link>
          <Link to="/">Ayuda</Link>
        </nav>
        <div className="user-info">
          <span>Ofertas por tiempo limitado</span>
          <img src="/images/icon.png" alt="User Icon" className="user-icon" />
          <span>Agustin</span>
          <Link to="/">Mis compras</Link>
          <Link to="/">Favoritos</Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
