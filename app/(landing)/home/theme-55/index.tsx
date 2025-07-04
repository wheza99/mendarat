'use client';

import Hero from './components/hero';
import EnchantedGrove from './components/enchanted-grove';
import MysticCore from './components/mystic-core';
import ForestWisdom from './components/forest-wisdom';
import NatureServices from './components/nature-services';
import WillowContact from './components/willow-contact';

export default function Theme55() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 text-white relative overflow-hidden">
      {/* Mystic Forest Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Forest Canopy Gradient Background */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(34, 197, 94, 0.7), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(16, 185, 129, 0.5), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(5, 150, 105, 0.6), transparent 55%),
                radial-gradient(ellipse at center, rgba(6, 78, 59, 0.4), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Mystic Particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-emerald-300 rounded-full opacity-80 animate-mystic-float"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-green-300 rounded-full opacity-70 animate-mystic-drift"></div>
        <div className="absolute bottom-20 left-32 w-2 h-2 bg-teal-300 rounded-full opacity-90 animate-mystic-spiral"></div>
        <div className="absolute bottom-32 right-16 w-5 h-5 bg-lime-300 rounded-full opacity-60 animate-mystic-float"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-80 animate-mystic-drift"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-mystic-spiral"></div>
        
        {/* Enchanted Tree Silhouettes */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="forestGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#059669" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="forestGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#84CC16" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#65A30D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#16A34A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 150 60 300 90 T 600 110 Q 750 80 900 100 L 900 200 L 0 200 Z"
            fill="url(#forestGradient1)" 
            className="animate-mystic-sway"
          />
          <path 
            d="M 0 150 Q 200 120 400 140 T 800 160 L 800 250 L 0 250 Z"
            fill="url(#forestGradient2)" 
            className="animate-mystic-sway"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M 0 200 Q 250 170 500 190 T 1000 210 L 1000 300 L 0 300 Z"
            fill="url(#forestGradient1)" 
            className="animate-mystic-sway"
            style={{ animationDelay: '6s', opacity: '0.6' }}
          />
        </svg>
        
        {/* Magical Fireflies */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-yellow-300 rounded-full opacity-90 animate-mystic-firefly"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-80 animate-mystic-firefly" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-mystic-firefly" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-amber-400 rounded-full opacity-90 animate-mystic-firefly" style={{ animationDelay: '6s' }}></div>
        
        {/* Nature's Sacred Geometry */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'mystic-pattern 30s linear infinite'
            }}
          />
        </div>
        
        {/* Mystic Fog Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-green-900/20"></div>
        
        {/* Enchanted Vines */}
        <div className="absolute top-0 left-0 w-full h-20 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 1200 80" className="animate-mystic-grow">
            <path 
              d="M0,40 Q300,10 600,40 T1200,40" 
              stroke="rgba(34, 197, 94, 0.6)" 
              strokeWidth="3" 
              fill="none"
              strokeDasharray="5,5"
              className="animate-mystic-pulse"
            />
            <circle cx="300" cy="25" r="8" fill="rgba(16, 185, 129, 0.7)" className="animate-mystic-bloom"/>
            <circle cx="600" cy="40" r="6" fill="rgba(34, 197, 94, 0.8)" className="animate-mystic-bloom" style={{ animationDelay: '2s' }}/>
            <circle cx="900" cy="30" r="7" fill="rgba(5, 150, 105, 0.7)" className="animate-mystic-bloom" style={{ animationDelay: '4s' }}/>
          </svg>
        </div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <EnchantedGrove />
        <MysticCore />
        <ForestWisdom />
        <NatureServices />
        <WillowContact />
      </div>
    </div>
  );
} 