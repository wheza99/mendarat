import React from 'react';

const articles = [
  {
    title: 'Designing for Impact',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    label: 'FEATURED',
    labelColor: 'bg-red-500 text-white',
  },
  {
    title: 'The Power of Headlines',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    label: 'EDITORIAL',
    labelColor: 'bg-yellow-400 text-black',
  },
  {
    title: 'Modern Magazine Grids',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    label: 'INSIGHT',
    labelColor: 'bg-black text-white',
  },
];

export default function ArticleShowcase() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12 font-serif tracking-tight uppercase border-b-4 border-black/10 pb-4">
          Article Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((a, i) => (
            <div key={a.title} className="flex flex-col gap-4 bg-gray-50 rounded shadow border border-black/10 p-6 relative group hover:shadow-xl transition-shadow">
              <div className="relative w-full h-56 rounded overflow-hidden border-4 border-black/20">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" />
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded uppercase tracking-widest shadow ${a.labelColor}`}>{a.label}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mt-2 mb-1 leading-tight group-hover:underline decoration-red-500 decoration-4 underline-offset-4 transition-all">
                {a.title}
              </h3>
              <div className="h-1 w-12 bg-red-500 rounded mb-2" />
              <p className="text-gray-700 text-base font-sans leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 