'use client';

import React from 'react';
import { FiCopy, FiShare2, FiUser } from 'react-icons/fi';

const ReferralCard = () => {
  const referralLink = 'https://bubbledate.com/ref/johnappleseed';
  const totalReferrals = 24;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // TODO: Add toast notification
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
      <h2 className="text-gray-800 font-semibold mb-4">Referral System</h2>
      
      <div className="mb-6">
        <div className="space-y-2">
          <h3 className="text-[#FF3B9A] font-semibold">Total Referrals:</h3>
          <div className="flex items-center gap-3">
            <div className="bg-[#FF3B9A]/10 p-2 rounded-lg">
              <FiUser className="w-6 h-6 text-[#FF3B9A]" />
            </div>
            <span className="text-4xl font-bold text-gray-900">{totalReferrals}</span>
          </div>
        </div>
      </div>

      {/* Referral Link Section */}
      <div className="w-full mb-4">
        <div className="relative w-full bg-gray-50 rounded-xl p-3">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full bg-transparent text-blue-600 pr-10 outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiCopy className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Share Button */}
      <div className="flex justify-center">
        <button className="w-48 bg-gradient-to-r from-[#C04CFD] to-[#5E2BFF] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <FiShare2 className="w-5 h-5" />
          Share
        </button>
      </div>
    </div>
  );
};

export default ReferralCard; 