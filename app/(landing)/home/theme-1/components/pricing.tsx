export default function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$1,500",
      description: "Perfect for small spaces and simple redesigns",
      features: [
        "Initial consultation",
        "Concept development",
        "2 design revisions",
        "Basic material selection",
        "Project management"
      ],
      recommended: false
    },
    {
      name: "Premium",
      price: "$3,500",
      description: "Comprehensive design for medium-sized spaces",
      features: [
        "Everything in Basic",
        "Detailed 3D visualizations",
        "Custom furniture selection",
        "4 design revisions",
        "Lighting design",
        "Premium material selection"
      ],
      recommended: true
    },
    {
      name: "Luxury",
      price: "$7,000+",
      description: "Complete transformation for larger spaces",
      features: [
        "Everything in Premium",
        "Unlimited design revisions",
        "Custom furniture design",
        "Full project management",
        "Contractor coordination",
        "Post-implementation support"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer flexible pricing plans to accommodate different project scopes and budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`border ${plan.recommended ? 'border-black' : 'border-gray-200'} p-8 relative ${plan.recommended ? 'shadow-lg' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="border-t border-gray-200 pt-6 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#" 
                className={`block text-center py-3 ${plan.recommended ? 'bg-black text-white' : 'border border-black text-black hover:bg-black hover:text-white'} transition duration-300`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom plan for your large-scale project?{" "}
            <a href="#" className="text-black border-b border-black hover:border-opacity-50 transition-all duration-200">
              Contact us for a detailed quote
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
