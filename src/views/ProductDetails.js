import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/items/${match.params.id}`);
      setProduct(response.data);
    };

    fetchProductDetails();
  }, [match.params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <img src={product.pictures[0].url} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
