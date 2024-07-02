import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductList from './ProductList';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`);
      setProducts(response.data.results);
    };

    if (searchTerm) {
      fetchProducts();
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Resultados de búsqueda para "{searchTerm}"</h2>
      <ProductList products={products} />
    </div>
  );
};

export default SearchResults;
