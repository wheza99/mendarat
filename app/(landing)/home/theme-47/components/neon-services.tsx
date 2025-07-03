'use client';

export default function NeonServices() {
  const services = [
    {
      title: "Time Machine Web",
      description: "Transport your website back to the golden age of computing with authentic 80s aesthetics",
      icon: "⏰",
      price: "$1,987",
      features: ["Neon Glow Effects", "Retro Animations", "Synthwave Colors", "80s Typography"],
      color: "pink"
    },
    {
      title: "Hologram Interface",
      description: "3D wireframe designs that bring your content into the digital dimension",
      icon: "🔮",
      price: "$2,047",
      features: ["3D Wireframes", "Floating Elements", "Perspective Grids", "Laser Animations"],
      color: "cyan"
    },
    {
      title: "Synth Dashboard",
      description: "Control panels inspired by vintage synthesizers and retro computer terminals",
      icon: "🎛️",
      price: "$1,583",
      features: ["Analog Sliders", "LED Indicators", "Matrix Displays", "Sound Reactive"],
      color: "yellow"
    },
    {
      title: "Neon Dreams",
      description: "Complete visual identity package with authentic vaporwave aesthetics",
      icon: "💜",
      price: "$3,089",
      features: ["Brand Identity", "Neon Logos", "Color Palettes", "Style Guide"],
      color: "purple"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Neon Grid Background */}
      <div className="absolute inset-0">
        {/* Horizontal Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"
            style={{
              top: `${i * 10}%`,
              animation: `neon-pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Vertical Lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${12.5 * i}%`,
              animation: `neon-pulse ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Floating Neon Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full neon-glow-cyan animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0080'][Math.floor(Math.random() * 4)],
              animation: `vapor-drift ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-mono">
            <span className="neon-text-pink">NEON</span>{" "}
            <span className="neon-text-cyan">SERVICES</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full neon-glow-pink animate-pulse" />
              <div className="w-3 h-3 bg-cyan-400 rounded-full neon-glow-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-3 h-3 bg-yellow-400 rounded-full neon-glow-yellow animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Digital services from the future, available in the past
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{
                animation: `retro-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              {/* Service Card */}
              <div className={`relative border-2 bg-black/80 p-8 retro-glow hover:scale-105 transition-all duration-500 ${
                service.color === 'pink' ? 'border-pink-400 hover:border-pink-300' :
                service.color === 'cyan' ? 'border-cyan-400 hover:border-cyan-300' :
                service.color === 'yellow' ? 'border-yellow-400 hover:border-yellow-300' :
                'border-purple-400 hover:border-purple-300'
              }`}>
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl p-3 border-2 ${
                      service.color === 'pink' ? 'border-pink-400 neon-glow-pink' :
                      service.color === 'cyan' ? 'border-cyan-400 neon-glow-cyan' :
                      service.color === 'yellow' ? 'border-yellow-400 neon-glow-yellow' :
                      'border-purple-400 neon-glow-purple'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold font-mono mb-2 ${
                        service.color === 'pink' ? 'neon-text-pink' :
                        service.color === 'cyan' ? 'neon-text-cyan' :
                        service.color === 'yellow' ? 'neon-text-yellow' :
                        'text-purple-400'
                      }`}>
                        {service.title}
                      </h3>
                      <div className={`text-3xl font-bold font-mono ${
                        service.color === 'pink' ? 'text-pink-400' :
                        service.color === 'cyan' ? 'text-cyan-400' :
                        service.color === 'yellow' ? 'text-yellow-400' :
                        'text-purple-400'
                      }`}>
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex flex-col items-end">
                    <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                    <div className="text-green-400 font-mono text-xs">AVAILABLE</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        service.color === 'pink' ? 'bg-pink-400 neon-glow-pink' :
                        service.color === 'cyan' ? 'bg-cyan-400 neon-glow-cyan' :
                        service.color === 'yellow' ? 'bg-yellow-400 neon-glow-yellow' :
                        'bg-purple-400 neon-glow-purple'
                      }`} />
                      <span className="text-gray-300 font-mono text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                    <span>RETRO COMPATIBILITY</span>
                    <span>100%</span>
                  </div>
                  <div className={`w-full h-2 border ${
                    service.color === 'pink' ? 'border-pink-400' :
                    service.color === 'cyan' ? 'border-cyan-400' :
                    service.color === 'yellow' ? 'border-yellow-400' :
                    'border-purple-400'
                  } bg-black`}>
                    <div className="h-full synthwave-gradient" />
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-4 border-2 bg-black font-mono font-bold transition-all duration-300 retro-glow ${
                  service.color === 'pink' ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black' :
                  service.color === 'cyan' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' :
                  service.color === 'yellow' ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' :
                  'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black'
                }`}>
                  INITIALIZE SERVICE
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/30" />
                <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/30" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/30" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/30" />
              </div>

              {/* Card Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none ${
                service.color === 'pink' ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20' :
                service.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20' :
                service.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20' :
                'bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20'
              }`} />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="inline-block border-4 border-pink-400 bg-black/80 p-8 retro-glow">
            <h3 className="text-3xl font-bold font-mono neon-text-pink mb-4">
              READY TO GO RETRO?
            </h3>
            <p className="text-gray-300 font-mono mb-6 max-w-2xl">
              Step into the neon-lit world of tomorrow's past. 
              Experience the aesthetic that defined a generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 border-2 border-cyan-400 bg-black text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-mono font-bold retro-glow">
                START YOUR JOURNEY
              </button>
              
              <button className="px-8 py-4 border-2 border-yellow-400 bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-mono font-bold retro-glow">
                VIEW PORTFOLIO
              </button>
            </div>
            
            {/* Retro Price Display */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center font-mono">
              <div className="border border-pink-400 p-3">
                <div className="text-pink-400 font-bold">QUALITY</div>
                <div className="text-xs text-gray-400">PREMIUM</div>
              </div>
              <div className="border border-cyan-400 p-3">
                <div className="text-cyan-400 font-bold">SPEED</div>
                <div className="text-xs text-gray-400">INSTANT</div>
              </div>
              <div className="border border-yellow-400 p-3">
                <div className="text-yellow-400 font-bold">STYLE</div>
                <div className="text-xs text-gray-400">RETRO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 