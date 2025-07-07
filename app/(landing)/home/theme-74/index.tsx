import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const SteampunkHero = lazy(() => import('./components/steampunk-hero'));
const IndustrialFeatures = lazy(() => import('./components/industrial-features'));
const SteamServices = lazy(() => import('./components/steam-services'));
const GearShowcase = lazy(() => import('./components/gear-showcase'));
const BrassPricing = lazy(() => import('./components/brass-pricing'));
const SteamContact = lazy(() => import('./components/steam-contact'));

const SteampunkLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900">
    <div className="relative">
      {/* Steampunk Loading Container */}
      <div className="bg-gradient-to-br from-amber-800/90 to-orange-800/90 backdrop-blur-xl border-2 border-amber-400 rounded-lg p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-steam-pulse text-amber-400">
            STEAMPUNK
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-amber-400 via-orange-400 to-red-400 animate-steam-bars"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-amber-300 font-light">
            INDUSTRIAL INITIALIZING
          </div>
        </div>
      </div>
      
      {/* Steampunk Gear Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-amber-400 rounded-full animate-steam-spin"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-orange-400 rounded-full animate-steam-spin" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-red-400 rounded-full animate-steam-spin" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-amber-400 rounded-full animate-steam-spin" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme74() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 relative overflow-x-hidden">
      {/* Steampunk Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900"></div>
        
        {/* Industrial Patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Gear Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f59e0b_0%,transparent_50%)] bg-[length:100px_100px] animate-steam-gear"></div>
          
          {/* Steam Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#ea580c_50%,transparent_100%)] bg-[length:150px_150px] animate-steam-flow"></div>
        </div>

        {/* Floating Steampunk Elements */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`gear-${i}`}
            className="absolute animate-steam-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-12 h-12 border-2 border-${['amber', 'orange', 'red'][i % 3]}-400 rounded-full animate-steam-spin`}></div>
          </div>
        ))}

        {/* Steam Pipes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`pipe-${i}`}
              className="absolute w-2 h-16 bg-gradient-to-t from-amber-400 to-transparent animate-steam-pipe"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Steam Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-steam-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#f59e0b', '#ea580c', '#dc2626'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Industrial Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 animate-steam-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 animate-steam-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 via-orange-400 to-red-400 animate-steam-border"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-400 via-orange-400 to-amber-400 animate-steam-border"></div>
        </div>

        {/* Steampunk Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-amber-400 rounded-lg animate-steam-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-orange-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-red-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-amber-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Industrial Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-amber-900/50"></div>
        
        {/* Steam Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/5 to-transparent animate-steam-scanlines"></div>
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
          <SteamServices />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <GearShowcase />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <BrassPricing />
        </Suspense>
        
        <Suspense fallback={<SteampunkLoader />}>
          <SteamContact />
        </Suspense>
      </div>

      {/* Steampunk Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-amber-900/30"></div>
        
        {/* Industrial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-amber-900/40"></div>
        
        {/* Steam Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/2 via-orange-400/2 to-red-400/2 animate-steam-atmosphere"></div>
      </div>
    </div>
  );
} 