import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "StrawB", price: 210, quantity: 1, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1aXRzfGVufDB8fDB8fHww" },
    { id: 2, name: "Banana", price: 100, quantity: 2, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Patato", price: 250, quantity: 1, image: "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/90769eac-aa9f-4a58-a57f-04621847a435-6a1ef2c.jpg?quality=90&resize=940,627" },
    { id: 4, name: "Tamato", price: 250, quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8vThCWMszZ-urf7MuMsevLI9wuT8lEmO5A&s" },

  ]);

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-400 p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <span className="font-medium ]">{item.name}</span>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
                </div>
                <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)} className="text-red-500 text-lg">
                  <FaTrashAlt className="cursor-pointer"/>
                </button>
              </div>
            ))}
            <div className="text-right mt-4">
              <h3 className="text-xl font-semibold">Total: ₹{totalPrice.toFixed(2)}</h3>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 cursor-pointer">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;