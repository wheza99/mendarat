"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  // Pricing plans data
  const plans = [
    {
      name: "Orbit",
      description: "Perfect for individuals and small projects exploring the digital cosmos.",
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        "Cosmic design consultation",
        "Responsive single-page website",
        "Basic SEO optimization",
        "1 revision round",
        "Email support",
      ],
      recommended: false,
      cta: "Launch Project"
    },
    {
      name: "Nebula",
      description: "Ideal for growing businesses ready to expand their digital universe.",
      monthlyPrice: 99,
      yearlyPrice: 950,
      features: [
        "Everything in Orbit, plus:",
        "Multi-page website (up to 5 pages)",
        "Custom illustrations",
        "Advanced SEO strategy",
        "3 revision rounds",
        "Priority email & chat support",
        "Monthly performance report"
      ],
      recommended: true,
      cta: "Expand Universe"
    },
    {
      name: "Galaxy",
      description: "Enterprise-grade solutions for organizations with vast digital ecosystems.",
      monthlyPrice: 249,
      yearlyPrice: 2390,
      features: [
        "Everything in Nebula, plus:",
        "Unlimited pages",
        "Custom animations & interactions",
        "E-commerce integration",
        "Unlimited revisions",
        "24/7 dedicated support",
        "Weekly performance reports",
        "Custom feature development"
      ],
      recommended: false,
      cta: "Dominate Space"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1A0B2E]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-[300px] h-[300px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[30px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[60px] rounded-full border border-[#E5E4E2]"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Cosmic Investment</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Choose the perfect plan to fuel your journey through the digital universe.
          </p>
        </motion.div>
        
        {/* Billing toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-full p-1 inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-[#9370DB] to-[#7B68EE] text-white"
                  : "text-[#E5E4E2]/70 hover:text-[#E5E4E2]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-[#9370DB] to-[#7B68EE] text-white"
                  : "text-[#E5E4E2]/70 hover:text-[#E5E4E2]"
              }`}
            >
              Yearly <span className="text-xs opacity-80">Save 20%</span>
            </button>
          </div>
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative ${plan.recommended ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#9370DB] to-[#7B68EE] text-white text-xs font-medium px-4 py-1 rounded-full">
                    Recommended
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-[#2A1B3D]/50 backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-500 relative ${
                plan.recommended 
                  ? 'border-[#9370DB]/50 shadow-lg shadow-[#9370DB]/10' 
                  : 'border-[#E5E4E2]/10 hover:border-[#E5E4E2]/30'
              }`}>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
                  <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-[1px] w-6 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                
                {/* Orbital decoration */}
                <div className="absolute -right-20 -top-20 w-40 h-40 opacity-10">
                  <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
                  <div className="absolute inset-[10px] rounded-full border border-[#E5E4E2]"></div>
                  <div className="absolute inset-[20px] rounded-full border border-[#E5E4E2]"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#E5E4E2] mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-[#E5E4E2]/70 text-sm mb-6 h-12">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E5E4E2] to-[#9370DB]">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-[#E5E4E2]/70 ml-2 mb-1">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    
                    <div className="h-[1px] w-12 bg-gradient-to-r from-[#9370DB] to-transparent my-6"></div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9370DB] mr-3 mt-1">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[#E5E4E2]/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full py-6 rounded-full ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#9370DB] to-[#7B68EE] hover:opacity-90 text-white'
                      : 'bg-transparent border border-[#E5E4E2]/30 hover:bg-[#E5E4E2]/10 text-[#E5E4E2]'
                  }`}>
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-[#2A1B3D]/30 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 relative overflow-hidden">
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
            
            <h3 className="text-xl font-semibold text-[#E5E4E2] mb-3">Need a Custom Universe?</h3>
            <p className="text-[#E5E4E2]/70 mb-6">
              For interstellar enterprises with unique requirements, we offer custom solutions tailored to your specific cosmic needs.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#E5E4E2]/30 text-[#E5E4E2] hover:bg-[#E5E4E2]/10 transition-all duration-300">
              <span>Contact Our Team</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
