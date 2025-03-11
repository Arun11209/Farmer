import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-3">
        <li><Link to="/admin/farmers" className="block p-2 hover:bg-gray-700 rounded">Farmers</Link></li>
        <li><Link to="/admin/products" className="block p-2 hover:bg-gray-700 rounded">Products</Link></li>
        <li><Link to="/admin/orders" className="block p-2 hover:bg-gray-700 rounded">Orders</Link></li>
      </ul>
    </div>
  );
}