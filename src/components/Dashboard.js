import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/"; 
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/user", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (!response.ok) {
          localStorage.removeItem("token");
          window.location.href = "/";
        } else {
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome, {user.name}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout} className="mt-4 w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
