'use client';

import React from 'react';
import ReferralCard from '@/components/cards/ReferralCard';
import EventsCard from '@/components/cards/EventsCard';
import EarningsCard from '@/components/cards/EarningsCard';
import StatusCard from '@/components/cards/StatusCard';
import ProgressCard from '@/components/cards/ProgressCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0">
                <span className="text-white text-xl font-bold">Bubble Date</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-white/90 hover:text-white transition-colors">Events</a>
                <a href="#" className="text-white/90 hover:text-white transition-colors">Learn More</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
                John Appleseed ▼
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Ambassador Dashboard
          </h1>
        </div>
        
        <div className="flex gap-8">
          {/* Left side: 2x2 grid */}
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="w-full">
              <ReferralCard />
            </div>
            <div className="w-full">
              <EventsCard />
            </div>
            <div className="w-full">
              <EarningsCard />
            </div>
            <div className="w-full">
              <StatusCard />
            </div>
          </div>
          
          {/* Right side: Full-height Progress card */}
          <div className="w-80">
            <div className="h-full">
              <ProgressCard />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pb-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <span className="text-white/90">💝 Bubble Date</span>
            <a href="#" className="text-white/75 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/75 hover:text-white transition-colors">Discord</a>
            <a href="#" className="text-white/75 hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard; 