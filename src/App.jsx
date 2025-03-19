import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Slide from './components/Slide'
import Feedback from "./components/Feedback";
import Signin from './components/Signin'
import Signup from './components/Signup'
import ShoppingCart from './components/ShoppingCart'
import UserPage from "./components/UserPage";
import Admin from "./components/Admin";
import Detail from './components/Detail'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-900 p-3 text-white flex justify-between items-center relative">
      <div className="flex items-center">
        <img src="./images/images/logo.png.png" alt="Logo" height={40} width={50} className="inline mt-2 ml-4" />
        <span className="lg:text-3xl ml-2 sm:text-md md:text-xl">Farmer To Market</span>
      </div>
      <div className="md:hidden">
        <button className="text-xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <div
        className={`absolute md:static top-16 right-0 w-30 md:w-auto bg-gray-900 md:flex p-4 md:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-end w-full md:space-x-6">
          <Link className="block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg" to="/">Home</Link>
          <Link className="block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg" to="/farms">Farms</Link>
          <Link className="block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg" to="/markets">Markets</Link>
          <Link className="block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg" to="/order">Order</Link>
          <Link className="block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

const Home = () => (
  <>
  <div className="p-6 h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('images/images/home2.jpeg')]">
    <h2 className="text-4xl font-bold text-black mb-4">Welcome to Farm to Market</h2>
    <p className="text-2xl text-black max-w-xl">Connecting farmers directly with consumers.</p>
  </div>

  <div className="w-screen h-screen border-2 border-red-700 bg">
    <h1 className="pl-5 mb-10 text-center text-3xl mt-5">Second div</h1>
    <p className="leading-[1.7] px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem ab quae, iste in eos impedit. Tempora deserunt eligendi ea modi blanditiis aliquam, quo, aut sapiente sed perspiciatis soluta dignissimos debitis repellat voluptate veritatis maxime repudiandae ullam exercitationem quia obcaecati. Velit pariatur amet praesentium omnis, eius possimus aliquid similique dolores architecto incidunt! Consequuntur rerum error voluptatibus corporis iste ea vitae quod sequi adipisci est sed dolores asperiores dolorum magnam placeat hic inventore expedita modi, ut quae totam fugit unde. Nesciunt quae ea ut repellendus vel modi minima nostrum nemo officia possimus libero ipsam corrupti sequi expedita eos laudantium voluptates cumque rem ex, iure dicta, delectus totam odit eum! Ex est natus laboriosam iure exercitationem fuga et veniam. Magni quod assumenda aspernatur quia sequi harum! Consequuntur tempora inventore a saepe repellendus distinctio accusantium aperiam adipisci, ipsa molestiae dignissimos dolorum repudiandae nulla eos, maiores assumenda eligendi repellat sequi deserunt? Facilis perspiciatis, illum sapiente illo dolores quisquam aliquam eos unde! Tempore omnis illo velit sed quas eveniet odio sunt quis! Impedit laborum, aliquid a perspiciatis quisquam repellat nesciunt placeat? Labore, voluptatum ea velit recusandae molestiae in minima. Explicabo quaerat, itaque maxime quidem placeat facere voluptatibus illum, fuga tempora voluptates atque quia tenetur odio suscipit molestiae. Modi magnam accusantium, fugit et dolore maiores vitae, ipsa id dolores voluptate repellendus error facere a eos asperiores odit sunt quis soluta. Quam ad amet architecto tempore quidem cupiditate molestias, dolor at repellendus fugit voluptatibus autem sapiente deleniti ullam. Molestias quo id ipsa perspiciatis ea commodi itaque cupiditate facilis excepturi? Nisi fugiat voluptates maxime tempora in, ratione a dignissimos est, cum iste laborum eveniet molestias expedita repellat. Odio ipsam doloribus amet, voluptate recusandae fugiat dolorum quisquam reiciendis. A unde maiores mollitia, distinctio consectetur sit quibusdam repellat aspernatur. Asperiores recusandae eveniet alias atque reprehenderit officiis inventore similique dolorum nobis quisquam! Voluptate id distinctio odio quisquam quas illo modi illum consequatur vel? Ea aliquid voluptatibus quasi esse dolores illo ipsum necessitatibus ipsam ipsa dolor minima sed, qui tempora quos blanditiis nihil est, temporibus quas dolore quaerat nemo facere provident. Officia praesentium provident aliquid repellat quibusdam magni eveniet asperiores cumque aperiam corporis hic laboriosam expedita voluptatem beatae similique possimus, eius, est dolorum animi vel! Ea aliquam quaerat, veniam qui distinctio repellendus error voluptatem fugiat saepe mollitia in earum. Officia, at. Ratione ex odit maiores temporibus quasi, repellat tempore iure itaque, magnam corporis dignissimos nobis. Sunt porro sequi ratione magnam delectus quos quidem minus, error molestiae cumque sed! Perspiciatis, reprehenderit? Assumenda, neque! Commodi odio officia aperiam, nesciunt ut, vel unde ea numquam mollitia eius quos eveniet amet nulla quisquam dolores est magni deserunt consequuntur odit enim minima tempore alias consequatur iste? At, ad amet cumque maxime odio, ab, soluta maiores quo fugiat numquam a illo optio nihil. Pariatur ad ipsum repellendus aliquid quam similique libero nam saepe unde, repudiandae velit laudantium accusamus? Voluptas ullam error debitis. Eveniet omnis qui ratione sed officiis perferendis nemo inventore? Veniam magnam deserunt totam repellat, quasi voluptatem dolorum consequatur ut ad quas quis error blanditiis a illum?</p>
  </div>
  </>
 
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
            className="border p-2 text-xl lg:w-auto rounded-lg outline-none mb-5"
        />
        <div></div>
        <button
          type="submit"
          className="bg-green-600 text-white px-3 outline-none rounded-lg mt-2 cursor-pointer text-xl "
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

                <button className="outline-none border-none cursor-pointer rounded-full bg-gray-200 text-xl ml-16" onClick={() => handleRemove(index)}>X</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
const Contact = () => (
  <div className="p-6 min-h-screen w-full  flex flex-col justify-center items-center text-center bg-gray-500">
    <h2 className="text-4xl font-bold  mb-5">Contact Us</h2>
    <p className="text-2xl">📧 Email: info@farmtomarket.com</p>
    <p className="text-2xl">📞  Phone: +123 456 7890</p>

    <div className="mt-8 bg-white p-5 text-xl rounded-lg sm:overflow-auto">
      <h2 className="mb-10 underline">Information Related To Market</h2>
      <p className="">
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
              <Route path="/detail" element={<Detail/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
};
export default App;