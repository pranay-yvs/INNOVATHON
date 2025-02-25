import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const logo = "/logo.png";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Ed-ARENA Logo" />
          <span className="text-white text-2xl font-bold">Ed-ARENA</span>
        </div>

        <div className="nav-links hidden md:flex">
          <Link to="/HOME">HOME</Link>
          <button onClick={onLoginClick}>LOGIN</button>
          <button onClick={onSignupClick}>SIGNUP</button>
        </div>

        <button className="menu-icon md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu md:hidden">
          <Link to="/HOME" onClick={() => setIsOpen(false)}>HOME</Link>
          <button onClick={() => { setIsOpen(false); onLoginClick(); }}>LOGIN</button>
          <button onClick={() => { setIsOpen(false); onSignupClick(); }}>SIGNUP</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
