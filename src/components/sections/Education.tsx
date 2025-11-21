import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  logo: string;
  url: string;
}

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      institution: 'Kallam Haranadha Reddy Institute of Technology',
      duration: '2022 - 2026',
      description: 'Computer Science AND Engineering',
    },
    {
      id: 2,
      degree: 'Intermediate',
      institution: 'Government Junior College',
      duration: '2020 - 2022',
      description: 'Focus on Mathematics and Science',
    },
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: 'MongoDB Certified Developer, Associate',
      issuer: 'MongoDB University',
      date: 'Oct 2026',
      logo: 'mongodb-associate-developer.11.png',
      url: 'https://www.credly.com/badges/d2d3556c-2c94-4ba2-8c67-1f6a059fc80d/public_url',
    },
    {
      id: 2,
      name: 'AWS  Certified Cloud Practitioner',
      issuer: 'AWS',
      date: 'Oct 2026',
      logo: 'aws-certified-cloud-practitioner.png',
      url: 'https://www.credly.com/badges/6e12b2b0-f0e9-492f-ac28-8fee881cc7ed/public_url',
    },
    // {
    //   id: 3,
    //   name: 'Meta Frontend Developer',
    //   issuer: 'Meta',
    //   date: 'Jun 2023',
    //   logo: '/certifications/meta.svg',
    //   url: 'https://www.meta.com/certificates/',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-dynamic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-200">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="brand-gradient-text">Education & Certifications</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My academic journey and professional certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8">Academic Background</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-brand-500 to-brand-600 opacity-80 rounded" />
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative pl-12 pb-8"
                  >
                      <div className="absolute left-0 top-1 w-10 h-10 bg-linear-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center neon-accent">
                      <div className="w-3 h-3 bg-brand-500 rounded-full" />
                    </div>
                    <div className="card card--dark p-6 rounded-xl neon-accent">
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-brand-500/90 mb-2">{edu.institution}</p>
                      <p className="text-gray-300 text-sm mb-2">{edu.duration}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
              <div className="grid gap-6">
                {certifications.map((cert) => (
                  <motion.a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group card card--dark p-6 rounded-xl neon-accent hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold group-hover:text-brand-500 transition-colors">{cert.name}</h4>
                        <p className="text-gray-300">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;