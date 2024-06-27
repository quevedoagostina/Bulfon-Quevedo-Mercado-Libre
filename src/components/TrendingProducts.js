import React from 'react';
import './TrendingProducts.css';

const trendingProductsData = [
  "/images/producto5.png",
  "/images/producto6.png",
  "/images/producto7.png",
  "/images/producto8.png",
  "/images/producto9.png",
  "/images/producto10.png"
];

const TrendingProducts = () => (
  <div className="trending-products">
    <h2>Productos en Tendencia</h2>
    <div className="product-list">
      {trendingProductsData.map((src, index) => (
        <div key={index} className="product-item">
          <img src={src} alt={`Producto ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

export default TrendingProducts;
