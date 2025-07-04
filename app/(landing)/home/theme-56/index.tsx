'use client';

import Hero from './components/hero';
import CrystalField from './components/crystal-field';
import FrostCore from './components/frost-core';
import IceMatrix from './components/ice-matrix';
import PolarServices from './components/polar-services';
import GlacialContact from './components/glacial-contact';

export default function Theme56() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-900 text-white relative overflow-hidden">
      {/* Arctic Synth Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Polar Aurora Gradient Background */}
        <div className="absolute inset-0 opacity-50">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(6, 182, 212, 0.8), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(79, 70, 229, 0.6), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.7), transparent 55%),
                radial-gradient(ellipse at center, rgba(14, 165, 233, 0.4), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Ice Crystals */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-300 rounded opacity-90 animate-arctic-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-300 rounded opacity-80 animate-arctic-drift" style={{ clipPath: 'polygon(30% 0%, 0% 50%, 30% 100%, 70% 100%, 100% 50%, 70% 0%)' }}></div>
        <div className="absolute bottom-20 left-32 w-5 h-5 bg-indigo-300 rounded opacity-70 animate-arctic-spiral" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-300 rounded opacity-85 animate-arctic-float" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400 rounded opacity-75 animate-arctic-drift" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded opacity-90 animate-arctic-spiral" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        
        {/* Synthwave Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="arcticGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="arcticGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Horizon Grid Lines */}
          {Array.from({ length: 8 }, (_, i) => (
            <line 
              key={`h-${i}`}
              x1="0" 
              y1={80 + i * 60} 
              x2="100%" 
              y2={80 + i * 60}
              stroke="url(#arcticGradient1)" 
              strokeWidth="1" 
              className="animate-arctic-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          
          {/* Perspective Grid Lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <line 
              key={`v-${i}`}
              x1={100 + i * 80} 
              y1="400" 
              x2={50 + i * 100} 
              y2="100%"
              stroke="url(#arcticGradient2)" 
              strokeWidth="1" 
              className="animate-arctic-wave"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </svg>
        
        {/* Aurora Borealis Waves */}
        <div className="absolute top-0 left-0 w-full h-64 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 1200 200" className="animate-arctic-flow">
            <path 
              d="M0,80 Q300,40 600,80 T1200,80" 
              stroke="rgba(6, 182, 212, 0.8)" 
              strokeWidth="3" 
              fill="none"
              className="animate-arctic-aurora"
            />
            <path 
              d="M0,120 Q400,80 800,120 T1200,120" 
              stroke="rgba(139, 92, 246, 0.6)" 
              strokeWidth="2" 
              fill="none"
              className="animate-arctic-aurora"
              style={{ animationDelay: '1s' }}
            />
            <path 
              d="M0,100 Q200,60 600,100 T1200,100" 
              stroke="rgba(59, 130, 246, 0.7)" 
              strokeWidth="2" 
              fill="none"
              className="animate-arctic-aurora"
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>
        
        {/* Ice Particle System */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'arctic-drift 25s linear infinite'
            }}
          />
        </div>
        
        {/* Frost Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-blue-900/30"></div>
        
        {/* Crystalline Structure */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-25">
          <svg width="100%" height="100%" viewBox="0 0 1200 100" className="animate-arctic-grow">
            <polygon 
              points="0,100 100,60 200,100" 
              fill="rgba(6, 182, 212, 0.6)" 
              className="animate-arctic-crystal"
            />
            <polygon 
              points="200,100 300,40 400,100" 
              fill="rgba(139, 92, 246, 0.5)" 
              className="animate-arctic-crystal"
              style={{ animationDelay: '0.5s' }}
            />
            <polygon 
              points="400,100 500,70 600,100" 
              fill="rgba(59, 130, 246, 0.6)" 
              className="animate-arctic-crystal"
              style={{ animationDelay: '1s' }}
            />
            <polygon 
              points="600,100 700,50 800,100" 
              fill="rgba(168, 85, 247, 0.5)" 
              className="animate-arctic-crystal"
              style={{ animationDelay: '1.5s' }}
            />
            <polygon 
              points="800,100 900,65 1000,100" 
              fill="rgba(6, 182, 212, 0.6)" 
              className="animate-arctic-crystal"
              style={{ animationDelay: '2s' }}
            />
            <polygon 
              points="1000,100 1100,45 1200,100" 
              fill="rgba(139, 92, 246, 0.5)" 
              className="animate-arctic-crystal"
              style={{ animationDelay: '2.5s' }}
            />
          </svg>
        </div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <CrystalField />
        <FrostCore />
        <IceMatrix />
        <PolarServices />
        <GlacialContact />
      </div>
    </div>
  );
} 