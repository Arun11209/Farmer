import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ darkMode }) => {
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home2.jpeg')]">
          <div className={`absolute inset-0 bg-black/60`} />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Welcome to Farm to Market
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8"
          >
            Connecting farmers directly with consumers for fresh, sustainable produce.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/farms" 
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Farms
            </Link>
            <Link 
              to="/markets" 
              className={`px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              Find Markets
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-20 bg-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4`}>
              Why Choose Farm to Market?
            </h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto`}>
              Experience the benefits of direct farm-to-consumer connections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Fresh Produce",
                description: "Get the freshest produce directly from local farms"
              },
              {
                icon: "💰",
                title: "Better Prices",
                description: "Save money by eliminating middlemen"
              },
              {
                icon: "🌍",
                title: "Sustainable",
                description: "Support local agriculture and reduce carbon footprint"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{feature.title}</h3>
                <p className={'text-gray-300'}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`bg-gray-900 py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Start Your Farm-to-Market Journey?
          </h2>
          <Link 
            to="/signup" 
            className={`inline-block px-8 py-3 bg-green-600 text-white hover:bg-green-700 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 