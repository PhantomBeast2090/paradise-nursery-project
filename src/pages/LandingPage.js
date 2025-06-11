// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Your one-stop shop for the finest houseplants. We believe that every
          home deserves a touch of green. Explore our collection and bring
          nature indoors.
        </p>
        <Link to="/products" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;