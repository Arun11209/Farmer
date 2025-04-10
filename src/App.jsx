import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Feedback from "./components/Feedback";
import Signin from './components/Signin'
import Signup from './components/Signup'
import ShoppingCart from './components/ShoppingCart'
import UserPage from "./components/UserPage";
import Admin from "./components/Admin";
import Detail from './components/Detail'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Farms from './components/Farms';
import Markets from './components/Markets';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';

const App = () => {
  const darkMode = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-gray-900');
  }, []);

  return (
      <div className="min-h-screen bg-gray-900">
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={() => {}} />
          <div className="h-screen flex m-0 p-0">
            {/* Right Section: Navbar + Content */}
            <div className="flex-1 m-0 p-0">
              {/* Main content area that changes based on the route */}
              <div className="p-0">
                <Routes>
                  <Route path="/" element={<Home darkMode={darkMode} />} />
                  <Route path="/farms" element={<Farms darkMode={darkMode} />} />
                  <Route path="/markets" element={<Markets darkMode={darkMode} />} />
                  <Route path="/order" element={<OrderForm darkMode={darkMode} />} />
                  <Route path="/contact" element={<Contact darkMode={darkMode} />} />
                  <Route path="/feedback" element={<Feedback darkMode={darkMode} />} />
                  <Route path="/signin" element={<Signin darkMode={darkMode} />} />
                  <Route path="/signup" element={<Signup darkMode={darkMode} />} />
                  <Route path="/cart" element={<ShoppingCart darkMode={darkMode} />} />
                  <Route path="/user" element={<UserPage darkMode={darkMode} />} />
                  <Route path="/admin" element={<Admin darkMode={darkMode} />} />
                  <Route path="/detail" element={<Detail darkMode={darkMode} />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
  );
};

export default App;