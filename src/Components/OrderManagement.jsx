import React from 'react';

const OrderManagement = ({ orders = [], updateOrderStatus }) => {
   
    return (
      <div>
        <h2>Order Management</h2>
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Buyer Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Items</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.contact}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.items.map((item, index) => (
                      <p key={index}>
                        {item.name} - {item.quantity}
                      </p>
                    ))}
                  </td>
                  <td>{order.status}</td>
                  <td>
                    {order.status === "Pending" && (
                      <button onClick={() => updateOrderStatus(order.id, "In Progress")}>
                        Mark In Progress
                      </button>
                    )}
                    {order.status === "In Progress" && (
                      <button onClick={() => updateOrderStatus(order.id, "Delivered")}>
                        Mark Delivered
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
export default OrderManagement;
