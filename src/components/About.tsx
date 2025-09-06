import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaCode, FaChartLine, FaLaptopCode, FaDatabase, FaCertificate, FaTrophy } from 'react-icons/fa';
import { CertificateButton } from './CertificateViewer';
import { personalInfo, activities, certificates } from '../data/portfolio';
import './About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skills = [
    { name: "Python & Data Science", icon: <FaCode />, description: "ML algorithms, data analysis" },
    { name: "Statistical Analysis", icon: <FaChartLine />, description: "Predictive modeling, insights" },
    { name: "MERN Stack", icon: <FaLaptopCode />, description: "Full-stack development" },
    { name: "Database Management", icon: <FaDatabase />, description: "SQL, MongoDB, optimization" }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          {/* Hero Bio Section */}
          <motion.div className="about-hero" variants={itemVariants}>
            <div className="about-hero-content">
              <h3>Hello! I'm Aaditya 👋</h3>
              <p className="about-lead">{personalInfo.bio}</p>
            </div>
            <div className="about-hero-stats">
              <div className="stat-item">
                <span className="stat-number">2026</span>
                <span className="stat-label">Expected Graduation</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Hackathons</span>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div className="education-section" variants={itemVariants}>
            <h3><FaGraduationCap /> Education</h3>
            <div className="education-card">
              <div className="education-main">
                <div className="education-icon">
                  <FaUniversity />
                </div>
                <div className="education-content">
                  <h4>{personalInfo.education.degree}</h4>
                  <h5>{personalInfo.education.college}</h5>
                  <p><FaMapMarkerAlt /> {personalInfo.education.location}</p>
                  <p><FaUniversity /> Affiliated with {personalInfo.education.university}, {personalInfo.education.universityLocation}</p>
                  <div className="education-status">
                    <span className="status-badge">
                      <FaCalendarAlt /> {personalInfo.education.currentYear} • Expected {personalInfo.education.expectedCompletion}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div className="skills-overview-section" variants={itemVariants}>
            <h3>Core Competencies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div className="certificates-section" variants={itemVariants}>
            <h3><FaCertificate /> Certificates</h3>
            <div className="certificates-grid">
              {certificates.map((cert) => (
                <CertificateButton
                  key={cert.id}
                  certificateName={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  certificateUrl={cert.url}
                  icon={<FaCertificate />}
                />
              ))}
            </div>
          </motion.div>

          {/* Achievements & Activities */}
          <motion.div className="achievements-section" variants={itemVariants}>
            <h3><FaTrophy /> Achievements & Activities</h3>
            <div className="achievements-timeline">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="achievement-item"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="achievement-marker">
                    <div className="achievement-number">{index + 1}</div>
                  </div>
                  <div className="achievement-content">
                    <div className="achievement-header">
                      <h4>{activity.title}</h4>
                      <div className="achievement-meta">
                        <span className="organization">{activity.organization}</span>
                        <span className="date">{activity.date}</span>
                      </div>
                    </div>
                    <div className="achievement-highlight">
                      <FaTrophy />
                      <span>{activity.achievement}</span>
                    </div>
                    <ul className="achievement-details">
                      {activity.description.slice(0, 3).map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="achievement-tech">
                      {activity.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                      {activity.technologies.length > 4 && (
                        <span className="tech-tag more">+{activity.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;