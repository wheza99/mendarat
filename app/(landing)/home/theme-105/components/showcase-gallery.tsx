import React from 'react';

const showcases = [
  {
    title: 'Brand Collage',
    image: '/showcase1.png',
    label: 'Branding',
    color: 'bg-yellow-200',
    border: 'border-yellow-300',
    rotate: 'rotate-2',
  },
  {
    title: 'Creative Poster',
    image: '/showcase2.png',
    label: 'Poster',
    color: 'bg-pink-200',
    border: 'border-pink-300',
    rotate: '-rotate-3',
  },
  {
    title: 'Web Layout',
    image: '/showcase3.png',
    label: 'Web Design',
    color: 'bg-blue-200',
    border: 'border-blue-300',
    rotate: 'rotate-1',
  },
  {
    title: 'Social Media Kit',
    image: '/showcase4.png',
    label: 'Social Media',
    color: 'bg-green-200',
    border: 'border-green-300',
    rotate: '-rotate-2',
  },
];

export default function ShowcaseGallery() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 text-center mb-12 font-sans tracking-wider drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>
          Showcase Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`relative p-4 ${item.color} ${item.border} border-2 shadow-lg ${item.rotate} rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              <div className="w-32 h-32 bg-white rounded-[14px] shadow-inner border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 overflow-hidden">
                {/* Dummy image/illustration */}
                <span className="text-5xl opacity-30">🖼️</span>
              </div>
              <span className="px-3 py-1 text-xs font-bold rounded-full mb-2 border-2 border-white bg-white/80 text-yellow-700 shadow" style={{boxShadow: '1px 2px 0 #fff7d6'}}>{item.label}</span>
              <h3 className="text-lg font-bold text-yellow-800 text-center drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>{item.title}</h3>
              {/* Decorative torn edge */}
              <div className="absolute left-0 bottom-0 w-full h-3 bg-repeat-x" style={{backgroundImage: 'url("/torn-edge.png")'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 