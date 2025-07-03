export default function Heritage() {
  const milestones = [
    {
      year: "1925",
      title: "FONDATION",
      description: "Création de la Maison par Maître Artisan Henri Dubois",
      icon: "🏛️"
    },
    {
      year: "1934", 
      title: "RECONNAISSANCE ROYALE",
      description: "Fournisseur officiel de la Cour de France",
      icon: "👑"
    },
    {
      year: "1955",
      title: "EXPANSION INTERNATIONALE", 
      description: "Ouverture des ateliers de Londres et Geneva",
      icon: "🌍"
    },
    {
      year: "1978",
      title: "MAÎTRE D'ART",
      description: "Distinction du titre de Maître d'Art de France",
      icon: "🏆"
    },
    {
      year: "1995",
      title: "PATRIMOINE MONDIAL",
      description: "Techniques inscrites au Patrimoine UNESCO",
      icon: "✨"
    },
    {
      year: "2023",
      title: "INNOVATION & TRADITION",
      description: "Alliance entre savoir-faire ancestral et technologies modernes",
      icon: "💎"
    }
  ];

  const achievements = [
    { number: "98", label: "ANNÉES D'EXCELLENCE", suffix: "" },
    { number: "15", label: "PRIX INTERNATIONAUX", suffix: "K" },
    { number: "4", label: "GÉNÉRATIONS", suffix: "" },
    { number: "300", label: "CRÉATIONS UNIQUES", suffix: "+" }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(251, 191, 36, 0.1),
              rgba(251, 191, 36, 0.1) 1px,
              transparent 1px,
              transparent 20px
            )
          `
        }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 border-2 border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse">
                  <div className="absolute inset-1 border border-yellow-400/60 rotate-45" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 luxury-glow" style={{ fontFamily: 'serif' }}>
            <span className="text-yellow-400">NOTRE</span>
            <span className="text-white"> HÉRITAGE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontStyle: 'italic' }}>
            "Une tradition familiale transmise de génération en génération depuis près d'un siècle"
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-yellow-400/20" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-yellow-400/20 p-6 vintage-swing relative">
                    {/* Year badge */}
                    <div className={`inline-block bg-yellow-400 text-black font-bold px-4 py-2 mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`} style={{ fontFamily: 'serif' }}>
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                    
                    {/* Art Deco corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400/40" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400/40" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400/40" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400/40" />
                  </div>
                </div>
                
                {/* Center icon */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-yellow-400/20 border-2 border-yellow-400 rounded-full flex items-center justify-center text-2xl deco-pulse">
                    {milestone.icon}
                  </div>
                </div>
                
                {/* Empty space */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements section */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/50 border-2 border-yellow-400/20 p-8 relative">
          {/* Art Deco pattern background */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 25%, rgba(251, 191, 36, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 25% 75%, rgba(251, 191, 36, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px'
          }} />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8 luxury-glow" style={{ fontFamily: 'serif' }}>
              CHIFFRES D'EXCELLENCE
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center deco-pulse">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                    {achievement.number}
                    <span className="text-2xl">{achievement.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400 tracking-wider">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-yellow-400/40" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-yellow-400/40" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-yellow-400/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-yellow-400/40" />
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-yellow-400" />
                <div className="w-2 h-2 bg-yellow-400 rotate-45" />
                <div className="w-16 h-px bg-yellow-400" />
                <div className="w-3 h-3 border border-yellow-400 rotate-45 bg-yellow-400/20" />
                <div className="w-16 h-px bg-yellow-400" />
                <div className="w-2 h-2 bg-yellow-400 rotate-45" />
                <div className="w-8 h-px bg-yellow-400" />
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed luxury-glow" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
              "L'excellence n'est pas un acte, mais une habitude. 
              Chaque pièce que nous créons porte en elle l'âme de notre histoire."
            </blockquote>
            <cite className="text-yellow-400 text-lg tracking-wider">
              — Henri Dubois IV, Maître Artisan
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
} 