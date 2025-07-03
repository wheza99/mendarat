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
      {/* Simplified Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Simple Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Simple Floating Shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-cyan-400 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-10 h-2 bg-yellow-400 animate-pulse"></div>
        <div className="absolute bottom-60 right-60 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        
        {/* Simple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-purple-900/30"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <RetroGrid />
        <SynthTech />
        <VaporWave />
        <NeonServices />
        <Contact />
      </div>
    </div>
  );
} 