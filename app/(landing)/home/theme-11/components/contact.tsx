import { contactSectionCopy } from "../copy";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#004080] to-[#001a2e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {contactSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC] mb-6">{contactSectionCopy.subtitle}</p>
          <p className="text-gray-300 max-w-3xl mx-auto">{contactSectionCopy.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-[#40E0D0] font-medium mb-2">Address</h4>
                <p className="text-gray-300">{contactSectionCopy.office.address}</p>
                <p className="text-gray-300">{contactSectionCopy.office.city}</p>
              </div>
              <div>
                <h4 className="text-[#40E0D0] font-medium mb-2">Contact</h4>
                <p className="text-gray-300">{contactSectionCopy.office.phone}</p>
                <p className="text-gray-300">{contactSectionCopy.office.email}</p>
              </div>
              <div>
                <h4 className="text-[#40E0D0] font-medium mb-2">Hours</h4>
                <p className="text-gray-300">{contactSectionCopy.hours.weekdays}</p>
                <p className="text-gray-300">{contactSectionCopy.hours.weekend}</p>
                <p className="text-gray-300">{contactSectionCopy.hours.closed}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-[#001a2e]/50 border border-[#40E0D0]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#40E0D0] focus:outline-none"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-[#001a2e]/50 border border-[#40E0D0]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#40E0D0] focus:outline-none"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-[#001a2e]/50 border border-[#40E0D0]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#40E0D0] focus:outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#40E0D0] to-[#48D1CC] hover:from-[#48D1CC] hover:to-[#40E0D0] text-white rounded-lg py-3 font-medium transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}