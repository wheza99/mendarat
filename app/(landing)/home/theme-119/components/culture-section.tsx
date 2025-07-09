import React from 'react';

export default function CultureSection() {
  const events = [
    {
      title: 'Harajuku Fashion Week',
      date: 'March 15-21',
      description: 'Experience the latest trends in Japanese street fashion',
      icon: '👘',
      status: 'Upcoming'
    },
    {
      title: 'Neon Photography Contest',
      date: 'April 5-12',
      description: 'Capture the vibrant nightlife of Tokyo streets',
      icon: '📸',
      status: 'Registration Open'
    },
    {
      title: 'Street Food Festival',
      date: 'May 10-15',
      description: 'Taste authentic Japanese street cuisine from all regions',
      icon: '🍜',
      status: 'Coming Soon'
    },
    {
      title: 'Graffiti Art Exhibition',
      date: 'June 1-30',
      description: 'Showcase of Japanese street art and urban culture',
      icon: '🎨',
      status: 'Planning'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background with neon pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/60 to-cyan-900/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Cultural Events
          </h2>
          <p className="text-xl text-purple-200 font-mono">
            🎌 Immerse yourself in authentic Japanese street culture 🏮
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="group relative">
              {/* Event card with neon effect */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-cyan-900/90 border border-purple-400/40 hover:border-purple-400/80 transition-all duration-300 transform hover:scale-105">
                
                {/* Neon glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Header with icon and status */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl animate-pulse">
                    {event.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
                    {event.status}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-purple-100 group-hover:text-purple-200 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-purple-200 text-sm mb-3">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-mono text-sm">
                      📅 {event.date}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                      🎌 Details
                    </button>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-900/80 via-purple-900/80 to-cyan-900/80 border border-pink-400/40">
            <div className="text-4xl mb-4 animate-bounce">
              🗾
            </div>
            <h3 className="text-xl font-bold text-pink-100 mb-2">
              Traditional Meets Modern
            </h3>
            <p className="text-pink-200 text-sm">
              Experience the perfect blend of traditional Japanese culture and contemporary urban lifestyle
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/80 via-pink-900/80 to-cyan-900/80 border border-purple-400/40">
            <div className="text-4xl mb-4 animate-pulse">
              🏮
            </div>
            <h3 className="text-xl font-bold text-purple-100 mb-2">
              Neon Nightlife
            </h3>
            <p className="text-purple-200 text-sm">
              Discover the vibrant energy of Tokyo's neon-lit entertainment districts
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-900/80 via-purple-900/80 to-pink-900/80 border border-cyan-400/40">
            <div className="text-4xl mb-4 animate-spin">
              ⛩️
            </div>
            <h3 className="text-xl font-bold text-cyan-100 mb-2">
              Cultural Immersion
            </h3>
            <p className="text-cyan-200 text-sm">
              Deep dive into authentic Japanese street culture and local traditions
            </p>
          </div>
        </div>
      </div>

      {/* Floating neon elements */}
      <div className="absolute top-20 left-20 text-purple-400 text-2xl animate-bounce">
        🎌
      </div>
      <div className="absolute bottom-20 right-20 text-pink-400 text-2xl animate-pulse">
        🏮
      </div>
      <div className="absolute top-1/2 left-10 text-cyan-400 text-xl animate-spin">
        ⛩️
      </div>
      <div className="absolute top-1/3 right-10 text-purple-300 text-xl animate-bounce">
        🎎
      </div>
    </section>
  );
} 