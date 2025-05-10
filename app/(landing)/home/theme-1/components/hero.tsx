export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-70" 
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block">INNOVATIVE IDEAS</span>
            <span className="block">STYLISH DESIGNS</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Transform your space with our premium interior design services.  
            We bring your vision to life with expert craftsmanship and timeless style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-none hover:bg-opacity-90 transition duration-300">
              Our Projects
            </button>
            <button className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-none hover:bg-white hover:bg-opacity-10 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
