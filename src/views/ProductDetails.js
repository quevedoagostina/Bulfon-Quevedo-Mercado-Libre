import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      setProduct(response.data);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-header">
        <div className="product-images">
          <img src={product.pictures[0].url} alt={product.title} className="main-image" />
          <div className="thumbnail-list">
            {product.pictures.map((picture, index) => (
              <img key={index} src={picture.url} alt={product.title} className="thumbnail" />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-price">${product.price}</p>
          {product.shipping.free_shipping && <p className="product-shipping">Envío Gratis</p>}
          <button className="add-to-cart">Añadir al carrito</button>
          <button className="buy-now">Comprar ahora</button>
        </div>
      </div>
      <div className="product-description">
        <h2>Descripción del producto</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
