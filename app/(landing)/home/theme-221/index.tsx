"use client";

import React fromreact;
import { Button } from@/components/ui/button";
import { Badge } from @/components/ui/badge";

const gameCategories = [
  { icon: "🎮", title: "VR Gaming", description: Immersive virtual reality experience dengan headset canggih},
  { icon: "🏆, title: "Esports", description:Kompetisigaming profesional dengan hadiah jutaan rupiah},
  { icon: "🎯", title: "Battle Royale", description: "Survival game dengan 100 pemain dalam arena virtual" },
  [object Object] icon: "⚡", title: "Racing VR", description: "Balapan virtual dengan sensasi nyata di sirkuit futuristik" },
];

const tournaments = [
  { name: "Cyber Championship 2024, prize: "Rp 500 Juta", date: 15-17gustus 224game: "CyberStrike VR" },
  { name: "Virtual Racing League", prize: "Rp 30date:5tember 224 game: "SpeedForce VR" },[object Object] name: "Battle Royale Masters", prize: "Rp 750 Juta", date:20-22tember2024,game:Survival VR" },
];

const testimonials =[object Object]  name: "Alex Chen,    avatar:🎮",
    role: "Pro Gamer",
    content: VR gaming di sini luar biasa! Grafiknya nyata, kontrol responsif, dan komunitasnya sangat supportive. Pengalaman gaming terbaik yang pernah saya rasakan!",
  },
  [object Object]  name: "Sarah Wijaya,    avatar:🏆",
    role:Esports Champion",
    content: "Turnamen VR-nya seru banget! Hadiah besar, sistem fair play, dan kompetisi yang menantang. Sudah 3un jadi juara bertahan!",
  },
  {
    name: "Rizky Gaming",
    avatar: ⚡  role: VR Streamer",
    content:Equipment VR-nya top notch! Headset comfortable, tracking akurat, dan game library lengkap. Perfect untuk content creator!",
  },
];

