'use client';

export default function Contact() {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bio-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              JOIN THE EVOLUTION
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Become part of the bio-technological revolution and help shape the future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bio-card p-8">
            <h3 className="text-3xl font-bold text-emerald-300 mb-8 bio-glow">
              INITIATE CONTACT PROTOCOL
            </h3>
            
            <form className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-emerald-300 font-semibold mb-2">
                    GENETIC IDENTIFIER (Name)
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 bg-emerald-900/20 organic-border text-emerald-100 placeholder-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                    placeholder="Your biological designation"
                  />
                </div>
                <div>
                  <label className="block text-emerald-300 font-semibold mb-2">
                    COMMUNICATION LINK (Email)
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 bg-emerald-900/20 organic-border text-emerald-100 placeholder-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                    placeholder="your@digital.interface"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-emerald-300 font-semibold mb-2">
                  TRANSMISSION MESSAGE
                </label>
                <textarea
                  rows={5}
                  className="w-full p-4 bg-emerald-900/20 organic-border text-emerald-100 placeholder-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 resize-none"
                  placeholder="Describe your interest in bio-technological evolution..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 organic-border text-white font-bold text-lg organic-pulse transition-all duration-300 hover:scale-105 group"
              >
                <span className="flex items-center justify-center gap-3">
                  🧬 TRANSMIT TO BIO-LAB
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 