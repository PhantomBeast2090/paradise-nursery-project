// src/pages/ProductListingPage.js
import React from 'react';
import Header from '../components/Header'; // <-- Default import (no braces)
import ProductCard from '../components/ProductCard'; // <-- Default import (no braces)
import { products } from '../data/products'; // <-- Named import (MUST have braces)

const ProductListingPage = () => {
  const productsByCategory = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      <div className="page-content">
        <h2>Our Plants</h2>
        {Object.keys(productsByCategory).map((category) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <div className="product-grid">
              {productsByCategory[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductListingPage;