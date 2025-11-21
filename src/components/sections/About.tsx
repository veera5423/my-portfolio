import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const quickFacts = [
    { label: 'Experience', value: '1+ years' },
    { label: 'Projects', value: '10+' },
    { label: 'Location', value: 'Guntur, AndhraPradesh' },
    { label: 'Languages', value: 'English ,Telugu' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-dynamic text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative group">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden glass neon-accent">
              <motion.div
                className="w-full h-full bg-black/10"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <img
                src="vite.svg"
                alt="Profile Sketch"
                className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300"
            >
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies and a problem-solving
              mindset, I transform ideas into elegant, functional solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-6 glass rounded-xl border border-gray-800 hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-sm text-gray-400 mb-2">{fact.label}</h3>
                  <p className="text-xl font-semibold text-white group-hover:text-brand-400 transition-colors">{fact.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;