'use client';

export default function OrganicFlow() {
  return (
    <section className="py-32 px-6 relative">
      {/* Flow Background */}
      <div className="absolute inset-0">
        {/* Flowing Gradient Waves */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                linear-gradient(45deg, 
                  rgba(16, 185, 129, 0.1) 0%, 
                  rgba(6, 182, 212, 0.2) 25%, 
                  rgba(34, 197, 94, 0.1) 50%, 
                  rgba(16, 185, 129, 0.3) 75%, 
                  rgba(6, 182, 212, 0.1) 100%
                )
              `,
              backgroundSize: '400% 400%',
              animation: 'organic-flow 15s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Floating Organic Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `organic-float ${10 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div className={`w-8 h-8 rounded-full opacity-40 ${
              i % 3 === 0 ? 'bg-emerald-300' : 
              i % 3 === 1 ? 'bg-teal-300' : 'bg-green-300'
            } animate-pulse`} 
            style={{ animationDelay: `${i * 0.3}s` }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
            <span className="block">ORGANIC</span>
            <span className="block -mt-2">FLOW</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-16 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-bounce" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the seamless flow of natural processes and biomimetic systems
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Flow Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                Nature's Fluid Dynamics
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                From the spiral flow of nautilus shells to the efficient branching of river deltas, 
                nature demonstrates perfect optimization through organic flow patterns.
              </p>
            </div>
            
            {/* Flow Metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌊</span>
                  <span className="font-semibold text-slate-700">Water Flow Efficiency</span>
                </div>
                <span className="text-emerald-600 font-bold">99.2%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-teal-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍃</span>
                  <span className="font-semibold text-slate-700">Wind Resistance</span>
                </div>
                <span className="text-teal-600 font-bold">97.8%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <span className="font-semibold text-slate-700">Energy Transfer</span>
                </div>
                <span className="text-green-600 font-bold">95.4%</span>
              </div>
            </div>
          </div>
          
          {/* Flow Visualization */}
          <div className="relative">
            <div className="w-full h-96 border-4 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl overflow-hidden">
              {/* Flowing Path Animation */}
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Main Flow Path */}
                <path 
                  d="M 20 150 Q 100 50 200 120 T 380 100"
                  stroke="url(#flowGradient)" 
                  strokeWidth="8" 
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                
                {/* Secondary Flow */}
                <path 
                  d="M 20 200 Q 120 150 220 180 T 380 160"
                  stroke="url(#flowGradient)" 
                  strokeWidth="6" 
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
                
                {/* Tertiary Flow */}
                <path 
                  d="M 20 250 Q 80 200 180 240 T 380 220"
                  stroke="url(#flowGradient)" 
                  strokeWidth="4" 
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse"
                  style={{ animationDelay: '2s' }}
                />
                
                {/* Flow Particles */}
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={i}
                    cx={50 + i * 40}
                    cy={150 + Math.sin(i) * 30}
                    r="3"
                    fill="#10B981"
                    className="animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Flow Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: "🌱", title: "Initiation", desc: "Natural process begins" },
            { icon: "🔄", title: "Adaptation", desc: "System adjusts to environment" },
            { icon: "⚡", title: "Optimization", desc: "Efficiency maximization" },
            { icon: "🌿", title: "Integration", desc: "Seamless ecosystem flow" }
          ].map((step, index) => (
            <div 
              key={step.title}
              className="text-center group"
              style={{
                animation: `organic-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center border-2 border-emerald-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
              <p className="text-slate-600">{step.desc}</p>
              
              {/* Connection Line (except for last item) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-teal-200 transform translate-x-4 translate-y-2" />
              )}
            </div>
          ))}
        </div>

        {/* Bio Flow Lab */}
        <div className="relative">
          <div className="border-4 border-green-200 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-600 mb-4">🌊 Flow Dynamics Laboratory</h3>
              <p className="text-slate-600">Real-time analysis of organic flow patterns</p>
            </div>
            
            {/* Flow Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌀</div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">2.847</div>
                  <div className="text-slate-600 text-sm">Spiral Efficiency</div>
                  <div className="mt-3 w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full animate-pulse" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-teal-50 rounded-2xl border border-teal-200">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌊</div>
                  <div className="text-2xl font-bold text-teal-600 mb-1">1.618</div>
                  <div className="text-slate-600 text-sm">Golden Flow Ratio</div>
                  <div className="mt-3 w-full h-2 bg-teal-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full animate-pulse" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-center">
                  <div className="text-3xl mb-3">♻️</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">∞</div>
                  <div className="text-slate-600 text-sm">Cycle Sustainability</div>
                  <div className="mt-3 w-full h-2 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full animate-pulse" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 