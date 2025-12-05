// ========================================
// EXAMPLE: How to Update Your Projects Component
// ========================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaEye, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImage from './ProjectImage';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

const ProjectsExample = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Tesla Retail Tool',
      description: 'A comprehensive React-based platform for Tesla retail operations.',
      image: '/img/building.jpg',
      category: 'react',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      links: { github: '#', live: '#' },
    },
    // ... more projects
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with ScrollReveal */}
        <ScrollReveal animation="blurUp">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Check out some of my recent work
          </p>
        </ScrollReveal>

        {/* Category Filter with Magnetic Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'react', 'fullstack'].map((category) => (
            <MagneticButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              magneticStrength={0.2}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </MagneticButton>
          ))}
        </div>

        {/* Project Grid with TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              animation="blurUp" 
              delay={index * 0.1}
            >
              <TiltCard 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                tiltMaxAngle={12}
                scale={1.02}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons with Magnetic Effect */}
                  <div className="flex gap-3">
                    <MagneticButton
                      onClick={() => window.open(project.links.github, '_blank')}
                      className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                      magneticStrength={0.2}
                    >
                      <FaGithub /> Code
                    </MagneticButton>
                    <MagneticButton
                      onClick={() => window.open(project.links.live, '_blank')}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                      magneticStrength={0.2}
                    >
                      <FaExternalLinkAlt /> Demo
                    </MagneticButton>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========================================
// EXAMPLE: How to Update Your Hero Component
// ========================================

import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';

const HeroExample = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <ScrollReveal animation="blurUp">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Gurpinder Singh
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <p className="text-xl md:text-2xl text-blue-300 mb-8">
            Frontend Developer & Problem Solver
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.4}>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Creating beautiful, responsive web applications with modern technologies.
            Let's build something amazing together!
          </p>
        </ScrollReveal>

        {/* CTAs with Magnetic Buttons */}
        <ScrollReveal animation="scaleUp" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              magneticStrength={0.3}
            >
              View My Work
            </MagneticButton>
            
            <MagneticButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              magneticStrength={0.3}
            >
              Get In Touch
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

// ========================================
// EXAMPLE: How to Update Your Skills Component
// ========================================

import React from 'react';
import { FaReact, FaNode, FaPython } from 'react-icons/fa';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

const SkillsExample = () => {
  const skills = [
    { name: 'React', level: 95, icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', level: 85, icon: FaNode, color: '#339933' },
    { name: 'Python', level: 80, icon: FaPython, color: '#3776AB' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal animation="blurUp">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} animation="blurUp" delay={index * 0.1}>
              <TiltCard 
                className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                tiltMaxAngle={10}
              >
                <div className="text-center">
                  <skill.icon 
                    className="text-6xl mx-auto mb-4" 
                    style={{ color: skill.color }} 
                  />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========================================
// QUICK TIPS FOR IMPLEMENTATION
// ========================================

/*
1. SCROLL REVEALS
   - Wrap headings: <ScrollReveal animation="blurUp">
   - Wrap paragraphs: <ScrollReveal animation="fadeUp" delay={0.2}>
   - Wrap cards: <ScrollReveal animation="blurUp" delay={index * 0.1}>

2. TILT CARDS
   - Use for: Project cards, skill cards, testimonials
   - Adjust tiltMaxAngle: 10-15 for subtle, 20+ for dramatic
   - Set scale: 1.02 for subtle, 1.05 for obvious

3. MAGNETIC BUTTONS
   - Use for: All CTAs, navigation links, form buttons
   - Adjust magneticStrength: 0.1-0.2 for subtle, 0.3-0.5 for strong
   - Works best with padding of at least 12px

4. DARK MODE
   - Add to all bg classes: bg-white dark:bg-gray-900
   - Add to text: text-gray-900 dark:text-white
   - Add to borders: border-gray-300 dark:border-gray-700
   - Add to cards: bg-white dark:bg-gray-800

5. PERFORMANCE
   - Use ScrollReveal with triggerOnce: true (default)
   - Limit TiltCard to important elements
   - CustomCursor auto-hides on mobile
   - All animations use GPU acceleration
*/

export { ProjectsExample, HeroExample, SkillsExample };
