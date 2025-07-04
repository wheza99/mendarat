import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const OrganicHero = lazy(() => import('./components/organic-hero'));
const EcoInnovation = lazy(() => import('./components/eco-innovation'));
const NatureTech = lazy(() => import('./components/nature-tech'));
const SustainableFeatures = lazy(() => import('./components/sustainable-features'));
const BioharmonyServices = lazy(() => import('./components/bioharmony-services'));
const GreenContact = lazy(() => import('./components/green-contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative">
      {/* Organic Loading Animation */}
      <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-organic-grow"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-amber-200 border-b-amber-500 rounded-full animate-organic-pulse"></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-green-200 border-l-green-500 rounded-full animate-organic-flow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-organic-breathe"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme66() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50 relative overflow-x-hidden">
      {/* Organic Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Flowing Organic Patterns */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <radialGradient id="leafGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
              </radialGradient>
            </defs>
            
            {/* Organic Flow Lines */}
            <path d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 100 1200 250" 
                  stroke="url(#organicGradient)" 
                  strokeWidth="3" 
                  className="animate-organic-flow" />
            <path d="M0 500 Q300 300 600 450 Q900 600 1200 400" 
                  stroke="url(#organicGradient)" 
                  strokeWidth="2" 
                  className="animate-organic-flow-reverse" />
          </svg>
        </div>

        {/* Floating Organic Elements */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            {/* Organic Shapes */}
            <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} ${
              ['bg-emerald-300', 'bg-green-300', 'bg-amber-300', 'bg-lime-300'][Math.floor(Math.random() * 4)]
            } opacity-60 ${
              ['rounded-full', 'rounded-lg', 'rounded-3xl'][Math.floor(Math.random() * 3)]
            } transform rotate-12`}></div>
          </div>
        ))}

        {/* Growing Vines Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="vineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#16a34a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#15803d" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Vine Growth Patterns */}
          {Array.from({ length: 8 }, (_, i) => (
            <g key={`vine-${i}`}>
              <path
                d={`M${i * 12},100 Q${i * 12 + 5},80 ${i * 12 + 8},60 Q${i * 12 + 15},40 ${i * 12 + 12},20 Q${i * 12 + 18},0 ${i * 12 + 25},10`}
                stroke="url(#vineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-organic-vine-grow"
                style={{animationDelay: `${i * 0.4}s`}}
              />
              
              {/* Leaves on vines */}
              <ellipse
                cx={i * 12 + 8}
                cy="60"
                rx="2"
                ry="4"
                fill="#22c55e"
                opacity="0.7"
                className="animate-organic-leaf-sway"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            </g>
          ))}
        </svg>

        {/* Particle Seeds */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`seed-${i}`}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-organic-seed-drift opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              boxShadow: '0 0 8px currentColor'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <OrganicHero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <EcoInnovation />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <NatureTech />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <SustainableFeatures />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <BioharmonyServices />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <GreenContact />
        </Suspense>
      </div>

      {/* Organic Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/5 via-transparent to-emerald-900/5 animate-organic-ambient" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/3 to-transparent animate-organic-breeze" />
      </div>
    </div>
  );
} 