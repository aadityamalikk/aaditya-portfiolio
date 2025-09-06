import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import profileImage from '../assets/images/aaditya-profile.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const typedText = useTypingAnimation({
    strings: [
      'Data Science Enthusiast',
      'Machine Learning Developer', 
      'Python Specialist',
      'MERN Stack Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Simple fallback avatar component
  const PlaceholderAvatar = () => (
    <div className="placeholder-avatar">
      <span>AM</span>
    </div>
  );

  return (
    <section id="home" className="hero">
      {/* Enhanced floating tech icons */}
      <div className="floating-tech-hero tech-1">
        <FaPython />
      </div>
      <div className="floating-tech-hero tech-2">
        <FaReact />
      </div>
      <div className="floating-tech-hero tech-3">
        <FaDatabase />
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="hero-title" 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="gradient-text">Aaditya Malik</span>
          </motion.h1>
          
          <motion.div 
            className="hero-subtitle" 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>I'm a </span>
            <span className="typed-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </motion.div>

          <motion.p 
            className="hero-description" 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate about extracting insights from data and building intelligent solutions.
            I specialize in machine learning, data analysis, and creating interactive dashboards
            with modern web technologies.
          </motion.p>

          <motion.div 
            className="hero-buttons" 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              download="Aaditya_Malik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-social" 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/aadityamalikk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aaditya-malik-5478012a6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:aadityamalikcse02@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-photo-container">
            {!imageError ? (
              <img 
                src={profileImage}
                alt="Aaditya Malik" 
                className="profile-photo"
                onError={() => {
                  console.log('❌ Failed to load profile image, showing placeholder');
                  setImageError(true);
                }}
                onLoad={() => console.log('✅ Profile image loaded successfully!')}
              />
            ) : (
              <PlaceholderAvatar />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;