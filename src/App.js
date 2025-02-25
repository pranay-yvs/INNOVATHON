import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";  // ✅ Import Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Added this */}
      </Routes>
    </Router>
  );
}

export default App;
