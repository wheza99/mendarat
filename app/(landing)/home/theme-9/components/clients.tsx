import { clientsSectionCopy } from '../copy';
import { motion } from 'framer-motion';

export default function Clients() {
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
    <section id="clients" className="relative py-16 bg-[#0A2E1A] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="gear-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30,10 L32,10 L33,15 L36,16 L39,12 L41,13 L38,17 L40,20 L45,18 L46,20 L41,22 L41,25 L46,27 L45,29 L40,27 L38,30 L41,34 L39,35 L36,31 L33,32 L32,37 L30,37 L29,32 L26,31 L23,35 L21,34 L24,30 L22,27 L17,29 L16,27 L21,25 L21,22 L16,20 L17,18 L22,20 L24,17 L21,13 L23,12 L26,16 L29,15 L30,10 Z" fill="#B87333" opacity="0.15"/>
            <circle cx="30" cy="23" r="4" fill="none" stroke="#B87333" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#gear-grid)" />
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
          
          <h2 className="mb-6 text-4xl font-bold text-[#B87333]">{clientsSectionCopy.heading}</h2>
          <p className="text-gray-300">{clientsSectionCopy.description}</p>
        </motion.div>
        
        {/* Clients grid */}
        <motion.div 
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div 
              key={index}
              className="relative flex items-center justify-center p-6 transition-transform duration-300 transform bg-[#0F3A22] border border-[#B87333]/30 rounded-lg hover:-translate-y-2"
              variants={itemVariants}
            >
              {/* Gear decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24,10 L26,10 L28,16 L32,17 L36,12 L38,14 L34,19 L36,22 L42,20 L43,23 L37,25 L37,29 L43,31 L42,34 L36,32 L34,35 L38,40 L36,42 L32,37 L28,38 L26,44 L24,44 L22,38 L18,37 L14,42 L12,40 L16,35 L14,32 L8,34 L7,31 L13,29 L13,25 L7,23 L8,20 L14,22 L16,19 L12,14 L14,12 L18,17 L22,16 L24,10 Z" fill="#B87333"/>
                </svg>
              </div>
              
              {/* Client logo */}
              <div className="relative z-10 flex items-center justify-center h-12">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full transition-all duration-300 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                />
              </div>
              
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
              
              {/* Mechanical scan line effect */}
              <div className="absolute inset-0 z-0 overflow-hidden opacity-0 hover:opacity-20">
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-full h-px bg-[#DAA520]" 
                      style={{ marginTop: `${i * 8}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
