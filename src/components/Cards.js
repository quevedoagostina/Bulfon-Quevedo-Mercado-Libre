import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = ({ products }) => (
  <div className="cards">
    {products.map((product) => (
      <div key={product.id} className="card">
        <img src={product.thumbnail} alt={product.title} />
        <div className="card-info">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          {product.shipping.free_shipping && <p className="free-shipping">Envío Gratis</p>}
          {product.original_price && (
            <p className="offer">
              Oferta: ${product.original_price}
            </p>
          )}
          <Link to={`/product/${product.id}`} className="card-link">Ver Detalles</Link>
        </div>
      </div>
    ))}
    <div className="card">
      <img src="/images/mediodepago.png" alt="Medios de Pago" />
      <div className="card-info">
        <h3>Medios de pago</h3>
        <p>Pagá tus compras de forma rápida y segura</p>
      </div>
    </div>
    <div className="card">
      <img src="/images/preciosbajos.png" alt="Precios Bajos" />
      <div className="card-info">
        <h3>Menos de $20.000</h3>
        <p>Descubrí productos con precios bajos</p>
      </div>
    </div>
  </div>
);

export default Cards;
