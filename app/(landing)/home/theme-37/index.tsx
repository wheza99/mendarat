'use client';

import { Hero, Exploration, Technology, Mission, Innovation, Contact } from './components';

export default function Theme37() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Cosmic background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Stars field */}
        <div className="absolute inset-0 opacity-70">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Cosmic nebula */}
        <div className="absolute inset-0 cosmic-nebula opacity-30" />
        
        {/* Scanning lines */}
        <div className="absolute inset-0 scanning-lines opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Exploration />
        <Technology />
        <Mission />
        <Innovation />
        <Contact />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .cosmic-nebula {
          background: radial-gradient(
            ellipse at 20% 30%,
            rgba(147, 51, 234, 0.3) 0%,
            transparent 50%
          ),
          radial-gradient(
            ellipse at 80% 70%,
            rgba(59, 130, 246, 0.3) 0%,
            transparent 50%
          ),
          radial-gradient(
            ellipse at 50% 50%,
            rgba(236, 72, 153, 0.2) 0%,
            transparent 50%
          );
          animation: cosmic-drift 20s ease-in-out infinite alternate;
        }
        
        .scanning-lines {
          background: repeating-linear-gradient(
            90deg,
            transparent,
            rgba(34, 211, 238, 0.1) 1px,
            transparent 2px,
            transparent 100px
          );
          animation: scan-move 3s linear infinite;
        }
        
        @keyframes cosmic-drift {
          0% { transform: translateX(-10px) translateY(-10px) scale(1); }
          100% { transform: translateX(10px) translateY(10px) scale(1.05); }
        }
        
        @keyframes scan-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes hologram-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
          51% { opacity: 1; }
          52% { opacity: 0.9; }
          53% { opacity: 1; }
        }
        
        @keyframes data-stream {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(0); opacity: 0; }
        }
        
        @keyframes quantum-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
        }
        
        @keyframes space-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .hologram-flicker { animation: hologram-flicker 0.1s infinite; }
        .data-stream { animation: data-stream 4s linear infinite; }
        .quantum-pulse { animation: quantum-pulse 2s ease-in-out infinite; }
        .space-float { animation: space-float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 