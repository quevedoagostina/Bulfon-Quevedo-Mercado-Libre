import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products, title }) => (
  <div className="product-list">
    <h2>{title}</h2>
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="product-price">${product.price}</p>
            {product.shipping.free_shipping && <p className="free-shipping">Envío Gratis</p>}
            {product.original_price && (
              <p className="offer">
                Oferta: ${product.original_price}
              </p>
            )}
            <Link to={`/product/${product.id}`} className="product-link">Ver Detalles</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
