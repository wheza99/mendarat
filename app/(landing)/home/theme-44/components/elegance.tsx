export default function Elegance() {
  const features = [
    {
      icon: "💎",
      title: "JOAILLERIE EXCLUSIVE",
      subtitle: "Créations Uniques",
      description: "Chaque pièce est méticuleusement conçue par nos maîtres artisans avec les plus belles pierres précieuses du monde."
    },
    {
      icon: "🏛️",
      title: "PATRIMOINE ANCESTRAL",
      subtitle: "Tradition & Savoir-Faire",
      description: "Un héritage de quatre générations d'excellence dans l'art de la haute joaillerie et de l'orfèvrerie."
    },
    {
      icon: "👑",
      title: "COLLECTIONS ROYALES",
      subtitle: "Prestige & Raffinement",
      description: "Des créations qui ont orné les plus grandes cours européennes et continuent d'émerveiller l'élite mondiale."
    },
    {
      icon: "✨",
      title: "ARTISANAT D'EXCEPTION",
      subtitle: "Perfection & Détail",
      description: "Chaque détail est travaillé à la perfection selon les techniques traditionnelles transmises de génération en génération."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 luxury-glow" style={{ fontFamily: 'serif' }}>
          <span className="text-yellow-400">L'ART DE L'</span>
          <span className="text-white">EXCELLENCE</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontStyle: 'italic' }}>
          "Dans chaque création réside l'âme de nos artisans et l'héritage de notre maison"
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-yellow-400/20 p-8 hover:border-yellow-400/50 transition-all duration-500 deco-pulse"
            >
              {/* Art Deco corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-400/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400/40" />

              {/* Icon */}
              <div className="text-6xl mb-6 vintage-swing">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-yellow-400 mb-2 tracking-wider" style={{ fontFamily: 'serif' }}>
                {feature.title}
              </h3>
              <h4 className="text-lg text-gray-300 mb-4 font-light tracking-wide">
                {feature.subtitle}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Geometric accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-yellow-400/30 rotate-45 opacity-50 group-hover:opacity-100 transition-opacity duration-300 deco-scale" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="flex justify-center mt-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400" />
          <div className="w-3 h-3 border border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
          <div className="w-8 h-px bg-yellow-400" />
          <div className="w-3 h-3 border border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400" />
        </div>
      </div>
    </section>
  );
} 