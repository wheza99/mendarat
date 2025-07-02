'use client';

import theme33Copy from '../copy';

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 p-8 inline-block shadow-lg">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              {theme33Copy.stats.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              {theme33Copy.stats.subtitle}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {theme33Copy.stats.items.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 hover:bg-white/35 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Glass Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400/60 rounded-full animate-pulse" />
              </div>

              {/* Floating Number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white/30 backdrop-blur-lg rounded-full px-8 py-2 border border-white/40">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
} 