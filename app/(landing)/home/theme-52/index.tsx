'use client';

import Hero from './components/hero';
import MatrixDisplay from './components/matrix-display';
import NeuralCore from './components/neural-core';
import CyberInterface from './components/cyber-interface';
import DigitalServices from './components/digital-services';
import NeuralPortal from './components/neural-portal';

export default function Theme52() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Digital Matrix Rain Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                linear-gradient(0deg, rgba(0, 255, 65, 0.1), transparent 30%),
                linear-gradient(90deg, rgba(0, 255, 255, 0.05), transparent 50%),
                radial-gradient(ellipse at center, rgba(255, 0, 128, 0.1), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Cyber Particles */}
        <div className="absolute top-16 left-16 w-5 h-5 bg-green-400 rounded-full opacity-80 animate-cyber-float"></div>
        <div className="absolute top-32 right-24 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-cyber-drift"></div>
        <div className="absolute bottom-24 left-40 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-cyber-pulse"></div>
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-90 animate-cyber-float"></div>
        <div className="absolute top-1/2 left-1/3 w-7 h-7 bg-purple-400 rounded-full opacity-50 animate-cyber-drift"></div>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-80 animate-cyber-pulse"></div>
        
        {/* Matrix Code Rain */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0, 255, 65, 0.3) 2px,
                  rgba(0, 255, 65, 0.3) 4px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 8px,
                  rgba(0, 255, 255, 0.2) 8px,
                  rgba(0, 255, 255, 0.2) 10px
                )
              `,
              animation: 'matrix-rain 20s linear infinite'
            }}
          />
        </div>
        
        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="cyberGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF41" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#00FFFF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FF0080" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#FFFF00" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cyberGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF0080" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00FF41" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Neural Connection Lines */}
          <path 
            d="M 0 150 Q 400 100 800 150 T 1600 170 Q 1800 120 2000 150"
            stroke="url(#cyberGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-cyber-pulse"
          />
          <path 
            d="M 0 350 Q 500 300 1000 350 T 2000 370"
            stroke="url(#cyberGradient2)" 
            strokeWidth="3" 
            fill="none"
            className="animate-cyber-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <path 
            d="M 0 550 Q 300 500 600 550 T 1200 570 Q 1400 530 1600 550"
            stroke="url(#cyberGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-cyber-pulse"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M 0 750 Q 600 700 1200 750 T 2400 770"
            stroke="url(#cyberGradient2)" 
            strokeWidth="1" 
            fill="none"
            className="animate-cyber-pulse"
            style={{ animationDelay: '4.5s' }}
          />
        </svg>
        
        {/* Cyber Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0, 255, 65, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.4) 3px, transparent 3px),
                radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px, 180px 180px, 80px 80px',
              animation: 'cyber-grid 25s linear infinite'
            }}
          />
        </div>
        
        {/* Digital Interference */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-cyan-900/10 animate-cyber-interference"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <MatrixDisplay />
        <NeuralCore />
        <CyberInterface />
        <DigitalServices />
        <NeuralPortal />
      </div>
    </div>
  );
} 