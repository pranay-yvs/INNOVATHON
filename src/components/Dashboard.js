import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token"); // JWT Token from login
                const response = await axios.get("http://localhost:5000/api/user", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-blue-700 text-white h-screen p-5">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <ul className="mt-5">
                    <li className="py-2"><a href="#">Profile</a></li>
                    <li className="py-2"><a href="#">Assignments</a></li>
                    <li className="py-2"><a href="#">Test Results</a></li>
                    <li className="py-2"><a href="#">Arena</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10">
                <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
                {user ? (
                    <div className="bg-white p-5 mt-5 shadow-lg rounded-lg">
                        <h2 className="text-xl font-bold">Profile</h2>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>User ID:</strong> {user._id}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
