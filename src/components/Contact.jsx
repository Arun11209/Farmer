import React from "react";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {

  return (
    <div className={`min-h-screen bg-gray-900 text-white py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold text-white mb-4`}>Contact Us</h2>
          <p className={`text-xl text-gray-300`}>
            Get in touch with our team
          </p>
        </motion.div>
        
        <div className={`bg-gray-800 rounded-2xl shadow-xl p-8 mb-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-semibold text-white mb-6`}>Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full bg-gray-700 mr-4`}>
                    <svg className={`w-6 h-6 text-green-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-gray-400`}>Email</p>
                    <p className={'text-white'}>info@farmtomarket.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`p-3 rounded-full bg-gray-700 mr-4`}>
                    <svg className={`w-6 h-6 text-green-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-gray-400`}>Phone</p>
                    <p className={'text-white'}>+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`p-3 rounded-full bg-gray-700 mr-4`}>
                    <svg className={`w-6 h-6 text-green-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-gray-400`}>Address</p>
                    <p className={'text-white'}>123 Farm Street, Market City, FC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-semibold text-white mb-6`}>Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-300 mb-1`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-lg border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-300 mb-1`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 rounded-lg border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium text-gray-300 mb-1`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className={`bg-gray-800 rounded-2xl shadow-xl p-8`}>
          <h3 className={`text-2xl font-semibold text-white mb-6`}>About Our Markets</h3>
          <p className={'text-gray-300'}>
            Markets play a crucial role in the global economy, providing a platform for buyers and sellers to exchange goods, services, and financial assets. They can be categorized into different types, such as stock markets, commodity markets, real estate markets, and agricultural markets. The stock market allows investors to trade shares of publicly listed companies, influencing economic growth and corporate development. Commodity markets deal with raw materials like oil, gold, and wheat, impacting global trade and inflation. Agricultural markets, essential for food distribution, connect farmers with consumers and retailers, affecting supply chains and pricing. Technological advancements, e-commerce, and digital payments have revolutionized market accessibility, making online transactions easier and faster. Consumer behavior and market trends constantly evolve, driven by demand, economic conditions, and innovation. Businesses analyze market data to strategize pricing, advertising, and expansion plans. A well-regulated market ensures transparency, fair competition, and economic stability, fostering global trade and financial prosperity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 