'use client';

export default function Habitats() {
  return (
    <section className="py-20 px-4 bg-orange-900/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-900/30 border border-orange-500/30 rounded-full mb-8">
          <span className="text-xl">🏠</span>
          <span className="font-mono text-orange-300 tracking-wider uppercase text-sm">Living Habitats</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-8">
          Martian Living Spaces
        </h2>
        
        <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed mb-12">
          Experience comfortable living in our pressurized habitat modules, designed to provide 
          Earth-like conditions while protecting colonists from the harsh Martian environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Residential Pods', capacity: '4-6 people', features: 'Private quarters, common areas', icon: '🏘️' },
            { name: 'Research Labs', capacity: '12 scientists', features: 'Advanced equipment, clean rooms', icon: '🔬' },
            { name: 'Recreation Centers', capacity: '50+ people', features: 'Gym, entertainment, social spaces', icon: '🎮' }
          ].map((habitat, index) => (
            <div key={index} className="p-6 bg-red-800/20 border border-orange-500/20 rounded-xl hover:border-orange-400/30 transition-all duration-300">
              <div className="text-4xl mb-4">{habitat.icon}</div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">{habitat.name}</h3>
              <p className="text-orange-200 mb-3">Capacity: {habitat.capacity}</p>
              <p className="text-slate-300 text-sm">{habitat.features}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 