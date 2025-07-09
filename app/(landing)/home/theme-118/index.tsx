import React from 'react';
import DesertHero from './components/desert-hero';
import OasisFeatures from './components/oasis-features';
import DesertShowcase from './components/desert-showcase';
import DesertServices from './components/desert-services';
import CaravanSection from './components/caravan-section';
import DesertContact from './components/desert-contact';

export default function HomePageTheme118() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 via-orange-700 to-yellow-600 text-amber-100 relative overflow-x-hidden">
      {/* Desert background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-orange-700 to-yellow-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.2'%3E%3Cpath d='M50 0l50 50-50 50L0 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating desert elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-amber-400 animate-pulse">
          🌵
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-orange-400 animate-bounce">
          🐪
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 animate-spin">
          🏺
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-amber-300 animate-pulse">
          🌴
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-orange-500 animate-bounce">
          🏜️
        </div>
      </div>
      
      {/* Desert grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-amber-400 text-sm opacity-60 animate-pulse font-serif">
          🌵 DESERT
        </div>
        <div className="absolute bottom-20 right-20 text-orange-400 text-sm opacity-60 animate-pulse font-serif">
          🐪 CARAVAN
        </div>
        <div className="absolute top-1/2 left-10 text-yellow-400 text-sm opacity-60 animate-pulse font-serif">
          🏺 OASIS
        </div>
        <div className="absolute top-1/2 right-10 text-amber-300 text-sm opacity-60 animate-pulse font-serif">
          🌴 ARABIAN
        </div>
      </div>
      
      {/* Desert border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <DesertHero />
        <OasisFeatures />
        <DesertShowcase />
        <DesertServices />
        <CaravanSection />
        <DesertContact />
      </div>
    </div>
  );
} 