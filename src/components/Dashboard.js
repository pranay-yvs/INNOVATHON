import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [showSubNav, setShowSubNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("myClassrooms");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [classCode, setClassCode] = useState("");
  const [newClassData, setNewClassData] = useState({
    name: "",
    subject: "",
    description: ""
  });
  
  // Sample data - replace with your API calls
  const [classrooms, setClassrooms] = useState([
    { id: 1, name: "Algebra 101", subject: "Mathematics", students: 24, teacher: "Dr. Smith", joinDate: "2025-01-15" },
    { id: 2, name: "Physics Fundamentals", subject: "Science", students: 18, teacher: "Prof. Johnson", joinDate: "2025-01-28" },
    { id: 3, name: "English Literature", subject: "Language Arts", students: 22, teacher: "Ms. Williams", joinDate: "2025-02-05" }
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
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

  const handleCreateClassroom = (e) => {
    e.preventDefault();
    // API call would go here
    const newClass = {
      id: classrooms.length + 1,
      name: newClassData.name,
      subject: newClassData.subject,
      description: newClassData.description,
      students: 1,
      teacher: user?.name || "Current User",
      joinDate: new Date().toISOString().split('T')[0]
    };
    
    setClassrooms([...classrooms, newClass]);
    setShowCreateModal(false);
    setNewClassData({ name: "", subject: "", description: "" });
  };

  const handleJoinClassroom = (e) => {
    e.preventDefault();
    // API call would go here
    // For demo purposes, just show success message
    alert(`Successfully joined classroom with code: ${classCode}`);
    setShowJoinModal(false);
    setClassCode("");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? 
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg> : 
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          }
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-gradient-to-br from-blue-800 to-indigo-800 text-white md:h-screen p-6 shadow-xl z-10`}>
        <div className="hidden md:block">
          <h2 className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">Dashboard</h2>
        </div>
        
        <ul className="mt-6 space-y-2">
          <li className="py-2 px-3 rounded-lg hover:bg-blue-700 transition duration-200 transform hover:translate-x-1">
            <a href="#" className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Profile
            </a>
          </li>
          <li className="py-2 px-3 rounded-lg hover:bg-blue-700 transition duration-200 transform hover:translate-x-1">
            <a href="#" className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Assignments
            </a>
          </li>
          <li className="py-2 px-3 rounded-lg hover:bg-blue-700 transition duration-200 transform hover:translate-x-1">
            <a href="#" className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Test Results
            </a>
          </li>
          <li className="py-2 px-3 rounded-lg bg-blue-700 text-white transition duration-200">
            <button 
              className="w-full text-left flex justify-between items-center"
              onClick={() => setShowSubNav(!showSubNav)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                Arena
              </div>
              <span className="transition-transform duration-200 transform">{showSubNav ? "▲" : "▼"}</span>
            </button>
            {showSubNav && (
              <ul className="mt-2 ml-4 border-l border-blue-500 pl-3 space-y-1">
                <li className="py-1 px-2 rounded-md hover:bg-blue-600 transition duration-200">
                  <button 
                    onClick={() => setShowCreateModal(true)} 
                    className="block w-full text-left"
                  >
                    Create Classroom
                  </button>
                </li>
                <li className="py-1 px-2 rounded-md hover:bg-blue-600 transition duration-200">
                  <button 
                    onClick={() => setShowJoinModal(true)}
                    className="block w-full text-left"
                  >
                    Join Classroom
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 hidden md:block">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              {user ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <p className="font-medium">{user ? user.name : "User"}</p>
              <p className="text-xs text-blue-200">{user ? user.email : "Loading..."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10">
        <div className="flex flex-col space-y-6">
          {/* Arena Header */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-200 hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700">Learning Arena</h1>
                <p className="mt-2 text-gray-600">Explore and manage your virtual classrooms</p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 transition duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Create Class
                </button>
                <button 
                  onClick={() => setShowJoinModal(true)}
                  className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                  Join Class
                </button>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mt-6 border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("myClassrooms")}
                  className={`py-4 px-1 text-sm font-medium border-b-2 ${
                    activeTab === "myClassrooms"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  My Classrooms
                </button>
                <button
                  onClick={() => setActiveTab("teachingClasses")}
                  className={`py-4 px-1 text-sm font-medium border-b-2 ${
                    activeTab === "teachingClasses"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Teaching
                </button>
                <button
                  onClick={() => setActiveTab("enrolledClasses")}
                  className={`py-4 px-1 text-sm font-medium border-b-2 ${
                    activeTab === "enrolledClasses"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Enrolled
                </button>
                <button
                  onClick={() => setActiveTab("archivedClasses")}
                  className={`py-4 px-1 text-sm font-medium border-b-2 ${
                    activeTab === "archivedClasses"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Archived
                </button>
              </nav>
            </div>
          </div>

          {/* Classroom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classrooms.map((classroom) => (
              <div key={classroom.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-xl hover:translate-y-[-4px]">
                <div className="h-20 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center relative">
                  <h3 className="text-xl font-bold text-white">{classroom.name}</h3>
                  <div className="absolute right-3 top-3 bg-white rounded-full p-1 shadow-md">
                    <button className="text-gray-600 hover:text-gray-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 rounded-lg p-2 mr-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Subject</div>
                      <div className="font-medium">{classroom.subject}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="bg-indigo-100 rounded-lg p-2 mr-3">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Students</div>
                      <div className="font-medium">{classroom.students}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-lg p-2 mr-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Teacher</div>
                      <div className="font-medium">{classroom.teacher}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Joined: {classroom.joinDate}
                    </div>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-200">
                      Enter
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add Class Card */}
            <div 
              onClick={() => setShowCreateModal(true)}
              className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 transition duration-200 h-full min-h-[14rem]"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1">Create New Classroom</h3>
              <p className="text-sm text-gray-500 text-center">Start a new learning environment for your students</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Create Classroom Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Create New Classroom</h3>
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleCreateClassroom}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Classroom Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="E.g. Math 101"
                      value={newClassData.name}
                      onChange={(e) => setNewClassData({...newClassData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="E.g. Mathematics"
                      value={newClassData.subject}
                      onChange={(e) => setNewClassData({...newClassData, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Brief description of the classroom"
                      rows="3"
                      value={newClassData.description}
                      onChange={(e) => setNewClassData({...newClassData, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-200"
                  >
                    Create Classroom
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Join Classroom Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Join a Classroom</h3>
                <button 
                  onClick={() => setShowJoinModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleJoinClassroom}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class Code</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter the class code"
                      value={classCode}
                      onChange={(e) => setClassCode(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                    <p>Ask your teacher for the class code, then enter it here.</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowJoinModal(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-200"
                  >
                    Join Classroom
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
