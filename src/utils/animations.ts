// Animation utilities for smooth performance
export const easeInOutCubic = [0.4, 0.0, 0.2, 1];
export const easeOutQuart = [0.25, 1, 0.5, 1];
export const easeInOutQuart = [0.76, 0, 0.24, 1];

// Stagger animation configs
export const staggerConfig = {
  fast: 0.1,
  normal: 0.2,
  slow: 0.3
};

// Common animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: { duration: 0.3, ease: easeInOutCubic }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuart }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0.3, ease: easeInOutCubic }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: easeOutQuart }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 50,
    transition: { duration: 0.3, ease: easeInOutCubic }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: easeOutQuart }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2, ease: easeInOutCubic }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: easeOutQuart }
  }
};

export const slideInFromTop = {
  hidden: { 
    opacity: 0, 
    y: -100,
    transition: { duration: 0.3, ease: easeInOutCubic }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuart }
  }
};

// Container variants for stagger effects
export const staggerContainer = (staggerChildren = staggerConfig.normal) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.1
    }
  }
});

// Hover effects
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: easeInOutCubic }
};

export const hoverLift = {
  y: -5,
  scale: 1.02,
  transition: { duration: 0.2, ease: easeInOutCubic }
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: easeInOutCubic }
};

// Utility function for intersection observer
export const useScrollAnimation = () => {
  return {
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  };
};

// Performance optimization: Reduce motion for users who prefer it
export const respectReducedMotion = (animation: any) => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      ...animation,
      transition: { duration: 0.01 }
    };
  }
  return animation;
};