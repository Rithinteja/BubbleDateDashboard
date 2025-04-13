'use client';

import { useState } from 'react';
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
} from 'chart.js';
import { useAuth } from 'contexts\AuthContext.tsx';
import { useRouter } from 'next/navigation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const router = useRouter();
  const auth = useAuth();
  const [copySuccess, setCopySuccess] = useState('');

  const referralLink = 'https://www.bubble-date.com/landing';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  const chartData = {
    labels: ['1 Mar', '7 Mar', '14 Mar', '21 Mar', '28 Mar', '4 Apr'],
    datasets: [
      {
        label: 'Earnings',
        data: [10, 12, 15, 14, 20, 25.30],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 p-8">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-white text-2xl font-bold">Ambassador Dashboard</div>
        <div className="flex gap-4">
          <button 
            onClick={() => router.push('/settings')}
            className="text-white hover:text-gray-200"
          >
            Settings
          </button>
          <button 
            onClick={() => auth?.logout()}
            className="text-white hover:text-gray-200"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Referral System Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Referral System</h3>
          <div className="text-4xl font-bold text-purple-600 mb-4">24</div>
          <p className="text-gray-600 mb-2">Total Referrals</p>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 p-2 border rounded text-sm"
            />
            <button
              onClick={copyToClipboard}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              {copySuccess || 'Copy'}
            </button>
          </div>
        </div>

        {/* Events Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Events Completed</h3>
          <div className="text-4xl font-bold text-purple-600 mb-4">11</div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <button className="text-blue-600 hover:underline">Log Activity</button>
              <button className="text-blue-600 hover:underline">View History</button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Networking Mixer @ Student Center</span>
                <span className="text-pink-500">April 23 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Product Demo @ Klaus</span>
                <span className="text-pink-500">April 30 3:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Progress</h3>
          <div className="relative h-80">
            <div className="absolute left-1/2 h-full w-1 bg-purple-200 transform -translate-x-1/2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  64
                </div>
                <div className="mt-2 text-sm font-medium">Legendary Cupid</div>
              </div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  46
                </div>
                <div className="mt-2 text-sm font-medium">Cupid</div>
              </div>
              <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  23
                </div>
                <div className="mt-2 text-sm font-medium">Matchmaker</div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                  12
                </div>
                <div className="mt-2 text-sm font-medium">Connector</div>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Earnings Overview</h3>
          <div className="text-4xl font-bold text-purple-600 mb-4">$25.30</div>
          <p className="text-gray-600 mb-4">in the past 30 days</p>
          <div className="h-48">
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Status: Connector 💝</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">Bubble Date Swag</span>
              <span>🎁</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">LinkedIn Feature</span>
              <span>👔</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">Free Dinner with Executives</span>
              <span>🍽️</span>
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 