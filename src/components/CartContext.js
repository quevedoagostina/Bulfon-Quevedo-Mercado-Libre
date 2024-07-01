import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const storedProductCount = parseInt(localStorage.getItem('productCount')) || 0;
    setCartItems(storedCartItems);
    setProductCount(storedProductCount);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('productCount', productCount.toString());
  }, [cartItems, productCount]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setProductCount(productCount + 1);
  };

  const removeFromCart = (productId) => {
    const exist = cartItems.find((x) => x.id === productId);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== productId));
    } else {
      setCartItems(cartItems.map((x) => (x.id === productId ? { ...exist, quantity: exist.quantity - 1 } : x)));
    }
    setProductCount(productCount - 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, productCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
