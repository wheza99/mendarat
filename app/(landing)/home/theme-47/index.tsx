'use client';

import Hero from './components/hero';
import RetroGrid from './components/retro-grid';
import SynthTech from './components/synth-tech';
import VaporWave from './components/vapor-wave';
import NeonServices from './components/neon-services';
import Contact from './components/contact';

export default function Theme47() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white relative overflow-hidden">
      {/* Synthwave Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Retro Grid Pattern */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full opacity-30"
            style={{
              background: `
                linear-gradient(rgba(255, 0, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'grid-pulse 4s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Neon Mountains */}
        <div className="absolute bottom-0 left-0 right-0 h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Background Mountains */}
            <path 
              d="M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z"
              fill="url(#mountainGradient2)"
              className="animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            
            {/* Foreground Mountains */}
            <path 
              d="M0,400 L0,300 L150,200 L350,250 L550,180 L750,220 L950,160 L1200,240 L1200,400 Z"
              fill="url(#mountainGradient1)"
              className="animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
          </svg>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `retro-float ${10 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {/* Different retro shapes */}
              {i % 4 === 0 && (
                <div className="w-8 h-8 border-2 border-pink-400 rotate-45 neon-glow-pink" />
              )}
              {i % 4 === 1 && (
                <div className="w-6 h-6 bg-cyan-400 rounded-full neon-glow-cyan animate-pulse" />
              )}
              {i % 4 === 2 && (
                <div className="w-10 h-2 bg-gradient-to-r from-purple-400 to-pink-400 neon-glow-purple" />
              )}
              {i % 4 === 3 && (
                <div 
                  className="w-6 h-6 bg-yellow-400 neon-glow-yellow"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Retro Sun */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <div className="relative w-32 h-32">
            {/* Sun center */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-400 to-pink-500 rounded-full neon-glow-sun animate-pulse" />
            
            {/* Sun rays */}
            <div className="absolute inset-0">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 w-1 bg-gradient-to-t from-yellow-400 to-transparent"
                  style={{
                    height: '60px',
                    transform: `rotate(${i * 22.5}deg)`,
                    transformOrigin: '50% 64px',
                    animation: `sun-rays ${8}s linear infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Synthwave Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0080'][Math.floor(Math.random() * 4)],
                animation: `synth-sparkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: `0 0 10px currentColor`
              }}
            />
          ))}
        </div>
        
        {/* Retro Scan Lines */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255, 0, 255, 0.1) 3px, rgba(255, 0, 255, 0.1) 6px)',
              animation: 'scanlines 0.2s linear infinite'
            }}
          />
        </div>
      </div>

      <Hero />
      <RetroGrid />
      <SynthTech />
      <VaporWave />
      <NeonServices />
      <Contact />

      {/* Custom Synthwave Styles */}
      <style jsx>{`
        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }
        
        @keyframes retro-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
            opacity: 1;
          }
        }
        
        @keyframes sun-rays {
          0% {
            opacity: 0.5;
            transform: rotate(var(--rotation)) scaleY(1);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation)) scaleY(1.2);
          }
          100% {
            opacity: 0.5;
            transform: rotate(var(--rotation)) scaleY(1);
          }
        }
        
        @keyframes synth-sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          25% {
            opacity: 1;
            transform: scale(1.2);
          }
          50% {
            opacity: 0.7;
            transform: scale(1);
          }
          75% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(6px);
          }
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 5px currentColor,
              0 0 10px currentColor,
              0 0 15px currentColor,
              0 0 20px currentColor;
            transform: scale(1);
          }
          50% {
            text-shadow: 
              0 0 10px currentColor,
              0 0 20px currentColor,
              0 0 30px currentColor,
              0 0 40px currentColor;
            transform: scale(1.05);
          }
        }
        
        @keyframes retro-glow {
          0%, 100% {
            box-shadow: 
              0 0 10px currentColor,
              0 0 20px currentColor,
              inset 0 0 10px rgba(255, 255, 255, 0.1);
            transform: scale(1);
          }
          50% {
            box-shadow: 
              0 0 20px currentColor,
              0 0 40px currentColor,
              inset 0 0 20px rgba(255, 255, 255, 0.2);
            transform: scale(1.03);
          }
        }
        
        @keyframes vapor-drift {
          0% {
            transform: translateX(-100px) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px) scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes retro-slide {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .neon-glow-pink {
          box-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF;
          animation: retro-glow 3s ease-in-out infinite;
        }
        
        .neon-glow-cyan {
          box-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;
        }
        
        .neon-glow-purple {
          box-shadow: 0 0 10px #8B5CF6, 0 0 20px #8B5CF6;
        }
        
        .neon-glow-yellow {
          box-shadow: 0 0 10px #FFFF00, 0 0 20px #FFFF00;
        }
        
        .neon-glow-sun {
          box-shadow: 
            0 0 20px #FFA500,
            0 0 40px #FF6B6B,
            0 0 60px #FF1493;
        }
        
        .neon-text-pink {
          color: #FF00FF;
          animation: neon-pulse 2s ease-in-out infinite;
        }
        
        .neon-text-cyan {
          color: #00FFFF;
          animation: neon-pulse 2.5s ease-in-out infinite;
        }
        
        .neon-text-yellow {
          color: #FFFF00;
          animation: neon-pulse 3s ease-in-out infinite;
        }
        
        .retro-glow {
          animation: retro-glow 4s ease-in-out infinite;
        }
        
        .vapor-drift {
          animation: vapor-drift 8s linear infinite;
        }
        
        .retro-slide {
          animation: retro-slide 0.8s ease-out forwards;
        }
        
        .synthwave-gradient {
          background: linear-gradient(
            45deg,
            #FF00FF 0%,
            #00FFFF 25%,
            #FFFF00 50%,
            #FF00FF 75%,
            #00FFFF 100%
          );
          background-size: 400% 400%;
          animation: synthwave-flow 6s ease-in-out infinite;
        }
        
        @keyframes synthwave-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
} 