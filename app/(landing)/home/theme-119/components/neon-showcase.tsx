import React from 'react';

export default function NeonShowcase() {
  const showcaseItems = [
    {
      title: 'Street Fashion Collection',
      description: 'Latest trends from Harajuku and Shibuya',
      image: '👘',
      price: '¥15,000',
      category: 'Fashion'
    },
    {
      title: 'Neon Photography Tour',
      description: 'Capture the vibrant nightlife of Tokyo',
      image: '📸',
      price: '¥8,000',
      category: 'Experience'
    },
    {
      title: 'Street Food Adventure',
      description: 'Taste authentic Japanese street cuisine',
      image: '🍜',
      price: '¥3,500',
      category: 'Food'
    },
    {
      title: 'Graffiti Art Workshop',
      description: 'Learn Japanese street art techniques',
      image: '🎨',
      price: '¥12,000',
      category: 'Art'
    },
    {
      title: 'Karaoke Night Experience',
      description: 'Sing your heart out in neon-lit rooms',
      image: '🎤',
      price: '¥5,000',
      category: 'Entertainment'
    },
    {
      title: 'Cultural Street Tour',
      description: 'Explore hidden gems of Tokyo streets',
      image: '🗺️',
      price: '¥6,500',
      category: 'Tour'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background with neon effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/60 to-cyan-900/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Neon Showcase
          </h2>
          <p className="text-xl text-purple-200 font-mono">
            🏮 Discover the best of Japanese street culture 🎌
          </p>
        </div>

        {/* Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card with neon border */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-cyan-900/90 border border-pink-400/40 hover:border-pink-400/80 transition-all duration-300 transform hover:scale-105">
                
                {/* Neon glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Image/Icon */}
                <div className="text-5xl mb-4 text-center animate-pulse">
                  {item.image}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-pink-100 group-hover:text-pink-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-pink-200 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-300">
                      {item.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      🏮 Explore
                    </button>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-pink-400/60 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-600 text-white font-bold rounded-lg hover:from-pink-600 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50">
            🗾 View All Experiences
          </button>
        </div>
      </div>

      {/* Floating neon elements */}
      <div className="absolute top-20 left-20 text-pink-400 text-3xl animate-bounce">
        🎌
      </div>
      <div className="absolute bottom-20 right-20 text-purple-400 text-2xl animate-pulse">
        🏮
      </div>
      <div className="absolute top-1/2 left-10 text-cyan-400 text-xl animate-spin">
        ⛩️
      </div>
      <div className="absolute top-1/3 right-10 text-pink-300 text-2xl animate-bounce">
        🎎
      </div>
    </section>
  );
} 