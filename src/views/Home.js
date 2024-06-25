import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const searchProducts = async (query) => {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    setProducts(response.data.results);
  };

  return (
    <div className="home">
      <SearchBar onSearch={searchProducts} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
