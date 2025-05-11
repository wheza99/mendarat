import { processSectionCopy } from '../copy';

export default function Process() {
  const processSteps = processSectionCopy.steps;

  return (
    <section className="py-36">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">{processSectionCopy.heading}</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            {processSectionCopy.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Large Number */}
              <div className="text-[120px] font-bold text-gray-100 dark:text-gray-800 leading-none mb-6">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-6 uppercase">{step.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section - Can be added later if needed */}
        <div className="mt-24">
          {/* This is where the image from the screenshot would go */}
        </div>
      </div>
    </section>
  );
}
