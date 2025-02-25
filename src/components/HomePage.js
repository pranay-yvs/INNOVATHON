import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LoginPopup from "../components/LoginPopup";
import SignupPopup from "../components/SignupPopup";
import exploreImg from "../assets/explore.png";
import testImg from "../assets/test.png";
import discussionImg from "../assets/discussion.png";
import "./BookCard.css"; // Import styles if needed

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="mt-16"> {/* Adjusted margin for better navbar spacing */}
      <Navbar onLoginClick={() => setIsLoginOpen(true)} onSignupClick={() => setIsSignupOpen(true)} />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 p-8">
        <h2 className="text-2xl font-bold text-black drop-shadow-lg mb-8 text-center">
          Ed-ARENA is an education-oriented platform where students' participation plays a crucial role.
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
          <div className="book">
            <div className="cover">
              <img src={exploreImg} className="cover-image" alt="Explore" />
            </div>
            <div className="content">
              <p>Dive into various courses and expand your knowledge with expert guidance.</p>
            </div>
          </div>

          <div className="book">
            <div className="cover">
              <img src={testImg} className="cover-image" alt="Test" />
            </div>
            <div className="content">
              <p>Test your skills with practice exams and boost your confidence.</p>
            </div>
          </div>

          <div className="book">
            <div className="cover">
              <img src={discussionImg} className="cover-image" alt="Discussion" />
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
