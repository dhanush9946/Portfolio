import { useEffect, useRef, useState } from 'react';

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:-_!@#$%',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const [displayText, setDisplayText] = useState(children);
  const originalText = children;
  const timerRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const handleMove = e => {
      const el = rootRef.current;
      const { left, top, width, height } = el.getBoundingClientRect();
      const dx = e.clientX - (left + width / 2);
      const dy = e.clientY - (top + height / 2);
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        if (!timerRef.current) {
          scramble();
        }
      } else {
        stopScramble();
      }
    };

    const scramble = () => {
      let iteration = 0;
      clearInterval(timerRef.current);
      
      timerRef.current = setInterval(() => {
        setDisplayText(prev => 
          originalText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }

        iteration += 1 / speed;
      }, 30);
    };

    const stopScramble = () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setDisplayText(originalText);
    };

    window.addEventListener('pointermove', handleMove);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      clearInterval(timerRef.current);
    };
  }, [radius, duration, speed, scrambleChars, originalText]);

  return (
    <div
      ref={rootRef}
      className={`font-mono inline-block cursor-default ${className}`}
      style={style}
    >
      {displayText}
    </div>
  );
};

export default ScrambledText;
