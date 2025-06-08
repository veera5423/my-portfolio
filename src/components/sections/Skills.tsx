import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGit,
  FaDocker,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb} from 'react-icons/si'; //SiPostgresql 

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 70, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, level: 70, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, level: 60, color: '#3178C6' },
    { name: 'React', icon: FaReact, level: 80, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNode, level: 85, color: '#339933' },
    { name: 'Python', icon: FaPython, level: 80, color: '#3776AB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
    // { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#336791' },
    { name: 'Git', icon: FaGit, level: 85, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, level: 75, color: '#2496ED' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my technical expertise and the technologies I work with.
            </p>
          </div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center space-y-6">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          className="text-gray-700"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="44"
                          cx="48"
                          cy="48"
                        />
                        <motion.circle
                          className="text-current"
                          strokeWidth="8"
                          strokeLinecap="round"
                          stroke={skill.color}
                          fill="transparent"
                          r="44"
                          cx="48"
                          cy="48"
                          initial={{ strokeDasharray: "276.46", strokeDashoffset: "276.46" }}
                          animate={{ strokeDashoffset: 276.46 - (276.46 * skill.level) / 100 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Icon className="text-3xl" style={{ color: skill.color }} />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {skill.name}
                    </h3>
                    <span className="text-2xl font-bold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-purple-900/80 to-pink-900/80 rounded-xl">
                    <span className="text-white text-lg font-medium px-4 py-2 bg-black/30 rounded-full backdrop-blur-sm">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;