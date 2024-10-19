import { useState } from "react";

const EmployeeCreationPage = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    id: "",
    email: "",
    department: "",
    role: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    // Logic to save employee data
    console.log("Saved Employee Data: ", employeeData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Employee Creation
        </h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={employeeData.id}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={employeeData.department}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role:
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={employeeData.role}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={employeeData.startDate}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeCreationPage;
