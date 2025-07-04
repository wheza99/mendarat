import React from 'react';

export default function DigitalGallery() {
  const digitalMasterpieces = [
    {
      title: "The Digital Mona Lisa",
      artist: "Leonardo AI",
      year: "2024",
      style: "Neo-Renaissance Portrait",
      price: "2.5 ETH",
      rarity: "Legendary",
      image: "👩‍🎨",
      description: "AI-reimagined classic with dynamic expressions",
      views: "45.2K",
      likes: "12.8K"
    },
    {
      title: "Cyber David",
      artist: "Michelangelo Bot",
      year: "2024", 
      style: "Digital Sculpture",
      price: "1.8 ETH",
      rarity: "Epic",
      image: "🗿",
      description: "Marble perfection meets digital precision",
      views: "38.7K",
      likes: "9.4K"
    },
    {
      title: "The Birth of Algorithm",
      artist: "Botticelli Code",
      year: "2024",
      style: "Mythological AI",
      price: "3.1 ETH",
      rarity: "Mythic",
      image: "🧚‍♀️",
      description: "Where Venus meets machine learning",
      views: "67.3K",
      likes: "18.9K"
    },
    {
      title: "School of Athens 2.0",
      artist: "Raphael Neural",
      year: "2024",
      style: "Digital Fresco",
      price: "2.2 ETH",
      rarity: "Legendary",
      image: "🏛️",
      description: "Philosophers in the digital age",
      views: "52.1K",
      likes: "15.2K"
    },
    {
      title: "Starry Night AI",
      artist: "Van Gogh Bot",
      year: "2024",
      style: "Post-Impressionist",
      price: "1.9 ETH",
      rarity: "Epic", 
      image: "🌌",
      description: "Swirling algorithms of cosmic beauty",
      views: "41.8K",
      likes: "11.3K"
    },
    {
      title: "The Last Algorithm",
      artist: "Da Vinci Code",
      year: "2024",
      style: "Digital Renaissance",
      price: "4.2 ETH",
      rarity: "Mythic",
      image: "🍷",
      description: "Twelve disciples of artificial intelligence",
      views: "89.4K",
      likes: "24.7K"
    }
  ];

  const galleryCategories = [
    { name: "Renaissance Portraits", count: "247", icon: "👑" },
    { name: "Digital Sculptures", count: "189", icon: "🗿" },
    { name: "AI Landscapes", count: "156", icon: "🏞️" },
    { name: "Mythological AI", count: "98", icon: "🧚‍♀️" },
    { name: "Abstract Algorithms", count: "203", icon: "🎨" },
    { name: "Sacred Geometry", count: "134", icon: "⚱️" }
  ];

  const rarityColors: Record<string, string> = {
    "Mythic": "from-purple-400 to-pink-500",
    "Legendary": "from-yellow-400 to-orange-500", 
    "Epic": "from-blue-400 to-purple-500",
    "Rare": "from-green-400 to-blue-500",
    "Common": "from-gray-400 to-gray-600"
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Art Elements */}
      <div className="absolute inset-0">
        {/* Gallery Lighting */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-renaissance-fade-in"
            style={{
              left: `${12.5 * (i + 1)}%`,
              top: '0',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          >
            <div className="w-32 h-full bg-gradient-to-b from-amber-200/20 to-transparent" />
          </div>
        ))}

        {/* Floating Frame Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-amber-600/20 animate-renaissance-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 40 + 30}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 20}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-gradient-to-r from-red-100/80 to-amber-100/80 backdrop-blur-sm border-2 border-red-300/30 rounded-full">
            <span className="text-red-700 text-lg font-semibold">🖼️ Digital Gallery</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
            Renaissance Reimagined
          </h2>
          
          <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of AI-generated masterpieces that honor 
            classical traditions while pushing the boundaries of digital artistry.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {galleryCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm border border-amber-200/40 rounded-xl p-4 hover:border-orange-400/60 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
            >
              <div className="text-3xl mb-2 animate-renaissance-pulse">
                {category.icon}
              </div>
              <div className="text-amber-800 font-semibold text-sm mb-1">
                {category.name}
              </div>
              <div className="text-orange-600 text-xs">
                {category.count} pieces
              </div>
            </div>
          ))}
        </div>

        {/* Masterpieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {digitalMasterpieces.map((piece, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-sm border-2 border-amber-200/40 rounded-2xl overflow-hidden hover:border-red-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Artwork Frame */}
              <div className="relative h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 flex items-center justify-center border-b-2 border-amber-200/40">
                <div className="text-8xl opacity-80 animate-renaissance-pulse">
                  {piece.image}
                </div>
                
                {/* Rarity Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${rarityColors[piece.rarity]} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {piece.rarity}
                  </span>
                </div>

                {/* Artist Signature */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                  {piece.artist}
                </div>
              </div>

              <div className="p-6">
                {/* Artwork Info */}
                <h3 className="text-xl font-bold text-amber-800 mb-2 group-hover:text-red-600 transition-colors">
                  {piece.title}
                </h3>
                
                <div className="text-orange-600 font-medium text-sm mb-3">
                  {piece.style} • {piece.year}
                </div>
                
                <p className="text-amber-700/80 text-sm leading-relaxed mb-4">
                  {piece.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="flex space-x-4">
                    <span className="text-amber-600">👁️ {piece.views}</span>
                    <span className="text-red-600">❤️ {piece.likes}</span>
                  </div>
                  <div className="text-orange-700 font-bold">
                    {piece.price}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 text-sm">
                    💎 Collect
                  </button>
                  <button className="px-4 py-2 bg-amber-100 text-amber-700 font-semibold rounded-lg border border-amber-300 hover:bg-amber-200 transition-all duration-300 text-sm">
                    👁️ View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🎨",
              title: "AI Curation",
              desc: "Machine learning selects the finest digital masterpieces"
            },
            {
              icon: "🏛️",
              title: "Virtual Exhibitions", 
              desc: "Immersive 3D galleries showcasing classical and modern fusion"
            },
            {
              icon: "💎",
              title: "NFT Marketplace",
              desc: "Own and trade authenticated digital Renaissance artworks"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm border border-orange-200/40 rounded-xl p-6 hover:border-red-400/60 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-5xl mb-4 animate-renaissance-pulse">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-amber-800 mb-2 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-amber-700/80 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-100/80 to-amber-100/80 backdrop-blur-sm border-2 border-red-300/40 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-800 mb-4">
              Start Your Digital Collection
            </h3>
            <p className="text-amber-700/80 mb-6">
              Discover, collect, and trade AI-generated Renaissance masterpieces 
              in the world's most prestigious digital gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                🖼️ Browse Gallery
              </button>
              <button className="px-8 py-3 bg-amber-50 text-amber-700 font-semibold rounded-full border-2 border-amber-300 hover:bg-amber-100 transition-all duration-300">
                🎨 Create Artwork
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 