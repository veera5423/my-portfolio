import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';


const Footer = () => {
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
    <footer className="py-12">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8 rounded-xl transition-colors card card--dark neon-accent`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold brand-gradient-text`}>VeeraVibe</h3>
            <p className="text-gray-300">Building digital experiences with passion and precision.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors text-gray-300 hover:text-brand-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle and Copyright */}
          <div className="space-y-4 text-right md:text-left lg:text-right">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} VeeraVibe. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-linear-to-r from-orange-500 to-orange-400 text-gray-200 shadow-lg hover:scale-105 transition-transform ${
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