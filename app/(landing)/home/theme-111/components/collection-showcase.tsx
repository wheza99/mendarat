import React from 'react';

export default function CollectionShowcase() {
  const collections = [
    {
      name: "Victorian Era",
      period: "1837-1901",
      items: 45,
      description: "Elegant furniture and decorative arts from the Victorian period",
      image: "🏛️",
      status: "featured"
    },
    {
      name: "Art Deco",
      period: "1920-1940",
      items: 32,
      description: "Bold geometric designs and luxurious materials from the Jazz Age",
      image: "✨",
      status: "new"
    },
    {
      name: "Mid-Century Modern",
      period: "1945-1975",
      items: 28,
      description: "Clean lines and functional design from the post-war era",
      image: "🪑",
      status: "popular"
    },
    {
      name: "Antique Jewelry",
      period: "1800-1950",
      items: 67,
      description: "Precious metals and gemstones from various historical periods",
      image: "💎",
      status: "featured"
    },
    {
      name: "Vintage Textiles",
      period: "1900-1980",
      items: 89,
      description: "Handcrafted fabrics and traditional weaving techniques",
      image: "🧵",
      status: "new"
    },
    {
      name: "Classical Paintings",
      period: "1700-1900",
      items: 23,
      description: "Masterpieces from renowned artists of the classical period",
      image: "🎨",
      status: "exclusive"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'featured': return 'text-amber-600';
      case 'new': return 'text-green-600';
      case 'popular': return 'text-orange-600';
      case 'exclusive': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'featured': return 'bg-amber-100 border-amber-300';
      case 'new': return 'bg-green-100 border-green-300';
      case 'popular': return 'bg-orange-100 border-orange-300';
      case 'exclusive': return 'bg-purple-100 border-purple-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
            Curated Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            Explore our carefully selected vintage pieces from different historical periods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-none border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 shadow-lg ${getStatusBg(collection.status)}`}
            >
              {/* Vintage frame decoration */}
              <div className="absolute inset-0 border-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{collection.image}</div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-amber-800">
                    {collection.name}
                  </h3>
                  <span className={`text-xs font-serif px-2 py-1 border ${getStatusColor(collection.status)}`}>
                    {collection.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-serif">Period:</span>
                    <span className="text-amber-700 font-serif">{collection.period}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-serif">Items:</span>
                    <span className="text-amber-700 font-serif">{collection.items}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed font-serif mb-6">
                  {collection.description}
                </p>
                
                <button className="w-full px-6 py-3 border-2 border-amber-600 text-amber-700 font-serif text-sm rounded-none hover:bg-amber-600 hover:text-white transition-all duration-300">
                  VIEW COLLECTION
                </button>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Collection stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif text-amber-700 mb-2">284</div>
              <div className="text-gray-600 font-serif">Total Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-orange-700 mb-2">6</div>
              <div className="text-gray-600 font-serif">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-yellow-700 mb-2">50+</div>
              <div className="text-gray-600 font-serif">Years Span</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-amber-700 mb-2">100%</div>
              <div className="text-gray-600 font-serif">Authentic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 