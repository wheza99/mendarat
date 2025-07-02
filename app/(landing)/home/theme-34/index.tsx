'use client';

import { Hero, Stats, Services, Projects, Contact } from './components';

export default function Theme34() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom CSS for neon effects */}
      <style jsx>{`
        @keyframes neon-pulse {
          0%, 100% { 
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
          }
          50% { 
            text-shadow: 0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor;
          }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .neon-text {
          animation: neon-pulse 2s ease-in-out infinite alternate;
        }
        
        .matrix-char {
          animation: matrix-rain 3s linear infinite;
        }
      `}</style>
      
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
} 