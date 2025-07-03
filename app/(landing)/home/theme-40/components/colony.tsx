'use client';

export default function Colony() {
  return (
    <section className="py-20 px-4 bg-red-900/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-900/30 border border-red-500/30 rounded-full mb-8">
          <span className="text-xl">🏗️</span>
          <span className="font-mono text-red-300 tracking-wider uppercase text-sm">Mars Colony Infrastructure</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-8">
          Advanced Settlement Systems
        </h2>
        
        <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed mb-12">
          Our Mars colony features state-of-the-art life support systems, sustainable energy generation, 
          and advanced terraforming technology to create a thriving human settlement on the Red Planet.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Habitat Domes', value: '24', icon: '🏠' },
            { label: 'Solar Arrays', value: '156', icon: '☀️' },
            { label: 'Water Extractors', value: '8', icon: '💧' },
            { label: 'Greenhouses', value: '32', icon: '🌱' }
          ].map((facility, index) => (
            <div key={index} className="text-center p-6 bg-red-800/20 border border-orange-500/20 rounded-xl hover:border-orange-400/30 transition-all duration-300">
              <div className="text-3xl mb-3">{facility.icon}</div>
              <div className="text-2xl font-bold text-orange-400 font-mono mb-2">{facility.value}</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">{facility.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 