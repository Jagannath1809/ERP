import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

function Orders() {
  // Mock data for orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerId: 101,
      customerName: "John Doe",
      orderDate: "2024-03-15",
      status: "Pending",
    },
    {
      id: 2,
      customerId: 102,
      customerName: "Jane Smith",
      orderDate: "2024-03-16",
      status: "Delivered",
    },
    {
      id: 3,
      customerId: 103,
      customerName: "Alice Johnson",
      orderDate: "2024-03-17",
      status: "Shipped",
    },
    {
      id: 4,
      customerId: 104,
      customerName: "Bob Brown",
      orderDate: "2024-03-18",
      status: "Pending",
    },
    {
      id: 5,
      customerId: 105,
      customerName: "Emily Wilson",
      orderDate: "2024-03-19",
      status: "Delivered",
    },
  ]);

  // State to store the selected order for viewing details
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to view order details
  const viewOrderDetails = (orderId) => {
    // Find the selected order
    const order = orders.find((order) => order.id === orderId);
    // Set the selected order
    setSelectedOrder(order);
  };

  // Function to delete an order
  const deleteOrder = (orderId) => {
    console.log("Deleting order with ID:", orderId);
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold mb-4">Orders Management</h1>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">{order.orderDate}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">
                  <button
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => viewOrderDetails(order.id)}
                  >
                    View Details
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => deleteOrder(order.id)}
                  >
                    Delete Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for displaying order details */}
        {selectedOrder && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <p>Order ID: {selectedOrder.id}</p>
              <p>Customer Name: {selectedOrder.customerName}</p>
              <p>Order Date: {selectedOrder.orderDate}</p>
              <p>Status: {selectedOrder.status}</p>
              <button
                onClick={() => setSelectedOrder(null)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
