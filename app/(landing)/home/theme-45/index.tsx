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

export default function Theme45() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white relative overflow-hidden">
      {/* Organic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Bio Membranes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-emerald-400/10 via-green-300/5 to-teal-400/15 rounded-full"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: `${150 + Math.random() * 250}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `bio-breathe ${8 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                borderRadius: `${50 + Math.random() * 50}% ${60 + Math.random() * 40}% ${40 + Math.random() * 60}% ${30 + Math.random() * 70}%`
              }}
            />
          ))}
        </div>
        
        {/* Neural Networks */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
            {[...Array(12)].map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 1000;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 1000;
              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#bioGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                  <circle
                    cx={x1}
                    cy={y1}
                    r="4"
                    fill="#10B981"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                  <circle
                    cx={x2}
                    cy={y2}
                    r="4"
                    fill="#14B8A6"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                </g>
              );
            })}
            <defs>
              <linearGradient id="bioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* DNA Helixes */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${20 * i}%`,
                top: `${Math.random() * 100}%`,
                animation: `dna-rotation ${10 + Math.random() * 5}s linear infinite`,
                transformOrigin: 'center'
              }}
            >
              <div className="w-2 h-96 bg-gradient-to-b from-emerald-400 via-transparent to-green-400 opacity-30" />
              <div className="w-2 h-96 bg-gradient-to-t from-teal-400 via-transparent to-emerald-400 opacity-30 absolute top-0 left-6 transform rotate-45" />
            </div>
          ))}
        </div>
        
        {/* Bio Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-emerald-300 to-green-400 opacity-60"
              style={{
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `bio-float ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

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

      {/* Custom Biopunk Styles */}
      <style jsx>{`
        @keyframes bio-breathe {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.6;
          }
        }
        
        @keyframes bio-float {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 0.8;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes dna-rotation {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }
        
        @keyframes organic-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(20, 184, 166, 0.8);
            transform: scale(1.05);
          }
        }
        
        @keyframes cell-division {
          0% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          25% {
            transform: scale(1.2) rotate(90deg);
            border-radius: 60% 40% 60% 40%;
          }
          50% {
            transform: scale(1.4) rotate(180deg);
            border-radius: 40% 60% 40% 60%;
          }
          75% {
            transform: scale(1.2) rotate(270deg);
            border-radius: 60% 40% 60% 40%;
          }
          100% {
            transform: scale(1) rotate(360deg);
            border-radius: 50%;
          }
        }
        
        @keyframes bio-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(20, 184, 166, 0.8), 0 0 30px rgba(5, 150, 105, 0.6);
          }
        }
        
        @keyframes symbiosis-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes evolution-grow {
          0%, 100% {
            transform: scale(1) skew(0deg);
          }
          33% {
            transform: scale(1.1) skew(2deg);
          }
          66% {
            transform: scale(1.05) skew(-1deg);
          }
        }
        
        .organic-pulse {
          animation: organic-pulse 3s ease-in-out infinite;
        }
        
        .cell-division {
          animation: cell-division 6s ease-in-out infinite;
        }
        
        .bio-glow {
          animation: bio-glow 4s ease-in-out infinite;
        }
        
        .symbiosis-flow {
          background: linear-gradient(45deg, #10B981, #14B8A6, #059669, #0D9488);
          background-size: 400% 400%;
          animation: symbiosis-flow 8s ease infinite;
        }
        
        .evolution-grow {
          animation: evolution-grow 5s ease-in-out infinite;
        }
        
        .organic-border {
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        }
        
        .bio-card {
          background: rgba(16, 185, 129, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(20, 184, 166, 0.3);
          border-radius: 48% 52% 46% 54% / 45% 55% 45% 55%;
        }
      `}</style>
    </div>
  );
}