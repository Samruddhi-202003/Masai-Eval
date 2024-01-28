// Import necessary React hooks and libraries
import React, { useEffect, useState } from "react";
import { Timer } from "./components/Timer";
import StudentList from "./components/StudentList";
import './app.css'; 

// Main App component
const App = () => {
  // Define state variables using useState hook
  const [students, setStudents] = useState([]);

  let url = "https://dummyjson.com/users";

  //fetch Data here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data:", data);
        setStudents(data);
      } catch (err) {
        console.error("Error", err);
      }
    };
  
    fetchData();
  }, []); 
  
  // Render the main structure of the app
  return (
    <div>
      {/* A heading should be added*/}
      <h1>Student Management System</h1>

      {/* button to 
      toggle show/hide Timer*/}
      <Timer />
      {/* Render StudenList component */}
      <StudentList students={students} />
    </div>
  );
};

// Export the App component for use in other files
export default App;
