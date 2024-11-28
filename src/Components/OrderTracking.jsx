import React from 'react';

const OrderTracking = ({ orders, updateOrderStatus }) => {
  const handleStatusChange = (id, status) => {
    updateOrderStatus(id, status);
  };

  return (
    <div>
      <h2>Order Tracking</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>
                <strong>Order #{order.id}</strong> - {order.product} (x{order.quantity})
              </p>
              <p>Status: {order.status}</p>
              {order.status !== 'Delivered' && (
                <div>
                  <button onClick={() => handleStatusChange(order.id, 'In Progress')}>Mark In Progress</button>
                  <button onClick={() => handleStatusChange(order.id, 'Delivered')}>Mark Delivered</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderTracking;
