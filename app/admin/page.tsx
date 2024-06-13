import React from 'react';
import  Sidebar  from '../components/sidebar';


// Sidebar Component

// Main Component
export default function MainComponent() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-n-8">
        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="border border-n-6 text-white rounded-lg p-4 flex flex-col items-center">
            <div className="text-3xl font-bold">84,198</div>
            <div>REVENUE</div>
          </div>
          <div className="border border-n-6 text-white rounded-lg p-4 flex flex-col items-center">
            <div className="text-3xl font-bold">36,540</div>
            <div>SALES</div>
          </div>
          <div className="border border-n-6 text-white rounded-lg p-4 flex flex-col items-center">
            <div className="text-3xl font-bold">24,225</div>
            <div>PRODUCTS</div>
          </div>
          <div className="border border-n-6 text-white rounded-lg p-4 flex flex-col items-center">
            <div className="text-3xl font-bold">88,658</div>
            <div>VISITS</div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-n-6 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="text-2xl font-bold">PROFIT</div>
            <div className="text-4xl">82%</div>
          </div>
          <div className="border border-n-6 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="text-2xl font-bold">NO. OF VISITS</div>
            <div className="text-4xl">46%</div>
          </div>
          <div className=" border border-n-6 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="text-2xl font-bold">CUSTOMERS</div>
            <div className="text-4xl">84%</div>
          </div>
          <div className="border border-n-6 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="text-2xl font-bold">SALES</div>
            <div className="text-4xl">55%</div>
          </div>
          <div className="col-span-2 border border-n-6 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="text-2xl font-bold">Users</div>
            <div className="text-4xl">30</div>
          </div>
        </div>
      </div>
    </div>
  );
}
