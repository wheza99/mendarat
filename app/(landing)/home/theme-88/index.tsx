import React, { Suspense, lazy } from 'react';
import './aurora-animations.css';

const AuroraHero = lazy(() => import('./components/aurora-hero'));
const AuroraFeatures = lazy(() => import('./components/aurora-features'));
const AuroraServices = lazy(() => import('./components/aurora-services'));
const AuroraShowcase = lazy(() => import('./components/aurora-showcase'));
const AuroraPricing = lazy(() => import('./components/aurora-pricing'));
const AuroraContact = lazy(() => import('./components/aurora-contact'));

const AuroraLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-blue-900 via-indigo-900 to-emerald-900">
    <div className="relative">
      <div className="bg-gradient-to-br from-blue-800/30 to-emerald-800/30 backdrop-blur-xl border border-cyan-400/40 rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-aurora-pulse text-cyan-200 font-mono">
            AURORA
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-cyan-400 via-emerald-400 to-indigo-400 animate-aurora-float rounded-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-cyan-200 font-light font-mono">
            LOADING AURORA...
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400/40 rounded-full animate-aurora-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-emerald-400/40 rounded-full animate-aurora-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-indigo-400/40 rounded-full animate-aurora-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-cyan-400/40 rounded-full animate-aurora-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme88() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-emerald-900 relative overflow-x-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-emerald-900"></div>
        {/* Aurora Lights */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-2/3 h-1/2 bg-aurora-green opacity-40 animate-aurora-move"></div>
          <div className="absolute right-0 top-1/3 w-1/2 h-1/3 bg-aurora-blue opacity-30 animate-aurora-move2"></div>
          <div className="absolute left-1/4 bottom-0 w-1/2 h-1/3 bg-aurora-purple opacity-30 animate-aurora-move3"></div>
        </div>
        {/* Aurora Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full animate-aurora-particle backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#22d3ee', '#34d399', '#818cf8'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${10 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        {/* Aurora Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/40 via-emerald-400/40 to-indigo-400/40 animate-aurora-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400/40 via-emerald-400/40 to-cyan-400/40 animate-aurora-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400/40 via-emerald-400/40 to-indigo-400/40 animate-aurora-border"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-indigo-400/40 via-emerald-400/40 to-cyan-400/40 animate-aurora-border"></div>
        </div>
        {/* Aurora Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-emerald-900/40"></div>
        {/* Aurora Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-aurora-scanlines"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<AuroraLoader />}>
          <AuroraHero />
        </Suspense>
        <Suspense fallback={<AuroraLoader />}>
          <AuroraFeatures />
        </Suspense>
        <Suspense fallback={<AuroraLoader />}>
          <AuroraServices />
        </Suspense>
        <Suspense fallback={<AuroraLoader />}>
          <AuroraShowcase />
        </Suspense>
        <Suspense fallback={<AuroraLoader />}>
          <AuroraPricing />
        </Suspense>
        <Suspense fallback={<AuroraLoader />}>
          <AuroraContact />
        </Suspense>
      </div>
      {/* Aurora Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-blue-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-emerald-400/5 to-indigo-400/5 animate-aurora-atmosphere"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:3px_3px] animate-aurora-noise"></div>
        </div>
      </div>
    </div>
  );
} 