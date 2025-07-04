import React from 'react';

export default function CreativeWorkshop() {
  const workshops = [
    {
      title: "Classical Portrait Mastery",
      instructor: "Leonardo AI",
      duration: "6 weeks",
      level: "Intermediate",
      students: "1,247",
      rating: "4.9",
      price: "299",
      image: "👨‍🎨",
      skills: ["Sfumato Technique", "Facial Anatomy", "Light & Shadow", "Digital Brushwork"],
      description: "Master the timeless art of portrait painting using AI-enhanced classical techniques"
    },
    {
      title: "Digital Sculpture Studio", 
      instructor: "Michelangelo Bot",
      duration: "8 weeks",
      level: "Advanced",
      students: "892",
      rating: "4.8",
      price: "399",
      image: "🗿",
      skills: ["3D Modeling", "Marble Texturing", "Form Studies", "Digital Carving"],
      description: "Transform digital clay into breathtaking sculptures with Renaissance precision"
    },
    {
      title: "Mythological AI Art",
      instructor: "Botticelli Code",
      duration: "5 weeks", 
      level: "Beginner",
      students: "1,856",
      rating: "4.9",
      price: "199",
      image: "🧚‍♀️",
      skills: ["Symbolic Elements", "Flowing Compositions", "Color Harmony", "Narrative Art"],
      description: "Create enchanting mythological scenes with AI-powered artistic vision"
    },
    {
      title: "Sacred Geometry & AI",
      instructor: "Raphael Neural",
      duration: "4 weeks",
      level: "Intermediate", 
      students: "743",
      rating: "4.7",
      price: "249",
      image: "⚱️",
      skills: ["Golden Ratio", "Perspective Drawing", "Mathematical Beauty", "Harmonic Composition"],
      description: "Discover the mathematical principles behind Renaissance masterpieces"
    }
  ];

  const digitalTools = [
    {
      name: "AI Brush Studio",
      type: "Digital Painting",
      features: ["Renaissance Presets", "Smart Color Mixing", "Texture Analysis", "Style Transfer"],
      icon: "🖌️",
      price: "Free"
    },
    {
      name: "Classical Sculptor 3D",
      type: "3D Modeling",
      features: ["Marble Physics", "Chisel Simulation", "Anatomy Guides", "Light Studies"],
      icon: "🔨",
      price: "$29/mo"
    },
    {
      name: "Perspective Master",
      type: "Technical Drawing",
      features: ["Golden Ratio Grid", "Vanishing Points", "Proportional Guides", "Renaissance Rules"],
      icon: "📐",
      price: "$19/mo"
    },
    {
      name: "Color Theory AI",
      type: "Color Science",
      features: ["Period Palettes", "Harmony Analyzer", "Mood Generator", "Historical Accuracy"],
      icon: "🎨",
      price: "$15/mo"
    },
    {
      name: "Composition Genius",
      type: "Layout Design", 
      features: ["Rule of Thirds", "Divine Proportion", "Balance Analysis", "Visual Flow"],
      icon: "🖼️",
      price: "$25/mo"
    },
    {
      name: "Renaissance Textures",
      type: "Surface Library",
      features: ["Authentic Materials", "Age Simulation", "Brush Strokes", "Canvas Weaves"],
      icon: "🧱",
      price: "$12/mo"
    }
  ];

  const learningPath = [
    { stage: "Foundation", focus: "Classical Principles", weeks: "2-4", icon: "📚" },
    { stage: "Technique", focus: "Digital Tools", weeks: "4-6", icon: "🛠️" },
    { stage: "Practice", focus: "Guided Projects", weeks: "6-8", icon: "🎯" },
    { stage: "Mastery", focus: "Original Creation", weeks: "8+", icon: "👑" }
  ];

  const levelColors: Record<string, string> = {
    "Beginner": "text-green-600 bg-green-100",
    "Intermediate": "text-orange-600 bg-orange-100", 
    "Advanced": "text-red-600 bg-red-100"
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Workshop Elements */}
      <div className="absolute inset-0">
        {/* Artist's Tools */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-600/15 animate-renaissance-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 30 + 35}s`
            }}
          >
            {['🖌️', '🎨', '📐', '🔨', '✏️', '🖍️', '🧱', '⚱️'][Math.floor(Math.random() * 8)]}
          </div>
        ))}

        {/* Workshop Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full"
               style={{
                 backgroundImage: `
                   linear-gradient(45deg, #d97706 1px, transparent 1px),
                   linear-gradient(-45deg, #ea580c 1px, transparent 1px)
                 `,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-gradient-to-r from-amber-100/80 to-red-100/80 backdrop-blur-sm border-2 border-amber-300/30 rounded-full">
            <span className="text-amber-700 text-lg font-semibold">🛠️ Creative Workshop</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Master the Craft
          </h2>
          
          <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
            Learn from AI masters who have studied centuries of artistic tradition. 
            Develop your skills with cutting-edge digital tools and timeless techniques.
          </p>
        </div>

        {/* Learning Path */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            Your Renaissance Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {learningPath.map((path, index) => (
              <div
                key={index}
                className="group text-center relative"
              >
                {/* Progress Line */}
                {index < learningPath.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-amber-300 to-orange-300 transform -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300/40 rounded-2xl p-6 hover:border-orange-400/60 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 animate-renaissance-pulse">
                    {path.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-amber-800 mb-2">
                    {path.stage}
                  </h4>
                  
                  <p className="text-orange-600 font-medium mb-2">
                    {path.focus}
                  </p>
                  
                  <p className="text-amber-700/80 text-sm">
                    {path.weeks} weeks
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Courses */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            Featured Workshops
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-sm border-2 border-amber-200/40 rounded-2xl overflow-hidden hover:border-red-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-8">
                  {/* Workshop Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl animate-renaissance-pulse">
                      {workshop.image}
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${levelColors[workshop.level]} mb-2`}>
                        {workshop.level}
                      </div>
                      <div className="text-amber-700 text-sm">
                        {workshop.duration}
                      </div>
                    </div>
                  </div>

                  {/* Workshop Info */}
                  <h4 className="text-2xl font-bold text-amber-800 mb-2 group-hover:text-red-600 transition-colors">
                    {workshop.title}
                  </h4>
                  
                  <div className="text-orange-600 font-semibold mb-4">
                    with {workshop.instructor}
                  </div>
                  
                  <p className="text-amber-700/80 text-sm leading-relaxed mb-6">
                    {workshop.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h5 className="text-amber-800 font-semibold mb-3">You'll Learn:</h5>
                    <div className="flex flex-wrap gap-2">
                      {workshop.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-amber-200/50 text-amber-700 text-xs rounded-full border border-amber-300/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-xl font-bold text-amber-700">{workshop.students}</div>
                      <div className="text-amber-600 text-xs">Students</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-orange-700">⭐ {workshop.rating}</div>
                      <div className="text-orange-600 text-xs">Rating</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-red-700">${workshop.price}</div>
                      <div className="text-red-600 text-xs">Price</div>
                    </div>
                  </div>

                  {/* Action */}
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Tools */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            Professional Digital Tools
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalTools.map((tool, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm border border-orange-200/40 rounded-xl p-6 hover:border-red-400/60 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl animate-renaissance-pulse">
                    {tool.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-red-700 font-bold">
                      {tool.price}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-amber-800 mb-1 group-hover:text-red-600 transition-colors">
                  {tool.name}
                </h4>
                
                <div className="text-orange-600 text-sm font-medium mb-3">
                  {tool.type}
                </div>

                <div className="space-y-1">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                      <span className="text-amber-700/80 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-100/80 to-red-100/80 backdrop-blur-sm border-2 border-amber-300/40 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-800 mb-4">
              Begin Your Artistic Renaissance
            </h3>
            <p className="text-amber-700/80 mb-6">
              Join thousands of digital artists learning from the greatest masters 
              in art history, enhanced by the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-red-600 text-white font-semibold rounded-full hover:from-amber-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                🎨 Start Learning
              </button>
              <button className="px-8 py-3 bg-amber-50 text-amber-700 font-semibold rounded-full border-2 border-amber-300 hover:bg-amber-100 transition-all duration-300">
                📚 Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 