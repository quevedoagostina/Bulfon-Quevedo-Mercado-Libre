import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [highlightedProducts, setHighlightedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=productos`);
      setProducts(response.data.results);
      setHighlightedProducts(response.data.results.slice(0, 5)); // Usamos los primeros 5 productos para destacar
    };

    fetchProducts();
  }, []);

  const searchProducts = async (query) => {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    setProducts(response.data.results);
  };

  return (
    <div className="home">
      <Carousel />
      <SearchBar onSearch={searchProducts} />
      <Cards products={highlightedProducts} />
      <ProductList products={products} title="Productos Destacados" />
    </div>
  );
};

export default Home;
