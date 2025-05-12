import { pricingSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
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
    <section id="pricing" className="relative py-20 bg-[#0F3A22] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="mechanical-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M25,0 L25,100" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M50,0 L50,100" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M75,0 L75,100" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M0,25 L100,25" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M0,50 L100,50" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <path d="M0,75 L100,75" fill="none" stroke="#B87333" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="2" fill="#DAA520" opacity="0.5" />
            <circle cx="25" cy="75" r="2" fill="#DAA520" opacity="0.5" />
            <circle cx="75" cy="25" r="2" fill="#DAA520" opacity="0.5" />
            <circle cx="75" cy="75" r="2" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="50" r="3" fill="#DAA520" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mechanical-grid)" />
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
            {pricingSectionCopy.heading}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            {pricingSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Pricing plans */}
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative overflow-hidden transition-all duration-500 transform border rounded-lg ${
                plan.recommended 
                  ? 'border-[#DAA520] bg-gradient-to-b from-[#0A2E1A] to-[#0F3A22] -translate-y-4 md:-translate-y-8 z-20' 
                  : 'border-[#B87333]/30 bg-[#0A2E1A] hover:-translate-y-2'
              }`}
              variants={itemVariants}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="relative w-32 h-32 overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8">
                      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 L32,0 L32,32" fill="#DAA520" />
                      </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-8 -rotate-45 translate-y-4 translate-x-2 bg-[#DAA520] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#0A2E1A]">RECOMMENDED</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Plan header */}
              <div className="p-6 text-center border-b border-[#B87333]/30">
                <h3 className={`text-2xl font-bold ${plan.recommended ? 'text-[#DAA520]' : 'text-[#B87333]'}`}>
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-300">{plan.description}</p>
              </div>
              
              {/* Plan features */}
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3">
                        <svg className={`w-5 h-5 ${plan.recommended ? 'text-[#DAA520]' : 'text-[#B87333]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Plan footer */}
              <div className="p-6 text-center">
                <Link href="#contact">
                  <button 
                    className={`relative w-full px-6 py-3 overflow-hidden transition-all duration-300 border rounded-md group ${
                      plan.recommended 
                        ? 'border-[#DAA520] text-[#DAA520] hover:text-white' 
                        : 'border-[#B87333] text-[#B87333] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{pricingSectionCopy.selectPlanButtonText}</span>
                    <span 
                      className={`absolute inset-0 z-0 w-0 h-full transition-all duration-300 group-hover:w-full ${
                        plan.recommended ? 'bg-[#DAA520]' : 'bg-[#B87333]'
                      }`}
                    ></span>
                    
                    {/* Mechanical corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M0,0 L8,0 L8,2 L2,2 L2,8 L0,8 Z" 
                          fill={plan.recommended ? '#DAA520' : '#B87333'} 
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-2 h-2">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M8,0 L0,0 L0,2 L6,2 L6,8 L8,8 Z" 
                          fill={plan.recommended ? '#DAA520' : '#B87333'} 
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-2 h-2">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M0,8 L8,8 L8,6 L2,6 L2,0 L0,0 Z" 
                          fill={plan.recommended ? '#DAA520' : '#B87333'} 
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-2 h-2">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M8,8 L0,8 L0,6 L6,6 L6,0 L8,0 Z" 
                          fill={plan.recommended ? '#DAA520' : '#B87333'} 
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
              
              {/* Gear decoration */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50,20 L53,20 L55,30 L60,31 L65,22 L68,24 L65,34 L70,37 L77,30 L80,33 L73,40 L76,45 L86,42 L87,46 L77,49 L77,55 L87,58 L86,62 L76,59 L73,64 L80,71 L77,74 L70,67 L65,70 L68,80 L65,82 L60,73 L55,74 L53,84 L50,84 L48,74 L43,73 L38,82 L35,80 L38,70 L33,67 L26,74 L23,71 L30,64 L27,59 L17,62 L16,58 L26,55 L26,49 L16,46 L17,42 L27,45 L30,40 L23,33 L26,30 L33,37 L38,34 L35,24 L38,22 L43,31 L48,30 L50,20 Z" fill={plan.recommended ? '#DAA520' : '#B87333'} opacity="0.3"/>
                  <circle cx="50" cy="50" r="10" fill="#0A2E1A" stroke={plan.recommended ? '#DAA520' : '#B87333'} strokeWidth="2" opacity="0.3"/>
                </svg>
              </div>
              
              {/* Mechanical scan line effect */}
              <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-full h-px ${plan.recommended ? 'bg-[#DAA520]' : 'bg-[#B87333]'}`}
                      style={{ marginTop: `${i * 15}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Custom plan CTA */}
        <motion.div 
          className="max-w-3xl p-8 mx-auto mt-16 text-center border border-[#B87333]/30 rounded-lg bg-[#0A2E1A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mb-4 text-lg text-gray-300">{pricingSectionCopy.customPlanText}</p>
          <Link href="#contact">
            <button className="relative px-8 py-3 overflow-hidden text-[#B87333] transition-all duration-300 border-2 rounded-md group border-[#B87333] hover:text-white">
              <span className="relative z-10">{pricingSectionCopy.contactLink}</span>
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
          
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B87333]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B87333]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B87333]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B87333]"></div>
        </motion.div>
      </div>
    </section>
  );
}
