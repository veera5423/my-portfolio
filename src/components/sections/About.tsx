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
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative group">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
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
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
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
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
                >
                  <h3 className="text-sm text-gray-400 mb-2">{fact.label}</h3>
                  <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{fact.value}</p>
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