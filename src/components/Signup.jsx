import React, { useState } from "react";

const Signup = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen bg-green-400 p-4">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md text-center">
          <form action="#">
            <p className="text-2xl font-bold text-black">Sign Up</p>
            <p className="text-lg text-black mt-2">Sign up to continue</p>
            
            <input type="text" className="w-full mt-4 p-3 rounded-lg text-lg bg-gray-100" placeholder="Name" />
            <input type="email" className="w-full mt-4 p-3 rounded-lg text-lg bg-gray-100" placeholder="Email" />
            <input type="password" className="w-full mt-4 p-3 rounded-lg text-lg bg-gray-100" placeholder="Password" />
            
            <div className="flex items-center justify-center mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-black">Remember Me?</span>
            </div>
            
            <button className="w-full mt-5 p-3 rounded-lg bg-blue-700 text-white text-lg">Sign Up</button>
            
            <div className="text-black mt-6 text-center">
              <p>---------------- OR ----------------</p>
              <div className="mt-4 flex flex-col gap-2">
                <button className="w-full py-3 rounded-lg bg-gray-300">Sign up with Google</button>
                <button className="w-full py-3 rounded-lg bg-gray-300">Sign up with LinkedIn</button>
                <button className="w-full py-3 rounded-lg bg-gray-300">Sign up with Facebook</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Signup;