export default function Contact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(251, 191, 36, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.1) 87.5%, rgba(251, 191, 36, 0.1)),
            linear-gradient(150deg, rgba(251, 191, 36, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.1) 87.5%, rgba(251, 191, 36, 0.1)),
            linear-gradient(30deg, rgba(251, 191, 36, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.1) 87.5%, rgba(251, 191, 36, 0.1)),
            linear-gradient(150deg, rgba(251, 191, 36, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.1) 87.5%, rgba(251, 191, 36, 0.1))
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 0 0, 40px 40px, 40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 border-2 border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse">
                  <div className="absolute inset-1 border border-yellow-400/60 rotate-45" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 luxury-glow" style={{ fontFamily: 'serif' }}>
            <span className="text-yellow-400">RENDEZ-VOUS</span>
            <span className="text-white"> PRIVÉ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontStyle: 'italic' }}>
            "Rencontrez nos maîtres artisans dans l'intimité de nos salons parisiens"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 border-2 border-yellow-400/20 p-8 relative">
            {/* Art Deco corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/40" />

            <h3 className="text-2xl font-bold text-yellow-400 mb-6 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
              DEMANDE DE CONSULTATION
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wider">
                    PRÉNOM *
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-yellow-400/30 focus:border-yellow-400 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wider">
                    NOM DE FAMILLE *
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-yellow-400/30 focus:border-yellow-400 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wider">
                  EMAIL *
                </label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900/50 border border-yellow-400/30 focus:border-yellow-400 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wider">
                  TÉLÉPHONE
                </label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-900/50 border border-yellow-400/30 focus:border-yellow-400 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wider">
                  TYPE DE CONSULTATION
                </label>
                <select className="w-full bg-slate-900/50 border border-yellow-400/30 focus:border-yellow-400 px-4 py-3 text-white transition-all duration-300 focus:outline-none">
                  <option>Haute Joaillerie</option>
                  <option>Orfèvrerie d'Art</option>
                  <option>Collection Vintage</option>
                  <option>Création Sur Mesure</option>
                  <option>Expertise & Estimation</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wider">
                  MESSAGE
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-yellow-400/30 focus:border-yellow-400 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none resize-none"
                  placeholder="Décrivez votre projet ou vos souhaits..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold tracking-wider hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 golden-shimmer"
              >
                DEMANDER UN RENDEZ-VOUS
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-yellow-400/20 p-6 relative vintage-swing">
              <div className="absolute top-4 right-4 text-3xl">🏛️</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                SALONS PARISIENS
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>15, Place Vendôme</p>
                <p>75001 Paris, France</p>
                <p className="text-gray-400 text-sm">Métro: Opéra, Tuileries</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-yellow-400/20 p-6 relative vintage-swing">
              <div className="absolute top-4 right-4 text-3xl">⏰</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                HORAIRES D'OUVERTURE
              </h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>10h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h00 - 18h00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Dimanche</span>
                  <span>Sur rendez-vous</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-yellow-400/20 p-6 relative vintage-swing">
              <div className="absolute top-4 right-4 text-3xl">📞</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                CONTACT DIRECT
              </h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <p>+33 (0)1 42 96 12 34</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>contact@maison-elegance.fr</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p>+33 (0)6 12 34 56 78</p>
                </div>
              </div>
            </div>

            {/* Exclusive Services */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border-2 border-yellow-400/30 p-6 relative">
              <div className="absolute top-4 right-4 text-3xl">✨</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wider luxury-glow" style={{ fontFamily: 'serif' }}>
                SERVICES EXCLUSIFS
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rotate-45 mr-3 deco-pulse" />
                  Consultation privée à domicile
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rotate-45 mr-3 deco-pulse" />
                  Présentation personnalisée
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rotate-45 mr-3 deco-pulse" />
                  Expertise et certificat inclus
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rotate-45 mr-3 deco-pulse" />
                  Service après-vente à vie
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-400" />
            <div className="w-4 h-4 border-2 border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
            <div className="w-8 h-px bg-yellow-400" />
            <div className="w-6 h-6 border-2 border-yellow-400 rotate-45 bg-yellow-400/30 deco-scale" />
            <div className="w-8 h-px bg-yellow-400" />
            <div className="w-4 h-4 border-2 border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
} 