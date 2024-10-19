// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Employee Management</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/employee-creation"
            className="text-gray-600 hover:text-blue-600"
          >
            Create Employee
          </Link>
          <Link
            to="/employee-list"
            className="text-gray-600 hover:text-blue-600"
          >
            Employee List
          </Link>
          <Link
            to="/hr-dashboard"
            className="text-gray-600 hover:text-blue-600"
          >
            HR Dashboard
          </Link>{" "}
          {/* Add Link to HR Dashboard */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
