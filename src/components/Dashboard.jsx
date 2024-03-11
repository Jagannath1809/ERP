import React from "react";
import CalendarView from "./CalendarView";
import Navbar from "./Navbar";

function Dashboard() {
  const orders = [
    { id: 1, deliveryDate: new Date("2024-03-15"), customerName: "John Doe" },
    { id: 2, deliveryDate: new Date("2024-03-15"), customerName: "Jane Smith" },
    {
      id: 3,
      deliveryDate: new Date("2024-03-16"),
      customerName: "Alice Johnson",
    },
    {
      id: 4,
      deliveryDate: new Date("2024-03-16"),
      customerName: "Bob Williams",
    },
    {
      id: 5,
      deliveryDate: new Date("2024-03-17"),
      customerName: "Emily Brown",
    },
    {
      id: 6,
      deliveryDate: new Date("2024-03-17"),
      customerName: "David Jones",
    },
  ];

  const products = [
    { id: 1, name: "Laptop", price: 99900, quantity: 20 },
    { id: 2, name: "Smartphone", price: 69900, quantity: 30 },
    { id: 3, name: "Tablet", price: 29900, quantity: 15 },
    { id: 4, name: "Headphones", price: 59900, quantity: 50 },
    { id: 5, name: "Monitor", price: 34900, quantity: 6 },
  ];

  const totalValue = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const topSellingProducts = products.slice(0, 3);

  const lowStockProducts = products.filter((product) => product.quantity < 10);

  return (
    <>
      <Navbar />
      {/* content */}
      <div className="w-full flex flex-col md:flex-row justify-evenly mt-8">
        {/* top-selling items */}
        <div className="max-w-md mx-auto mb-2">
          <div className="w-30 mx-auto bg-blue-200 rounded-md overflow-hidden p-4">
            <h3 className="text-lg font-semibold mb-2">Top Selling Products</h3>
            <ul>
              {topSellingProducts.map((product) => (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <p>Price: &#8377;{product.price}</p>
                  <p>Quantity Sold: {product.quantity}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* total-value */}
        <div className="max-w-md mx-auto mb-2">
          <div className="w-30 mx-auto bg-green-200 rounded-md overflow-hidden p-4">
            <h2 className="text-lg font-semibold mb-2">
              Total Inventory Value
            </h2>
            <p className="text-2xl text-center">
              {" "}
              &#8377;{totalValue.toFixed(2)}
            </p>
          </div>
        </div>

        {/* low-stock */}
        <div className="max-w-md mx-auto mb-2">
          <div className="w-30 mx-auto bg-red-200 rounded-md overflow-hidden p-4">
            <h3 className="text-lg font-semibold mb-2">Low Stock Alert</h3>
            <ul>
              {lowStockProducts.map((product) => (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <p>Quantity Available: {product.quantity}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="App">
        <CalendarView orders={orders} />
      </div>
    </>
  );
}

export default Dashboard;
