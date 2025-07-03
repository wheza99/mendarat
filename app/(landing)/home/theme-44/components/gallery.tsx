export default function Gallery() {
  const collections = [
    {
      title: "ÉMERAUDES IMPÉRIALES",
      category: "Haute Joaillerie",
      year: "2023",
      description: "Collection exclusive inspirée des joyaux de l'Empire"
    },
    {
      title: "DIAMANTS ÉTERNELS", 
      category: "Solitaires",
      year: "2023",
      description: "La pureté cristallisée dans des créations intemporelles"
    },
    {
      title: "OR BLANC MODERNE",
      category: "Orfèvrerie",
      year: "2022", 
      description: "L'élégance contemporaine dans la tradition"
    },
    {
      title: "RUBIS PASSION",
      category: "Collections Limitées",
      year: "2023",
      description: "L'ardeur des pierres précieuses birmanes"
    },
    {
      title: "PERLES TAHITIENNES",
      category: "Haute Joaillerie",
      year: "2022",
      description: "L'exotisme raffiné des perles noires du Pacifique"
    },
    {
      title: "SAPHIRS ROYAUX",
      category: "Patrimoine",
      year: "2023",
      description: "L'héritage des cours européennes renaissance"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 border-2 border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 luxury-glow" style={{ fontFamily: 'serif' }}>
          <span className="text-yellow-400">GALERIE</span>
          <span className="text-white"> D'EXCEPTION</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontStyle: 'italic' }}>
          "Découvrez nos créations les plus prestigieuses, témoins de notre savoir-faire ancestral"
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden"
            >
              {/* Image placeholder with Art Deco pattern */}
              <div className="relative h-64 bg-gradient-to-br from-yellow-400/10 to-slate-900 overflow-hidden">
                {/* Geometric pattern overlay */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(251, 191, 36, 0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(251, 191, 36, 0.1) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(251, 191, 36, 0.1) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(251, 191, 36, 0.1) 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }} />
                
                {/* Center ornament */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-yellow-400/40 rotate-45 deco-scale">
                    <div className="absolute inset-2 border border-yellow-400/60 rotate-45">
                      <div className="absolute inset-2 bg-yellow-400/20 rotate-45" />
                    </div>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-yellow-400/20 border border-yellow-400/40 px-3 py-1">
                  <span className="text-yellow-400 text-xs font-medium tracking-wider">{item.category}</span>
                </div>
                
                {/* Year badge */}
                <div className="absolute bottom-4 left-4 bg-slate-900/80 border border-yellow-400/30 px-3 py-1">
                  <span className="text-yellow-400 text-sm font-bold" style={{ fontFamily: 'serif' }}>{item.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
                
                {/* View details button */}
                <button className="mt-4 text-yellow-400 hover:text-yellow-300 text-sm tracking-wider font-medium border-b border-yellow-400/30 hover:border-yellow-400 transition-all duration-300">
                  VOIR LA COLLECTION →
                </button>
              </div>

              {/* Art Deco corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/30" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-2 border-yellow-400/20 p-8">
          {/* Art Deco ornament */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-yellow-400" />
              <div className="w-3 h-3 border border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
              <div className="w-12 h-px bg-yellow-400" />
              <div className="w-4 h-4 border-2 border-yellow-400 rotate-45 bg-yellow-400/30 deco-scale" />
              <div className="w-12 h-px bg-yellow-400" />
              <div className="w-3 h-3 border border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
              <div className="w-8 h-px bg-yellow-400" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 luxury-glow" style={{ fontFamily: 'serif' }}>
            EXPOSITION PRIVÉE
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Découvrez en avant-première nos dernières créations lors de nos expositions privées mensuelles. 
            Un privilège exclusif réservé à notre clientèle d'exception.
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-black font-bold tracking-wider hover:bg-yellow-500 transition-colors duration-300 vintage-swing">
            RÉSERVER VOTRE VISITE
          </button>
        </div>
      </div>
    </section>
  );
} 