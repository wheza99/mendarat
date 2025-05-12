import { processSectionCopy } from '../copy';
import { motion } from 'framer-motion';

export default function Process() {
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
    <section id="process" className="relative py-20 bg-[#0F3A22] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="growth-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0,100 C50,80 50,120 100,100 S150,80 200,100" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M0,50 C50,30 50,70 100,50 S150,30 200,50" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M0,150 C50,130 50,170 100,150 S150,130 200,150" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M100,0 C80,50 120,50 100,100 S80,150 100,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M50,0 C30,50 70,50 50,100 S30,150 50,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M150,0 C130,50 170,50 150,100 S130,150 150,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <circle cx="100" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="50" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="150" cy="50" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="150" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="150" cy="150" r="3" fill="#DAA520" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#growth-circuit)" />
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
            {processSectionCopy.heading}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            {processSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B87333] to-[#DAA520] hidden md:block"></div>
          
          <motion.div 
            className="space-y-16 md:space-y-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {processSectionCopy.steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16`}
                variants={itemVariants}
              >
                {/* Step number with gear decoration */}
                <div className="relative flex-shrink-0 md:w-1/2">
                  <div className={`relative z-20 flex items-center justify-center ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <div className="relative flex items-center justify-center w-20 h-20">
                      {/* Gear background */}
                      <svg className="absolute w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50,20 L53,20 L55,30 L60,31 L65,22 L68,24 L65,34 L70,37 L77,30 L80,33 L73,40 L76,45 L86,42 L87,46 L77,49 L77,55 L87,58 L86,62 L76,59 L73,64 L80,71 L77,74 L70,67 L65,70 L68,80 L65,82 L60,73 L55,74 L53,84 L50,84 L48,74 L43,73 L38,82 L35,80 L38,70 L33,67 L26,74 L23,71 L30,64 L27,59 L17,62 L16,58 L26,55 L26,49 L16,46 L17,42 L27,45 L30,40 L23,33 L26,30 L33,37 L38,34 L35,24 L38,22 L43,31 L48,30 L50,20 Z" fill="#0A2E1A" stroke="#B87333" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="15" fill="#0A2E1A" stroke="#B87333" strokeWidth="2"/>
                      </svg>
                      
                      {/* Step number */}
                      <span className="relative z-10 text-2xl font-bold text-[#DAA520]">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Connecting element for desktop */}
                  <div className={`absolute top-1/2 hidden w-8 h-px -translate-y-1/2 bg-[#B87333] md:block ${
                    index % 2 === 0 ? 'right-0 translate-x-4' : 'left-0 -translate-x-4'
                  }`}></div>
                </div>
                
                {/* Step content */}
                <div className="relative flex-shrink-0 md:w-1/2">
                  <div className={`relative p-6 border border-[#B87333]/30 rounded-lg bg-[#0A2E1A] ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    {/* Gear decoration */}
                    <div className={`absolute -z-10 w-24 h-24 opacity-10 ${
                      index % 2 === 0 ? '-bottom-12 -right-12' : '-bottom-12 -left-12'
                    }`}>
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50,20 L53,20 L55,30 L60,31 L65,22 L68,24 L65,34 L70,37 L77,30 L80,33 L73,40 L76,45 L86,42 L87,46 L77,49 L77,55 L87,58 L86,62 L76,59 L73,64 L80,71 L77,74 L70,67 L65,70 L68,80 L65,82 L60,73 L55,74 L53,84 L50,84 L48,74 L43,73 L38,82 L35,80 L38,70 L33,67 L26,74 L23,71 L30,64 L27,59 L17,62 L16,58 L26,55 L26,49 L16,46 L17,42 L27,45 L30,40 L23,33 L26,30 L33,37 L38,34 L35,24 L38,22 L43,31 L48,30 L50,20 Z" fill="#B87333"/>
                        <circle cx="50" cy="50" r="10" fill="#0A2E1A" stroke="#B87333" strokeWidth="2"/>
                      </svg>
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold text-[#DAA520]">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                    
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
