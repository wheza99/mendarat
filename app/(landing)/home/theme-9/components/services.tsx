import { servicesSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
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
    <section id="services" className="relative py-20 bg-[#0F3A22] text-white">
      {/* Organic circuit pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="organic-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M20,20 C40,0 60,40 80,20 C100,0 120,40 140,20 C160,0 180,40 200,20" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M20,60 C40,40 60,80 80,60 C100,40 120,80 140,60 C160,40 180,80 200,60" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M20,100 C40,80 60,120 80,100 C100,80 120,120 140,100 C160,80 180,120 200,100" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M20,140 C40,120 60,160 80,140 C100,120 120,160 140,140 C160,120 180,160 200,140" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M20,180 C40,160 60,200 80,180 C100,160 120,200 140,180 C160,160 180,200 200,180" fill="none" stroke="#B87333" strokeWidth="1" />
            <circle cx="20" cy="20" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="80" cy="20" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="140" cy="20" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="20" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="20" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="80" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="140" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="20" cy="180" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="80" cy="180" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="140" cy="180" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="180" r="3" fill="#DAA520" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#organic-circuit)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
            <div className="w-12 h-px bg-[#B87333]"></div>
            <div className="w-3 h-3 mx-2 border-2 border-[#B87333] rounded-full"></div>
            <div className="w-12 h-px bg-[#B87333]"></div>
          </motion.div>
          
          <motion.h2 
            className="mb-6 text-4xl font-bold text-[#B87333]"
            variants={itemVariants}
          >
            {servicesSectionCopy.heading}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            {servicesSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden transition-transform duration-300 transform bg-[#0A2E1A] border border-[#B87333]/30 rounded-lg hover:-translate-y-2"
              variants={itemVariants}
            >
              {/* Service image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1A] to-transparent opacity-80"></div>
                
                {/* Mechanical frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L24,0 L24,6 L6,6 L6,24 L0,24 Z" fill="#B87333" opacity="0.8" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24,0 L0,0 L0,6 L18,6 L18,24 L24,24 Z" fill="#B87333" opacity="0.8" />
                  </svg>
                </div>
              </div>
              
              {/* Icon */}
              <div className="absolute top-36 left-6 p-3 bg-[#0A2E1A] border border-[#B87333] rounded-full">
                <svg className="w-6 h-6 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                </svg>
              </div>
              
              {/* Content */}
              <div className="p-6 pt-10">
                <h3 className="mb-3 text-xl font-bold text-[#DAA520]">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
                
                {/* Gear decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-5">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50,20 L53,20 L55,30 L60,31 L65,22 L68,24 L65,34 L70,37 L77,30 L80,33 L73,40 L76,45 L86,42 L87,46 L77,49 L77,55 L87,58 L86,62 L76,59 L73,64 L80,71 L77,74 L70,67 L65,70 L68,80 L65,82 L60,73 L55,74 L53,84 L50,84 L48,74 L43,73 L38,82 L35,80 L38,70 L33,67 L26,74 L23,71 L30,64 L27,59 L17,62 L16,58 L26,55 L26,49 L16,46 L17,42 L27,45 L30,40 L23,33 L26,30 L33,37 L38,34 L35,24 L38,22 L43,31 L48,30 L50,20 Z" fill="#B87333"/>
                    <circle cx="50" cy="50" r="10" fill="#0A2E1A" stroke="#B87333" strokeWidth="2"/>
                  </svg>
                </div>
                
                {/* Bottom corner brackets */}
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="#contact">
            <button className="relative px-8 py-3 overflow-hidden text-[#B87333] transition-all duration-300 border-2 rounded-md group border-[#B87333] hover:text-white">
              <span className="relative z-10">{servicesSectionCopy.buttonText}</span>
              <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-300 bg-[#B87333] group-hover:w-full"></span>
              
              {/* Mechanical corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,0 L8,0 L8,2 L2,2 L2,8 L0,8 Z" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8,0 L0,0 L0,2 L6,2 L6,8 L8,8 Z" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,8 L8,8 L8,6 L2,6 L2,0 L0,0 Z" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8,8 L0,8 L0,6 L6,6 L6,0 L8,0 Z" fill="#DAA520" />
                </svg>
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
