// pages/admin.js
"use client"
import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Sidebar from '../components/sidebar';

// AdminPage Component
const AdminPage = () => {
  const [contentUsageData, setContentUsageData] = useState([10,20,11]);
  const [passPercentageData, setPassPercentageData] = useState(10);
  const [topSchoolPerformanceData, setTopSchoolPerformanceData] = useState(10);

  

  const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-6 bg-n-8 text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Performance</h2>
            <div className="w-full h-64 bg-purple text-white flex items-center justify-center rounded">
              {contentUsageData ? (
                <Pie data={contentUsageData} options={pieOptions} />
              ) : (
                <span className="text-sm">Loading...</span>
              )}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Number of Students Enrolled</h2>
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-2xl font-bold">2,220</div>
                <div className="text-gray-400">Total Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold">678</div>
                <div className="text-gray-400">New Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1,542</div>
                <div className="text-gray-400">Old Students</div>
              </div>
            </div>
            <div className="w-full h-64 bg-purple text-white flex items-center justify-center rounded">
              {passPercentageData ? (
                <Bar data={passPercentageData} options={barOptions} />
              ) : (
                <span className="text-sm">Loading...</span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Content Usage</h2>
            <div className="w-full text-white flex items-center justify-center rounded">
              {contentUsageData ? (
                <img src={`data:image/jpeg;base64,${contentUsageData}`} alt="Content Usage" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm">Loading...</span>
              )}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Overall Pass Percentage</h2>
            <div className="w-full text-white flex items-center justify-center rounded">
              {passPercentageData ? (
                <img src={`data:image/jpeg;base64,${passPercentageData}`} alt="Overall Pass Percentage" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm">Loading...</span>
              )}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Top 5 School Performance</h2>
            <div className="w-full text-white flex items-center justify-center rounded">
              {topSchoolPerformanceData ? (
                <img src={`data:image/jpeg;base64,${topSchoolPerformanceData}`} alt="Top 5 School Performance" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm">Loading...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
