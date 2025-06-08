import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/veera5423' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/veeranjaneyulu-v' },
    { icon: FaTwitter, href: 'https://x.com/Veera_V4' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Veeranjaneyulu.Vipparla</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-100 mb-6">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openResume}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
            >
              <a href="#contact" className="text-blue-600 dark:text-blue-400">
                
              Let's Talk
              </a>
            </motion.button>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-2xl"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="veera2.jpg"
              alt="Profile"
              className="rounded-full shadow-2xl object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </section>
  );
};

export default Hero;
