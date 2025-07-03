'use client';

import Hero from './components/hero';
import Colony from './components/colony';
import Habitats from './components/habitats';
import Technology from './components/technology';
import Mission from './components/mission';
import Contact from './components/contact';

export default function Theme40() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-orange-950 to-yellow-950 text-white">
      {/* Mars atmospheric effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dust storms */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-400/20"
              style={{
                width: Math.random() * 200 + 50 + 'px',
                height: Math.random() * 200 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `dustStorm ${8 + Math.random() * 4}s linear infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
        
        {/* Floating particles (Mars dust) */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-300/20 rounded-full"
              style={{
                left: Math.random() * 100 + '%',
                animation: `marsDustFloat ${6 + Math.random() * 8}s linear infinite`,
                animationDelay: Math.random() * 4 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <Hero />
      <Colony />
      <Habitats />
      <Technology />
      <Mission />
      <Contact />

      {/* Custom CSS for Mars theme */}
      <style jsx global>{`
        @keyframes dustStorm {
          0% {
            transform: translateX(-100px) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 0.3;
          }
          75% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes marsDustFloat {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes marsGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
            filter: brightness(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 146, 60, 0.6);
            filter: brightness(1.2);
          }
        }
        
        @keyframes rocketBoost {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes solarPanel {
          0%, 100% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(15deg);
          }
        }
        
        @keyframes terraforming {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        
        .mars-glow {
          animation: marsGlow 4s ease-in-out infinite;
        }
        
        .rocket-boost {
          animation: rocketBoost 3s ease-in-out infinite;
        }
        
        .solar-panel {
          animation: solarPanel 6s ease-in-out infinite;
        }
        
        .terraforming {
          animation: terraforming 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 