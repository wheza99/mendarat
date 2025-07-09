import React from 'react';
import EcoHero from './components/eco-hero';
import GreenFeatures from './components/green-features';
import ProductShowcase from './components/product-showcase';
import EcoServices from './components/eco-services';
import ImpactSection from './components/impact-section';
import EcoContact from './components/eco-contact';

export default function HomePageTheme113() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 text-green-900 relative overflow-x-hidden">
      {/* Nature background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating nature elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-green-400 animate-bounce">
          🌱
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-emerald-400 animate-pulse">
          🌿
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-teal-400 animate-spin">
          🌱
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-green-300 animate-pulse">
          🌿
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-emerald-300 animate-bounce">
          🌱
        </div>
      </div>
      
      {/* Eco-friendly grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-green-400 text-sm opacity-60 animate-pulse">
          ♻️ Zero Waste
        </div>
        <div className="absolute bottom-20 right-20 text-emerald-400 text-sm opacity-60 animate-pulse">
          🌍 Eco Friendly
        </div>
        <div className="absolute top-1/2 left-10 text-teal-400 text-sm opacity-60 animate-pulse">
          🌱 Sustainable
        </div>
        <div className="absolute top-1/2 right-10 text-green-300 text-sm opacity-60 animate-pulse">
          ♻️ Reusable
        </div>
      </div>
      
      {/* Nature border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <EcoHero />
        <GreenFeatures />
        <ProductShowcase />
        <EcoServices />
        <ImpactSection />
        <EcoContact />
      </div>
    </div>
  );
} 