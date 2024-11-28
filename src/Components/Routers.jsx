import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import ProductCat from "./ProductCat";
import OrderForm from "./OrderForm";
import OrderTracking from "./OrderTracking";
import Navbar from './Navbar';
import InventoryManagement from './InventoryManagement';
import OrderManagement from './OrderManagement';
import { products as initialProducts } from '../Products'; 

export default function Routers() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState(initialProducts); 

  const addOrder = (order) => {
    setOrders([...orders, { ...order, status: 'Pending', id: orders.length + 1 }]);
  };


  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<ProductCat />} />
        <Route path="/OrderForm" element={<OrderForm addOrder={addOrder} />} />
        <Route
          path="/InventoryManagement"
          element={<InventoryManagement products={products} setProducts={setProducts} />}
        />
        <Route
          path="/OrderTracking"
          element={<OrderTracking orders={orders} />}
        />
        <Route
          path="/OrderManagement"
          element={<OrderManagement orders={orders} updateOrderStatus={updateOrderStatus} />}
        />
      </Routes>
     </>
  );
}
