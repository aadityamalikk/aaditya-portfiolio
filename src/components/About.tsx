import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { activities } from '../data/portfolio';
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

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                I'm a passionate Data Science enthusiast and aspiring analyst with a strong 
                foundation in machine learning, statistical analysis, and data visualization. 
                As a fresher in the field, I bring fresh perspectives and eagerness to solve 
                complex data problems using modern technologies.
              </p>
              <p>
                My primary expertise lies in Python, SQL, and data science libraries like 
                Pandas, NumPy, and Scikit-learn. I also have experience in web development 
                with React and Node.js, which gives me a unique perspective on full-stack 
                data solutions and interactive dashboards.
              </p>
              <p>
                Through hackathons and my data science internship, I've gained hands-on 
                experience in building AI-powered applications and predictive models. 
                I'm always excited to learn new technologies and contribute to innovative 
                data-driven solutions.
              </p>
            </motion.div>

            <motion.div className="experience-timeline" variants={itemVariants}>
              <h3>Extracurricular Activities & Training</h3>
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{activity.title}</h4>
                      <span className="company">{activity.organization}</span>
                      <span className="duration">{activity.date}</span>
                      {activity.certificate && (
                        <span className="certificate-badge">📜 Certified</span>
                      )}
                    </div>
                    <div className="achievement">
                      <strong>Achievement:</strong> {activity.achievement}
                    </div>
                    <ul className="timeline-description">
                      {activity.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="timeline-tech">
                      {activity.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;