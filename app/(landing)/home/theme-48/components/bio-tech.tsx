'use client';

export default function BioTech() {
  const bioTechnologies = [
    {
      icon: "🦋",
      title: "Butterfly Wings",
      description: "Ultra-efficient solar panels inspired by butterfly wing structures",
      progress: 92,
      category: "Energy",
      efficiency: "92% Light Absorption"
    },
    {
      icon: "🐛",
      title: "Gecko Feet",
      description: "Revolutionary adhesives mimicking gecko toe pad mechanisms",
      progress: 88,
      category: "Materials",
      efficiency: "88% Grip Strength"
    },
    {
      icon: "🐋",
      title: "Whale Song",
      description: "Advanced sonar systems based on whale echolocation patterns",
      progress: 95,
      category: "Communication",
      efficiency: "95% Accuracy"
    },
    {
      icon: "🌵",
      title: "Cactus Skin",
      description: "Water collection systems inspired by desert plant adaptations",
      progress: 78,
      category: "Sustainability",
      efficiency: "78% Water Recovery"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Bio Background */}
      <div className="absolute inset-0">
        {/* Organic Gradient Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top left, rgba(16, 185, 129, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.2), transparent 50%),
                radial-gradient(ellipse at center, rgba(34, 197, 94, 0.1), transparent 70%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
            <span className="block">BIO</span>
            <span className="block -mt-2">TECHNOLOGY</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-16 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-bounce" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nature's 3.8 billion years of R&D translated into cutting-edge technology
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {bioTechnologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative"
              style={{
                animation: `organic-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-emerald-200 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Organic Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `conic-gradient(from 0deg, rgba(16, 185, 129, 0.5), rgba(6, 182, 212, 0.3), rgba(34, 197, 94, 0.4))`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Tech Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-6xl">{tech.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-slate-800">{tech.title}</h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 font-medium">Bio-Efficiency</span>
                      <span className="text-emerald-600 font-bold">{tech.efficiency}</span>
                    </div>
                    
                    {/* Organic Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-4 bg-emerald-50 rounded-full border border-emerald-200 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: `${tech.progress}%`,
                            animation: `organic-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 0.5}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <div className="w-6 h-6 bg-white border-2 border-emerald-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-2xl font-bold text-emerald-600">{tech.progress}%</span>
                      <span className="text-slate-500 text-sm ml-1">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Research Display */}
        <div className="relative">
          <div className="border-4 border-teal-200 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
            {/* Research Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-teal-600 mb-4">🔬 Bio-Research Laboratory</h3>
              <p className="text-slate-600">Live analysis of biomimetic innovation patterns</p>
            </div>
            
            {/* Research Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Microscope View */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-emerald-300 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="text-3xl">🔬</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Microscopic Analysis</h4>
                <p className="text-slate-600 text-sm">Studying cellular structures for design inspiration</p>
                <div className="mt-3 w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full animate-pulse" style={{ width: '87%' }} />
                </div>
              </div>
              
              {/* DNA Sequencing */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-teal-300 rounded-full bg-teal-50 flex items-center justify-center">
                  <span className="text-3xl">🧬</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Genetic Patterns</h4>
                <p className="text-slate-600 text-sm">Decoding nature's optimization algorithms</p>
                <div className="mt-3 w-full h-2 bg-teal-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full animate-pulse" style={{ width: '94%' }} />
                </div>
              </div>
              
              {/* Biomimetic Innovation */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-green-300 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Innovation Engine</h4>
                <p className="text-slate-600 text-sm">Transforming insights into breakthrough technology</p>
                <div className="mt-3 w-full h-2 bg-green-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full animate-pulse" style={{ width: '91%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10">🔬 EXPLORE RESEARCH</span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-emerald-400 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300">
              <span className="relative z-10">🧬 VIEW INNOVATIONS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 