"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "🔗", title: "Blockchain Technology", desc: "Secure, transparent, and decentralized solutions." },
  { icon: "💎", title: "NFT Marketplace", desc: "Trade unique digital assets and collectibles." },
  { icon: "⚡", title: "Fast Transactions", desc: "Lightning-fast crypto transactions worldwide." },
  { icon: "🛡️", title: "Security First", desc: "Military-grade security for your digital assets." },
];

const cryptoAssets = [
  { name: "Bitcoin", symbol: "BTC", price: "$45,230", change: "+2.4%", image: "₿" },
  { name: "Ethereum", symbol: "ETH", price: "$3,240", change: "+1.8%", image: "Ξ" },
  { name: "Cardano", symbol: "ADA", price: "$0.85", change: "+5.2%", image: "₳" },
];

const testimonials = [
  { name: "Alex Chen", role: "Crypto Trader", content: "The platform is incredibly fast and secure. Best trading experience I've had!", rating: 5 },
  { name: "Sarah Kim", role: "NFT Artist", content: "Perfect for showcasing and selling my digital art. The community is amazing.", rating: 5 },
  { name: "Mike Rodriguez", role: "Blockchain Developer", content: "The API is well-documented and the support team is very helpful.", rating: 5 },
];

const Theme229: React.FC = () => {
  const [currentAsset, setCurrentAsset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [price, setPrice] = useState(45230);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentAsset((prev) => (prev + 1) % cryptoAssets.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const priceInterval = setInterval(() => {
      setPrice((prev) => prev + Math.floor(Math.random() * 100 - 50));
    }, 3000);
    return () => clearInterval(priceInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative font-mono">
      {/* Animated Blockchain Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blockchain Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="blockchain-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="none" stroke="#f97316" strokeWidth="0.3" />
              <circle cx="4" cy="4" r="1" fill="#06b6d4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blockchain-grid)" />
        </svg>
        {/* Floating Crypto Elements */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 100%, 60%)`,
              opacity: 0.4 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
        {/* Data Stream Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        {/* Blockchain Nodes */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-orange-500 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-cyan-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              C
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">
              CRYPTOLINK
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
            <a href="#assets" className="hover:text-orange-400 transition-colors">Assets</a>
            <a href="#testimonials" className="hover:text-orange-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white font-bold px-6 py-2 rounded-lg">
            Start Trading
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              FUTURE OF
              <span className="block bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">FINANCE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience the next generation of digital finance. Trade cryptocurrencies, NFTs, and blockchain assets with lightning-fast speed and unmatched security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-500/20 font-bold px-8 py-4 rounded-lg text-lg">
                View Markets
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 rounded-lg animate-pulse border-2 border-orange-400/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">₿</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-cyan-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-full animate-pulse"></div>
            {/* Floating Crypto Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🔗</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>💎</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>⚡</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Platform <span className="bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-orange-200">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Assets Showcase */}
      <section id="assets" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Popular <span className="bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">Assets</span>
          </h2>
          <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{cryptoAssets[currentAsset].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-orange-200">{cryptoAssets[currentAsset].name}</h3>
                <p className="text-cyan-400 text-lg mb-2 font-bold">{cryptoAssets[currentAsset].symbol}</p>
                <div className="text-2xl font-bold text-white mb-2">{cryptoAssets[currentAsset].price}</div>
                <div className="text-green-400 font-bold text-xl">{cryptoAssets[currentAsset].change}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {cryptoAssets.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentAsset(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentAsset ? 'bg-orange-400' : 'bg-orange-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Price Ticker */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Live <span className="bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">Price</span>
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
            <div className="text-6xl font-bold text-orange-400 mb-4">
              ${price.toLocaleString()}
            </div>
            <p className="text-gray-300 text-xl">Bitcoin Price (USD)</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Trader <span className="bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-orange-200">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your crypto journey today with the most advanced trading platform in the world.
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Create Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-orange-400/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-xl font-bold">CRYPTOLINK</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 CRYPTOLINK. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Discord</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Telegram</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme229; 