'use client';

import { useState, useEffect } from 'react';
import theme34Copy from '../copy';

export default function Hero() {
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Terminal typing effect
  useEffect(() => {
    const terminal = theme34Copy.hero.terminal;
    const currentText = terminal[terminalIndex];
    
    if (isTyping && displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setTerminalIndex((prev) => (prev + 1) % terminal.length);
        setIsTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, terminalIndex, isTyping]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-cyan-900/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Binary */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Glitch Title */}
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 mb-4 font-mono tracking-wider">
                {theme34Copy.hero.title}
              </h1>
              {/* Glitch Effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black font-mono tracking-wider text-red-500 opacity-20 animate-pulse">
                {theme34Copy.hero.title}
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="text-green-400 text-xl md:text-2xl font-mono mb-6 border-l-2 border-green-400 pl-4">
              {theme34Copy.hero.subtitle}
            </div>
            
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              {theme34Copy.hero.description}
            </p>
            
            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300 uppercase tracking-wider overflow-hidden">
              <span className="relative z-10">{theme34Copy.hero.cta}</span>
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-green-400 animate-pulse opacity-50" />
            </button>
          </div>

          {/* Right Terminal */}
          <div className="relative">
            {/* Terminal Window */}
            <div className="bg-black border-2 border-green-400 rounded-lg overflow-hidden shadow-2xl shadow-green-400/20">
              {/* Terminal Header */}
              <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-green-400">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-green-400 font-mono text-sm ml-4">cyber_terminal.exe</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 h-80">
                <div className="text-green-400 font-mono text-sm space-y-2">
                  {/* Static lines */}
                  <div>$ whoami</div>
                  <div className="text-cyan-400">root@cyberdev.exe</div>
                  <div>$ ls -la /projects</div>
                  <div className="text-gray-400">
                    drwxr-xr-x 12 root root 4096 Dec 25 2024 ./
                  </div>
                  <div className="text-gray-400">
                    drwxr-xr-x  3 root root 4096 Dec 25 2024 ../
                  </div>
                  <div className="text-pink-400">
                    -rwxr-xr-x  1 root root 2048 Dec 25 2024 neural_network.py
                  </div>
                  <div className="text-pink-400">
                    -rwxr-xr-x  1 root root 1024 Dec 25 2024 quantum_algorithm.js
                  </div>
                  <div>$ ./initialize_future.sh</div>
                  
                  {/* Typing animation */}
                  <div className="flex items-center">
                    <span className="text-green-400">{displayText}</span>
                    <span className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Neon glow around terminal */}
            <div className="absolute inset-0 border-2 border-green-400 rounded-lg blur-sm opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-20 bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-20 h-2 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
      <div className="absolute top-1/2 right-32 w-1 h-32 bg-gradient-to-b from-pink-400 to-transparent animate-pulse"></div>
    </section>
  );
} 