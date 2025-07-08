import React, { Suspense, lazy } from 'react';

const MagazineHero = lazy(() => import('./components/magazine-hero'));
const EditorialFeatures = lazy(() => import('./components/editorial-features'));
const ArticleShowcase = lazy(() => import('./components/article-showcase'));
const MagazineServices = lazy(() => import('./components/magazine-services'));
const PricingPlans = lazy(() => import('./components/pricing-plans'));
const ContactEditorial = lazy(() => import('./components/contact-editorial'));

const EditorialLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-white">
    <div className="flex flex-col items-center">
      <div className="w-64 h-10 bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="w-40 h-6 bg-gray-100 rounded mb-2 animate-pulse" />
      <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 animate-pulse" />
      <div className="w-24 h-4 bg-red-500 rounded mb-2 animate-pulse" />
      <span className="mt-4 text-gray-500 font-serif tracking-widest animate-pulse uppercase">Loading Editorial...</span>
    </div>
  </div>
);

export default function HomePageTheme106() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-serif">
      {/* Editorial grid background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-2 h-full bg-red-500/10" />
        <div className="absolute bottom-0 right-0 w-2 h-1/2 bg-yellow-400/10" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1/2 bg-black/10" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1/3 bg-gray-800/10" />
      </div>
      <div className="relative z-10">
        <Suspense fallback={<EditorialLoader />}>
          <MagazineHero />
        </Suspense>
        <Suspense fallback={<EditorialLoader />}>
          <EditorialFeatures />
        </Suspense>
        <Suspense fallback={<EditorialLoader />}>
          <ArticleShowcase />
        </Suspense>
        <Suspense fallback={<EditorialLoader />}>
          <MagazineServices />
        </Suspense>
        <Suspense fallback={<EditorialLoader />}>
          <PricingPlans />
        </Suspense>
        <Suspense fallback={<EditorialLoader />}>
          <ContactEditorial />
        </Suspense>
      </div>
    </div>
  );
} 