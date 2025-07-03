'use client';

export default function CellularGrid() {
  const cellularStats = [
    {
      label: "Cells Analyzed",
      value: "12.7M",
      unit: "CELLS",
      icon: "🔬",
      color: "emerald"
    },
    {
      label: "Bio Patterns",
      value: "98.6",
      unit: "%",
      icon: "🧬",
      color: "teal"
    },
    {
      label: "Nature Inspired",
      value: "3,847",
      unit: "DESIGNS",
      icon: "🌿",
      color: "green"
    },
    {
      label: "Efficiency Rate",
      value: "∞",
      unit: "OPTIMAL",
      icon: "♻️",
      color: "cyan"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Honeycomb Background */}
      <div className="absolute inset-0">
        {/* Hexagonal Cell Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                conic-gradient(from 0deg at 50% 50%, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.2))
              `
            }}
          />
        </div>
        
        {/* Floating Cellular Structures */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `organic-float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-emerald-200 rounded-full opacity-30 animate-pulse" />
              <div className="absolute inset-2 bg-teal-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-4 bg-green-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
            <span className="block">CELLULAR</span>
            <span className="block -mt-2">MATRIX</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-16 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-bounce" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore the intricate patterns and structures that drive biological efficiency
          </p>
        </div>

        {/* Cellular Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cellularStats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{
                animation: `organic-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className={`p-8 border-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                stat.color === 'emerald' ? 'border-emerald-200 hover:border-emerald-300' :
                stat.color === 'teal' ? 'border-teal-200 hover:border-teal-300' :
                stat.color === 'green' ? 'border-green-200 hover:border-green-300' :
                'border-cyan-200 hover:border-cyan-300'
              }`}>
                {/* Organic Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, currentColor 0%, transparent 70%)`
                    }}
                  />
                </div>
                
                <div className="text-center relative z-10">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-4xl font-bold mb-2 ${
                    stat.color === 'emerald' ? 'text-emerald-600' :
                    stat.color === 'teal' ? 'text-teal-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    'text-cyan-600'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm mb-3 font-medium">
                    {stat.label}
                  </div>
                  <div className={`text-xs px-3 py-1 rounded-full border font-medium ${
                    stat.color === 'emerald' ? 'border-emerald-300 text-emerald-600 bg-emerald-50' :
                    stat.color === 'teal' ? 'border-teal-300 text-teal-600 bg-teal-50' :
                    stat.color === 'green' ? 'border-green-300 text-green-600 bg-green-50' :
                    'border-cyan-300 text-cyan-600 bg-cyan-50'
                  }`}>
                    {stat.unit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Laboratory Display */}
        <div className="relative">
          <div className="border-4 border-emerald-200 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
            {/* Lab Header */}
            <div className="border-b-2 border-teal-200 pb-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                  <h3 className="text-teal-600 text-xl font-bold">
                    🧪 BIO_LAB_SYSTEM.v48
                  </h3>
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  Nature Protocol Active
                </div>
              </div>
            </div>

            {/* Laboratory Content */}
            <div className="space-y-4 text-sm">
              <div className="text-emerald-600 font-medium">
                &gt; Initializing biomimetic analysis...
              </div>
              <div className="text-teal-600">
                &gt; Scanning cellular structures... [██████████] 100%
              </div>
              <div className="text-green-600">
                &gt; Pattern recognition: ACTIVE
              </div>
              <div className="text-cyan-600">
                &gt; Nature optimization: ENGAGED
              </div>
              
              {/* Interactive Elements */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-emerald-600 font-bold text-base">🔬 CELL_STATUS:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Mitochondria:</span>
                      <span className="text-emerald-600 font-medium">HEALTHY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">DNA Helix:</span>
                      <span className="text-teal-600 font-medium">STABLE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Membrane:</span>
                      <span className="text-green-600 font-medium">OPTIMAL</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-teal-600 font-bold text-base">🌿 ECOSYSTEM:</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-6 rounded-md ${
                          Math.random() > 0.5 ? 'bg-emerald-100 border border-emerald-300' : 
                          Math.random() > 0.5 ? 'bg-teal-100 border border-teal-300' : 
                          'bg-green-100 border border-green-300'
                        } animate-pulse`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Organic Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-transparent to-teal-100/20 rounded-3xl pointer-events-none blur-xl" />
        </div>

        {/* Organic Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 border-2 border-emerald-400 bg-white hover:bg-emerald-50 text-emerald-600 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              <span className="relative z-10">🔬 ANALYZE CELLS</span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-teal-400 bg-white hover:bg-teal-50 text-teal-600 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              <span className="relative z-10">🧬 VIEW DNA</span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-green-400 bg-white hover:bg-green-50 text-green-600 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              <span className="relative z-10">🌿 EXPLORE NATURE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 