'use client';

import { useState } from 'react';

const portfolioCategories = [
  'Semua Karya',
  'Furniture Premium',
  'Art Pieces',
  'Luxury Decor',
  'Custom Projects'
];

const portfolioItems = [
  {
    title: 'Royal Dining Set Vienna',
    category: 'Furniture Premium',
    description: 'Dining set eksklusif dengan ukiran tangan detail Art Deco, material mahogany aged 100 tahun',
    year: '2024',
    price: 'IDR 2.5B',
    status: 'Sold to Private Collector',
    image: '🪑'
  },
  {
    title: 'Golden Swan Sculpture',
    category: 'Art Pieces',
    description: 'Patung angsa emas dengan detail micro-carving, berlapis 24k gold dengan crystal Swarovski',
    year: '2023',
    price: 'IDR 1.8B',
    status: 'Museum Collection',
    image: '🦢'
  },
  {
    title: 'Imperial Clock Tower',
    category: 'Luxury Decor',
    description: 'Jam berdiri setinggi 3 meter dengan mekanisme Swiss, ornamen kristal Bohemia',
    year: '2024',
    price: 'IDR 3.2B',
    status: 'Commission Complete',
    image: '🕰️'
  },
  {
    title: 'Heritage Library Cabinet',
    category: 'Furniture Premium',
    description: 'Lemari perpustakaan klasik 5 meter dengan sistem katalog otomatis dan climate control',
    year: '2023',
    price: 'IDR 4.1B',
    status: 'Private Estate',
    image: '📚'
  },
  {
    title: 'Diamond Chandelier Masterpiece',
    category: 'Luxury Decor',
    description: 'Chandelier kristal dengan 2000+ pieces crystal dan framework titanium berlapis platinum',
    year: '2024',
    price: 'IDR 5.5B',
    status: 'Hotel Presidential Suite',
    image: '💎'
  },
  {
    title: 'Bespoke Wine Cellar',
    category: 'Custom Projects',
    description: 'Wine cellar bawah tanah dengan kapasitas 5000 botol, kontrol iklim precision engineering',
    year: '2023',
    price: 'IDR 8.7B',
    status: 'Mansion Private',
    image: '🍷'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua Karya');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'Semua Karya' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 text-9xl text-amber-200/10 luxury-float">🏛️</div>
        <div className="absolute bottom-1/4 right-10 text-8xl text-yellow-200/10 luxury-float" style={{ animationDelay: '2s' }}>👑</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-8 border border-amber-300/50">
            <span className="text-2xl">🎨</span>
            <span className="font-semibold text-amber-800 tracking-wide uppercase">Exclusive Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-yellow-700 mb-8 font-serif">
            Galeri Masterpiece
            <br />
            <span className="text-amber-700">Tak Ternilai</span>
          </h2>
          
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Koleksi eksklusif karya seni dan furniture premium yang telah dipercaya 
            oleh kolektor kelas dunia dan institution bergengsi.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {portfolioCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-xl'
                  : 'bg-white/80 text-amber-800 border border-amber-300 hover:bg-amber-50'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <div className="absolute inset-0 golden-shine opacity-30" />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative elegant-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 overflow-hidden">
                {/* Golden shine effect */}
                <div className={`absolute inset-0 golden-shine opacity-0 ${hoveredItem === index ? 'opacity-100' : ''} transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Featured image placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className={`text-8xl transform transition-all duration-500 ${hoveredItem === index ? 'scale-125' : 'scale-100'}`}>
                      {item.image}
                    </div>
                    {hoveredItem === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-yellow-200/50" />
                    )}
                  </div>
                  
                  {/* Status badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full mb-4 text-sm font-medium">
                    <span>⭐</span>
                    {item.status}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-amber-700 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 text-sm font-medium">Year</span>
                      <span className="text-amber-800 font-semibold">{item.year}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 text-sm font-medium">Value</span>
                      <span className="text-amber-800 font-bold">{item.price}</span>
                    </div>
                  </div>
                  
                  {/* Category tag */}
                  <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Luxury corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-amber-400/50" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-amber-400/50" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-400/50" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-amber-400/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 golden-shine opacity-30" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-4xl luxury-float">🖼️</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Commission Your Masterpiece</h3>
                <p className="text-amber-100 text-lg">Mulai perjalanan menciptakan karya eksklusif Anda</p>
              </div>
              <div className="text-3xl animate-pulse">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 