import { statsSectionCopy } from '../copy';

export default function Stats() {
  return (
    <section className="py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src={statsSectionCopy.image}
              alt={statsSectionCopy.imageAlt}
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="p-8">
            {/* Content */}
            <div className="text-amber-600 mb-4">{statsSectionCopy.subtitle}</div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <div>{statsSectionCopy.heading1}</div>
              <div>{statsSectionCopy.heading2}</div>
            </h2>

            <p className="text-gray-600 mb-8">
              {statsSectionCopy.description}
            </p>

            <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 uppercase text-sm tracking-wider ">
              {statsSectionCopy.buttonText}
            </button>

            {/* Stats section - positioned in the second column */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {/* Years of Experience */}
              {statsSectionCopy.stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold mb-1">
                    {stat.value} {stat.suffix && <span className="text-gray-500">{stat.suffix}</span>}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
