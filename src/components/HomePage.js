import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LoginPopup from "../components/LoginPopup";
import SignupPopup from "../components/SignupPopup";
import "./BookCard.css"; // Import styles if needed

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="pt-20"> {/* Add padding to push content below navbar */}
      <Navbar onLoginClick={() => setIsLoginOpen(true)} onSignupClick={() => setIsSignupOpen(true)} />

      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 p-8">
        <h2 className="text-2xl font-bold text-black drop-shadow-lg mb-8 text-center">
          Ed-ARENA is an education-oriented platform where students' participation plays a crucial role.
        </h2>

        <div className="flex space-x-8">
          <div className="book">
            <div className="cover">
              <img src="/explore.png" className="cover-image" alt="Explore" />
            </div>
            <div className="content">
              <p>Dive into various courses and expand your knowledge with expert guidance.</p>
            </div>
          </div>

          <div className="book">
            <div className="cover">
              <img src="/test.png" className="cover-image" alt="Test" />
            </div>
            <div className="content">
              <p>Test your skills with practice exams and boost your confidence.</p>
            </div>
          </div>

          <div className="book">
            <div className="cover">
              <img src="/discussion.png" className="cover-image" alt="Discussion" />
            </div>
            <div className="content">
              <p>Engage with peers and experts in meaningful discussions on various topics.</p>
            </div>
          </div>
        </div>

        {/* Login and Signup Popups */}
        <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        <SignupPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      </div>
    </div>
  );
};

export default HomePage;
