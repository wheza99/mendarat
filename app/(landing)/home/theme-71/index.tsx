import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const NoirHero = lazy(() => import('./components/noir-hero'));
const CyberFeatures = lazy(() => import('./components/cyber-features'));
const NeonServices = lazy(() => import('./components/neon-services'));
const ShadowShowcase = lazy(() => import('./components/shadow-showcase'));
const DarkPricing = lazy(() => import('./components/dark-pricing'));
const NoirContact = lazy(() => import('./components/noir-contact'));

const NoirLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Noir Loading Container */}
      <div className="bg-black/90 border border-red-500/50 rounded-lg p-8 font-mono text-red-500 backdrop-blur-sm shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-noir-flicker">
            LOADING...
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-red-500 to-blue-500 animate-noir-bars"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm opacity-70">
            INITIALIZING NOIR PROTOCOL...
          </div>
        </div>
      </div>
      
      {/* Noir Scan Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-noir-scan"></div>
    </div>
  </div>
);

export default function HomePageTheme71() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Noir Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Film Grain Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJub2lyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ij4KICAgICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2ZmMDAwMCIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbm9pcikiLz4KPC9zdmc+')]"></div>
        </div>

        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-30">
          {/* Horizontal Grid Lines */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`h-grid-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-noir-pulse"
              style={{
                top: `${(i * 100) / 15}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Vertical Grid Lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`v-grid-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-noir-pulse"
              style={{
                left: `${(i * 100) / 20}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Floating Neon Signs */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`sign-${i}`}
            className="absolute animate-noir-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="text-xs font-mono text-red-500 animate-noir-flicker">
              {['HOTEL', 'BAR', 'CASINO', 'CLUB', 'DINER', 'MOTEL', 'CAFE', 'SHOP'][i]}
            </div>
          </div>
        ))}

        {/* Rain Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute w-px h-8 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-noir-rain"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>

        {/* Neon Reflections */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-red-500/5 to-transparent animate-noir-reflection"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-blue-500/5 to-transparent animate-noir-reflection-reverse"></div>
        </div>

        {/* Shadow Silhouettes */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`silhouette-${i}`}
              className="absolute w-16 h-32 bg-black/80 animate-noir-shadow"
              style={{
                left: `${20 + i * 15}%`,
                bottom: '0',
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Neon Puddles */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`puddle-${i}`}
              className="absolute bottom-0 rounded-full animate-noir-puddle"
              style={{
                left: `${10 + i * 15}%`,
                width: `${20 + Math.random() * 30}px`,
                height: `${10 + Math.random() * 15}px`,
                background: `radial-gradient(ellipse, ${['#ff0000', '#0000ff'][Math.floor(Math.random() * 2)]}/30, transparent)`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Noir Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
        
        {/* Film Noir Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent animate-noir-scanlines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<NoirLoader />}>
          <NoirHero />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <CyberFeatures />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <NeonServices />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <ShadowShowcase />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <DarkPricing />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <NoirContact />
        </Suspense>
      </div>

      {/* Noir Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        
        {/* Neon Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/2 via-transparent to-blue-500/2 animate-noir-atmosphere"></div>
        
        {/* Noir Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
      </div>
    </div>
  );
} 