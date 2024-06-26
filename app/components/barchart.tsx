"use client"
import React from 'react'
import { Bar, Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
 
);

interface Props {
    value: { grade: string, count: number }[];
  }
  
  
  export function BarChart({value}:Props) {
  
    const barData = {
      labels: value.map(item => item.grade),
      datasets: [
        {
          label: 'Number of Students',
          backgroundColor: '#422259',
          borderColor: '#422259',
          borderWidth: 1,
          hoverBackgroundColor: '#9B59B6',
          hoverBorderColor: '#9B59B6',
          data: value.map(item => item.count)
        },
      ],
    };
  
    const barOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: 'white',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
        y: {
          beginAtZero: true,
          max : 10,
          ticks: {
            color: 'white',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
        },
      },
    };
  
    return (
      <div className="w-full px-1 h-64 bg-purple text-white flex items-center justify-center rounded">
        <Bar data={barData} options={barOptions} />
      </div>
    );
  }