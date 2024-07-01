import React from 'react';
import Cart from './Cart';

const Checkout = ({ cartItems, onRemove, onAdd }) => (
  <div>
    <Cart cartItems={cartItems} onRemove={onRemove} onAdd={onAdd} />
  </div>
);

export default Checkout;
