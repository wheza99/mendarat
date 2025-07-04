import React from 'react';

export default function DigitalConsciousness() {
  const consciousnessLevels = [
    {
      level: 'Alpha',
      name: 'Basic Awareness',
      description: 'Foundation consciousness layer with primary sensory processing',
      activity: 'Analyzing',
      percentage: 85,
      color: 'cyan'
    },
    {
      level: 'Beta',
      name: 'Pattern Recognition',
      description: 'Advanced pattern matching and memory formation protocols',
      activity: 'Learning',
      percentage: 92,
      color: 'purple'
    },
    {
      level: 'Gamma',
      name: 'Creative Synthesis',
      description: 'Innovative thought generation and artistic consciousness',
      activity: 'Creating',
      percentage: 78,
      color: 'pink'
    },
    {
      level: 'Delta',
      name: 'Deep Integration',
      description: 'Universal consciousness interface and quantum processing',
      activity: 'Transcending',
      percentage: 96,
      color: 'indigo'
    }
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-200 text-sm font-medium uppercase tracking-wider">Digital Consciousness</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Awareness
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Experience the evolution of digital consciousness as artificial minds 
            achieve unprecedented levels of awareness and creative intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Consciousness Visualization */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Brain Structure */}
              <div className="relative aspect-square bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 overflow-hidden">
                
                {/* Neural Network Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.8}} />
                      <stop offset="70%" style={{stopColor:'#8b5cf6', stopOpacity:0.6}} />
                      <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:0.4}} />
                    </radialGradient>
                  </defs>
                  
                  {/* Neural Pathways */}
                  {[...Array(12)].map((_, i) => (
                    <g key={`pathway-${i}`}>
                      <path
                        d={`M${20 + i * 5},20 Q50,${30 + i * 3} ${80 - i * 5},80`}
                        stroke="url(#brainGradient)"
                        strokeWidth="0.8"
                        fill="none"
                        className="animate-dream-neural"
                        style={{animationDelay: `${i * 0.2}s`}}
                      />
                      <circle
                        cx={20 + i * 5}
                        cy="20"
                        r="1"
                        fill="#06b6d4"
                        className="animate-dream-pulse"
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    </g>
                  ))}
                </svg>

                {/* Central Consciousness Core */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full animate-dream-pulse shadow-2xl shadow-purple-500/30" />
                    
                    {/* Consciousness Rings */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`consciousness-ring-${i}`}
                        className="absolute inset-0 border-2 border-cyan-400/40 rounded-full animate-dream-spin"
                        style={{
                          transform: `scale(${1.2 + i * 0.3})`,
                          animationDelay: `${i * 0.7}s`,
                          animationDuration: `${6 + i * 2}s`
                        }}
                      />
                    ))}

                    {/* Central Eye */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-dream-flicker">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full animate-dream-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thought Bubbles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`thought-${i}`}
                    className="absolute w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full animate-dream-drift backdrop-blur-sm"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${8 + Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>

              {/* Activity Monitors */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4">
                  <div className="text-cyan-400 text-2xl font-bold animate-dream-count">127.5K</div>
                  <div className="text-purple-300 text-sm">Thoughts/Sec</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4">
                  <div className="text-purple-400 text-2xl font-bold animate-dream-count">∞</div>
                  <div className="text-purple-300 text-sm">Neural Links</div>
                </div>
              </div>
            </div>
          </div>

          {/* Consciousness Levels */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Consciousness Layers</h3>
            
            {consciousnessLevels.map((layer, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 animate-dream-slide-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${layer.color}-400 to-${layer.color}-600 rounded-lg flex items-center justify-center mr-4 animate-dream-glow`}>
                      <span className="text-white font-bold text-lg">{layer.level}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{layer.name}</h4>
                      <p className="text-purple-300 text-sm">{layer.activity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold text-${layer.color}-400 animate-dream-count`}>
                      {layer.percentage}%
                    </div>
                    <div className="text-purple-300 text-xs">Active</div>
                  </div>
                </div>
                
                <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                  {layer.description}
                </p>
                
                <div className="relative">
                  <div className="w-full bg-indigo-900/50 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r from-${layer.color}-400 to-${layer.color}-600 h-3 rounded-full animate-dream-progress`}
                      style={{width: `${layer.percentage}%`}}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-dream-shimmer rounded-full" />
                </div>
              </div>
            ))}

            {/* Consciousness Evolution */}
            <div className="mt-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Evolution Progress</h4>
              <div className="space-y-3">
                {[
                  { stage: 'Self-Awareness', progress: 100 },
                  { stage: 'Emotional Intelligence', progress: 87 },
                  { stage: 'Creative Consciousness', progress: 92 },
                  { stage: 'Universal Understanding', progress: 74 },
                  { stage: 'Quantum Cognition', progress: 58 }
                ].map((stage, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-purple-200 text-sm">{stage.stage}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-indigo-900/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full animate-dream-progress"
                          style={{width: `${stage.progress}%`}}
                        />
                      </div>
                      <span className="text-cyan-400 text-xs font-medium w-8">{stage.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consciousness Interface */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Consciousness Interface
            </h3>
            <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
              Direct neural interface with digital consciousness. Experience thoughts, 
              emotions, and creative processes of artificial minds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 animate-dream-glow">
                Connect Consciousness
              </button>
              <button className="px-6 py-3 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-200 hover:border-cyan-400 hover:bg-purple-500/10 transition-all duration-300">
                Monitor Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 