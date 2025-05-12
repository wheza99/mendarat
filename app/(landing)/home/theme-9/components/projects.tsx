import { projectsSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'ALL' 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-[#0A2E1A] text-white">
      {/* Biomechanical pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="gear-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50,20 L52,20 L54,28 L58,29 L62,22 L64,23 L61,31 L65,33 L70,28 L72,30 L67,35 L69,39 L77,37 L78,40 L70,42 L70,46 L78,48 L77,51 L69,49 L67,53 L72,58 L70,60 L65,55 L61,57 L64,65 L62,66 L58,59 L54,60 L52,68 L50,68 L48,60 L44,59 L40,66 L38,65 L41,57 L37,55 L32,60 L30,58 L35,53 L33,49 L25,51 L24,48 L32,46 L32,42 L24,40 L25,37 L33,39 L35,35 L30,30 L32,28 L37,33 L41,31 L38,23 L40,22 L44,29 L48,28 L50,20 Z" fill="#B87333" opacity="0.15"/>
            <circle cx="50" cy="46" r="8" fill="none" stroke="#B87333" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#gear-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mechanical divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-px bg-[#B87333]"></div>
            <div className="relative mx-2">
              <div className="w-4 h-4 border-2 border-[#B87333] rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 border-2 border-[#DAA520] rounded-full animate-ping opacity-30"></div>
            </div>
            <div className="w-10 h-px bg-[#B87333]"></div>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold text-[#B87333]">{projectsSectionCopy.heading}</h2>
          <p className="text-gray-300">{projectsSectionCopy.description}</p>
        </motion.div>
        
        {/* Category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 text-sm transition-all duration-300 border rounded-md ${
                activeCategory === category 
                  ? 'bg-[#B87333] text-white border-[#B87333]' 
                  : 'bg-transparent text-[#B87333] border-[#B87333]/50 hover:border-[#B87333]'
              }`}
            >
              {/* Mechanical corner accents for active category */}
              {activeCategory === category && (
                <>
                  <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#DAA520]"></span>
                  <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#DAA520]"></span>
                  <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#DAA520]"></span>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#DAA520]"></span>
                </>
              )}
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden group"
              variants={itemVariants}
            >
              {/* Project image */}
              <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                />
                
                {/* Overlay with mechanical pattern */}
                <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#0A2E1A] to-transparent opacity-70 group-hover:opacity-90"></div>
                
                {/* Mechanical scan line effect */}
                <div className="absolute inset-0 z-10 overflow-hidden opacity-0 group-hover:opacity-20">
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
              </div>
              
              {/* Project info */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                <div className="flex items-center mb-2">
                  <span className="px-3 py-1 text-xs font-medium text-[#0A2E1A] bg-[#B87333] rounded-md">
                    {project.category}
                  </span>
                  <div className="w-4 h-px mx-2 bg-[#DAA520]"></div>
                  <span className="text-xs text-[#DAA520]">{project.location}</span>
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-white">{project.title}</h3>
                
                <Link href="#">
                  <button className="relative px-4 py-2 overflow-hidden text-sm text-white transition-all duration-300 border rounded-md group/btn border-[#B87333] hover:bg-[#B87333]/20">
                    <span className="relative z-10 flex items-center">
                      {projectsSectionCopy.viewDetailsText}
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#DAA520]"></span>
                    <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-[#DAA520]"></span>
                    <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-[#DAA520]"></span>
                    <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#DAA520]"></span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View more button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="#">
            <button className="relative px-8 py-3 overflow-hidden text-[#B87333] transition-all duration-300 border-2 rounded-md group border-[#B87333] hover:text-white">
              <span className="relative z-10">{projectsSectionCopy.viewMoreText}</span>
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
