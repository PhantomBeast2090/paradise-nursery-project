// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">Paradise Nursery</Link>
      <nav>
        {location.pathname === '/cart' ? (
          <Link to="/products" className="nav-link">Products</Link>
        ) : (
          <Link to="/cart" className="nav-link cart-icon-link">
            <FaShoppingCart />
            {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
          </Link>
        )}
      </nav>
    </header>
  );
};
export default Header;