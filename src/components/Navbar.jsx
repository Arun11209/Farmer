import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/farms', label: 'Farms' },
    { path: '/markets', label: 'Markets' },
    { path: '/order', label: 'Order' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
            <span className={`font-bold text-2xl ${
              scrolled 
                ? 'text-white'
                : 'text-white'
            }`}>
              KhetiBaadi.com
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-white hover:text-gray-200'
                } ${
                  location.pathname === item.path ? 'text-green-500' : ''
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-green-500 bottom-0"
                  />
                )}
              </Link>
            ))}
            <motion.div className="flex items-center space-x-4">
              <Link to="/cart" className={`p-2 rounded-full ${
                scrolled 
                  ? 'text-gray-300 hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}>
                <ShoppingCart className="h-5 w-5" />
              </Link>
              <Link to="/user" className={`p-2 rounded-full ${
                scrolled 
                  ? 'text-gray-300 hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}>
                <User className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-md ${
                scrolled 
                  ? 'text-gray-300 hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden shadow-lg bg-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-gray-800 text-green-500'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Link to="/cart" className="p-2 rounded-full text-gray-300 hover:bg-gray-800">
                  <ShoppingCart className="h-5 w-5" />
                </Link>
                <Link to="/user" className="p-2 rounded-full text-gray-300 hover:bg-gray-800">
                  <User className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 