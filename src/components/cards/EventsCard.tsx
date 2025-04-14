'use client';

import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const EventsCard = () => {
  const eventsCompleted = 11;
  const totalEvents = 20;
  const progress = Math.round((eventsCompleted / totalEvents) * 100);
  
  const upcomingEvents = [
    {
      title: 'Networking Mixer @ Student Center',
      date: 'April 23',
      time: '6:00 PM',
    },
    {
      title: 'Product Demo @ Klaus',
      date: 'April 30',
      time: '3:00 PM',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
      <div className="mb-6">
        <h2 className="text-gray-800 font-semibold mb-1">Progress Log</h2>
        <div className="space-y-2">
          <h3 className="text-[#FF3B9A] font-semibold text-xl">Events Completed:</h3>
          <div className="flex items-center gap-3">
            <div className="bg-[#FF3B9A]/10 p-2 rounded-lg">
              <FiCalendar className="w-6 h-6 text-[#FF3B9A]" />
            </div>
            <span className="text-4xl font-bold text-gray-900">{eventsCompleted}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FF3B9A] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <button className="bg-[#FF3B9A]/10 text-[#FF3B9A] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#FF3B9A]/20 transition-colors">
          Log Activity
        </button>
        <button className="text-[#6B7280] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          View History
        </button>
      </div>

      <div className="space-y-3">
        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Upcoming:</p>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
              <div className="bg-white p-2 rounded-lg">
                <FiCalendar className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{event.title}</p>
                <p className="text-xs text-[#FF3B9A]">{event.date} {event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCard; 