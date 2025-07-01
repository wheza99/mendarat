import { BusinessData } from "../../page";

interface HeroProps {
  businessData: BusinessData;
}

export default function Hero({ businessData }: HeroProps) {
  const backgroundImage = businessData.metadata.background || businessData.metadata.banner || businessData.img;
  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Background Image with overlay for better text visibility */}
      <div className="absolute inset-0 bg-black z-0 opacity-50" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60" 
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto h-full relative z-10">
        {/* Content */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-white">
          <div className="max-w-xl">
            {/* Business Logo */}
            {businessData.img && (
              <div className="mb-6">
                <img 
                  src={businessData.img} 
                  alt={businessData.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">{businessData.name}</span>
            </h1>
            
            <p className="text-sm md:text-base max-w-xl mb-10 text-gray-300">
              {businessData.metadata.description}
            </p>
            
            {/* Status Badge */}
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                businessData.status === 'published' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-yellow-600 text-white'
              }`}>
                {businessData.status === 'published' ? 'Aktif' : 'Tidak Aktif'}
              </span>
            </div>
            
            {/* Announcement */}
            {businessData.metadata.announcement && (
              <div className="mb-6 p-4 bg-blue-600 bg-opacity-80 rounded-lg">
                <p className="text-sm text-white">{businessData.metadata.announcement}</p>
              </div>
            )}
            
            <div>
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-black transition duration-300"
                style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-white z-20">
        <span className="text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
} 