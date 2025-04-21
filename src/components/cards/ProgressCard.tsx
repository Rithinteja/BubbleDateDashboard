'use client';

import React from 'react';
import { FaStar, FaHeart, FaCrown } from 'react-icons/fa';

const ProgressCard = () => {
  const milestones = [
    { level: 'Legendary Cupid', points: 450, icon: FaCrown, achieved: false },
    { level: 'Cupid', points: 300, icon: FaHeart, achieved: false },
    { level: 'Matchmaker', points: 200, icon: FaStar, achieved: false },
    { level: 'Connector', points: 100, icon: FaStar, achieved: true },
    { level: 'Rookie', points: 50, icon: FaStar, achieved: true }
  ];

  const currentPoints = 105;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
      <h2 className="text-2xl font-semibold text-[#FF3B9A] mb-8">Progress</h2>
      
      <div className="relative flex-1 flex flex-col justify-between">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {/* Milestones */}
        {milestones.map((milestone, index) => {
          const isAchieved = currentPoints >= milestone.points;
          const Icon = milestone.icon;
          
          return (
            <div key={milestone.level} className="relative flex items-center gap-4">
              {/* Icon */}
              <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${isAchieved ? 'bg-[#FF3B9A]' : 'bg-gray-200'}`}>
                <Icon className={`w-4 h-4 ${isAchieved ? 'text-white' : 'text-gray-400'}`} />
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <p className={`font-medium ${isAchieved ? 'text-gray-900' : 'text-gray-400'}`}>
                  {milestone.level}
                </p>
                <p className={`text-sm ${isAchieved ? 'text-[#FF3B9A]' : 'text-gray-400'}`}>
                  {milestone.points}p
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressCard; 