'use client';

import Hero from './components/hero';
import Elegance from './components/elegance';
import Luxury from './components/luxury';
import Gallery from './components/gallery';
import Heritage from './components/heritage';
import Contact from './components/contact';

export default function Theme44() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Art Deco Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Golden rays */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-t from-transparent via-yellow-400/10 to-transparent"
              style={{
                width: '2px',
                height: '100vh',
                left: `${8.33 * i}%`,
                transform: `rotate(${-15 + i * 2.5}deg)`,
                transformOrigin: 'center bottom',
                animation: `deco-rays ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric patterns */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-yellow-400/20"
              style={{
                width: `${30 + Math.random() * 40}px`,
                height: `${30 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `deco-float ${10 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-full h-full border border-yellow-400/10 transform rotate-45" />
            </div>
          ))}
        </div>
        
        {/* Art Deco sun rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="w-96 h-96 opacity-10">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-1/2 bg-gradient-to-b from-yellow-400 to-transparent"
                style={{
                  width: '2px',
                  height: '200px',
                  transform: `rotate(${i * 22.5}deg)`,
                  transformOrigin: '50% 0%'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Hero />
      <Elegance />
      <Luxury />
      <Gallery />
      <Heritage />
      <Contact />

      {/* Custom Art Deco Styles */}
      <style jsx>{`
        @keyframes deco-rays {
          0%, 100% {
            opacity: 0.1;
            transform: rotate(var(--rotate-start)) scaleY(1);
          }
          50% {
            opacity: 0.3;
            transform: rotate(var(--rotate-end)) scaleY(1.2);
          }
        }
        
        @keyframes deco-float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 0.6;
          }
          75% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes golden-shimmer {
          0%, 100% {
            background-position: -200px 0;
          }
          50% {
            background-position: 200px 0;
          }
        }
        
        @keyframes deco-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.6);
            transform: scale(1.05);
          }
        }
        
        @keyframes vintage-swing {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
        
        @keyframes luxury-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
          }
        }
        
        @keyframes deco-scale {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
        }
        
        .golden-shimmer {
          background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent);
          background-size: 400px 100%;
          animation: golden-shimmer 3s ease-in-out infinite;
        }
        
        .deco-pulse {
          animation: deco-pulse 4s ease-in-out infinite;
        }
        
        .vintage-swing {
          animation: vintage-swing 6s ease-in-out infinite;
        }
        
        .luxury-glow {
          animation: luxury-glow 3s ease-in-out infinite;
        }
        
        .deco-scale {
          animation: deco-scale 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 