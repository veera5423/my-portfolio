import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaSun, FaMoon } from 'react-icons/fa';

interface FooterProps {
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Footer = ({ onThemeToggle, isDarkMode }: FooterProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 bg-black backdrop-blur-md neon-accent">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8 rounded-xl transition-colors ${isDarkMode ? 'glass neon-accent' : 'bg-white/80 shadow-md border border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <span className={`${isDarkMode ? 'bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-200' : ''}`}>VeeraVibe</span>
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors ${isDarkMode ? 'text-gray-300 hover:text-brand-400' : 'text-gray-600 hover:text-brand-500'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle and Copyright */}
          <div className="space-y-4">
            <div className="flex items-center justify-start md:justify-end space-x-4">
              {/* <button
                onClick={onThemeToggle}
                className={`p-2 rounded-lg transition-transform shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-brand-500 to-brand-400 text-white hover:scale-105' : 'bg-white text-gray-800 border border-gray-200 hover:scale-105'}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              </button> */}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} VeeraVibe. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-lg hover:scale-105 transition-transform ${
          showScrollTop ? 'visible' : 'invisible'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </motion.button>
    </footer>
  );
};

export default Footer;