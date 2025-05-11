import { pricingSectionCopy } from '../copy';

export default function Pricing() {
  const pricingPlans = pricingSectionCopy.plans;

  return (
    <section className="py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">{pricingSectionCopy.heading}</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            {pricingSectionCopy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col border ${plan.recommended
                ? 'border-black dark:border-white'
                : 'border-gray-200 dark:border-gray-700'} 
                p-8 relative ${plan.recommended ? 'shadow-lg dark:shadow-gray-800' : ''} 
                justify-between items-between`}
            >
              <div className="">
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4 dark:text-white">{plan.price}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                        <span className="dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href="#"
                className={`block text-center py-3 ${plan.recommended
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                  } transition duration-300`}
              >
                {pricingSectionCopy.selectPlanButtonText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            {pricingSectionCopy.customPlanText}{" "}
            <a href="#" className="text-black dark:text-white border-b border-black dark:border-white hover:border-opacity-50 transition-all duration-200">
              {pricingSectionCopy.contactLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
