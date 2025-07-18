'use client';

import Hero from './components/hero';
import Stats from './components/stats';
import Services from './components/services';
import Projects from './components/projects';
import Team from './components/team';
import Clients from './components/clients';
import Process from './components/process';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import Contact from './components/contact';

export default function Theme42() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Retro gaming background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Pixel grid pattern */}
        <div className="absolute inset-0 opacity-10 pixel-grid" />
        
        {/* Floating pixels */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 pixel-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Power-up particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl power-up-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            >
              {['⭐', '💎', '🍄', '⚡', '🔥'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        
        {/* Scanlines effect */}
        <div className="absolute inset-0 scanlines opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Team />
        <Clients />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>

      {/* Custom Retro Gaming Styles */}
      <style jsx>{`
        .pixel-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: grid-scroll 10s linear infinite;
        }
        
        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.03) 2px,
            rgba(0, 255, 0, 0.03) 4px
          );
          animation: scanline-move 0.1s linear infinite;
        }
        
        .pixel-float {
          animation: pixel-bounce 3s ease-in-out infinite;
        }
        
        .power-up-float {
          animation: power-up-collect 6s ease-in-out infinite;
        }
        
        @keyframes grid-scroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        @keyframes scanline-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes pixel-bounce {
          0%, 100% { 
            transform: translateY(0) scale(1); 
          }
          25% { 
            transform: translateY(-10px) scale(1.2); 
          }
          50% { 
            transform: translateY(0) scale(0.8); 
          }
          75% { 
            transform: translateY(-5px) scale(1.1); 
          }
        }
        
        @keyframes power-up-collect {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) rotate(90deg) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotate(180deg) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-30px) rotate(270deg) scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) rotate(360deg) scale(1);
            opacity: 0.7;
          }
        }
        
        @keyframes retro-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes game-pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(255, 255, 0, 0.5),
              0 0 40px rgba(255, 255, 0, 0.3),
              0 0 60px rgba(255, 255, 0, 0.1);
          }
          50% {
            box-shadow: 
              0 0 10px rgba(255, 255, 0, 0.3),
              0 0 20px rgba(255, 255, 0, 0.2),
              0 0 30px rgba(255, 255, 0, 0.1);
          }
        }
        
        @keyframes pixel-shake {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, -2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, -2px); }
          70% { transform: translate(-2px, 2px); }
          80% { transform: translate(2px, 2px); }
          90% { transform: translate(-2px, -2px); }
        }
        
        @keyframes level-up {
          0% { 
            transform: scale(1) rotate(0deg); 
            filter: hue-rotate(0deg);
          }
          25% { 
            transform: scale(1.2) rotate(90deg); 
            filter: hue-rotate(90deg);
          }
          50% { 
            transform: scale(0.8) rotate(180deg); 
            filter: hue-rotate(180deg);
          }
          75% { 
            transform: scale(1.1) rotate(270deg); 
            filter: hue-rotate(270deg);
          }
          100% { 
            transform: scale(1) rotate(360deg); 
            filter: hue-rotate(360deg);
          }
        }
        
        .retro-blink { animation: retro-blink 1s infinite; }
        .game-pulse { animation: game-pulse 2s ease-in-out infinite; }
        .pixel-shake { animation: pixel-shake 0.5s infinite; }
        .level-up { animation: level-up 3s linear infinite; }
      `}</style>
    </div>
  );
}