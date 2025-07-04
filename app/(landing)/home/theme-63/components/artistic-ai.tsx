import React from 'react';

export default function ArtisticAI() {
  const aiArtists = [
    {
      name: "Leonardo AI",
      specialty: "Digital Portraits",
      masterpieces: "1,247",
      style: "Neo-Renaissance",
      status: "Active",
      image: "👨‍🎨",
      expertise: ["Human Anatomy", "Sfumato Technique", "Golden Ratio", "Light Studies"]
    },
    {
      name: "Michelangelo Bot",
      specialty: "Sculpture Rendering",
      masterpieces: "892",
      style: "Digital Marble",
      status: "Creating",
      image: "🗿",
      expertise: ["3D Modeling", "Texture Mapping", "Form Studies", "Classical Poses"]
    },
    {
      name: "Raphael Neural",
      specialty: "Harmony & Balance",
      masterpieces: "1,156",
      style: "Perfect Proportions",
      status: "Learning",
      image: "🎭",
      expertise: ["Color Theory", "Composition", "Perspective", "Emotional Expression"]
    },
    {
      name: "Botticelli Code",
      specialty: "Mythological Scenes",
      masterpieces: "743",
      style: "Ethereal Beauty",
      status: "Dreaming",
      image: "🧚‍♀️",
      expertise: ["Flowing Lines", "Graceful Forms", "Symbolic Elements", "Poetic Vision"]
    }
  ];

  const creationProcess = [
    { step: "1", title: "Historical Analysis", desc: "Study Renaissance masterpieces", icon: "📚" },
    { step: "2", title: "Style Learning", desc: "Absorb artistic techniques", icon: "🧠" },
    { step: "3", title: "Creative Synthesis", desc: "Merge tradition with innovation", icon: "⚗️" },
    { step: "4", title: "Digital Renaissance", desc: "Birth of new masterpiece", icon: "✨" }
  ];

  const statusColors: Record<string, string> = {
    "Active": "text-green-600 bg-green-100",
    "Creating": "text-blue-600 bg-blue-100",
    "Learning": "text-orange-600 bg-orange-100",
    "Dreaming": "text-purple-600 bg-purple-100"
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Digital Canvas Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full"
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, #d97706 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, #ea580c 2px, transparent 2px)
                 `,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>

        {/* Floating Brushstrokes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-renaissance-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 25 + 30}s`
            }}
          >
            <div className="w-20 h-2 bg-gradient-to-r from-amber-400/30 to-transparent rounded-full transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-gradient-to-r from-orange-100/80 to-red-100/80 backdrop-blur-sm border-2 border-orange-300/30 rounded-full">
            <span className="text-orange-700 text-lg font-semibold">🤖 Artistic Intelligence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
            Master AI Artists
          </h2>
          
          <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
            Meet our digital Renaissance masters, each AI artist trained on centuries 
            of classical techniques to create breathtaking modern masterpieces.
          </p>
        </div>

        {/* AI Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {aiArtists.map((artist, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-sm border-2 border-amber-200/40 rounded-2xl overflow-hidden hover:border-orange-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-8">
                {/* Artist Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl animate-renaissance-pulse">
                    {artist.image}
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusColors[artist.status]} mb-2`}>
                      {artist.status}
                    </div>
                    <div className="text-amber-700 text-sm font-medium">
                      {artist.style}
                    </div>
                  </div>
                </div>

                {/* Artist Info */}
                <h3 className="text-2xl font-bold text-amber-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {artist.name}
                </h3>
                
                <div className="text-orange-600 font-semibold mb-4">
                  {artist.specialty}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-amber-100/50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-700">{artist.masterpieces}</div>
                    <div className="text-amber-600 text-xs">Masterpieces</div>
                  </div>
                  <div className="text-center p-3 bg-orange-100/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700">500+</div>
                    <div className="text-orange-600 text-xs">Years Studied</div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-amber-800 font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {artist.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-amber-200/50 text-amber-700 text-xs rounded-full border border-amber-300/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Collaborate with {artist.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Creation Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            The Digital Renaissance Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {creationProcess.map((process, index) => (
              <div
                key={index}
                className="group text-center relative"
              >
                {/* Connection Line */}
                {index < creationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 transform -translate-x-1/2" />
                )}
                
                <div className="relative z-10 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300/40 rounded-2xl p-6 hover:border-orange-400/60 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 animate-renaissance-pulse">
                    {process.icon}
                  </div>
                  
                  <div className="text-2xl font-bold text-amber-600 mb-2">
                    {process.step}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">
                    {process.title}
                  </h4>
                  
                  <p className="text-amber-700/80 text-sm">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm border-2 border-orange-300/40 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-800 mb-4">
              Ready to Create with AI Masters?
            </h3>
            <p className="text-amber-700/80 mb-6">
              Join the digital Renaissance revolution where artificial intelligence 
              meets timeless artistic beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                🎨 Start Creating
              </button>
              <button className="px-8 py-3 bg-amber-50 text-amber-700 font-semibold rounded-full border-2 border-amber-300 hover:bg-amber-100 transition-all duration-300">
                📖 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 