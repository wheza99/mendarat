'use client';

// Cyberpunk Theme Components
import Hero from './components/hero';
import CyberServices from './components/cyber-services';
import NeonTech from './components/neon-tech';
import DigitalMatrix from './components/digital-matrix';
import CyberSecurity from './components/cyber-security';
import Contact from './components/contact';

export default function Theme41() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyberpunk background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20 cyber-grid" />
        
        {/* Neon glitch lines */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent glitch-line"
              style={{
                top: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 40}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating data particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full data-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Holographic scanlines */}
        <div className="absolute inset-0 scanlines opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <CyberServices />
        <NeonTech />
        <DigitalMatrix />
        <CyberSecurity />
        <Contact />
      </div>

      {/* Custom Cyberpunk Styles */}
      <style jsx>{`
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-drift 20s linear infinite;
        }
        
        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          );
          animation: scanline-move 0.1s linear infinite;
        }
        
        .glitch-line {
          animation: glitch-horizontal 2s linear infinite;
        }
        
        .data-particle {
          animation: data-flow 4s linear infinite;
        }
        
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes scanline-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes glitch-horizontal {
          0%, 100% { 
            transform: translateX(0) scaleX(1); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-5px) scaleX(1.1); 
            opacity: 1; 
          }
          20% { 
            transform: translateX(5px) scaleX(0.9); 
            opacity: 0.8; 
          }
          30% { 
            transform: translateX(-2px) scaleX(1.05); 
            opacity: 1; 
          }
          40%, 60% { 
            transform: translateX(0) scaleX(1); 
            opacity: 0.6; 
          }
          70% { 
            transform: translateX(3px) scaleX(0.95); 
            opacity: 0.9; 
          }
          80% { 
            transform: translateX(-1px) scaleX(1.02); 
            opacity: 0.7; 
          }
          90% { 
            transform: translateX(1px) scaleX(0.98); 
            opacity: 0.3; 
          }
        }
        
        @keyframes data-flow {
          0% {
            transform: translateY(-20px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(calc(100vh - 20px)) scale(1);
          }
          100% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 5px currentColor,
              0 0 10px currentColor,
              0 0 15px currentColor,
              0 0 20px #00ffff;
          }
          50% {
            text-shadow: 
              0 0 2px currentColor,
              0 0 5px currentColor,
              0 0 8px currentColor,
              0 0 12px #00ffff;
          }
        }
        
        @keyframes cyber-glitch {
          0%, 100% { 
            transform: translate(0); 
            filter: hue-rotate(0deg);
          }
          10% { 
            transform: translate(-2px, 2px); 
            filter: hue-rotate(90deg);
          }
          20% { 
            transform: translate(-2px, -2px); 
            filter: hue-rotate(180deg);
          }
          30% { 
            transform: translate(2px, 2px); 
            filter: hue-rotate(270deg);
          }
          40% { 
            transform: translate(2px, -2px); 
            filter: hue-rotate(360deg);
          }
          50% { 
            transform: translate(-2px, 2px); 
            filter: hue-rotate(90deg);
          }
          60% { 
            transform: translate(-2px, -2px); 
            filter: hue-rotate(180deg);
          }
          70% { 
            transform: translate(2px, 2px); 
            filter: hue-rotate(270deg);
          }
          80% { 
            transform: translate(-2px, -2px); 
            filter: hue-rotate(0deg);
          }
          90% { 
            transform: translate(2px, 2px); 
            filter: hue-rotate(90deg);
          }
        }
        
        @keyframes hologram-flicker {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          25% { opacity: 0.8; transform: scaleY(0.98); }
          50% { opacity: 0.9; transform: scaleY(1.02); }
          75% { opacity: 0.85; transform: scaleY(0.99); }
        }
        
        .neon-pulse { animation: neon-pulse 2s ease-in-out infinite; }
        .cyber-glitch { animation: cyber-glitch 0.3s linear infinite; }
        .hologram-flicker { animation: hologram-flicker 0.2s infinite; }
      `}</style>
    </div>
  );
} 