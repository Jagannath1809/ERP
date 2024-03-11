import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 9990000, quantity: 20 },
    { id: 2, name: "Smartphone", price: 6990000, quantity: 30 },
    { id: 3, name: "Tablet", price: 2990000, quantity: 15 },
    { id: 4, name: "Headphones", price: 5990000, quantity: 50 },
    { id: 5, name: "Monitor", price: 3490000, quantity: 6 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    const newProductId = Date.now();
    setProducts([...products, { ...newProduct, id: newProductId }]);
    setNewProduct({ name: "", price: 0, quantity: 0 });
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const editProduct = () => {
    setProducts(
      products.map((product) =>
        product.id === editProductId
          ? { ...newProduct, id: editProductId }
          : product
      )
    );
    setIsEditing(false);
    setEditProductId(null);
    setNewProduct({ name: "", price: 0, quantity: 0 });
  };

  const startEditing = (productId) => {
    setIsEditing(true);
    setEditProductId(productId);
    const productToEdit = products.find((product) => product.id === productId);
    setNewProduct({ ...productToEdit });
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold mb-4">Product Management</h1>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="p-3">{product.name}</td>
                <td className="p-3">
                  &#8377;{(product.price / 100).toFixed(2)}
                </td>
                <td className="p-3">{product.quantity}</td>
                <td className="p-3">
                  <button
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => startEditing(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <input
            className="mr-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            className="mr-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <input
            className="mr-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
          />
          {isEditing ? (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={editProduct}
            >
              Save
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={addProduct}
            >
              Add Product
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
