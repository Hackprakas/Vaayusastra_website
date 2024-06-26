"use client"
import React from 'react'
import { Bar, Line, PolarArea, Radar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

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
  BarElement,
  RadialLinearScale
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
  BarElement,
  RadialLinearScale
 
);
interface Props {
  datas: any;
}

const Chart: React.FC<Props> = ({ datas }) => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Students Enrolled',
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
          '#9B59B6',
          '#FFA726'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
          '#9B59B6',
          '#FFA726'
        ],
        bordercolor: 'black',
        borderWidth: 2,

        hoverBorderColor: 'white',
        data: [datas.January, datas.February, datas.March, datas.April, datas.May, datas.June],
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
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
        max: 10,
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
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

  return (
    <div className="w-full px-1 h-64 bg-purple text-white flex items-center justify-center rounded">

      <Line data={data} options={options} />

    </div>
  )
}
export default Chart;

export function Pies({ datas }: Props) {

  const data = {
    labels: ['10-days-camp', 'Weekend Batches', 'Online-AirScience', 'Summer-camp', 'Advanced-level-program', 'Orange'],
    datasets: [{
      data: [datas.Tendayscamp, datas.WeekendBatches, datas.OnlineAirScience, datas.Summercamp, datas.Advancedlevelprogram],
      backgroundColor: [
        '#422259',
        '#D38CD8',
        '#BF7BB6',
        '#9B59B6',
        '#6D4985',
        '##7386E6'
      ],
      hoverBackgroundColor: [
        '#422259',
        '#D38CD8',
        '#BF7BB6',
        '#9B59B6',
        '#6D4985',
        '#7386E6'
      ]
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Custom Pie Chart',
      colors: 'white',
    },
    plugins: {
      legend:{
        labels:{
          color: "grey",
        }
      }
    }


    // You can add more options here
  };

  return (
    <div className="w-full px-1 h-64 bg-purple text-white flex items-center justify-center rounded">

      <Pie data={data} options={options} />

    </div>
  )
}

export function DoughnutChart({ datas }: Props) {
  const data = {
    labels: ['Pass', 'Fail'],
    datasets: [
      {
        data: [datas, 100 - datas],
        backgroundColor: ['', '#D38CD8'],
        hoverBackgroundColor: ['#422259', '#9B59B6'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'as const,
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="w-full h-64 bg-purple text-white flex items-center justify-center rounded">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export function RadarChart({ datas }: Props)  {
  const chartData = {
    labels: Object.keys(datas),
    datasets: [
      {
        label: 'College Distribution',
        data: Object.values(datas),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        pointLabels: {
          color: 'white',
        },
        max:5,
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="w-full h-64 bg-purple text-white flex items-center justify-center rounded">
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};
