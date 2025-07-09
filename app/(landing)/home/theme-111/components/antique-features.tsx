import React from 'react';

export default function AntiqueFeatures() {
  const features = [
    {
      icon: "🏺",
      title: "Authentic Antiques",
      description: "Carefully curated collection of genuine vintage pieces with verified provenance",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🔍",
      title: "Expert Appraisal",
      description: "Professional evaluation and certification of antique authenticity and value",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🛠️",
      title: "Restoration Services",
      description: "Skilled craftsmanship to restore and preserve antique furniture and artifacts",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "📜",
      title: "Historical Documentation",
      description: "Detailed records and stories behind each piece in our collection",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: "🎨",
      title: "Custom Framing",
      description: "Traditional and modern framing techniques for artwork and memorabilia",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "💎",
      title: "Jewelry Collection",
      description: "Vintage jewelry and precious stones from various historical periods",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            Decades of experience in preserving and showcasing the finest vintage collections
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-none border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 shadow-lg"
            >
              {/* Vintage frame effect */}
              <div className="absolute inset-0 border-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-serif text-amber-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-serif">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-none border-2 border-amber-200 shadow-lg">
            <h3 className="text-2xl font-serif text-amber-800 mb-4">
              VISIT OUR SHOWROOM
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto font-serif italic">
              Experience the charm of vintage treasures in our carefully curated space
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-serif text-lg rounded-none shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-amber-700">
              SCHEDULE APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 