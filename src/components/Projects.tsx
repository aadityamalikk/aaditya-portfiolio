import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaDatabase, FaRocket } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import './Projects.css';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState<'all' | 'data-science' | 'hackathon' | 'mern-stack'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'data-science': return <FaDatabase />;
      case 'hackathon': return <FaRocket />;
      case 'mern-stack': return <FaCode />;
      default: return <FaCode />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'data-science': return 'Data Science';
      case 'hackathon': return 'Hackathon';
      case 'mern-stack': return 'MERN Stack';
      default: return 'Project';
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={projectVariants}>
            Featured Projects
          </motion.h2>

          <motion.div className="projects-filter" variants={projectVariants}>
            <motion.button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter /> All Projects
            </motion.button>
            <motion.button
              className={`filter-btn ${filter === 'data-science' ? 'active' : ''}`}
              onClick={() => setFilter('data-science')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDatabase /> Data Science
            </motion.button>
            <motion.button
              className={`filter-btn ${filter === 'hackathon' ? 'active' : ''}`}
              onClick={() => setFilter('hackathon')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket /> Hackathons
            </motion.button>
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                data-category={project.category}
                variants={projectVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {getCategoryIcon(project.category || '')}
                    {getCategoryLabel(project.category || '')}
                  </span>
                  
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <motion.span 
                        key={tech} 
                        className="tech-tag"
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;