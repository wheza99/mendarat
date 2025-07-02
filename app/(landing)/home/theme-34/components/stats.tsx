'use client';

import theme34Copy from '../copy';

export default function Stats() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-black to-cyan-900/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 mb-6 tracking-wider">
            {theme34Copy.stats.title}
          </h2>
          <div className="text-green-400 font-mono text-lg border-l-2 border-green-400 pl-4 inline-block">
            {theme34Copy.stats.subtitle}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {theme34Copy.stats.items.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="bg-black border-2 border-green-400 p-8 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-green-400/5 group-hover:bg-cyan-400/10 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-black font-mono text-green-400 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Unit */}
                  <div className="text-pink-400 font-mono text-sm mb-4">
                    [{stat.unit}]
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-300 font-mono text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Terminal-style corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
              </div>

              {/* Outer glow */}
              <div className="absolute inset-0 border-2 border-green-400 group-hover:border-cyan-400 blur-sm opacity-30 group-hover:opacity-50 transition-all duration-300" />
              
              {/* Index number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-black border-2 border-pink-400 flex items-center justify-center">
                <span className="text-pink-400 font-mono text-xs font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Terminal Line */}
        <div className="mt-16 flex justify-center">
          <div className="bg-black border-2 border-green-400 px-8 py-3 font-mono text-green-400">
            <span className="animate-pulse">{'>'}</span> system_status: OPERATIONAL
          </div>
        </div>
      </div>

      {/* Decorative Neon Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
    </section>
  );
} 