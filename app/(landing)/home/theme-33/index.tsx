'use client';

import { Hero, Stats, Services, Projects, Contact } from './components';

export default function Theme33() {
  return (
    <div className="min-h-screen">
      {/* Custom CSS for glassmorphism animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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