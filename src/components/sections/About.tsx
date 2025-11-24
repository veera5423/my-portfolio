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
    <section id="about" className="min-h-screen flex items-center bg-dynamic text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative group flex justify-center md:justify-start">
            <div className="slanted-rect w-full h-[300px] md:w-[34rem] md:h-[20rem] mx-auto md:mx-0 glass ">
              <div className="slanted-inner">
                <img
                  src="veera1.png"
                  alt="Veeranjaneyulu Vipparla — Full Stack Developer"
                  loading="lazy"
                  className="slanted-image"
                />
              </div>
            </div>
          </motion.div>
          

          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold brand-gradient-text"
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
                <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-sm text-gray-400 mb-2">{fact.label}</h3>
                  <p className="text-xl font-semibold text-gray-200">{fact.value}</p>
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