import { statsSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Stats() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="stats" className="relative py-20 overflow-hidden bg-[#0A2E1A] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="3" fill="#B87333" opacity="0.5" />
            <circle cx="90" cy="10" r="3" fill="#B87333" opacity="0.5" />
            <circle cx="10" cy="90" r="3" fill="#B87333" opacity="0.5" />
            <circle cx="90" cy="90" r="3" fill="#B87333" opacity="0.5" />
            <path d="M10,50 L40,50 L40,10" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M90,50 L60,50 L60,90" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <circle cx="40" cy="10" r="2" fill="#B87333" opacity="0.5" />
            <circle cx="60" cy="90" r="2" fill="#B87333" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column: Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div 
              className="w-16 h-1 mb-6 bg-gradient-to-r from-[#B87333] to-[#DAA520]"
              variants={itemVariants}
            ></motion.div>
            
            <motion.span 
              className="mb-2 text-sm tracking-wider text-[#B87333] uppercase"
              variants={itemVariants}
            >
              {statsSectionCopy.subtitle}
            </motion.span>
            
            <motion.h2 
              className="text-4xl font-bold leading-tight md:text-5xl"
              variants={itemVariants}
            >
              <span className="block text-white">{statsSectionCopy.heading1}</span>
              <span className="block text-[#B87333]">{statsSectionCopy.heading2}</span>
            </motion.h2>
            
            <motion.p 
              className="mt-6 text-gray-300"
              variants={itemVariants}
            >
              {statsSectionCopy.description}
            </motion.p>
            
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <Link href="#services">
                <button className="relative px-6 py-3 overflow-hidden text-[#B87333] transition-all duration-300 border rounded-md group border-[#B87333] hover:text-white">
                  <span className="relative z-10">{statsSectionCopy.buttonText}</span>
                  <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-300 bg-[#B87333] group-hover:w-full"></span>
                  
                  {/* Gear corner accents */}
                  <span className="absolute top-0 left-0 w-1.5 h-1.5">
                    <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,0 L6,0 L6,6" stroke="#DAA520" strokeWidth="1" />
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 w-1.5 h-1.5">
                    <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6,0 L0,0 L0,6" stroke="#DAA520" strokeWidth="1" />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-1.5 h-1.5">
                    <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,6 L6,6 L6,0" stroke="#DAA520" strokeWidth="1" />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5">
                    <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6,6 L0,6 L0,0" stroke="#DAA520" strokeWidth="1" />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right column: Image and Stats */}
          <div className="relative">
            {/* Image with mechanical frame */}
            <motion.div 
              className="relative mb-12 overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  src={statsSectionCopy.image} 
                  alt={statsSectionCopy.imageAlt} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1A] to-transparent opacity-60"></div>
              </div>
              
              {/* Mechanical frame corners */}
              <div className="absolute top-0 left-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,0 L32,0 L32,8 L8,8 L8,32 L0,32 Z" fill="#B87333" opacity="0.8" />
                  <circle cx="16" cy="16" r="2" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,0 L0,0 L0,8 L24,8 L24,32 L32,32 Z" fill="#B87333" opacity="0.8" />
                  <circle cx="16" cy="16" r="2" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,32 L32,32 L32,24 L8,24 L8,0 L0,0 Z" fill="#B87333" opacity="0.8" />
                  <circle cx="16" cy="16" r="2" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,32 L0,32 L0,24 L24,24 L24,0 L32,0 Z" fill="#B87333" opacity="0.8" />
                  <circle cx="16" cy="16" r="2" fill="#DAA520" />
                </svg>
              </div>
            </motion.div>
            
            {/* Stats grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="relative p-6 overflow-hidden bg-[#0F3A22] rounded-lg border border-[#B87333]/30"
                  variants={itemVariants}
                >
                  {/* Gear decoration */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 opacity-10">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24,10 L26,10 L28,16 L32,17 L36,12 L38,14 L34,19 L36,22 L42,20 L43,23 L37,25 L37,29 L43,31 L42,34 L36,32 L34,35 L38,40 L36,42 L32,37 L28,38 L26,44 L24,44 L22,38 L18,37 L14,42 L12,40 L16,35 L14,32 L8,34 L7,31 L13,29 L13,25 L7,23 L8,20 L14,22 L16,19 L12,14 L14,12 L18,17 L22,16 L24,10 Z" fill="#B87333"/>
                      <circle cx="24" cy="27" r="5" fill="#0F3A22" stroke="#B87333" strokeWidth="1"/>
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-[#DAA520]">{stat.value}</span>
                      <span className="ml-1 text-xl text-[#B87333]">{stat.suffix}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
                  </div>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
