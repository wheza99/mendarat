import React from 'react';
import SpaceHero from './components/space-hero';
import CosmicFeatures from './components/cosmic-features';
import GalaxyShowcase from './components/galaxy-showcase';
import SpaceServices from './components/space-services';
import MissionSection from './components/mission-section';
import SpaceContact from './components/space-contact';

export default function HomePageTheme122() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white relative overflow-x-hidden">
      {/* Space background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.3'%3E%3Cpath d='M50 0l50 50-50 50L0 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating space elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-indigo-400 animate-pulse">
          🚀
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-purple-400 animate-bounce">
          🌌
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-cyan-400 animate-spin">
          👨‍🚀
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-indigo-300 animate-pulse">
          🌟
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-purple-500 animate-bounce">
          🛸
        </div>
      </div>
      
      {/* Space grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-indigo-400 text-sm opacity-60 animate-pulse font-mono">
          🚀 SPACE
        </div>
        <div className="absolute bottom-20 right-20 text-purple-400 text-sm opacity-60 animate-pulse font-mono">
          🌌 EXPLORATION
        </div>
        <div className="absolute top-1/2 left-10 text-cyan-400 text-sm opacity-60 animate-pulse font-mono">
          👨‍🚀 MISSION
        </div>
        <div className="absolute top-1/2 right-10 text-indigo-300 text-sm opacity-60 animate-pulse font-mono">
          🌟 COSMIC
        </div>
      </div>
      
      {/* Space border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <SpaceHero />
        <CosmicFeatures />
        <GalaxyShowcase />
        <SpaceServices />
        <MissionSection />
        <SpaceContact />
      </div>
    </div>
  );
} 