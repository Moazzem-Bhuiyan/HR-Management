// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import HRDashboard
// Adjust the path as necessary
import Navbar from "./Navber/Navbar";
import EmployeeCreationPage from "./EmployeeCreationPage.jsx/EmployeeCreationPage";
import EmployeeListPage from "./EmployeeCreationPage.jsx/EmployeeListPage";
import EmployeeDetailsPage from "./EmployeeCreationPage.jsx/EmpolyeDetailsPage";
import HRDashboard from "./HrDashBoard/HRDashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <h2 className="text-2xl">Welcome to Employee Management</h2>
            }
          />
          <Route path="/employee-creation" element={<EmployeeCreationPage />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />

          <Route
            path="/employee-details/:id"
            element={<EmployeeDetailsPage />}
          />

          <Route path="/hr-dashboard" element={<HRDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
