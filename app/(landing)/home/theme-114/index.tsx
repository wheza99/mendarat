import React from 'react';
import SpaHero from './components/spa-hero';
import WellnessFeatures from './components/wellness-features';
import TreatmentShowcase from './components/treatment-showcase';
import SpaServices from './components/spa-services';
import RetreatSection from './components/retreat-section';
import SpaContact from './components/spa-contact';

export default function HomePageTheme114() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 text-rose-900 relative overflow-x-hidden">
      {/* Zen background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f472b6' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating zen elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-rose-400 animate-bounce">
          🧘‍♀️
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-pink-400 animate-pulse">
          🌸
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-purple-400 animate-spin">
          🕯️
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-rose-300 animate-pulse">
          🌿
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-pink-300 animate-bounce">
          🧘‍♀️
        </div>
      </div>
      
      {/* Zen grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-rose-400 text-sm opacity-60 animate-pulse">
          🧘‍♀️ Inner Peace
        </div>
        <div className="absolute bottom-20 right-20 text-pink-400 text-sm opacity-60 animate-pulse">
          🌸 Wellness
        </div>
        <div className="absolute top-1/2 left-10 text-purple-400 text-sm opacity-60 animate-pulse">
          🕯️ Relaxation
        </div>
        <div className="absolute top-1/2 right-10 text-rose-300 text-sm opacity-60 animate-pulse">
          🌿 Harmony
        </div>
      </div>
      
      {/* Soft border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-rose-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <SpaHero />
        <WellnessFeatures />
        <TreatmentShowcase />
        <SpaServices />
        <RetreatSection />
        <SpaContact />
      </div>
    </div>
  );
} 