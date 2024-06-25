import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ProductDetails from './views/ProductDetails';
import Checkout from './views/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x)));
    }
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
