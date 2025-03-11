import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Slide from './components/Slide'
import Feedback from "./components/Feedback";
import Signin from './components/Signin'
import Signup from './components/Signup'
import ShoppingCart from './components/ShoppingCart'
import UserPage from "./components/UserPage";
import Admin from "./components/Admin";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-green-600 p-3 text-white flex justify-between items-center relative">
      <div className="flex items-center">
        <img src="images/images/logo.png.png" alt="Logo" height={40} width={50} className="inline mt-2 ml-4" />
        <span className="text-3xl ml-2">Farmer To Market</span>
      </div>
      <div className="md:hidden">
        <button className="text-xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <div
        className={`absolute md:static top-16 right-0 w-30 md:w-auto bg-green-600 md:flex p-4 md:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-end w-full md:space-x-6">
          <Link className="block md:inline-block px-4 py-2" to="/">Home</Link>
          <Link className="block md:inline-block px-4 py-2" to="/farms">Farms</Link>
          <Link className="block md:inline-block px-4 py-2" to="/markets">Markets</Link>
          <Link className="block md:inline-block px-4 py-2" to="/order">Order</Link>
          <Link className="block md:inline-block px-4 py-2" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

const Home = () => (
  <div className="p-6 h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('images/images/home2.jpeg')]">
    <h2 className="text-4xl font-bold text-black mb-4">Welcome to Farm to Market</h2>
    <p className="text-2xl text-black max-w-xl">Connecting farmers directly with consumers.</p>
  </div>
);

const Farms = () => (
  <div className="p-6 h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('images/images/Farming.jpeg')]">
    <h2 className="text-4xl font-bold text-black mb-4">Our Farms</h2>
    <ul className="text-white text-2xl font-bold space-y-2">
      <li>Green Valley Farm</li>
      <li>Sunrise Orchards</li>
      <li>EcoFresh Produce</li>
    </ul>
  </div>
);

const Markets = () => (
  <div className="p-6 h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('images/images/bgimage4.jpg')]">
    <h2 className="text-4xl font-bold text-black mb-4">Market Locations</h2>
    <p className="text-xl text-black max-w-xl">Find fresh farm produce at our partner markets.</p>
  </div>
);

const OrderForm = () => {
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
    <div className="p-6 h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('images/images/Home.jpeg')]">
      <h2 className="text-4xl font-bold text-black mt-10 mb-5">Place an Order</h2>
      <form onSubmit={handleSubmit} className="mt-4 text-white">
        <input
          type="text"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          placeholder="Enter Your Order"
          className="border p-2 text-xl w-96 rounded-lg outline-none mb-5 "
        />
        <div></div>
        <button
          type="submit"
          className="bg-green-600 text-white px-3 outline-none rounded-lg mt-2 cursor-pointer text-xl"
        >
          Submit
        </button>
      </form>

      {/* Display Orders */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Your Orders:</h2>
        <div className="mt-2 space-y-2  p-2">
          {orders.length === 0 ? (
            <p className="text-white text-xl">No orders yet</p>
          ) : (
            orders.map((item, index) => (
              <div key={index} className="bg-gray-200 rounded-lg text-xl  flex justify-between px-4 py-2 mr-4">
                {item}

                <button className="outline-none border-none cursor-pointer rounded-full bg-gray-200 text-xl" onClick={() => handleRemove(index)}>X</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
const Contact = () => (
  <div className="p-6 min-h-screen w-full flex flex-col justify-center items-center text-center bg-green-200">
    <h2 className="text-4xl font-bold  mb-5">Contact Us</h2>
    <p className="text-2xl">Email: info@farmtomarket.com</p>
    <p className="text-2xl">Phone: +123 456 7890</p>

    <div className="mt-8 bg-white p-10 text-xl rounded-lg overflow-hidden">
      <h2 className="mb-10 underline">Information Related To Market</h2>
      <p className="overflow-hidden">
      Markets play a crucial role in the global economy, providing a platform for buyers and sellers to exchange goods, services, and financial assets. They can be categorized into different types, such as stock markets, commodity markets, real estate markets, and agricultural markets. The stock market allows investors to trade shares of publicly listed companies, influencing economic growth and corporate development. Commodity markets deal with raw materials like oil, gold, and wheat, impacting global trade and inflation. Agricultural markets, essential for food distribution, connect farmers with consumers and retailers, affecting supply chains and pricing. Technological advancements, e-commerce, and digital payments have revolutionized market accessibility, making online transactions easier and faster. Consumer behavior and market trends constantly evolve, driven by demand, economic conditions, and innovation. Businesses analyze market data to strategize pricing, advertising, and expansion plans. A well-regulated market ensures transparency, fair competition, and economic stability, fostering global trade and financial prosperity.      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <>
    <Router>
     <Navbar /> 
      <div className="h-screen flex m-0 p-0">
        {/* Sidebar on the left */}
        <Slide />
        {/* Right Section: Navbar + Content */}
        <div className="flex-1 m-0 p-0">

          {/* Main content area that changes based on the route */}
          <div className="p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/farms" element={<Farms />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/order" element={<OrderForm />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<Feedback/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/cart" element={<ShoppingCart/>}/>
              <Route path="/user" element={<UserPage/>}/>
              <Route path="/admin" element={<Admin/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
};
export default App;