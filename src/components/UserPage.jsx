import React from "react";
// import {img3} from '../assets/man.jpg';
const UserPage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Farmer",
    location: "California, USA",
    profilePic: "https://via.placeholder.com/150",
  };

  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-gray-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_7xOzl2JQiuJ7lMmrUc4HL0eCahsolVATw&s'
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500"
          />
        </div>

        {/* User Details */}
        <div className=" mt-4">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-lg">{user.email}</p>
          <p className="text-gray-700 mt-1">
            <span className="font-semibold">Role:</span> {user.role}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Location:</span> {user.location}
          </p>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 w-full md:w-auto py-2 rounded-lg cursor-pointer">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;