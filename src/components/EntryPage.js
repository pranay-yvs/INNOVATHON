import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/EntryPage.css"; // Ensure this CSS file exists

const EntryPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Logo and Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <img src="./logo1.png" alt="Logo" className="w-24 mx-auto mb-4 drop-shadow-lg" />
        <h1 className="text-6xl font-bold drop-shadow-lg">Welcome to Ed-ARENA</h1>

        {/* Centered Animated Subtitle */}
        <div className="loader-container">
          <div className="loader">
            SPACE TO
            <span className="words">
              <span className="word">Gather</span>
              <span className="word">Communicate</span>
              <span className="word">Work</span>
              <span className="word">Test</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Navigation Button */}
      <Link to="/home">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Let's Start
        </motion.button>
      </Link>
    </div>
  );
};

export default EntryPage;
