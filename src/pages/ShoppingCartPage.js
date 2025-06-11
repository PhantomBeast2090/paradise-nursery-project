// src/pages/ShoppingCartPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const ShoppingCartPage = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Thank you for your purchase! (This is a demo checkout)');
  };

  return (
    <div>
      <Header />
      <div className="page-content cart-page">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/products">Go shopping!</Link></p>
        ) : (
          <>
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>Total Items: {totalItems}</p>
              <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
            </div>
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-actions">
              <Link to="/products" className="btn">
                Continue Shopping
              </Link>
              <button onClick={handleCheckout} className="btn btn-primary">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;