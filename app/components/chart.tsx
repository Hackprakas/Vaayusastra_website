"use client"
import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
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
