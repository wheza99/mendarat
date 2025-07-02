'use client';

import theme32Copy from '../copy';

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-6">
            {theme32Copy.stats.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            {theme32Copy.stats.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {theme32Copy.stats.items.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text mb-4">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-300 font-mono text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-ping" />
              </div>

              {/* Floating Numbers Animation */}
              <div className="absolute -top-2 -right-2 text-xs text-blue-400/60 font-mono animate-bounce">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse" />
    </section>
  );
} 