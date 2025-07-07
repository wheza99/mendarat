import React, { useState, useEffect } from 'react';

export default function SynthwaveHero() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchText, setGlitchText] = useState('SYNTHWAVE');

  const [stats, setStats] = useState({
    beats: 0,
    neon: 0,
    retro: 0,
    vibes: 0
  });

  // Update time every second for retro digital clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Glitch text effect
  useEffect(() => {
    const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const originalText = 'SYNTHWAVE';
    
    const interval = setInterval(() => {
      let glitched = '';
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += originalText[i];
        }
      }
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animated statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        beats: Math.min(prev.beats + Math.floor(Math.random() * 5), 808),
        neon: Math.min(prev.neon + Math.floor(Math.random() * 8), 1980),
        retro: Math.min(prev.retro + Math.floor(Math.random() * 3), 255),
        vibes: Math.min(prev.vibes + Math.floor(Math.random() * 10), 9999)
      }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-transparent to-pink-900/50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Retro Digital Clock */}
        <div className="mb-8 animate-synthwave-fade-in">
          <div className="bg-black/80 border-2 border-cyan-400 rounded-lg p-4 inline-block font-mono backdrop-blur-sm">
            <div className="text-cyan-400 text-sm mb-1">CURRENT TIME</div>
            <div className="text-2xl font-bold text-pink-500 animate-synthwave-glow">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div className="text-cyan-400 text-xs">
              {currentTime.toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              })}
            </div>
          </div>
        </div>

        {/* Main Title with Chrome Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-synthwave-chrome-text">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-synthwave-glow">
              {glitchText}
            </span>
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 animate-synthwave-neon-pulse">
            RETRO FUTURE VIBES
          </div>
          <div className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed animate-synthwave-fade-in" style={{animationDelay: '1s'}}>
            Step into the neon-soaked world of tomorrow's yesterday. Experience the electric dreams of the 80s with cutting-edge technology wrapped in vintage aesthetics.
          </div>
        </div>

        {/* Retro Stats Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black/60 border-2 border-pink-500 rounded-lg p-6 backdrop-blur-sm animate-synthwave-fade-in" style={{animationDelay: '1.5s'}}>
            <div className="text-pink-500 text-sm font-mono mb-1">BEATS/MIN</div>
            <div className="text-3xl font-bold text-white animate-synthwave-glow">{stats.beats}</div>
            <div className="text-xs text-pink-500/70">PUMPING</div>
          </div>
          
          <div className="bg-black/60 border-2 border-cyan-400 rounded-lg p-6 backdrop-blur-sm animate-synthwave-fade-in" style={{animationDelay: '2s'}}>
            <div className="text-cyan-400 text-sm font-mono mb-1">NEON_LVL</div>
            <div className="text-3xl font-bold text-white animate-synthwave-glow">{stats.neon}</div>
            <div className="text-xs text-cyan-400/70">MAXIMUM</div>
          </div>
          
          <div className="bg-black/60 border-2 border-purple-500 rounded-lg p-6 backdrop-blur-sm animate-synthwave-fade-in" style={{animationDelay: '2.5s'}}>
            <div className="text-purple-500 text-sm font-mono mb-1">RETRO_HEX</div>
            <div className="text-3xl font-bold text-white animate-synthwave-glow">#{stats.retro.toString(16).padStart(2, '0').toUpperCase()}</div>
            <div className="text-xs text-purple-500/70">CLASSIC</div>
          </div>
          
          <div className="bg-black/60 border-2 border-orange-500 rounded-lg p-6 backdrop-blur-sm animate-synthwave-fade-in" style={{animationDelay: '3s'}}>
            <div className="text-orange-500 text-sm font-mono mb-1">VIBES</div>
            <div className="text-3xl font-bold text-white animate-synthwave-glow">{stats.vibes}</div>
            <div className="text-xs text-orange-500/70">INFINITE</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-synthwave-fade-in" style={{animationDelay: '3.5s'}}>
          <button className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 animate-synthwave-pulse">
            <span className="relative z-10 font-mono">ENTER THE GRID</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg animate-synthwave-neon-pulse opacity-50"></div>
          </button>
          
          <button className="group relative px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-mono">
            <span className="relative z-10">DOWNLOAD VIBES</span>
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Retro Progress Bars */}
        <div className="max-w-2xl mx-auto space-y-4 animate-synthwave-fade-in" style={{animationDelay: '4s'}}>
          <div className="flex items-center justify-between text-sm font-mono">
            <span className="text-pink-500">LOADING NOSTALGIA...</span>
            <span className="text-white">87%</span>
          </div>
          <div className="w-full bg-black/60 rounded-full h-3 border border-pink-500/50">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full animate-synthwave-progress" style={{width: '87%'}}></div>
          </div>
          
          <div className="flex items-center justify-between text-sm font-mono">
            <span className="text-cyan-400">SYNCING WAVELENGTHS...</span>
            <span className="text-white">92%</span>
          </div>
          <div className="w-full bg-black/60 rounded-full h-3 border border-cyan-400/50">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full animate-synthwave-progress" style={{width: '92%', animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Floating Retro Elements */}
        <div className="absolute top-20 left-10 text-pink-500/30 font-mono text-xs animate-synthwave-float">
          {'> RUN SYNTHWAVE.EXE'}
        </div>
        <div className="absolute bottom-20 right-10 text-cyan-400/30 font-mono text-xs animate-synthwave-float" style={{animationDelay: '2s'}}>
          {'[NEON_MODE: ACTIVE]'}
        </div>
        <div className="absolute top-1/3 right-20 text-purple-500/30 font-mono text-xs animate-synthwave-float" style={{animationDelay: '1s'}}>
          {'80s.VIBES.LOADED'}
        </div>

        {/* Retro Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-pink-500/30 rotate-45 animate-synthwave-spin"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full animate-synthwave-pulse"></div>
        <div className="absolute top-1/2 left-10 w-8 h-20 bg-gradient-to-b from-pink-500/30 to-transparent animate-synthwave-bars"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-synthwave-fade-in" style={{animationDelay: '5s'}}>
        <div className="text-cyan-400 text-sm mb-2 text-center font-mono">SCROLL FOR MORE</div>
        <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center relative">
          <div className="w-2 h-4 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full mt-2 animate-synthwave-scroll"></div>
          <div className="absolute inset-0 border-2 border-pink-500/50 rounded-full animate-synthwave-pulse"></div>
        </div>
      </div>
    </section>
  );
} 