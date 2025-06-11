// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="btn">
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;