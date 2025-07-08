import React, { Suspense, lazy } from 'react';
import './futuristic-animations.css';

const FuturisticHero = lazy(() => import('./components/futuristic-hero'));
const FuturisticFeatures = lazy(() => import('./components/futuristic-features'));
const FuturisticServices = lazy(() => import('./components/futuristic-services'));
const FuturisticShowcase = lazy(() => import('./components/futuristic-showcase'));
const FuturisticPricing = lazy(() => import('./components/futuristic-pricing'));
const FuturisticContact = lazy(() => import('./components/futuristic-contact'));

const FuturisticLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-white via-blue-50 to-blue-100">
    <div className="relative">
      <div className="bg-white/60 backdrop-blur-xl border border-blue-200/40 rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-futuristic-pulse text-blue-400 font-mono">
            FUTURISTIC
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-blue-400 via-blue-200 to-white animate-futuristic-float rounded-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-blue-400 font-light font-mono">
            LOADING...
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme89() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-x-hidden">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100"></div>
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,#3b82f6_0%,transparent_60%)] bg-[length:200px_200px] animate-futuristic-gear"></div>
          <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,#0ea5e9_50%,transparent_100%)] bg-[length:300px_300px] animate-futuristic-flow"></div>
        </div>
        {/* Floating Geometric Elements */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`futuristic-${i}`}
            className="absolute animate-futuristic-float"
            style={{
              left: `${8 + (i % 5) * 18}%`,
              top: `${12 + Math.floor(i / 5) * 40}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${7 + Math.random() * 5}s`
            }}
          >
            <div className={`w-8 h-8 border-2 border-blue-200/40 rounded-xl animate-futuristic-pulse backdrop-blur-sm`}></div>
          </div>
        ))}
        {/* Futuristic Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200/40 via-blue-400/40 to-blue-200/40 animate-futuristic-border backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/40 via-blue-200/40 to-blue-400/40 animate-futuristic-border backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-200/40 via-blue-400/40 to-blue-200/40 animate-futuristic-border backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-400/40 via-blue-200/40 to-blue-400/40 animate-futuristic-border backdrop-blur-sm"></div>
        </div>
        {/* Futuristic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 via-transparent to-blue-100/40"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<FuturisticLoader />}>
          <FuturisticHero />
        </Suspense>
        <Suspense fallback={<FuturisticLoader />}>
          <FuturisticFeatures />
        </Suspense>
        <Suspense fallback={<FuturisticLoader />}>
          <FuturisticServices />
        </Suspense>
        <Suspense fallback={<FuturisticLoader />}>
          <FuturisticShowcase />
        </Suspense>
        <Suspense fallback={<FuturisticLoader />}>
          <FuturisticPricing />
        </Suspense>
        <Suspense fallback={<FuturisticLoader />}>
          <FuturisticContact />
        </Suspense>
      </div>
      {/* Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-transparent to-blue-100/20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-blue-100/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/10 via-blue-400/10 to-blue-200/10 animate-futuristic-atmosphere"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:3px_3px] animate-futuristic-noise"></div>
        </div>
      </div>
    </div>
  );
} 