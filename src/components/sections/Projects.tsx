import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  note?: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Chat App',
      description: 'A full-stack Chat App with React, Node.js, and MongoDB',
      image: 'chatapp.avif',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/veera5423/chatApp',
      demoUrl: 'https://github.com/veera5423/chatApp',
      note: '✨ Actively working on adding new features like message reactions, typing indicators, and notifications. Stay tuned!'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A beautiful task management application with real-time updates',
      image: 'todo.avif',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/veera5423/task-management.git',
      demoUrl: 'https://veera5423.github.io/task-management/',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard with dynamic data visualization',
      image: 'weatherapp.jpg',
      tags: ['React', 'D3.js', 'Weather API'],
      githubUrl: 'https://github.com/veera5423/weather-app',
      demoUrl: 'https://veera5423.github.io/weather-app/',
    },
    {
      id: 4,
      title: 'AI-Powered Resume Builder',
      description: 'An intelligent resume builder that uses AI to auto-generate tailored professional summaries and ensures ATS-friendly formatting. Built with React and Hugging Face APIs.',
      image: 'resume-builder.png',
      tags: ['React', 'Hugging Face API', 'AI', 'Resume Generator', 'ATS-Friendly'],
      githubUrl: 'https://github.com/veera5423/ResumeBuilder',
      demoUrl: 'https://veera5423.github.io/ResumeBuilder/',
    },

    {
      id: 5,
      title: 'TravelGo - Smart Travel Booking System',
      description: 'A full-stack travel booking platform supporting bus, cab, hotel, and train reservations. Features real-time seat selection, filtering options (e.g., women-only seats), and a smooth mobile-first UI. Powered by Flask, MongoDB, and AWS services.',
      image: 'travel-go.png',
      tags: ['Flask', 'MongoDB', 'AWS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Travel Booking'],
      githubUrl: 'https://github.com/veera5423/TravelGo',
      demoUrl: 'https://travelgo-pnbv.onrender.com/',
      note: '⚠️ Note: The demo may take up to 1–2 minutes to load due to free-tier hosting on Render.'
    },
    {
      id: 6,
      title: 'FlightFinder - AI-Driven Flight Booking System',
      description: 'A full-featured flight booking platform built with the MERN stack. Includes real-time seat selection, filters by class and route, and booking confirmations. Features dedicated dashboards for admins and operators to manage flight data and bookings efficiently.',
      image: 'flight-finder.jpg',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Flight Booking', 'Admin Dashboard', 'Operator Panel'],
      githubUrl: 'https://github.com/veera5423/FlightFinder.git',
      demoUrl: 'https://github.com/veera5423/FlightFinder.git', // No live demo hosted currently
      note: '🚧 Demo currently not hosted. Please check the GitHub repo for full project details.'
    },
    {
      id: 7,
      title: 'Travel Itinerary Planner',
      description: 'A MERN-based travel planning app that helps users build personalized, day-wise travel itineraries. Stores plans locally for quick access and offers a smooth interface to add, update, or remove travel activities.',
      image: 'travel-iterneary.webp', // HD travel planner image from Unsplash
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Travel Planner'],
      githubUrl: 'https://github.com/veera5423/Traveliteneraryplanner',
      demoUrl: 'https://github.com/veera5423/Traveliteneraryplanner',
      note: '🧭 Currently improving the user experience and working on new features like smart suggestions and itinerary sharing.'
    },
    {
      id: 8,
      title: 'Personal Portfolio Website',
      description: 'My first personal portfolio website built with HTML, CSS, and JavaScript. Showcases my early projects and provides an introduction to my work and interests in web development.',
      image: 'portfolio.png', // HD image placeholder from Unsplash
      tags: ['HTML', 'CSS', 'JavaScript', 'Portfolio'],
      githubUrl: 'https://github.com/veera5423/portfolio',
      demoUrl: 'https://veera5423.github.io/portfolio/',
      note: '🌱 This was my first portfolio attempt. A stepping stone into frontend development — now evolving into something even better!'
    }




  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-dynamic text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">Featured Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              A collection of my recent work and personal projects.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setSelectedTag('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === 'All'
                  ? 'bg-brand-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-brand-600 hover:text-white'
                  }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                    ? 'bg-brand-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-brand-600 hover:text-white'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl neon-accent transition-transform hover:scale-[1.02]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-brand-400 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-brand-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                    {project.note && (
                      <div className="text-sm text-yellow-400 mt-2">
                        {project.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;