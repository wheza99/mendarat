import React from 'react';
import NordicHero from './components/nordic-hero';
import HyggeFeatures from './components/hygge-features';
import MinimalistShowcase from './components/minimalist-showcase';
import NordicServices from './components/nordic-services';
import LifestyleSection from './components/lifestyle-section';
import NordicContact from './components/nordic-contact';

export default function HomePageTheme120() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 text-slate-800 relative overflow-x-hidden">
      {/* Nordic background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364758b' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating Nordic elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-slate-400 animate-pulse">
          🌲
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-gray-400 animate-bounce">
          ❄️
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-blue-400 animate-spin">
          🏔️
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-slate-300 animate-pulse">
          🦊
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-gray-500 animate-bounce">
          🧸
        </div>
      </div>
      
      {/* Minimalist grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-slate-400 text-sm opacity-40 animate-pulse font-light">
          🌲 NORDIC
        </div>
        <div className="absolute bottom-20 right-20 text-gray-400 text-sm opacity-40 animate-pulse font-light">
          ❄️ MINIMAL
        </div>
        <div className="absolute top-1/2 left-10 text-blue-400 text-sm opacity-40 animate-pulse font-light">
          🏔️ HYGGE
        </div>
        <div className="absolute top-1/2 right-10 text-slate-300 text-sm opacity-40 animate-pulse font-light">
          🦊 SIMPLE
        </div>
      </div>
      
      {/* Subtle border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <NordicHero />
        <HyggeFeatures />
        <MinimalistShowcase />
        <NordicServices />
        <LifestyleSection />
        <NordicContact />
      </div>
    </div>
  );
} 