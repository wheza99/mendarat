'use client';

export default function Mission() {
  return (
    <section className="py-20 px-4 bg-orange-900/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-900/30 border border-orange-500/30 rounded-full mb-8">
          <span className="text-xl">🚀</span>
          <span className="font-mono text-orange-300 tracking-wider uppercase text-sm">Mars Mission</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-8">
          Our Mission to Mars
        </h2>
        
        <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed mb-12">
          Establishing humanity's first permanent settlement on Mars through scientific innovation, 
          sustainable technology, and the pioneering spirit of human exploration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              phase: 'Phase 1', 
              title: 'Base Establishment', 
              status: 'Completed',
              description: 'Initial landing, habitat setup, and life support systems',
              icon: '🏗️' 
            },
            { 
              phase: 'Phase 2', 
              title: 'Colony Expansion', 
              status: 'In Progress',
              description: 'Growing population, infrastructure development, resource mining',
              icon: '🏠' 
            },
            { 
              phase: 'Phase 3', 
              title: 'Terraforming', 
              status: 'Planning',
              description: 'Atmospheric modification, ecosystem creation, planetary engineering',
              icon: '🌍' 
            }
          ].map((phase, index) => (
            <div key={index} className="p-6 bg-red-800/20 border border-orange-500/20 rounded-xl hover:border-orange-400/30 transition-all duration-300">
              <div className="text-4xl mb-4">{phase.icon}</div>
              <div className="text-orange-400 font-mono text-sm mb-2">{phase.phase}</div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">{phase.title}</h3>
              <div className={'text-xs uppercase font-mono px-3 py-1 rounded-full mb-3 ' + (
                phase.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                phase.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              )}>
                {phase.status}
              </div>
              <p className="text-slate-300 text-sm">{phase.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Mission Duration', value: '12 Years', icon: '⏱️' },
            { label: 'Crew Members', value: '2,847', icon: '👨‍🚀' },
            { label: 'Supply Missions', value: '156', icon: '🚀' },
            { label: 'Scientific Discoveries', value: '892', icon: '🔬' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-red-800/20 border border-orange-500/20 rounded-xl">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-orange-400 font-mono mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 