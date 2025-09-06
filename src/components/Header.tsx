import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: <FaHome /> },
    { label: 'About', href: '#about', icon: <FaUser /> },
    { label: 'Skills', href: '#skills', icon: <FaCog /> },
    { label: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { label: 'Contact', href: '#contact', icon: <FaEnvelope /> }
  ];

  const nameVariants = {
    initial: { opacity: 1 },
    hover: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterVariants = {
    initial: { y: 0, rotateX: 0 },
    hover: {
      y: [-5, -10, -5, 0],
      rotateX: [0, 360, 0],
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const firstName = "Aaditya";
  const lastName = "Malik";

  const handleSmoothScroll = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            variants={nameVariants}
            initial="initial"
            whileHover="hover"
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); handleSmoothScroll('#home'); }}>
              <span className="logo-bracket">&lt;</span>
              <span className="first-name">
                {firstName.split('').map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    className="letter"
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="logo-separator">.</span>
              <span className="last-name">
                {lastName.split('').map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    className="letter"
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="logo-bracket">/&gt;</span>
            </a>
          </motion.div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <AnimatePresence>
              {(isMenuOpen || window.innerWidth > 768) && (
                <motion.div
                  className="nav-container"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleSmoothScroll(item.href); }}
                      variants={menuItemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-text">{item.label}</span>
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="active-indicator"
                          layoutId="activeIndicator"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <div className="header-actions">
            <motion.button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </motion.button>

            <motion.button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 180, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: isScrolled ? 1 : 0,
          transformOrigin: "0%"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
};

export default Header;