import { useState, useEffect, useRef } from 'react';

interface UseTypingAnimationOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  startDelay?: number;
  backDelay?: number;
}

export const useTypingAnimation = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  startDelay = 0,
  backDelay = 1000
}: UseTypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (strings.length === 0) return;

    const animate = () => {
      const currentString = strings[currentStringIndex];
      
      if (isPaused) {
        timeoutRef.current = setTimeout(() => setIsPaused(false), backDelay);
        return;
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentString.length) {
          setDisplayText(prev => currentString.slice(0, prev.length + 1));
          timeoutRef.current = setTimeout(animate, typeSpeed);
        } else {
          // Finished typing current string
          if (loop || currentStringIndex < strings.length - 1) {
            setIsPaused(true);
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
              setIsPaused(false);
            }, backDelay);
          }
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(prev => currentString.slice(0, prev.length - 1));
          timeoutRef.current = setTimeout(animate, backSpeed);
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentStringIndex((prev) => 
            loop ? (prev + 1) % strings.length : Math.min(prev + 1, strings.length - 1)
          );
        }
      }
    };

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(animate, startDelay || 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentStringIndex, isDeleting, isPaused, strings, typeSpeed, backSpeed, loop, startDelay, backDelay]);

  return displayText;
};