const Theme221: React.FC = () => [object Object] return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black relative overflow-hidden text-white>     {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20 viewBox=000900="none>
          <defs>
            <pattern id="grid" width="40" height="40patternUnits=userSpaceOnUse>             <path d=M 40 0L 0 00fill=none stroke="#00fff" strokeWidth="1" opacity="00.3 />
            </pattern>
          </defs>
          <rect width=10height=100%" fill="url(#grid)/>
        </svg>
        
        {/* Floating Digital Elements */}
        <svg className="absolute top-20 left-10 w-32h-32nimate-pulseviewBox=0 06464="none">
          <circle cx=32y="32 r=16ill="#00fff fillOpacity=00.3
          <circle cx=32cy=32 r=8ill="#ff00ff fillOpacity=00.5
          <circle cx=32cy=32 r=4ill="#ffff00 fillOpacity="0.7/>
        </svg>
        
        <svg className="absolute top-40right-20 w-24-24imate-bounceviewBox=0 04848="none>
          <rect x="8 y= width="32 height="32rx=4ill="#ff00ff fillOpacity=00.4/>
          <rect x="12 y="12" width="24 height="24 rx=2ill="#00fff fillOpacity="0.6/>
        </svg>
        
        {/* VR Headset Animation */}
        <svg className=absolute left-1/4 top-1/2 w-40 h-32animate-float-slowviewBox=0 08064="none">
          <ellipse cx="40cy="32="32 ry=20ill="#ff00ff fillOpacity=00.3 />
          <ellipse cx="40cy="32="24 ry=12ill="#00fff fillOpacity=00.5/>
          <rect x="32 y="20" width="16 height="24rx=8ill="#ffff00 fillOpacity=00.4
          <circle cx=36cy=28 r=2fill="#ff0ff" />
          <circle cx=44cy=28=2fill="#0fff/>
        </svg>
        
        {/* Digital Rain Effect */}
        <div className="absolute inset0overflow-hidden>      [object Object][...Array(20].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-40 text-xs animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96
            </div>
          ))}
        </div>
        
    [object Object]/* Neon Lines */}
        <svg className=absolute bottom-0left-0 w-full h-32 viewBox="0040128="none>
          <path d="M064 L360,32L720,64 L1080,3214404 stroke="#00fff" strokeWidth="2" fill=none" opacity=00.6/>
          <path d="M096 L360,64L720,96 L1080,641440,96 stroke="#ff00ff" strokeWidth="2" fill=none" opacity="0.4/>
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10    <div className=container mx-auto px-4 flex items-center justify-between">
          <div className=flexitems-center space-x-3>
            <div className="w-12-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-50nded-xl flex items-center justify-center border-2border-cyan-40>             <span className="text-2xl">🎮</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CyberVR Arena
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8           <a href="#beranda className="text-cyan-300over:text-pink-300emibold transition-colors">Beranda</a>
            <a href=#games className="text-cyan-300over:text-pink-300emibold transition-colors">Games</a>
            <a href="#tournaments className="text-cyan-300over:text-pink-300emibold transition-colors>Tournaments</a>
            <a href="#testimonials className="text-cyan-300over:text-pink-300emibold transition-colors">Testimonials</a>
          </nav>
          <Button className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500over:from-cyan-500 hover:to-pink-600 text-white border-0ont-bold shadow-lg">
            Join Arena
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className=relative z-10 pb-24t-center">
        <div className=container mx-auto px-4>
          <Badge className="bg-cyan-500xt-cyan-300border-cyan-400/30 mb-4 font-bold text-lg">
            🎮 Virtual Reality Gaming
          </Badge>
          <h1 className=text-5xl md:text-7-extrabold leading-tight mb-6gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-xl">
            CyberVR Arena
          </h1>
          <p className=text-xl md:text-2 text-cyan-100 max-w-2xl mx-auto mb-8 font-medium>
            Masuk ke dunia virtual reality gaming terdepan! Nikmati pengalaman immersive, kompetisi esports profesional, dan komunitas gaming futuristik.
          </p>
          <div className=flex flex-col sm:flex-row gap-4 justify-center">
            <Button size=lgsName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500over:from-cyan-500 hover:to-pink-60text-white px-8 py-4t-lg border-0ont-bold shadow-lg">
              Start Gaming
            </Button>
            <Button size="lg variant="outline" className="border-cyan-400ext-cyan-200 hover:bg-cyan-400/10 px-8 py-4 text-lg font-bold">
              Join Tournament
            </Button>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section id="games" className=relative z-10 py-16gradient-to-b from-gray-950/80 to-black/90">
        <div className=container mx-auto px-4     <h2 className=text-3xl md:text-4ont-bold mb-8 text-cyan-300 text-center">Game Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8
         [object Object]gameCategories.map((game, i) => (
              <div key={i} className="bg-gray-900/80unded-2 p-6 flex flex-col items-center border border-cyan-400/20ow-lg hover:border-pink-400/40 transition-all duration-300>
                <div className="text-5b-4nimate-bounce-slow>{game.icon}</div>
                <div className=text-xl font-bold text-pink-300 mb-1>{game.title}</div>
                <div className="text-cyan-200medium text-center text-sm">{game.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section id="tournaments" className=relative z-10 py-16    <div className=container mx-auto px-4     <h2 className=text-3xl md:text-4ont-bold mb-8xt-purple-30t-center">Upcoming Tournaments</h2>
          <div className=grid md:grid-cols-3 gap-8
            {tournaments.map((tournament, i) => (
              <div key={i} className=bg-gradient-to-br from-purple-50/30 to-cyan-500/20ded-2xl p-8 border border-purple-400/20ow-lg hover:border-pink-400/40 transition-all duration-300>
                <h3 className=text-xl font-bold text-pink-300 mb-2>{tournament.name}</h3
                <p className=text-cyan-200 mb-2>{tournament.date}</p>
                <p className="text-purple-200 mb-2>{tournament.game}</p>
                <div className="text-2l font-bold text-yellow-40>🏆 {tournament.prize}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className=relative z-10 py-16gradient-to-b from-black/80 to-gray-950/90">
        <div className=container mx-auto px-4     <h2 className=text-3xl md:text-4ont-bold mb-8 text-pink-300text-center">Gamer Testimonials</h2>
          <div className=grid md:grid-cols-3 gap-8
           [object Object]testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-900/80ded-2xl p-6border border-pink-400/20 shadow-lg flex flex-col items-center hover:border-cyan-400/40 transition-all duration-300>
                <div className="text-4b-4 animate-bounce">{testimonial.avatar}</div>
                <div className=text-lg font-bold text-cyan-200mb-1">{testimonial.name}</div>
                <div className="text-pink-30ext-sm mb-3">{testimonial.role}</div>
                <div className="text-cyan-100ext-center text-sm">"{testimonial.content}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=relative z-10 py-16t-center">
        <div className=container mx-auto px-4     <h2 className=text-3xl md:text-4ont-bold mb-4xt-cyan-30Ready to Enter the Virtual Arena?</h2>
          <p className=text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan gamers di CyberVR Arena. Dapatkan akses eksklusif ke game VR terbaru, tournament dengan hadiah besar, dan komunitas gaming futuristik!
          </p>
          <Button size=lgsName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500over:from-cyan-500 hover:to-pink-600ext-white px-10 py-4 text-xl font-bold shadow-xl>       Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className=relative z-108 text-center text-cyan-300gray-950/80rder-t border-cyan-400/10">
        <div className=container mx-auto px-4    <div className=flex flex-col md:flex-row items-center justify-between gap-4>
            <div className=flex items-center gap-2 justify-center md:justify-start>             <span className=text-xl">🎮</span>
              <span className="font-bold">CyberVR Arena</span>
            </div>
            <div className="text-sm">&copy; 224CyberVR Arena. All rights reserved.</div>
            <div className="flex gap-4 justify-center md:justify-end>
              <a href="# className="hover:text-pink-300 transition-colors">Discord</a>
              <a href="# className="hover:text-pink-300 transition-colors">Twitch</a>
              <a href="# className="hover:text-pink-300 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-slow {
       0ansform: translateY(0) rotate(0deg); }
        50ansform: translateY(-20) rotate(5deg); }
         100ansform: translateY(0) rotate(0deg); }
        }
        @keyframes fall {
       0ansform: translateY(-10h); opacity: 1; }
         100ansform: translateY(10h); opacity: 0; }
        }
        .animate-float-slow [object Object]animation: float-slow 8s ease-in-out infinite; }
        .animate-fall { animation: fall linear infinite; }
      `}</style>
    </div>
  );
};

export default Theme221; 