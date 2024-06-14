"use client"
import { Line } from 'react-chartjs-2';
import Sidebar from '../components/sidebar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// AdminPage Component
const AdminPage = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  // const pieOptions = {
  //   maintainAspectRatio: false,
  //   responsive: true,
  // };

  // const barOptions = {
  //   maintainAspectRatio: false,
  //   responsive: true,
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  return (<div className='flex'>
      <Sidebar />
    <div className="flex min-h-screen overflow-hidden">
      <div className="flex-1 p-6 bg-n-8 text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Performance</h2>
            <div className="w-full h-64 bg-purple text-white flex items-center justify-center rounded">
             
                <Line data={data} />
              
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
              
                <span className="text-sm">Loading...</span>
              
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Content Usage</h2>
            <div className="w-full text-white flex items-center justify-center rounded">
             
                <span className="text-sm">Loading...</span>
             
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Overall Pass Percentage</h2>
            <div className="w-full text-white flex items-center justify-center rounded">
              
                <span className="text-sm">Loading...</span>
              
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Top 5 School Students</h2>
            <div className="w-full text-white flex items-center justify-center rounded">
              
                <span className="text-sm">Loading...</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default AdminPage;
