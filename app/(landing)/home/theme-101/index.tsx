import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const SteampunkHero = lazy(() => import('./components/steampunk-hero'));
const IndustrialFeatures = lazy(() => import('./components/industrial-features'));
const MechanicalShowcase = lazy(() => import('./components/mechanical-showcase'));
const SteamServices = lazy(() => import('./components/steam-services'));
const IndustrialPricing = lazy(() => import('./components/industrial-pricing'));
const SteampunkContact = lazy(() => import('./components/steampunk-contact'));

const SteampunkLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700">
    <div className="relative">
      {/* Steampunk Loading Animation */}
      <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-orange-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-yellow-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme101() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700 relative overflow-x-hidden font-serif">
      {/* Steampunk Industrial Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gear Patterns */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`gear-${i}`}
              className="absolute animate-spin"
              style={{
                left: `${10 + i * 12}%`,
                top: `${5 + (i % 3) * 30}%`,
                animationDuration: `${20 + i * 5}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#d97706" strokeWidth="3" />
                <circle cx="30" cy="30" r="15" fill="none" stroke="#d97706" strokeWidth="2" />
                <circle cx="30" cy="30" r="5" fill="#d97706" />
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x="25"
                    y="5"
                    width="10"
                    height="8"
                    fill="#d97706"
                    transform={`rotate(${j * 45} 30 30)`}
                  />
                ))}
              </svg>
            </div>
          ))}
        </div>

        {/* Steam Pipes */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path d="M0 200 Q300 150 600 200 Q900 250 1200 200" stroke="#d97706" strokeWidth="8" fill="none" />
            <path d="M0 400 Q300 350 600 400 Q900 450 1200 400" stroke="#92400e" strokeWidth="6" fill="none" />
            <path d="M0 600 Q300 550 600 600 Q900 650 1200 600" stroke="#a16207" strokeWidth="4" fill="none" />
            
            {/* Pipe Joints */}
            <circle cx="300" cy="200" r="12" fill="#d97706" />
            <circle cx="600" cy="200" r="12" fill="#d97706" />
            <circle cx="900" cy="200" r="12" fill="#d97706" />
            <circle cx="300" cy="400" r="10" fill="#92400e" />
            <circle cx="600" cy="400" r="10" fill="#92400e" />
            <circle cx="900" cy="400" r="10" fill="#92400e" />
            <circle cx="300" cy="600" r="8" fill="#a16207" />
            <circle cx="600" cy="600" r="8" fill="#a16207" />
            <circle cx="900" cy="600" r="8" fill="#a16207" />
          </svg>
        </div>

        {/* Industrial Particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <div className={`w-2 h-2 ${
              ['bg-amber-400', 'bg-orange-400', 'bg-yellow-400', 'bg-amber-600'][Math.floor(Math.random() * 4)]
            } rounded-full animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Steam Valves */}
        <div className="absolute bottom-0 left-8 opacity-30">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
            <rect x="30" y="20" width="20" height="80" rx="10" fill="#92400e" stroke="#d97706" strokeWidth="2" />
            <circle cx="40" cy="40" r="8" fill="#d97706" />
            <circle cx="40" cy="80" r="8" fill="#d97706" />
            <rect x="35" y="100" width="10" height="20" fill="#a16207" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-8 opacity-30">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
            <rect x="30" y="20" width="20" height="80" rx="10" fill="#92400e" stroke="#d97706" strokeWidth="2" />
            <circle cx="40" cy="40" r="8" fill="#d97706" />
            <circle cx="40" cy="80" r="8" fill="#d97706" />
            <rect x="35" y="100" width="10" height="20" fill="#a16207" />
          </svg>
        </div>

        {/* Steam Clouds */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="steamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#92400e" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a16207" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            <ellipse cx="200" cy="100" rx="40" ry="20" fill="url(#steamGradient1)" opacity="0.3" />
            <ellipse cx="600" cy="150" rx="50" ry="25" fill="url(#steamGradient1)" opacity="0.4" />
            <ellipse cx="1000" cy="120" rx="35" ry="18" fill="url(#steamGradient1)" opacity="0.3" />
          </svg>
        </div>

        {/* Industrial Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-conic from-amber-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-yellow-400/15 via-amber-400/15 to-orange-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<SteampunkLoader />}>
          <SteampunkHero />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <IndustrialFeatures />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <MechanicalShowcase />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <SteamServices />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <IndustrialPricing />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <SteampunkContact />
        </Suspense>
      </div>

      {/* Industrial Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/3 to-transparent" />
      </div>
    </div>
  );
} 