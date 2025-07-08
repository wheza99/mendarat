import React, { Suspense, lazy } from 'react';
import './noir-animations.css';

// Lazy load all components for better performance
const NoirHero = lazy(() => import('./components/noir-hero'));
const CinematicFeatures = lazy(() => import('./components/cinematic-features'));
const NeonShowcase = lazy(() => import('./components/neon-showcase'));
const FilmServices = lazy(() => import('./components/film-services'));
const DramaticPricing = lazy(() => import('./components/dramatic-pricing'));
const NoirContact = lazy(() => import('./components/noir-contact'));

const NoirLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Film Reel Loading Animation */}
      <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-noir-spin"></div>
      <div className="absolute inset-2 w-16 h-16 border-4 border-blue-500 border-b-transparent rounded-full animate-noir-counter-spin"></div>
      <div className="absolute inset-4 w-12 h-12 border-4 border-purple-500 border-l-transparent rounded-full animate-noir-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-noir-pulse shadow-lg shadow-red-500/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme90() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Noir Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Film Grain Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:2px_2px] animate-pulse"></div>
        </div>

        {/* Floating Neon Elements */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            <div className={`w-2 h-2 ${
              ['bg-red-500', 'bg-blue-500', 'bg-purple-500', 'bg-cyan-500'][Math.floor(Math.random() * 4)]
            } rounded-full animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Film Strip Effect */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>

        {/* Cinematic Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/40 via-blue-500/40 to-purple-500/40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-red-500/40 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500/40 via-blue-500/40 to-purple-500/40 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500/40 via-cyan-500/40 to-red-500/40 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<NoirLoader />}>
          <NoirHero />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <CinematicFeatures />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <NeonShowcase />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <FilmServices />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <DramaticPricing />
        </Suspense>
        
        <Suspense fallback={<NoirLoader />}>
          <NoirContact />
        </Suspense>
      </div>

      {/* Noir Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent" />
      </div>
    </div>
  );
} 