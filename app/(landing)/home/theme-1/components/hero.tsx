import { heroSectionCopy } from '../copy';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Background Image with overlay for better text visibility */}
      <div className="absolute inset-0 bg-black z-0 opacity-50" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60" 
        style={{ backgroundImage: `url('${heroSectionCopy.backgroundImage}')` }}
      />
      
      {/* Content Container - Using the same max-width as other sections */}
      <div className="max-w-7xl mx-auto h-full relative z-10">
        {/* Content - Aligned with the navigation bar */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">{heroSectionCopy.heading1}</span>
              <span className="block">{heroSectionCopy.heading2}</span>
            </h1>
            <p className="text-sm md:text-base max-w-xl mb-10 text-gray-300">
              {heroSectionCopy.description}
            </p>
            <div>
              <a href="#" className="inline-block px-8 py-3 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-black transition duration-300">
                {heroSectionCopy.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on mobile for cleaner look */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-white z-20">
        <span className="text-sm mb-2">{heroSectionCopy.scrollText}</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
