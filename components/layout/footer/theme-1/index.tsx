export default function FooterTheme1() {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">INNER</h3>
              <p className="text-gray-400 mb-6">
                Creating beautiful, functional spaces that inspire and elevate everyday living.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  FB
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  IG
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  TW
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  LI
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Interior Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Architectural Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Custom Furniture
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Space Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Lighting Design
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">📍</span>
                  <span className="text-gray-400">123 Design Street, Creative City, 12345</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">📞</span>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✉️</span>
                  <span className="text-gray-400">info@innerdesign.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">⏰</span>
                  <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 INNER. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  