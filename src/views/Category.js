import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../components/ProductList';
import './Category.css';

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`);
      setProducts(response.data.results);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="category">
      <h1>Productos de la Categoría</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Category;
