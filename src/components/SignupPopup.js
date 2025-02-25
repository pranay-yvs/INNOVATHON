import React, { useState } from "react";
import "./SignupPopup.css";

const SignupPopup = ({ isOpen, onClose }) => {
  // ✅ Move hooks to the top
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  if (!isOpen) return null; // ✅ Now the hook is always called

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setMessage(data.message || data.error);

    if (response.ok) {
      setFormData({ name: "", email: "", password: "" });
    }
  };

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

        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" className="input" value={formData.name} onChange={handleChange} required />
            <span>Full Name</span>
          </label>

          <label>
            <input type="email" name="email" className="input" value={formData.email} onChange={handleChange} required />
            <span>Email</span>
          </label>

          <label>
            <input type="password" name="password" className="input" value={formData.password} onChange={handleChange} required />
            <span>Password</span>
          </label>

          <button type="submit" className="submit">Sign Up</button>
        </form>

        {message && <p className="text-center text-white mt-2">{message}</p>}

        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPopup;
