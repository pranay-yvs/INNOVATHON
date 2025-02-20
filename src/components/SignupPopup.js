import React from "react";
import "./SignupPopup.css";

const SignupPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
<div className="form relative">
        <button 
  className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
  onClick={onClose}
>
  ✖
</button>

        <p className="title">Sign Up</p>
        <form>
          <label>
            <input type="text" className="input" required />
            <span>Full Name</span>
          </label>
          <label>
            <input type="email" className="input" required />
            <span>Email</span>
          </label>
          <label>
            <input type="password" className="input" required />
            <span>Password</span>
          </label>
          <button type="submit" className="submit">Sign Up</button>
        </form>
        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPopup;
