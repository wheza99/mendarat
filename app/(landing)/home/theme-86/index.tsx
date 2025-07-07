import React, { Suspense, lazy } from 'react';
import './nature-animations.css';

const NatureHero = lazy(() => import('./components/nature-hero'));
const EcoFeatures = lazy(() => import('./components/eco-features'));
const SustainServices = lazy(() => import('./components/sustain-services'));
const NatureShowcase = lazy(() => import('./components/nature-showcase'));
const EcoPricing = lazy(() => import('./components/eco-pricing'));
const NatureContact = lazy(() => import('./components/nature-contact'));

const NatureLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-green-100 to-green-200">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-green-600 text-lg font-light font-sans">Memuat tema alam...</p>
    </div>
  </div>
);

export default function HomePageTheme86() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 relative overflow-x-hidden">
      {/* Background Nature SVG */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-30" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#bbf7d0" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 right-0 w-1/2 h-40 opacity-20" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="50" rx="200" ry="50" fill="#a7f3d0" />
        </svg>
      </div>
      <div className="relative z-10">
        <Suspense fallback={<NatureLoader />}>
          <NatureHero />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <EcoFeatures />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <SustainServices />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <NatureShowcase />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <EcoPricing />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <NatureContact />
        </Suspense>
      </div>
    </div>
  );
} 