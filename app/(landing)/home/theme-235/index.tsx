"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "💻", title: "Live Classes", desc: "Interactive live sessions with expert instructors." },
  { icon: "📚", title: "Course Library", desc: "Hundreds of courses in various fields." },
  { icon: "📝", title: "Quizzes & Assignments", desc: "Practice and test your knowledge." },
  { icon: "🎓", title: "Certification", desc: "Earn certificates to boost your career." },
];

const courses = [
  { name: "Web Development", level: "Beginner", image: "🌐" },
  { name: "Data Science", level: "Intermediate", image: "📊" },
  { name: "UI/UX Design", level: "All Levels", image: "🎨" },
  { name: "Digital Marketing", level: "Beginner", image: "📈" },
];

const testimonials = [
  { name: "Ayu Pratama", role: "Mahasiswa", content: "Belajar di EduTech sangat menyenangkan dan mudah dipahami!", rating: 5 },
  { name: "Budi Santoso", role: "Karyawan", content: "Materi kursusnya up-to-date dan instruktur sangat membantu.", rating: 5 },
  { name: "Citra Lestari", role: "Freelancer", content: "Sertifikatnya sangat membantu karir saya di dunia digital.", rating: 5 },
];

const Theme235: React.FC = () => {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % courses.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev + 10) % 110);
    }, 800);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white text-gray-800 overflow-hidden relative font-sans">
      {/* EduTech Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Dots Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2" fill="#38bdf8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Floating Learning Elements */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 6}px`,
              height: `${Math.random() * 10 + 6}px`,
              backgroundColor: `hsl(${Math.random() * 40 + 180}, 80%, 80%)`,
              opacity: 0.2 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
        {/* Accent Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30" style={{ animationDelay: '1.5s' }} />
        {/* Book & Cap Icons */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">📚</div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-xl animate-pulse" style={{ animationDelay: '1s' }}>🎓</div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              📚
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              EDUTECH
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#courses" className="hover:text-blue-600 transition-colors">Kursus</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimoni</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-6 py-2 rounded-lg">
            Daftar Sekarang
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Belajar
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-pulse">Lebih Mudah</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Platform edukasi digital dengan ratusan kursus, kelas interaktif, dan sertifikat resmi. Mulai perjalanan belajarmu sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Mulai Belajar
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-lg">
                Lihat Kursus
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-lg animate-pulse border-2 border-blue-200/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">💻</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-green-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            {/* Floating Learning Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">📚</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>🎓</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>📝</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Fitur <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Unggulan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Showcase */}
      <section id="courses" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pilihan <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Kursus</span>
          </h2>
          <div className="relative h-96 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{courses[currentCourse].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-blue-800">{courses[currentCourse].name}</h3>
                <p className="text-green-600 text-lg mb-2 font-bold">{courses[currentCourse].level}</p>
                <div className="text-gray-500 font-medium text-xl">Kursus Populer</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {courses.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentCourse(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentCourse ? 'bg-blue-400' : 'bg-blue-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Progress */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Progress <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Belajar</span>
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30">
            <div className="text-6xl font-bold text-blue-400 mb-4">
              📈
            </div>
            <div className="w-full h-6 bg-blue-100 rounded-full mb-4 overflow-hidden">
              <div
                className="h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-gray-600 text-xl">Progress belajar: <span className="font-bold text-blue-600">{progress}%</span></p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Apa Kata <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Mereka?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 hover:border-blue-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-blue-800">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
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
            Mulai <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Belajar</span> Hari Ini
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Daftar sekarang dan dapatkan akses ke ratusan kursus, kelas interaktif, dan sertifikat resmi dari EduTech.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Daftar Gratis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-blue-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center text-white font-bold">
              📚
            </div>
            <span className="text-xl font-bold">EDUTECH</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 EDUTECH. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition-colors">YouTube</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
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
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme235; 