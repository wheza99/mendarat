import React from 'react';
import YachtHero from './components/yacht-hero';
import MarineFeatures from './components/marine-features';
import FleetShowcase from './components/fleet-showcase';
import YachtServices from './components/yacht-services';
import CharterSection from './components/charter-section';
import MarineContact from './components/marine-contact';

export default function HomePageTheme112() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white relative overflow-x-hidden">
      {/* Ocean wave background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 40 50 50 T100 50 L100 100 L0 100 Z' fill='%230ea5e9' fill-opacity='0.3'/%3E%3Cpath d='M0 60 Q25 50 50 60 T100 60 L100 100 L0 100 Z' fill='%230ea5e9' fill-opacity='0.2'/%3E%3Cpath d='M0 70 Q25 60 50 70 T100 70 L100 100 L0 100 Z' fill='%230ea5e9' fill-opacity='0.1'/%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating marine elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-teal-400 rounded-full animate-spin shadow-lg shadow-teal-400/50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse shadow-lg shadow-cyan-300/50"></div>
      </div>
      
      {/* Nautical compass elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 text-cyan-400 text-sm opacity-60 animate-pulse">
          ⚓ N
        </div>
        <div className="absolute bottom-20 left-20 text-blue-400 text-sm opacity-60 animate-pulse">
          ⚓ S
        </div>
        <div className="absolute top-1/2 left-10 text-teal-400 text-sm opacity-60 animate-pulse">
          ⚓ W
        </div>
        <div className="absolute top-1/2 right-10 text-cyan-300 text-sm opacity-60 animate-pulse">
          ⚓ E
        </div>
      </div>
      
      {/* Ocean surface effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <YachtHero />
        <MarineFeatures />
        <FleetShowcase />
        <YachtServices />
        <CharterSection />
        <MarineContact />
      </div>
    </div>
  );
} 