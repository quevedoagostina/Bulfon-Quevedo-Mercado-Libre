import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={product.pictures[0].url} alt={product.title} />
        <div className="product-thumbnails">
          {product.pictures.map((picture) => (
            <img key={picture.id} src={picture.url} alt={product.title} />
          ))}
        </div>
      </div>
      <div className="product-info-container">
        <h1>{product.title}</h1>
        <p className="product-price">${product.price}</p>
        {product.shipping.free_shipping && <p className="free-shipping">Envío Gratis</p>}
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart">Añadir al carrito</button>
        <button className="buy-now">Comprar ahora</button>
      </div>
    </div>
  );
};

export default ProductDetails;
