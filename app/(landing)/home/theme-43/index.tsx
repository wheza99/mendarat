'use client';

import Hero from './components/hero';
import Features from './components/features';
import Typography from './components/typography';
import Portfolio from './components/portfolio';
import Statistics from './components/statistics';
import Contact from './components/contact';

export default function Theme43() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Swiss design grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 swiss-grid" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-gray-300/20"
              style={{
                width: `${60 + Math.random() * 80}px`,
                height: `${60 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `geometric-float ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle color accents */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-16 bg-gradient-to-b from-blue-500/10 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                top: `${Math.random() * 80}%`,
                animation: `accent-slide ${6 + Math.random() * 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <Typography />
        <Portfolio />
        <Statistics />
        <Contact />
      </div>

      {/* Custom Swiss Design Styles */}
      <style jsx>{`
        .swiss-grid {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        
        @keyframes geometric-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) rotate(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) rotate(90deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) rotate(135deg);
            opacity: 0.7;
          }
        }
        
        @keyframes accent-slide {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes swiss-fade {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        @keyframes minimal-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        
        @keyframes clean-slide {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes type-reveal {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }
        
        .swiss-fade { animation: swiss-fade 4s ease-in-out infinite; }
        .minimal-pulse { animation: minimal-pulse 2s ease-in-out infinite; }
        .clean-slide { animation: clean-slide 0.8s ease-out forwards; }
        .type-reveal { animation: type-reveal 2s ease-out forwards; }
      `}</style>
    </div>
  );
} 