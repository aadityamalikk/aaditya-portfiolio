import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaHtml5
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPlotly,
  SiPowerbi,
  SiMicrosoftexcel,
  SiMysql,
  SiJupyter,
  SiVisualstudiocode,
  SiExpress,
  SiPostman
} from 'react-icons/si';
import { skills } from '../data/portfolio';
import './Skills.css';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const iconMap: { [key: string]: React.ComponentType } = {
    FaReact,
    SiTypescript,
    FaJs,
    FaNodeJs,
    FaPython,
    SiMongodb,
    SiPostgresql,
    FaGitAlt,
    FaHtml5,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiPlotly,
    SiPowerbi,
    SiMicrosoftexcel,
    SiMysql,
    SiJupyter,
    SiVisualstudiocode,
    SiExpress,
    SiPostman
  };

  const categories = {
    'data-science': 'Data Science & Analytics',
    'mern-stack': 'MERN Stack Development',
    database: 'Database Technologies',
    tools: 'Tools & Platforms'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.2 }
    })
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={skillVariants}>
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {Object.entries(categories).map(([key, label]) => {
              const categorySkills = skills.filter(skill => skill.category === key);
              
              return (
                <motion.div
                  key={key}
                  className="skill-category"
                  variants={skillVariants}
                >
                  <h3>{label}</h3>
                  <div className="skills-list">
                    {categorySkills.map((skill) => {
                      const IconComponent = iconMap[skill.icon];
                      
                      return (
                        <motion.div
                          key={skill.name}
                          className="skill-item"
                          variants={skillVariants}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="skill-header">
                            <div className="skill-info">
                              {IconComponent && <IconComponent />}
                              <span className="skill-name">{skill.name}</span>
                            </div>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                          <div className="skill-progress">
                            <motion.div
                              className="skill-progress-bar"
                              variants={progressVariants}
                              custom={skill.level}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;