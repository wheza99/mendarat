export default function Contact() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-900 to-purple-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-cyan-400 mb-6" style={{ fontFamily: 'monospace' }}>
            CONTACT
          </h2>
          <p className="text-xl text-yellow-300 max-w-3xl mx-auto" style={{ fontFamily: 'monospace' }}>
            Ready to start your gaming adventure?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-black border-4 border-cyan-400 rounded-none p-8">
            <h3 className="text-cyan-400 font-black text-2xl mb-8" style={{ fontFamily: 'monospace' }}>
              Player Registration
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-yellow-400 font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                  Player Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your gamer tag..."
                  className="w-full bg-gray-900 border-4 border-yellow-400 rounded-none p-4 text-white font-bold"
                  style={{ fontFamily: 'monospace' }}
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="player@retrogame.com"
                  className="w-full bg-gray-900 border-4 border-yellow-400 rounded-none p-4 text-white font-bold"
                  style={{ fontFamily: 'monospace' }}
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your gaming experience..."
                  className="w-full bg-gray-900 border-4 border-yellow-400 rounded-none p-4 text-white font-bold resize-none"
                  style={{ fontFamily: 'monospace' }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-400 text-black font-black py-4 px-6 border-4 border-pink-600 hover:bg-yellow-400 transition-all duration-300 text-xl"
                style={{ fontFamily: 'monospace' }}
              >
                Join the Game
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-black border-4 border-green-400 rounded-none p-6">
              <h3 className="text-green-400 font-black text-xl mb-6" style={{ fontFamily: 'monospace' }}>
                Join Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400" style={{ fontFamily: 'monospace' }}>Active Players:</span>
                  <span className="text-green-400 font-bold" style={{ fontFamily: 'monospace' }}>42,420</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400" style={{ fontFamily: 'monospace' }}>Games Created:</span>
                  <span className="text-green-400 font-bold" style={{ fontFamily: 'monospace' }}>1,337</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400" style={{ fontFamily: 'monospace' }}>Communities:</span>
                  <span className="text-green-400 font-bold" style={{ fontFamily: 'monospace' }}>256</span>
                </div>
              </div>
            </div>

            <div className="bg-black border-4 border-yellow-400 rounded-none p-6">
              <h3 className="text-yellow-400 font-black text-xl mb-4" style={{ fontFamily: 'monospace' }}>
                Quick Contact
              </h3>
              
              <div className="space-y-3 text-sm" style={{ fontFamily: 'monospace' }}>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-yellow-400">hello@retrogame.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Support:</span>
                  <span className="text-yellow-400">24/7 Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-black border-4 border-pink-400 rounded-none p-8 max-w-4xl mx-auto">
            <h3 className="text-pink-400 font-black text-2xl mb-4" style={{ fontFamily: 'monospace' }}>
              Game On!
            </h3>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'monospace' }}>
              Join thousands of retro gamers worldwide and experience the ultimate nostalgic adventure!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
