// src/components/CartItem.js

import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="cart-item-delete">
        Delete
      </button>
    </div>
  );
};

export default CartItem;