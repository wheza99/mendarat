import React from 'react';
import CreativeHero from './components/creative-hero';
import PortfolioGrid from './components/portfolio-grid';
import ServicesShowcase from './components/services-showcase';
import CreativeProcess from './components/creative-process';
import TestimonialsSection from './components/testimonials-section';
import ContactSection from './components/contact-section';

export default function HomePageTheme109() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      {/* Geometric background patterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 opacity-30 transform rotate-12"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 opacity-20 transform -rotate-12"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 opacity-25 transform rotate-45"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 left-10 w-6 h-6 bg-purple-500 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-pink-500 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-green-500 transform rotate-12 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <CreativeHero />
        <PortfolioGrid />
        <ServicesShowcase />
        <CreativeProcess />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
} 