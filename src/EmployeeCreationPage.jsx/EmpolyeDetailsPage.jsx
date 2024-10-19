// EmployeeDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = () => {
      const dummyEmployeeData = {
        id: id,
        name: id === "1" ? "John Doe" : "Jane Smith",
        email: id === "1" ? "john@example.com" : "jane@example.com",
        department: "Engineering",
        role: "Developer",
        startDate: "2024-10-01",
      };
      setEmployee(dummyEmployeeData);
    };

    fetchEmployeeData();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Employee Details
      </h2>
      {employee ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg">
            <strong>Name:</strong> {employee.name}
          </p>
          <p className="text-lg">
            <strong>ID:</strong> {employee.id}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {employee.email}
          </p>
          <p className="text-lg">
            <strong>Department:</strong> {employee.department}
          </p>
          <p className="text-lg">
            <strong>Role:</strong> {employee.role}
          </p>
          <p className="text-lg">
            <strong>Start Date:</strong> {employee.startDate}
          </p>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetailsPage;
