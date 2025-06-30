"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Neon Starter",
      price: "15",
      period: "juta/bulan",
      description: "Perfect untuk startup dan bisnis kecil yang ingin tampil futuristik",
      features: [
        "Landing page responsive",
        "Basic SEO optimization", 
        "Social media integration",
        "1 bulan maintenance",
        "Email support"
      ],
      popular: false,
      color: "cyan"
    },
    {
      name: "Tokyo Pro",
      price: "35", 
      period: "juta/bulan",
      description: "Untuk bisnis menengah yang butuh solusi digital komprehensif",
      features: [
        "Website multi-halaman",
        "Advanced animations",
        "CMS integration",
        "3 bulan maintenance",
        "Priority support",
        "Performance analytics"
      ],
      popular: true,
      color: "magenta"
    },
    {
      name: "Holographic Enterprise",
      price: "Custom",
      period: "sesuai kebutuhan",
      description: "Solusi enterprise dengan teknologi AI dan integrasi penuh",
      features: [
        "Custom web application",
        "AI integration", 
        "Advanced analytics",
        "12 bulan maintenance",
        "24/7 dedicated support",
        "Custom integrations"
      ],
      popular: false,
      color: "pink"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Paket Digital Premium
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
              plan.popular 
                ? 'bg-gradient-to-br from-pink-500/10 to-cyan-400/10 border-pink-500/60 shadow-[0_0_30px_#FF00FF40]' 
                : 'bg-black/70 border-gray-700/50 hover:border-cyan-400/50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-cyan-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-black text-pink-500">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-black hover:shadow-[0_0_20px_#FF00FF]'
                  : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_#00F5FF40]'
              }`}>
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 