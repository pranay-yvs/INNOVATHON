import React from "react";

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // ✅ Fix for early return syntax

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center">Login</h2>

        {/* Login Form */}
        <form>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
