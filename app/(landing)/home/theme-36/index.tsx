'use client';

import { Hero, Heritage, Craftsmanship, Portfolio, Awards, Contact } from './components';

export default function Theme36() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Custom CSS for luxury animations */}
      <style jsx>{`
        @keyframes golden-shine {
          0% { 
            background-position: -200% center; 
          }
          100% { 
            background-position: 200% center; 
          }
        }
        
        @keyframes elegant-reveal {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes luxury-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(1deg); 
          }
        }
        
        @keyframes art-deco-expand {
          0% { 
            transform: scaleX(0); 
            opacity: 0; 
          }
          100% { 
            transform: scaleX(1); 
            opacity: 1; 
          }
        }
        
        .golden-shine {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 215, 0, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: golden-shine 3s ease-in-out infinite;
        }
        
        .elegant-reveal {
          animation: elegant-reveal 0.8s ease-out forwards;
        }
        
        .luxury-float {
          animation: luxury-float 6s ease-in-out infinite;
        }
        
        .art-deco-expand {
          animation: art-deco-expand 0.6s ease-out forwards;
        }
      `}</style>
      
      {/* Background luxury elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Art Deco geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-5">
          <div className="w-full h-full border-2 border-amber-600 transform rotate-45"></div>
          <div className="absolute inset-4 border-2 border-amber-700 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-32 right-16 w-24 h-24 opacity-5">
          <div className="w-full h-full border-2 border-yellow-600 transform rotate-12"></div>
          <div className="absolute inset-3 border-2 border-orange-600 transform rotate-12"></div>
        </div>
        
        {/* Floating luxury elements */}
        <div className="absolute top-1/4 right-20 text-6xl text-amber-400/20 luxury-float">💎</div>
        <div className="absolute bottom-1/3 left-1/4 text-5xl text-yellow-500/25 luxury-float" style={{ animationDelay: '2s' }}>🏆</div>
        <div className="absolute top-2/3 right-1/3 text-4xl text-orange-400/20 luxury-float" style={{ animationDelay: '4s' }}>⭐</div>
        
        {/* Golden gradient overlays */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/10 to-yellow-300/5 rounded-full blur-3xl luxury-float" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tl from-orange-200/8 to-amber-400/5 rounded-full blur-3xl luxury-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        <Hero />
        <Heritage />
        <Craftsmanship />
        <Portfolio />
        <Awards />
        <Contact />
      </div>
    </div>
  );
} 