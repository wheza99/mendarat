import React from 'react';

export default function NoirHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Film Noir Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 blur-3xl animate-noir-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-noir-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl animate-noir-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:3px_3px] animate-noir-grain"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Film Reel Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 w-20 h-20 border-4 border-blue-500 border-b-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-4 w-16 h-16 border-4 border-purple-500 border-l-transparent rounded-full animate-spin"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              NEON NOIR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wider">
            <span className="text-red-400">CINEMATIC</span> • <span className="text-blue-400">DRAMATIC</span> • <span className="text-purple-400">IMMERSIVE</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of classic film noir aesthetics with modern neon technology. 
            Where shadows meet light, and every moment tells a story.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 animate-noir-pulse opacity-0 group-hover:opacity-20"></div>
            </button>

            <button className="group relative px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:bg-blue-500 hover:text-white">
              <span className="relative z-10">Watch Trailer</span>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Neon Accent Lines */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Film Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-red-500/50 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-blue-500/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-purple-500/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 border-2 border-cyan-500/50 rounded-full animate-bounce"></div>

      {/* Cinematic Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
} 