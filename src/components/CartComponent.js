import React from 'react';
import './CartComponent.css';

const CartComponent = ({ cartItems, onRemove, onAdd }) => (
  <div className="cart">
    <h2>Carrito de Compras</h2>
    {cartItems.length === 0 && <p>El carrito está vacío</p>}
    {cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => onAdd(item)}>+</button>
        <button onClick={() => onRemove(item)}>-</button>
      </div>
    ))}
    <h2>Total: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</h2>
    <button className="checkout-button" onClick={() => alert('Compra realizada con éxito')}>Finalizar Compra</button>
  </div>
);

export default CartComponent;
