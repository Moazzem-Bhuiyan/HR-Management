import React, { useState } from "react";

const HRDashboard = () => {
  const [metrics, setMetrics] = useState({
    onboarded: 5,
    pending: 2,
    upcoming: 3,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          HR Dashboard
        </h2>

        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <p className="text-lg font-medium text-gray-700">
              Total Onboarded Employees:
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {metrics.onboarded}
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <p className="text-lg font-medium text-gray-700">
              Pending Onboardings:
            </p>
            <p className="text-2xl font-bold text-yellow-700">
              {metrics.pending}
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow">
            <p className="text-lg font-medium text-gray-700">
              Upcoming Onboardings:
            </p>
            <p className="text-2xl font-bold text-green-700">
              {metrics.upcoming}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
