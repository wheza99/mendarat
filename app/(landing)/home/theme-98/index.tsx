import React from 'react';
import NewsHero from './components/news-hero';
import EditorialFeatures from './components/editorial-features';
import NewsShowcase from './components/news-showcase';
import EditorialServices from './components/editorial-services';
import NewsPricing from './components/news-pricing';
import EditorialContact from './components/editorial-contact';

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
        <NewsHero />
        <EditorialFeatures />
        <NewsShowcase />
        <EditorialServices />
        <NewsPricing />
        <EditorialContact />
      </div>
    </div>
  );
} 