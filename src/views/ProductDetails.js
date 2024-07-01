import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = ({ onAdd }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container">
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
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart" onClick={() => onAdd(product)}>Añadir al carrito</button>
          <button className="buy-now">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
