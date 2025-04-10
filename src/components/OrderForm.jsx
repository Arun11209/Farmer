import React, { useState } from "react";
import { motion } from "framer-motion";

const OrderForm = ({ darkMode }) => {
  const [order, setOrder] = useState("");
  const [orders, setOrders] = useState([]); // Store multiple orders

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!order.trim()) return; // Prevent empty submissions

    alert(`Order placed: ${order}`);
    setOrders([...orders, order]); // Add new order to the list
    setOrder(""); // Clear input field
  };
  const handleRemove = (index) => {
    alert(`click ok to remove the order`);
    setOrders(orders.filter((_, i) => i !== index)); // Remove selected order
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-white py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold text-white mb-4`}>Place an Order</h2>
          <p className={`text-xl text-gray-300`}>
            Order fresh produce directly from our partner farms
          </p>
        </motion.div>
        
        <div className={`bg-gray-800 rounded-2xl shadow-xl p-8`}>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-6">
              <label htmlFor="order" className={`block text-sm font-medium text-gray-300 mb-2`}>
                What would you like to order?
              </label>
              <input
                id="order"
                type="text"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                placeholder="Enter your order details"
                className={`w-full px-4 py-3 rounded-lg border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Submit Order
            </button>
          </form>

          {/* Display Orders */}
          <div className="mt-8">
            <h3 className={`text-2xl font-semibold text-white mb-4`}>Your Orders:</h3>
            <div className="space-y-3">
              {orders.length === 0 ? (
                <p className={`text-gray-500 text-center py-4`}>No orders yet</p>
              ) : (
                orders.map((item, index) => (
                  <div 
                    key={index} 
                    className={`text-gray-700 rounded-lg flex justify-between items-center px-4 py-3`}
                  >
                    <span className={'text-white'}>{item}</span>
                    <button 
                      className={`text-gray-400 hover:text-red-400 transition-colors duration-300`}
                      onClick={() => handleRemove(index)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm; 