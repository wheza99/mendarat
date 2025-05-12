"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Testimonials data
  const testimonials = [
    {
      quote: "The cosmic approach to our digital transformation was exactly what we needed. The team delivered a stellar experience that exceeded our expectations.",
      author: "Elara Vega",
      position: "CEO, Astral Inc.",
      image: "/images/testimonials/testimonial1.jpg"
    },
    {
      quote: "Working with this team was like discovering a new galaxy. Their attention to detail and innovative solutions helped our brand reach new dimensions.",
      author: "Leo Stellar",
      position: "Marketing Director, Nebula Systems",
      image: "/images/testimonials/testimonial2.jpg"
    },
    {
      quote: "The cosmic minimalism design philosophy perfectly captured our brand essence. Our customers have been orbiting our new platform with unprecedented engagement.",
      author: "Cassiopeia Moon",
      position: "Product Lead, Orbit Media",
      image: "/images/testimonials/testimonial3.jpg"
    },
    {
      quote: "From concept to launch, the journey was seamless. Their process is truly out of this world, delivering results that shine brighter than we imagined possible.",
      author: "Nova Richards",
      position: "Founder, Pulsar Tech",
      image: "/images/testimonials/testimonial4.jpg"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);
  
  // Handle manual navigation
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1F1147] to-[#1A0B2E]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-[300px] h-[300px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[30px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[60px] rounded-full border border-[#E5E4E2]"></div>
        </div>
        <div className="absolute right-0 bottom-0 w-[200px] h-[200px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[20px] rounded-full border border-[#E5E4E2]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Stellar Testimonials</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Discover what our clients say about their cosmic journey with us.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="transition-all duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 md:p-10 relative overflow-hidden">
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
                      <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                      <div className="absolute top-0 left-0 h-[1px] w-6 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
                    </div>
                    
                    {/* Constellation background */}
                    <div className="absolute inset-0 opacity-5">
                      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="20" y1="20" x2="80" y2="30" stroke="#E5E4E2" strokeWidth="0.5" />
                        <line x1="80" y1="30" x2="30" y2="70" stroke="#E5E4E2" strokeWidth="0.5" />
                        <line x1="30" y1="70" x2="70" y2="80" stroke="#E5E4E2" strokeWidth="0.5" />
                        <circle cx="20" cy="20" r="1" fill="#E5E4E2" />
                        <circle cx="80" cy="30" r="1" fill="#E5E4E2" />
                        <circle cx="30" cy="70" r="1" fill="#E5E4E2" />
                        <circle cx="70" cy="80" r="1" fill="#E5E4E2" />
                      </svg>
                    </div>
                    
                    {/* Quote icon */}
                    <div className="mb-6 text-[#9370DB]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
                        <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4.011c0-1.894.376-3.582 1.691-5.697zm14 0C19.094 4.771 21.217 4 24 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 20.925 10H24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4.011c0-1.894.376-3.582 1.691-5.697z" />
                      </svg>
                    </div>
                    
                    <p className="text-lg md:text-xl text-[#E5E4E2] mb-8 relative leading-relaxed">
                      {testimonial.quote}
                    </p>
                    
                    <div className="flex items-center">
                      {/* Placeholder for author image */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9370DB]/30 to-[#1A0B2E] flex items-center justify-center border border-[#E5E4E2]/20">
                        <div className="w-4 h-4 relative">
                          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]/30"></div>
                          <div className="absolute inset-[2px] rounded-full bg-[#9370DB]/20"></div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <h4 className="text-[#E5E4E2] font-medium">
                          {testimonial.author}
                        </h4>
                        <p className="text-[#E5E4E2]/50 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#9370DB] w-6"
                      : "bg-[#E5E4E2]/30 hover:bg-[#E5E4E2]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#E5E4E2]/20 flex items-center justify-center text-[#E5E4E2]/70 hover:text-[#E5E4E2] hover:border-[#E5E4E2]/40 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#E5E4E2]/20 flex items-center justify-center text-[#E5E4E2]/70 hover:text-[#E5E4E2] hover:border-[#E5E4E2]/40 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
