import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import ResumeModal from './ResumeModal';
import Button from '../ui/Button';

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
    <section id="home" className="min-h-screen flex items-center justify-center py-20   bg-dynamic text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="brand-gradient-text">Veeranjaneyulu.Vipparla</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Button onClick={openResume} variant="primary">View Resume</Button>
            <a href="#contact" className="inline-block">
              <Button variant="outline">Let&apos;s Talk</Button>
            </a>
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
                  className="text-gray-300 hover:text-orange-500 text-2xl"
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
          className="flex-1 mt-6 md:mt-0"
        >
          <div className="relative mr-2 mb-36 w-64 h-64 md:w-[25rem] md:h-[25rem] mx-auto">
            <div className="ring-gradient rounded-full p-1">
              <div className="profile-frame rounded-full p-1">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="veera2.png"
                  alt="Profile"
                  className="rounded-full shadow-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </section>
  );
};

export default Hero;
