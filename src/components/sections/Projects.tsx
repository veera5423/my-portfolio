import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
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
    },
    {
      id: 9,
      title: "CleanTech – AI Waste Classification System",
      description:
        "An AI-powered waste classification system that uses Transfer Learning with VGG16 to identify waste as Recyclable, Biodegradable, or Trash. Integrated with a Flask-based web interface for real-time image uploads and instant predictions, this project promotes sustainable and smart waste management practices.",
      image: "https://d12aarmt01l54a.cloudfront.net/cms/images/UserMedia-20240522153951/808-440.png",
      tags: ["Python", "Flask", "TensorFlow", "Deep Learning", "VGG16"],
      githubUrl: "https://github.com/veera5423/CleanTech-AI", // Replace with your actual repo link
      demoUrl: "https://cleantech-ai.onrender.com/", // Or your deployed demo link (if available)
      note: "♻️ Combines deep learning and sustainability — achieving 90% classification accuracy for smarter waste management."
    },{
  "id": 10,
  "title": "QuickSpark AI: Intelligent Study & Career Platform",
  "description": "QuickSpark AI is a complete, scalable EdTech solution built to bridge the gap between learning and career readiness. It provides comprehensive AI tools for users to upload study materials, instantly generate personalized quizzes, engage in RAG-powered chat with their documents, and validate skills against specific career roadmaps (Frontend, Data Science, etc.). The platform features a **freemium model** restricting general AI usage, a secure **Admin Portal** for content verification.",
  "image": "https://cdn.completeaitraining.com/ai_course_images/all_ai_courses_for_chemical_engineers__updated_q2__1752096547.jpg", // Keep the custom image name
  "tags": [
    "Flask",
    "React",
    "MongoDB",
    "Supabase Storage (File/Vector)", // Highlight the multi-DB architecture
    "Gemini AI (RAG & Summarization)",
    "JWT Auth",
    "PostgreSQL (pgvector)", // Highlight the vector capability
    "Monetization/Freemium"
  ],
  "githubUrl": "", 
  "demoUrl": "https://quick-spark.vercel.app/", 
  "note": "🏆 **MVP Complete & Verified:** Successfully integrated multi-database persistence (Mongo + Supabase/Postgres) and solved complex RAG validation, enabling automated skill tracking and a secure Admin/Moderation workflow."
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
    <section id="projects" className="py-20 bg-dynamic text-gray-200">
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
              <span className="brand-gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              A collection of my recent work and personal projects.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button
                onClick={() => setSelectedTag('All')}
                variant={selectedTag === 'All' ? 'primary' : 'outline'}
                className="rounded-full text-sm"
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  variant={selectedTag === tag ? 'primary' : 'outline'}
                  className="rounded-full text-sm"
                >
                  {tag}
                </Button>
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
                  className="card card--dark rounded-xl overflow-hidden neon-accent transition-transform hover:scale-[1.02]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-black/30 text-white/80 text-sm rounded-full border border-brand-500/10"
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
                        className="flex items-center gap-2 text-white/80 hover:text-brand-500 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/80 hover:text-brand-500 transition-colors"
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
