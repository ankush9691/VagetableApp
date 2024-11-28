import React, { useState } from 'react';

const OrderForm = ({ addOrder }) => {
  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    name: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.product && formData.quantity && formData.name && formData.contact && formData.address) {
      addOrder(formData);
      setFormData({
        product: '',
        quantity: '',
        name: '',
        contact: '',
        address: '',
      });
    }
  };

  return (
    <div style={{alignItems:"center"}}>
      <h2>Place an Order</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Product: </label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact: </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address: </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
