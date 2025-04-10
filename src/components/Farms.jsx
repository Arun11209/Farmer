import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Farms = ({ darkMode }) => {
  
  const farms = [
    {
      id: 1,
      name: "Green Valley Farm",
      location: "Valley District",
      image: "/images/Farming.jpeg",
      description: "Specializing in organic vegetables and fruits",
      rating: 4.8,
      products: ["Tomatoes", "Lettuce", "Carrots", "Apples"]
    },
    {
      id: 2,
      name: "Sunrise Orchards",
      location: "Hillside Area",
      image: "/images/bgimage4.jpg",
      description: "Premium quality fruits and nuts",
      rating: 4.9,
      products: ["Oranges", "Almonds", "Peaches", "Walnuts"]
    },
    {
      id: 3,
      name: "EcoFresh Produce",
      location: "Riverside",
      image: "/images/Home.jpeg",
      description: "Sustainable farming practices",
      rating: 4.7,
      products: ["Berries", "Herbs", "Mushrooms", "Microgreens"]
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-900 text-white py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4`}>
            Our Partner Farms
          </h1>
          <p className={`text-xl text-gray-300 max-w-2xl mx-auto`}>
            Discover fresh, locally grown produce from our trusted farm partners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farms.map((farm, index) => (
            <motion.div
              key={farm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="relative h-48">
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white`}>
                  ⭐ {farm.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold text-white mb-2`}>{farm.name}</h3>
                <p className={"text-gray-300"}>{farm.description}</p>
                <div className={`flex items-center text-gray-400 mb-4`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {farm.location}
                </div>
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold text-white mb-2`}>Available Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {farm.products.map((product, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm`}
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/detail?id=${farm.id}`}
                  className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farms; 