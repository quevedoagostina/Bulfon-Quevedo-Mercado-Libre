import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-item">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="product-link">Ver Detalles</Link>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
