'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
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

const EarningsCard = () => {
  const earnings = 25.30;
  const percentageIncrease = 15;

  const formatMoney = (amount: number) => {
    return amount.toFixed(2);
  };

  const chartData = {
    labels: ['7d', '14d', '21d', '30d'],
    datasets: [
      {
        label: 'Earnings',
        data: [10, 15, 18, 25.30],
        fill: false,
        borderColor: 'rgb(219, 39, 119)',
        backgroundColor: 'rgb(219, 39, 119)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(219, 39, 119)',
        pointBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'rgb(107, 114, 128)',
        bodyColor: 'rgb(219, 39, 119)',
        bodyFont: {
          weight: 'bold',
        },
        padding: 12,
        borderColor: 'rgb(229, 231, 235)',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: (context) => `$${formatMoney(context.parsed.y)}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgb(243, 244, 246)',
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            size: 12,
          },
          callback: (value) => `$${formatMoney(Number(value))}`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-800 font-semibold">Earnings Overview 💰</h2>
        <select className="text-sm text-gray-600 bg-transparent border-none outline-none">
          <option value="30d">30d</option>
          <option value="7d">7d</option>
          <option value="14d">14d</option>
          <option value="3mo">3mo</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-[#C04CFD] to-[#5E2BFF] bg-clip-text text-transparent">
            ${formatMoney(earnings)}
          </h3>
          <span className="text-green-500 text-sm font-medium">
            +{percentageIncrease}%
          </span>
        </div>
        <p className="text-sm text-gray-600">in the past 30 days</p>
      </div>
      
      <div className="h-48">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default EarningsCard; 