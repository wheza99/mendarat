'use client';

export default function Technology() {
  return (
    <section className="py-20 px-4 bg-red-900/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-900/30 border border-red-500/30 rounded-full mb-8">
          <span className="text-xl">⚙️</span>
          <span className="font-mono text-red-300 tracking-wider uppercase text-sm">Mars Technology</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-8">
          Advanced Colony Systems
        </h2>
        
        <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed mb-12">
          Cutting-edge technology enables sustainable life on Mars through atmospheric processing, 
          resource extraction, and advanced manufacturing capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              name: 'Atmospheric Processors', 
              description: 'Convert CO2 to breathable oxygen and create protective atmospheric layers',
              specs: 'Output: 2,400L O2/hour',
              icon: '🌬️' 
            },
            { 
              name: 'MOXIE Units', 
              description: 'Mars Oxygen In-Situ Resource Utilization for life support systems',
              specs: 'Efficiency: 98.7%',
              icon: '⚛️' 
            },
            { 
              name: 'Solar Panel Arrays', 
              description: 'High-efficiency photovoltaic systems adapted for Mars solar conditions',
              specs: 'Power: 150MW total',
              icon: '☀️' 
            },
            { 
              name: 'Water Recycling', 
              description: 'Closed-loop water processing and ice mining extraction systems',
              specs: 'Recovery: 99.2%',
              icon: '💧' 
            }
          ].map((tech, index) => (
            <div key={index} className="p-6 bg-red-800/20 border border-orange-500/20 rounded-xl hover:border-orange-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{tech.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{tech.name}</h3>
                  <p className="text-orange-200 mb-3">{tech.description}</p>
                  <p className="text-slate-300 text-sm font-mono">{tech.specs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 