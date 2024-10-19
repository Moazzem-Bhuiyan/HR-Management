// EmployeeListPage.jsx
const EmployeeListPage = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);
  
    const handleRowClick = (id) => {
      navigate(`/employee-details/${id}`); // Ensure the URL matches the route
    };
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Onboarded Employees</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} onClick={() => handleRowClick(employee.id)} className="cursor-pointer hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.id}</td>
                <td className="py-2 px-4 border-b">{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  