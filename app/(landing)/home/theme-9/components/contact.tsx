import { contactSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
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
    <section id="contact" className="relative py-20 bg-[#0A2E1A] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
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
            {contactSectionCopy.heading}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            {contactSectionCopy.description}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact form */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className="relative p-8 border border-[#B87333]/30 rounded-lg bg-[#0F3A22]">
              {/* Mechanical frame corners */}
              <div className="absolute top-0 left-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,0 L32,0 L32,8 L8,8 L8,32 L0,32 Z" fill="#B87333" opacity="0.8" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,0 L0,0 L0,8 L24,8 L24,32 L32,32 Z" fill="#B87333" opacity="0.8" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,32 L32,32 L32,24 L8,24 L8,0 L0,0 Z" fill="#B87333" opacity="0.8" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,32 L0,32 L0,24 L24,24 L24,0 L32,0 Z" fill="#B87333" opacity="0.8" />
                </svg>
              </div>
              
              {/* Gear decoration */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50,20 L53,20 L55,30 L60,31 L65,22 L68,24 L65,34 L70,37 L77,30 L80,33 L73,40 L76,45 L86,42 L87,46 L77,49 L77,55 L87,58 L86,62 L76,59 L73,64 L80,71 L77,74 L70,67 L65,70 L68,80 L65,82 L60,73 L55,74 L53,84 L50,84 L48,74 L43,73 L38,82 L35,80 L38,70 L33,67 L26,74 L23,71 L30,64 L27,59 L17,62 L16,58 L26,55 L26,49 L16,46 L17,42 L27,45 L30,40 L23,33 L26,30 L33,37 L38,34 L35,24 L38,22 L43,31 L48,30 L50,20 Z" fill="#B87333"/>
                  <circle cx="50" cy="50" r="10" fill="#0F3A22" stroke="#B87333" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Form */}
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-300">Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name" 
                        placeholder={contactSectionCopy.formPlaceholders.name}
                        className="w-full px-4 py-3 bg-transparent border rounded-md border-[#B87333]/50 focus:border-[#B87333] focus:outline-none focus:ring-1 focus:ring-[#B87333] text-white placeholder-gray-500"
                      />
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#DAA520]"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#DAA520]"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#DAA520]"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#DAA520]"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-300">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        placeholder={contactSectionCopy.formPlaceholders.email}
                        className="w-full px-4 py-3 bg-transparent border rounded-md border-[#B87333]/50 focus:border-[#B87333] focus:outline-none focus:ring-1 focus:ring-[#B87333] text-white placeholder-gray-500"
                      />
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#DAA520]"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#DAA520]"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#DAA520]"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#DAA520]"></div>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-300">Phone</label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder={contactSectionCopy.formPlaceholders.phone}
                      className="w-full px-4 py-3 bg-transparent border rounded-md border-[#B87333]/50 focus:border-[#B87333] focus:outline-none focus:ring-1 focus:ring-[#B87333] text-white placeholder-gray-500"
                    />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#DAA520]"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#DAA520]"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#DAA520]"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#DAA520]"></div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-300">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder={contactSectionCopy.formPlaceholders.message}
                      className="w-full px-4 py-3 bg-transparent border rounded-md border-[#B87333]/50 focus:border-[#B87333] focus:outline-none focus:ring-1 focus:ring-[#B87333] text-white placeholder-gray-500"
                    ></textarea>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#DAA520]"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#DAA520]"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#DAA520]"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#DAA520]"></div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <button 
                    type="submit"
                    className="relative px-8 py-3 overflow-hidden text-white transition-all duration-300 rounded-md group bg-gradient-to-r from-[#B87333] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B87333]"
                  >
                    <span className="relative z-10">{contactSectionCopy.formPlaceholders.submitButton}</span>
                    
                    {/* Mechanical corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact info */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {contactSectionCopy.locations.map((location, index) => (
              <motion.div 
                key={index}
                className="relative p-6 border border-[#B87333]/30 rounded-lg bg-[#0F3A22]"
                variants={itemVariants}
              >
                {/* Location header */}
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-4 border rounded-full border-[#B87333]">
                    <svg className="w-6 h-6 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#DAA520]">{location.city}</h3>
                </div>
                
                {/* Location details */}
                <div className="pl-12 space-y-3 text-gray-300">
                  <p>{location.address}</p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {location.phone}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {location.email}
                  </p>
                </div>
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
                
                {/* Gear decoration */}
                <div className="absolute -bottom-8 -right-8 w-16 h-16 opacity-10">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32,12 L34,12 L35,18 L38,19 L42,14 L44,15 L41,21 L44,23 L49,19 L51,21 L46,25 L47,29 L54,27 L55,30 L48,32 L48,35 L55,37 L54,40 L47,38 L46,42 L51,46 L49,48 L44,44 L41,46 L44,52 L42,53 L38,48 L35,49 L34,55 L32,55 L31,49 L28,48 L24,53 L22,52 L25,46 L22,44 L17,48 L15,46 L20,42 L19,38 L12,40 L11,37 L18,35 L18,32 L11,30 L12,27 L19,29 L20,25 L15,21 L17,19 L22,23 L25,21 L22,15 L24,14 L28,19 L31,18 L32,12 Z" fill="#B87333"/>
                    <circle cx="32" cy="32" r="6" fill="#0F3A22" stroke="#B87333" strokeWidth="1.5"/>
                  </svg>
                </div>
              </motion.div>
            ))}
            
            {/* Social links */}
            <motion.div 
              className="relative p-6 border border-[#B87333]/30 rounded-lg bg-[#0F3A22]"
              variants={itemVariants}
            >
              <h3 className="mb-4 text-xl font-bold text-[#DAA520]">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#">
                  <button className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                </Link>
                <Link href="#">
                  <button className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </Link>
                <Link href="#">
                  <button className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
                <Link href="#">
                  <button className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </Link>
              </div>
              
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
