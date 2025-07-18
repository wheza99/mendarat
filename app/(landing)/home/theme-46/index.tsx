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

export default function Theme46() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Cyberpunk Noir Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Digital Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/60 font-mono text-xs"
              style={{
                left: `${i * 5}%`,
                animation: `matrix-rain ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 30 }, () => 
                String.fromCharCode(0x30A0 + Math.random() * 96)
              ).join('\n')}
            </div>
          ))}
        </div>
        
        {/* Holographic Panels */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/30 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-purple-500/5"
              style={{
                width: `${200 + Math.random() * 150}px`,
                height: `${100 + Math.random() * 100}px`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                transform: `rotateX(${-20 + Math.random() * 40}deg) rotateY(${-30 + Math.random() * 60}deg)`,
                animation: `holo-flicker ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)',
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-transparent" />
              <div className="absolute inset-0 bg-black/20" style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)'
              }} />
            </div>
          ))}
        </div>
        
        {/* Neon Grid Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 125}
                x2="1000"
                y2={i * 125}
                stroke="url(#neonGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 125}
                y1="0"
                x2={i * 125}
                y2="1000"
                stroke="url(#neonGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2.5s'
                }}
              />
            ))}
            {/* Circuit patterns */}
            {[...Array(15)].map((_, i) => {
              const x = Math.random() * 1000;
              const y = Math.random() * 1000;
              const size = 20 + Math.random() * 30;
              return (
                <g key={`circuit-${i}`}>
                  <rect
                    x={x}
                    y={y}
                    width={size}
                    height={size}
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="1"
                    opacity="0.4"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                  <circle
                    cx={x + size/2}
                    cy={y + size/2}
                    r="3"
                    fill="#00FFFF"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                </g>
              );
            })}
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating Data Streams */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-cyan-300/70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-stream ${8 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {['0x7F4A2B', 'EXEC_0x42', '::NET::', 'DATA_FLOW', 'SYS_OK', 'QUANTUM_SYNC'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
        
        {/* Atmospheric Fog */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-cyan-500/5 via-purple-500/10 to-transparent rounded-full blur-xl"
              style={{
                width: `${300 + Math.random() * 200}px`,
                height: `${150 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `noir-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Glitch Scanlines */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
              animation: 'scanlines 0.1s linear infinite'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
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

      {/* Custom Cyberpunk Noir Styles */}
      <style jsx>{`
        @keyframes matrix-rain {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes holo-flicker {
          0%, 100% {
            opacity: 0.7;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0);
          }
          25% {
            opacity: 0.3;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(10px);
          }
          50% {
            opacity: 0.9;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(5px);
          }
          75% {
            opacity: 0.4;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(15px);
          }
        }
        
        @keyframes data-stream {
          0% {
            transform: translateX(-100px) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translateX(100px) scale(1);
          }
          100% {
            transform: translateX(200px) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes noir-drift {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateX(50px) translateY(-30px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-30px) translateY(20px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translateX(20px) translateY(-40px) scale(1.05);
            opacity: 0.7;
          }
        }
        
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(4px);
          }
        }
        
        @keyframes cyber-pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(6, 182, 212, 0.4),
              0 0 40px rgba(6, 182, 212, 0.2),
              inset 0 0 20px rgba(6, 182, 212, 0.1);
            transform: scale(1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(0, 255, 255, 0.6),
              0 0 60px rgba(0, 255, 255, 0.3),
              inset 0 0 30px rgba(0, 255, 255, 0.15);
            transform: scale(1.02);
          }
        }
        
        @keyframes glitch-shake {
          0%, 100% {
            transform: translateX(0);
          }
          10% {
            transform: translateX(-2px);
          }
          20% {
            transform: translateX(2px);
          }
          30% {
            transform: translateX(-1px);
          }
          40% {
            transform: translateX(1px);
          }
          50% {
            transform: translateX(-2px);
          }
          60% {
            transform: translateX(2px);
          }
          70% {
            transform: translateX(-1px);
          }
          80% {
            transform: translateX(1px);
          }
          90% {
            transform: translateX(-1px);
          }
        }
        
        @keyframes neon-glow {
          0%, 100% {
            text-shadow: 
              0 0 5px #00FFFF,
              0 0 10px #00FFFF,
              0 0 15px #00FFFF,
              0 0 20px #06B6D4;
          }
          50% {
            text-shadow: 
              0 0 10px #00FFFF,
              0 0 20px #00FFFF,
              0 0 30px #00FFFF,
              0 0 40px #06B6D4;
          }
        }
        
        @keyframes holo-shift {
          0%, 100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            filter: hue-rotate(0deg);
          }
          25% {
            transform: perspective(1000px) rotateX(5deg) rotateY(-3deg);
            filter: hue-rotate(90deg);
          }
          50% {
            transform: perspective(1000px) rotateX(-3deg) rotateY(5deg);
            filter: hue-rotate(180deg);
          }
          75% {
            transform: perspective(1000px) rotateX(3deg) rotateY(-5deg);
            filter: hue-rotate(270deg);
          }
        }
        
        .cyber-pulse {
          animation: cyber-pulse 3s ease-in-out infinite;
        }
        
        .glitch-shake {
          animation: glitch-shake 0.5s ease-in-out infinite;
        }
        
        .neon-glow {
          animation: neon-glow 2s ease-in-out infinite;
        }
        
        .holo-shift {
          animation: holo-shift 8s ease-in-out infinite;
        }
        
        .data-stream {
          animation: data-stream 6s linear infinite;
        }
        
        .matrix-rain {
          animation: matrix-rain 4s linear infinite;
        }
      `}</style>
    </div>
  );
}