"use client"
import React from 'react'
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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

