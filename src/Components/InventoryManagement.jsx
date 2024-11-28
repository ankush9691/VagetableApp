import React, { useState } from 'react';
import { products } from '../Products';

const InventoryManagement = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({ name: '', price: '', image: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹{product.price.toFixed(2)}</td>
              <td>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

export default InventoryManagement;
