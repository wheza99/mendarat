import React from 'react';
import TokyoHero from './components/tokyo-hero';
import StreetFeatures from './components/street-features';
import NeonShowcase from './components/neon-showcase';
import TokyoServices from './components/tokyo-services';
import CultureSection from './components/culture-section';
import TokyoContact from './components/tokyo-contact';

export default function HomePageTheme119() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900 text-pink-100 relative overflow-x-hidden">
      {/* Neon Tokyo background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.2'%3E%3Cpath d='M60 0l60 60-60 60L0 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating neon elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-pink-400 animate-pulse">
          🗾
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-purple-400 animate-bounce">
          🎌
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-cyan-400 animate-spin">
          🏮
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-pink-300 animate-pulse">
          ⛩️
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-purple-500 animate-bounce">
          🎎
        </div>
      </div>
      
      {/* Neon grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-pink-400 text-sm opacity-60 animate-pulse font-mono">
          🗾 TOKYO
        </div>
        <div className="absolute bottom-20 right-20 text-purple-400 text-sm opacity-60 animate-pulse font-mono">
          🎌 NEON
        </div>
        <div className="absolute top-1/2 left-10 text-cyan-400 text-sm opacity-60 animate-pulse font-mono">
          🏮 STREET
        </div>
        <div className="absolute top-1/2 right-10 text-pink-300 text-sm opacity-60 animate-pulse font-mono">
          ⛩️ CULTURE
        </div>
      </div>
      
      {/* Neon border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <TokyoHero />
        <StreetFeatures />
        <NeonShowcase />
        <TokyoServices />
        <CultureSection />
        <TokyoContact />
      </div>
    </div>
  );
} 