import { testimonialsSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = testimonialsSectionCopy.testimonials;
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
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
    <section id="testimonials" className="relative py-20 bg-[#0A2E1A] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-growth" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0,100 Q50,70 100,100 T200,100" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M0,50 Q50,20 100,50 T200,50" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M0,150 Q50,120 100,150 T200,150" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M100,0 Q70,50 100,100 T100,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M50,0 Q20,50 50,100 T50,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M150,0 Q120,50 150,100 T150,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <circle cx="0" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="0" cy="50" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="0" cy="150" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="100" cy="0" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="0" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="150" cy="0" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="100" cy="200" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="200" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="150" cy="200" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="50" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="150" r="3" fill="#DAA520" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-growth)" />
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
            {testimonialsSectionCopy.heading}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark decoration */}
          <div className="absolute -top-10 -left-4 text-[120px] leading-none text-[#B87333] opacity-10 z-0">
            "
          </div>
          
          {/* Testimonial cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className={`relative p-8 transition-all duration-700 transform ${
                  activeIndex === index 
                    ? 'opacity-100 scale-100 z-20' 
                    : 'opacity-0 scale-95 absolute inset-0 z-10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 20,
                  transition: { duration: 0.6 }
                }}
              >
                <div className="relative p-8 border border-[#B87333]/30 rounded-lg bg-[#0F3A22]">
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
                  <div className="absolute bottom-0 left-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,24 L24,24 L24,18 L6,18 L6,0 L0,0 Z" fill="#B87333" opacity="0.8" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24,24 L0,24 L0,18 L18,18 L18,0 L24,0 Z" fill="#B87333" opacity="0.8" />
                    </svg>
                  </div>
                  
                  {/* Gear decoration */}
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50,20 L53,20 L55,30 L60,31 L65,22 L68,24 L65,34 L70,37 L77,30 L80,33 L73,40 L76,45 L86,42 L87,46 L77,49 L77,55 L87,58 L86,62 L76,59 L73,64 L80,71 L77,74 L70,67 L65,70 L68,80 L65,82 L60,73 L55,74 L53,84 L50,84 L48,74 L43,73 L38,82 L35,80 L38,70 L33,67 L26,74 L23,71 L30,64 L27,59 L17,62 L16,58 L26,55 L26,49 L16,46 L17,42 L27,45 L30,40 L23,33 L26,30 L33,37 L38,34 L35,24 L38,22 L43,31 L48,30 L50,20 Z" fill="#B87333"/>
                      <circle cx="50" cy="50" r="10" fill="#0F3A22" stroke="#B87333" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  {/* Mechanical scan line effect */}
                  <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-full h-px bg-[#DAA520]" 
                          style={{ marginTop: `${i * 10}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote content */}
                  <div className="relative z-10">
                    <p className="mb-8 text-lg italic text-gray-300">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <div className="relative flex-shrink-0 w-12 h-12 mr-4 overflow-hidden border-2 rounded-full border-[#B87333]">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#DAA520]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#B87333]' : 'bg-[#B87333]/30'
                }`}
              >
                {activeIndex === index && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-[#DAA520]/50"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 z-30 flex items-center justify-between -translate-y-1/2">
            <button 
              onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
              className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full -ml-5 border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
              className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full -mr-5 border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
