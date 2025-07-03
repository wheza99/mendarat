export default function Luxury() {
  const services = [
    {
      number: "01",
      title: "HAUTE JOAILLERIE",
      description: "Créations sur mesure avec les plus belles pierres précieuses",
      price: "Sur Devis",
      features: ["Diamants certifiés", "Sertissage artisanal", "Écrin de luxe"]
    },
    {
      number: "02", 
      title: "ORFÈVRERIE D'ART",
      description: "Pièces uniques en métaux précieux travaillés à la main",
      price: "À partir de 5 000€",
      features: ["Or 18 carats", "Gravure personnalisée", "Finition miroir"]
    },
    {
      number: "03",
      title: "COLLECTION VINTAGE",
      description: "Pièces d'époque restaurées selon les techniques d'origine",
      price: "Sur Consultation",
      features: ["Authenticité garantie", "Restauration experte", "Certificat d'époque"]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, rgba(251, 191, 36, 0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(251, 191, 36, 0.1) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, rgba(251, 191, 36, 0.1) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(251, 191, 36, 0.1) 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rotate-45" />
              <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rotate-45" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 luxury-glow" style={{ fontFamily: 'serif' }}>
            <span className="text-yellow-400">SERVICES</span>
            <span className="text-white"> EXCLUSIFS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontStyle: 'italic' }}>
            "Des services sur mesure pour une clientèle d'exception"
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/50 border-2 border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 overflow-hidden"
            >
              {/* Art Deco number badge */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/20 border-l-2 border-b-2 border-yellow-400/40 flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-xl" style={{ fontFamily: 'serif' }}>
                  {service.number}
                </span>
              </div>

              <div className="p-8 pt-12">
                {/* Title */}
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-yellow-400 rotate-45 mr-3 deco-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-yellow-400/20 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm tracking-wide">TARIF</span>
                    <span className="text-yellow-400 font-bold text-lg" style={{ fontFamily: 'serif' }}>
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 py-3 border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 tracking-wider font-medium group-hover:border-yellow-400 golden-shimmer">
                  DEMANDER UN DEVIS
                </button>
              </div>

              {/* Decorative corners */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-yellow-400/30" />
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-400/30" />

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <button className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold tracking-wider hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 vintage-swing">
              PRENDRE RENDEZ-VOUS
            </button>
            <div className="absolute -inset-1 border-2 border-yellow-400/50 -z-10 transform rotate-1" />
          </div>
          <p className="text-gray-400 mt-4 text-sm" style={{ fontStyle: 'italic' }}>
            "Consultation privée dans nos salons parisiens"
          </p>
        </div>
      </div>
    </section>
  );
} 