import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryMenu.css';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://api.mercadolibre.com/sites/MLA/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-menu">
      <span onClick={toggleMenu}>Categorías</span>
      {isOpen && (
        <div className="dropdown">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>{category.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
