import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Markets = ({ darkMode }) => {
  
  const markets = [
    {
      id: 1,
      name: "Central Market",
      location: "Downtown District",
      image: "/images/bgimage4.jpg",
      description: "The largest fresh produce market in the city",
      openHours: "6:00 AM - 8:00 PM",
      features: ["Parking Available", "Wheelchair Accessible", "Organic Section"]
    },
    {
      id: 2,
      name: "Riverside Market",
      location: "Riverside Area",
      image: "/images/Farming.jpeg",
      description: "Fresh seafood and local produce by the river",
      openHours: "7:00 AM - 7:00 PM",
      features: ["Seafood Section", "Food Court", "Free Parking"]
    },
    {
      id: 3,
      name: "Green Valley Market",
      location: "Green Valley District",
      image: "/images/Home.jpeg",
      description: "Specialty organic and artisanal products",
      openHours: "8:00 AM - 6:00 PM",
      features: ["Organic Only", "Artisanal Products", "Cafe"]
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
            Market Locations
          </h1>
          <p className={`text-xl text-gray-300 max-w-2xl mx-auto`}>
            Find fresh farm produce at our partner markets across the city
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={market.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="relative h-48">
                <img
                  src={market.image}
                  alt={market.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{market.name}</h3>
                  <p className="text-white/90 text-sm">{market.location}</p>
                </div>
              </div>
              <div className="p-6">
                <p className={'text-gray-300'}>{market.description}</p>
                <div className={`flex items-center text-gray-400 mb-4`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {market.openHours}
                </div>
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold text-white mb-2`}>Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {market.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    to={`/detail?id=${market.id}`}
                    className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                  <a
                    href="#"
                    className={`flex-1 text-center px-4 py-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg font-semibold transition-colors duration-300`}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markets; 