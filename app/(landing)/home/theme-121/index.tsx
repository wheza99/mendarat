import React from 'react';
import IslandHero from './components/island-hero';
import TropicalFeatures from './components/tropical-features';
import ParadiseShowcase from './components/paradise-showcase';
import IslandServices from './components/island-services';
import BeachSection from './components/beach-section';
import IslandContact from './components/island-contact';

export default function HomePageTheme121() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-cyan-600 text-white relative overflow-x-hidden">
      {/* Tropical background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-cyan-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.2'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating tropical elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-teal-300 animate-pulse">
          🏝️
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-blue-300 animate-bounce">
          🌊
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-cyan-300 animate-spin">
          🥥
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-teal-200 animate-pulse">
          🌴
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-blue-400 animate-bounce">
          🐚
        </div>
      </div>
      
      {/* Tropical grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-teal-300 text-sm opacity-60 animate-pulse font-serif">
          🏝️ ISLAND
        </div>
        <div className="absolute bottom-20 right-20 text-blue-300 text-sm opacity-60 animate-pulse font-serif">
          🌊 PARADISE
        </div>
        <div className="absolute top-1/2 left-10 text-cyan-300 text-sm opacity-60 animate-pulse font-serif">
          🥥 TROPICAL
        </div>
        <div className="absolute top-1/2 right-10 text-teal-200 text-sm opacity-60 animate-pulse font-serif">
          🌴 BEACH
        </div>
      </div>
      
      {/* Ocean border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-teal-300 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <IslandHero />
        <TropicalFeatures />
        <ParadiseShowcase />
        <IslandServices />
        <BeachSection />
        <IslandContact />
      </div>
    </div>
  );
} 