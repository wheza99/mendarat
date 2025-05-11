export default function Contact() {
  return (
    <section className="py-36 bg-black dark:bg-black text-white">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row">
        {/* Left Column - Contact Info */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">GET IN TOUCH</h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Far far away behind the word mountains far from the countries Vokalia and
            Consonantia there live the blind texts.
          </p>

          {/* Location 1 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Ubud, Bali</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@domain.com</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Semainyak No.19, Badung, Bali</span>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Denpasar, Bali</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@domain.com</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Niti Mandala, Renon, Bali</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2">
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:border-gray-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:border-gray-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:border-gray-500 focus:outline-none"
                placeholder="Your Subject"
              />
            </div>

            <div className="mb-6">
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:border-gray-500 focus:outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-white text-black font-medium uppercase hover:bg-opacity-90 dark:hover:bg-opacity-90 transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
