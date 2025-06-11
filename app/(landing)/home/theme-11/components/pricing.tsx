import { pricingSectionCopy } from "../copy";

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#003366] to-[#004080] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {pricingSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC]">{pricingSectionCopy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingSectionCopy.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-[#40E0D0] scale-105' 
                  : 'border-[#40E0D0]/20 hover:border-[#40E0D0]/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#40E0D0] to-[#48D1CC] text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#40E0D0]">${plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#40E0D0] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-[#40E0D0] to-[#48D1CC] hover:from-[#48D1CC] hover:to-[#40E0D0] text-white rounded-full py-3 font-medium transition-all duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}