import React from 'react';

export default function VintageHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Vintage frame decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-300 opacity-30"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-orange-300 opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-yellow-300 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-amber-300 opacity-30"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-serif text-amber-800 mb-6 tracking-wider">
            Vintage
            <br />
            <span className="text-orange-700">Treasures</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-serif italic">
          Discover timeless pieces that tell stories of generations past. 
          Each antique carries the charm and character of a bygone era.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-serif text-lg rounded-none shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-amber-700">
            <span className="relative z-10">EXPLORE COLLECTION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-serif text-lg rounded-none hover:bg-amber-600 hover:text-white transition-all duration-300">
            SCHEDULE VISIT
          </button>
        </div>
        
        {/* Vintage stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-serif text-amber-700 mb-2 group-hover:text-amber-600 transition-colors">50+</div>
            <div className="text-gray-600 font-serif">Years of Experience</div>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 group-hover:bg-amber-500 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-serif text-orange-700 mb-2 group-hover:text-orange-600 transition-colors">1000+</div>
            <div className="text-gray-600 font-serif">Unique Pieces</div>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-2 group-hover:bg-orange-500 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-serif text-yellow-700 mb-2 group-hover:text-yellow-600 transition-colors">Est. 1973</div>
            <div className="text-gray-600 font-serif">Family Business</div>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 group-hover:bg-yellow-500 transition-colors"></div>
          </div>
        </div>
        
        {/* Vintage decorative elements */}
        <div className="absolute top-20 left-20 text-amber-600 text-sm opacity-60 font-serif">
          ✧ Est. 1973 ✧
        </div>
        <div className="absolute bottom-20 right-20 text-orange-600 text-sm opacity-60 font-serif">
          ✧ Handcrafted ✧
        </div>
      </div>
    </section>
  );
} 