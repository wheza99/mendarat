import React from 'react';

export default function MagazineHero() {
  return (
    <section className="relative py-20 px-4 bg-white border-b-4 border-black/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Editorial Headline */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight text-black tracking-tight mb-2" style={{lineHeight: '1.1'}}>
            <span className="block">THE FUTURE</span>
            <span className="block text-red-500">OF EDITORIAL</span>
            <span className="block">DESIGN</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-sans max-w-xl border-l-4 border-red-500 pl-4 italic">
            Modern magazine layouts, bold headlines, and creative storytelling for your brand.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-8 py-3 bg-red-500 text-white font-bold font-serif text-lg rounded-none shadow hover:bg-black transition-colors tracking-widest border-b-4 border-black">
              READ MORE
            </button>
            <span className="hidden md:inline-block text-gray-400 font-mono text-xs tracking-widest uppercase ml-2 mt-4">Editorial Issue #106</span>
          </div>
        </div>
        {/* Editorial Photo */}
        <div className="relative flex items-center justify-center">
          <div className="w-80 h-96 bg-gray-200 rounded shadow-lg overflow-hidden border-4 border-black/20 flex items-center justify-center">
            {/* Dummy editorial photo */}
            <div className="w-full h-full bg-cover bg-center grayscale" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80')"}} />
          </div>
          {/* Red accent bar */}
          <div className="absolute -left-6 top-8 w-2 h-32 bg-red-500 rounded" />
          {/* Yellow accent bar */}
          <div className="absolute -right-6 bottom-8 w-2 h-20 bg-yellow-400 rounded" />
        </div>
      </div>
    </section>
  );
} 