import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Background from './components/ui/Background';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import MouseFollower from './components/ui/MouseFollower';


const AppContent = () => {
 

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      <Navbar />
      <main>
        
        <MouseFollower />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      <Background />
      </main>
      <Footer  />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

