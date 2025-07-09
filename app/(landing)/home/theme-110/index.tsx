import React from 'react';
import GamingHero from './components/gaming-hero';
import GameFeatures from './components/game-features';
import LeaderboardSection from './components/leaderboard-section';
import GamingServices from './components/gaming-services';
import TournamentSection from './components/tournament-section';
import GamingContact from './components/gaming-contact';

export default function HomePageTheme110() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Retro grid background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-40 grid-rows-40 h-full w-full">
            {Array.from({ length: 1600 }).map((_, i) => (
              <div key={i} className="border border-green-400/20 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Neon scan lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating neon elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-spin shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <GamingHero />
        <GameFeatures />
        <LeaderboardSection />
        <GamingServices />
        <TournamentSection />
        <GamingContact />
      </div>
    </div>
  );
} 