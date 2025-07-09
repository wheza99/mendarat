import React from 'react';
import TechHero from './components/tech-hero';
import FeatureGrid from './components/feature-grid';
import ProductShowcase from './components/product-showcase';
import TechServices from './components/tech-services';
import PricingSection from './components/pricing-section';
import ContactForm from './components/contact-form';

export default function HomePageTheme108() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-cyan-500/10 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-400 rounded-full animate-spin"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <TechHero />
        <FeatureGrid />
        <ProductShowcase />
        <TechServices />
        <PricingSection />
        <ContactForm />
      </div>
    </div>
  );
} 