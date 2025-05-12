import { heroSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0A2E1A] text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSectionCopy.backgroundImage} 
          alt="Biomechanical Forest" 
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E1A]/70 to-[#0A2E1A]"></div>
      </div>

      {/* Biomechanical pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="biomech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1" fill="#B87333" />
            <circle cx="40" cy="0" r="1" fill="#B87333" />
            <circle cx="0" cy="40" r="1" fill="#B87333" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#biomech-grid)" />
        </svg>
      </div>

      {/* Mechanical gears decoration */}
      <div className="absolute top-1/4 right-10 w-40 h-40 opacity-20 animate-slow-spin">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,15 L53,15 L55,25 L60,26 L65,17 L68,19 L65,29 L70,32 L77,25 L80,28 L73,35 L76,40 L86,37 L87,41 L77,44 L77,50 L87,53 L86,57 L76,54 L73,59 L80,66 L77,69 L70,62 L65,65 L68,75 L65,77 L60,68 L55,69 L53,79 L50,79 L48,69 L43,68 L38,77 L35,75 L38,65 L33,62 L26,69 L23,66 L30,59 L27,54 L17,57 L16,53 L26,50 L26,44 L16,41 L17,37 L27,40 L30,35 L23,28 L26,25 L33,32 L38,29 L35,19 L38,17 L43,26 L48,25 L50,15 Z" fill="#B87333"/>
          <circle cx="50" cy="50" r="10" fill="#0A2E1A" stroke="#B87333" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 left-10 w-32 h-32 opacity-20 animate-reverse-spin">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,20 L52,20 L54,28 L58,29 L62,22 L64,23 L61,31 L65,33 L70,28 L72,30 L67,35 L69,39 L77,37 L78,40 L70,42 L70,46 L78,48 L77,51 L69,49 L67,53 L72,58 L70,60 L65,55 L61,57 L64,65 L62,66 L58,59 L54,60 L52,68 L50,68 L48,60 L44,59 L40,66 L38,65 L41,57 L37,55 L32,60 L30,58 L35,53 L33,49 L25,51 L24,48 L32,46 L32,42 L24,40 L25,37 L33,39 L35,35 L30,30 L32,28 L37,33 L41,31 L38,23 L40,22 L44,29 L48,28 L50,20 Z" fill="#B87333"/>
          <circle cx="50" cy="46" r="8" fill="#0A2E1A" stroke="#B87333" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen px-4 mx-auto max-w-7xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Copper accent line */}
          <motion.div 
            className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-[#B87333] to-[#DAA520]"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          ></motion.div>
          
          {/* Main heading with mechanical styling */}
          <div className="relative">
            <motion.h1 
              className="text-5xl font-bold tracking-wider md:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="relative inline-block mr-4 text-white">
                {heroSectionCopy.heading1}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#B87333] to-[#DAA520]"></span>
              </span>
              <span className="relative inline-block text-[#B87333]">
                {heroSectionCopy.heading2}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAA520] to-[#B87333]"></span>
              </span>
            </motion.h1>
            
            {/* Gear corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 -translate-x-8 -translate-y-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,8V4H8" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2" stroke="#B87333" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 translate-x-8 translate-y-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,16V20H16" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2" stroke="#B87333" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
          
          {/* Tagline */}
          <motion.p 
            className="mt-4 text-xl font-medium text-[#DAA520]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {heroSectionCopy.tagline}
          </motion.p>
          
          {/* Description */}
          <motion.p 
            className="max-w-2xl mx-auto mt-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {heroSectionCopy.description}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="#contact">
              <button className="relative px-8 py-3 overflow-hidden text-white transition-all duration-300 border-2 rounded-md group border-[#B87333] hover:bg-[#B87333]/20">
                <span className="relative z-10">{heroSectionCopy.cta}</span>
                <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-500 bg-gradient-to-r from-[#B87333]/40 to-[#DAA520]/40 group-hover:w-full"></span>
                {/* Gear corner accents */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#DAA520]"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#DAA520]"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#DAA520]"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#DAA520]"></span>
              </button>
            </Link>
            <Link href="#process">
              <button className="relative px-8 py-3 overflow-hidden text-[#B87333] transition-all duration-300 border-2 rounded-md group border-[#B87333]/50 hover:border-[#B87333]">
                <span className="relative z-10">{heroSectionCopy.exploreCta}</span>
                <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#DAA520]"></span>
                <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-[#DAA520]"></span>
                <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-[#DAA520]"></span>
                <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#DAA520]"></span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm text-gray-400">{heroSectionCopy.scrollText}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#B87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
