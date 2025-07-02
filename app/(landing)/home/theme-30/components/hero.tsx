"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev + Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Retro Gaming HUD */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="flex justify-between items-center bg-black/80 border-2 border-cyan-400 rounded-lg p-4 font-mono text-cyan-400">
          <div className="flex items-center space-x-6">
            <div className="text-sm">
              <span className="text-pink-400">SCORE:</span> {score.toLocaleString()}
            </div>
            <div className="text-sm">
              <span className="text-yellow-400">LEVEL:</span> {level}
            </div>
            <div className="text-sm flex items-center">
              <span className="text-green-400 mr-2">LIVES:</span>
              {[...Array(lives)].map((_, i) => (
                <span key={i} className="text-red-400 mx-1">♥</span>
              ))}
            </div>
          </div>
          <div className="text-sm animate-pulse">
            <span className="text-purple-400">PRESS START</span>
          </div>
        </div>
      </div>

      {/* Floating Pixel Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 animate-float ${
              i % 4 === 0 ? 'bg-cyan-400' :
              i % 4 === 1 ? 'bg-pink-400' :
              i % 4 === 2 ? 'bg-yellow-400' : 'bg-green-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Pixel Art Title */}
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative font-mono tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              LEVEL UP
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              YOUR DIGITAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h1>
          
          {/* Pixel Art Decorations */}
          <div className="absolute -top-8 -left-8 text-4xl animate-bounce">🎮</div>
          <div className="absolute -top-8 -right-8 text-4xl animate-pulse">👾</div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-3xl animate-ping">⭐</div>
        </div>

        <p className="text-xl md:text-2xl text-cyan-300 mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
          Enter the ultimate digital arcade where innovation meets nostalgia. 
          Power up your business with retro-futuristic solutions that never go out of style.
        </p>

        {/* Gaming Style CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-mono uppercase tracking-wide border-2 border-cyan-400 hover:border-pink-400">
            <span className="relative z-10">🎮 START GAME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 animate-ping"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold text-lg transition-all duration-300 hover:bg-pink-400 hover:text-black hover:scale-105 font-mono uppercase tracking-wide relative overflow-hidden">
            <span className="relative z-10">👾 HIGH SCORES</span>
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse"></div>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-pink-400 to-yellow-400 animate-pulse"></div>
          </button>
        </div>

        {/* Retro Gaming Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-black/60 border-2 border-cyan-400 rounded-lg p-6 hover:border-pink-400 transition-colors duration-300">
            <div className="text-4xl mb-3">🕹️</div>
            <h3 className="text-cyan-400 font-mono font-bold text-lg mb-2">PLAYER 1</h3>
            <p className="text-gray-300 text-sm">Interactive Design</p>
          </div>
          <div className="bg-black/60 border-2 border-pink-400 rounded-lg p-6 hover:border-yellow-400 transition-colors duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-pink-400 font-mono font-bold text-lg mb-2">POWER UP</h3>
            <p className="text-gray-300 text-sm">Performance Boost</p>
          </div>
          <div className="bg-black/60 border-2 border-yellow-400 rounded-lg p-6 hover:border-green-400 transition-colors duration-300">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-yellow-400 font-mono font-bold text-lg mb-2">ACHIEVEMENT</h3>
            <p className="text-gray-300 text-sm">Success Unlocked</p>
          </div>
          <div className="bg-black/60 border-2 border-green-400 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-green-400 font-mono font-bold text-lg mb-2">NEXT LEVEL</h3>
            <p className="text-gray-300 text-sm">Future Ready</p>
          </div>
        </div>
      </div>

      {/* Retro Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-scanlines"></div>
      </div>

      {/* Bottom Pixel Border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-cyan-400 via-pink-400 via-yellow-400 to-green-400 animate-pulse"></div>
    </section>
  );
} 