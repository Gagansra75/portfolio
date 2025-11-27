import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaEye, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImage from './ProjectImage';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Tesla Retail Tool',
      description: 'A comprehensive React-based platform for Tesla retail operations, featuring real-time inventory management and customer analytics.',
      image: '/img/building.jpg',
      category: 'react',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration using Stripe.',
      image: '/img/building.jpg',
      category: 'fullstack',
      technologies: ['React', 'Express', 'PostgreSQL', 'Stripe'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features.',
      image: '/img/building.jpg',
      category: 'react',
      technologies: ['React', 'Chart.js', 'Redux', 'Tailwind'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A React-based social media application with real-time messaging, notifications, and user authentication.',
      image: '/img/building.jpg',
      category: 'react',
      technologies: ['React', 'Firebase', 'WebSocket', 'Material-UI'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Beautiful weather application with real-time data, location-based forecasts, and smooth animations.',
      image: '/img/building.jpg',
      category: 'react',
      technologies: ['React', 'API Integration', 'Framer Motion', 'Axios'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Content management system for blogging with markdown support, comments, and SEO optimization.',
      image: '/img/building.jpg',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MySQL', 'Markdown'],
      links: {
        github: '#',
        live: '#',
      },
    },
  ];

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'React', value: 'react' },
    { label: 'Full Stack', value: 'fullstack' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent work and projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                {/* ProjectImage component renders a variant-based SVG illustration */}
                <ProjectImage variant={project.id} title={project.title} className="group-hover:scale-105" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.links.github}
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title="GitHub"
                  >
                    <FaGithub size={20} className="text-gray-900" />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} className="text-gray-900" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.links.github}
                    className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">Want to see more?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
