import React, { Suspense, lazy } from 'react';

const NewsHero = lazy(() => import('./components/news-hero'));
const EditorialFeatures = lazy(() => import('./components/editorial-features'));
const NewsShowcase = lazy(() => import('./components/news-showcase'));
const EditorialServices = lazy(() => import('./components/editorial-services'));
const NewsPricing = lazy(() => import('./components/news-pricing'));
const EditorialContact = lazy(() => import('./components/editorial-contact'));

const NewsLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-gray-700 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-gray-700 font-serif animate-pulse">Loading news...</span>
    </div>
  </div>
);

export default function HomePageTheme98() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-x-hidden">
      {/* Newspaper background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute left-0 top-0 w-80 h-80 opacity-10" viewBox="0 0 200 200" fill="none">
          <rect x="0" y="0" width="200" height="200" fill="#e5e7eb" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-96 h-96 opacity-10" viewBox="0 0 200 200" fill="none">
          <rect x="0" y="0" width="200" height="200" fill="#f3f4f6" />
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<NewsLoader />}>
          <NewsHero />
        </Suspense>
        <Suspense fallback={<NewsLoader />}>
          <EditorialFeatures />
        </Suspense>
        <Suspense fallback={<NewsLoader />}>
          <NewsShowcase />
        </Suspense>
        <Suspense fallback={<NewsLoader />}>
          <EditorialServices />
        </Suspense>
        <Suspense fallback={<NewsLoader />}>
          <NewsPricing />
        </Suspense>
        <Suspense fallback={<NewsLoader />}>
          <EditorialContact />
        </Suspense>
      </div>
    </div>
  );
} 