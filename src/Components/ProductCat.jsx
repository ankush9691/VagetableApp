import React from 'react';
import { products } from '../Products';

const ProductCat = () => {
  return (
    <div>
      <h2>Product Catalogue</h2>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price.toFixed(2)} per item</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default ProductCat;
