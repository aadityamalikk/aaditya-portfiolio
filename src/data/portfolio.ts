export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category?: 'data-science' | 'web-development' | 'hackathon';
}

export interface Skill {
  name: string;
  level: number;
  category: 'data-science' | 'mern-stack' | 'database' | 'tools';
  icon: string;
}

export interface Activity {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string[];
  achievement: string;
  technologies: string[];
  certificate?: boolean;
}

// Personal Information
export const personalInfo = {
  name: "Aaditya Malik",
  title: "Data Science Enthusiast & MERN Stack Developer",
  email: "aadityamalikcse02@gmail.com",
  github: "https://github.com/aadityamalikk",
  linkedin: "https://www.linkedin.com/in/aaditya-malik-5478012a6",
  location: "Muzaffarnagar, Uttar Pradesh, India",
  education: {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    college: "Shri Ram Group of Colleges",
    location: "Muzaffarnagar, Uttar Pradesh",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    universityLocation: "Lucknow, Uttar Pradesh",
    expectedCompletion: "2026",
    currentYear: "Pursuing"
  },
  bio: "Passionate Data Science enthusiast with hands-on experience in machine learning, statistical analysis, and data visualization. Currently pursuing B.Tech CSE with a focus on building intelligent solutions using Python, SQL, and modern web technologies. Experienced in hackathon participation and practical project development."
};

// Data Science & Hackathon Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Library Management System",
    description: "Intelligent library management system with AI-driven book recommendations, automated cataloging, and predictive analytics for inventory management. Built during NSTU Delhi Hackathon.",
    technologies: ["Python", "Machine Learning", "TensorFlow", "Flask", "SQL", "React"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
    githubUrl: "https://github.com/aadityamalikk/ai-library-management",
    featured: true,
    category: 'hackathon'
  },
  {
    id: 2,
    title: "Online Travel Agency Website",
    description: "Comprehensive travel booking platform with dynamic pricing, user reviews, and integrated payment system. Developed during COER University Roorkee Hackathon.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&crop=center",
    githubUrl: "https://github.com/aadityamalikk/travel-agency",
    featured: true,
    category: 'hackathon'
  },
  {
    id: 3,
    title: "Customer Churn Prediction Model",
    description: "Machine learning model to predict customer churn using advanced analytics and visualization. Implemented during data science internship with 87% accuracy.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    githubUrl: "https://github.com/aadityamalikk/churn-prediction",
    featured: true,
    category: 'data-science'
  },
  {
    id: 4,
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard for sales performance analysis with real-time data visualization and predictive insights.",
    technologies: ["Power BI", "SQL", "Excel", "Python", "DAX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    featured: false,
    category: 'data-science'
  }
];

// Updated Skills with Data Science Focus
export const skills: Skill[] = [
  // Data Science Skills (Primary)
  { name: "Python", level: 85, category: "data-science", icon: "FaPython" },
  { name: "Pandas", level: 80, category: "data-science", icon: "SiPandas" },
  { name: "NumPy", level: 78, category: "data-science", icon: "SiNumpy" },
  { name: "Scikit-learn", level: 75, category: "data-science", icon: "SiScikitlearn" },
  { name: "Matplotlib", level: 70, category: "data-science", icon: "SiPlotly" },
  { name: "Seaborn", level: 70, category: "data-science", icon: "SiPlotly" },
  { name: "Power BI", level: 75, category: "data-science", icon: "SiPowerbi" },
  { name: "Excel", level: 85, category: "data-science", icon: "SiMicrosoftexcel" },
  
  // MERN Stack Skills (Secondary)
  { name: "MongoDB", level: 75, category: "mern-stack", icon: "SiMongodb" },
  { name: "Express.js", level: 70, category: "mern-stack", icon: "SiExpress" },
  { name: "React", level: 80, category: "mern-stack", icon: "FaReact" },
  { name: "Node.js", level: 70, category: "mern-stack", icon: "FaNodeJs" },
  { name: "JavaScript", level: 78, category: "mern-stack", icon: "FaJs" },
  { name: "TypeScript", level: 70, category: "mern-stack", icon: "SiTypescript" },
  
  // Database Skills
  { name: "SQL", level: 80, category: "database", icon: "SiMysql" },
  { name: "PostgreSQL", level: 70, category: "database", icon: "SiPostgresql" },
  
  // Tools
  { name: "Git", level: 80, category: "tools", icon: "FaGitAlt" },
  { name: "Jupyter Notebook", level: 85, category: "tools", icon: "SiJupyter" },
  { name: "VS Code", level: 90, category: "tools", icon: "SiVisualstudiocode" },
  { name: "Postman", level: 75, category: "tools", icon: "SiPostman" }
];

// Certificates
export const certificates = [
  {
    id: 1,
    name: "NSUT Delhi Hackathon Participation Certificate",
    issuer: "Netaji Subhas University of Technology, Delhi",
    date: "2024",
    url: "/nsut-certificate.pdf",
    description: "Certificate for participation in NSUT Delhi Hackathon where I developed an AI-Powered Library Management System"
  }
];

// Updated Activities with correct NSUT information
export const activities: Activity[] = [
  {
    id: 1,
    title: "NSUT Delhi Hackathon Participation",
    organization: "Netaji Subhas University of Technology, Delhi",
    date: "2024",
    description: [
      "Participated in prestigious hackathon at NSUT Delhi",
      "Developed AI-Powered Library Management System with intelligent book recommendations",
      "Implemented machine learning algorithms for predictive inventory management",
      "Created user-friendly interface with real-time search and cataloging features",
      "Collaborated with team members to deliver a fully functional prototype"
    ],
    achievement: "Successfully completed hackathon and received participation certificate",
    technologies: ["Python", "Machine Learning", "TensorFlow", "Flask", "SQL", "React"],
    certificate: true
  },
  {
    id: 2,
    title: "COER University Hackathon",
    organization: "College of Engineering Roorkee",
    date: "2024",
    description: [
      "Built comprehensive online travel agency website with booking system",
      "Integrated payment gateway and dynamic pricing algorithms",
      "Implemented user review system and recommendation engine",
      "Designed responsive user interface for optimal user experience"
    ],
    achievement: "Successfully completed project within hackathon timeline",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    certificate: true
  },
  {
    id: 3,
    title: "Data Science Professional Training",
    organization: "Professional Development Program",
    date: "2024",
    description: [
      "Completed comprehensive data science training with hands-on projects",
      "Developed predictive models for customer behavior analysis achieving 87% accuracy",
      "Created interactive dashboards using Power BI and Python libraries",
      "Gained expertise in statistical analysis and machine learning algorithms",
      "Applied data visualization techniques for business insights"
    ],
    achievement: "Certificate of Completion with Distinction",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "SQL", "Excel"],
    certificate: true
  }
];