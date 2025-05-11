import { ThemeSwitcher } from "../../theme-switcher";

export default function FooterTheme1() {
  return (
    <footer className="bg-black text-white">
      <div className="pt-12 pb-48">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ARKA ARSITEK</h3>
            <p className="text-gray-400 mb-6">
              Creating beautiful, functional spaces that inspire and elevate
              everyday living.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                FB
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                IG
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                TW
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                LI
              </a>
              <ThemeSwitcher />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Architectural Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Custom Furniture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Space Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
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
                <span className="text-gray-400">
                  123 Design Street, Creative City, 12345
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">📞</span>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">✉️</span>
                <span className="text-gray-400">info@arkaarsitek.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">⏰</span>
                <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>
              Landing Page Starter by{" "}
              <a
                href="https://github.com/wheza99"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wheza
              </a>
            </p>
            <p>Copyright © 2025 ARKA ARSITEK. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
