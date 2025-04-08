// import React from 'react'
import React, { useState,useEffect } from "react";
import Button from "./UI/Button"
import Input from "./UI/Input"
import Card from "./UI/Card"
import CardContent from "./UI/CardContent" 
import { motion } from "framer-motion";
import { Lock, Trash, Plus,LogOut } from "lucide-react";
function Admin() {
  const [username ,setUserName] =useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [password, setPassword] = useState("");
  const [vegetables, setVegetables] = useState(["Carrot", "Tomato", "Potato"]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (username==="Arun" && password === "Anmol@123") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Incorrect Password!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    setPassword("");
    setUserName('')
  };

  const handleAddItem = () => {
    const newItem = prompt("Enter vegetable name:");
    if (newItem) {
      setVegetables([...vegetables, newItem]);
    }
  };

  const handleRemoveItem = (index) => {
    setVegetables(vegetables.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {isAuthenticated ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
        >
          <div className="flex justify-between items-center mb-4 overflow-auto">
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
            <Button onClick={handleLogout} variant="destructive" className="flex items-center gap-2 cursor-pointer">
              <LogOut size={18} /> Logout
            </Button>
          </div>
          <Button className="mb-4 flex items-center gap-2" onClick={handleAddItem}>
            <Plus size={18} /> Add Vegetable
          </Button>
          <ul>
            {vegetables.map((veg, index) => (
              <Card key={index} className="flex justify-between items-center p-2 mb-2 ">
                <CardContent>{veg}</CardContent>
                <Button onClick={() => handleRemoveItem(index)} variant="destructive">
                  <Trash size={18} />
                </Button>
              </Card>
            ))}
          </ul>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center"
        >
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <div className="flex flex-col gap-1 items-center border p-2 rounded-md mb-4">
            <Lock className="mr-2" size={18} />
            <Input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </motion.div>
      )}
    </div>
  );
}

export default Admin