'use client';

import React from 'react';
import { FiGift, FiLinkedin, FiUsers } from 'react-icons/fi';

const StatusCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Status: Connector</h2>
        <span className="text-yellow-400 text-xl">⭐</span>
      </div>

      <div className="flex-1 space-y-4 mb-6">
        {/* Bubble Date Swag */}
        <div className="flex items-center gap-4 p-4 bg-[#FDF2FF] rounded-xl">
          <div className="w-10 h-10 rounded-xl bg-[#FAE3FF] flex items-center justify-center">
            <FiGift className="w-5 h-5 text-[#FF3B9A]" />
          </div>
          <div>
            <h3 className="text-[#FF3B9A] font-semibold text-lg">Bubble Date Swag</h3>
            <p className="text-sm text-gray-700">Claim your exclusive merch</p>
          </div>
        </div>

        {/* LinkedIn Feature */}
        <div className="flex items-center gap-4 p-4 bg-[#F0F7FF] rounded-xl">
          <div className="w-10 h-10 rounded-xl bg-[#E0EFFF] flex items-center justify-center">
            <FiLinkedin className="w-5 h-5 text-[#0077B5]" />
          </div>
          <div>
            <h3 className="text-[#0077B5] font-semibold text-lg">LinkedIn Feature</h3>
            <p className="text-sm text-gray-700">Get featured on our page</p>
          </div>
        </div>

        {/* Free Dinner */}
        <div className="flex items-center gap-4 p-4 bg-[#F0FFF4] rounded-xl">
          <div className="w-10 h-10 rounded-xl bg-[#E0FFE9] flex items-center justify-center">
            <FiUsers className="w-5 h-5 text-[#22C55E]" />
          </div>
          <div>
            <h3 className="text-[#22C55E] font-semibold text-lg">Free Dinner with Executives</h3>
            <p className="text-sm text-gray-700">Network with our team</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-2.5 bg-gradient-to-r from-[#C04CFD] to-[#5E2BFF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default StatusCard; 