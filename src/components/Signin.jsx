import React, { useState } from 'react';

const Signin = ({ darkMode }) => {

  return (
    <>
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-gray-800 shadow-md rounded-md text-center">
        <form action="#">
          <p className='text-2xl font-bold text-white'>Sign In</p>
          <p className='text-lg text-gray-300 mt-4'>Stay Updated On Your Professional World</p>

          <input type="text" className='w-full mt-5 p-3 rounded-lg text-lg bg-gray-700 text-white' placeholder='Email Or Phone' />
          <input type="password" className='w-full mt-4 p-3 rounded-lg text-lg bg-gray-700 text-white' placeholder='Password' />
          
          <span className='block mt-4 text-blue-400 font-bold cursor-pointer'>Forgot Password?</span>
          <button className='mt-5 w-full py-3 rounded-lg bg-blue-700 text-white text-lg'>Sign In</button>

          <div className='text-gray-300 mt-6 text-center'>
            <p>---------------- OR ----------------</p>
            <button className='mt-4 w-full py-3 rounded-lg bg-blue-700 text-white text-lg'>Sign in with Apple</button>
            <p className='mt-4 text-lg'>New to Farmer?
              <button className='ml-2 text-blue-400 font-bold cursor-pointer'>Join Now</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
export default Signin;