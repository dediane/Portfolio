import React, { useState, useEffect } from 'react';
import styles from '../styles/mouseTracker.module.css';

interface Trail {
  x: number;
  y: number;
  key: number;
  size: number;
}

const MouseTracker: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      const newSize = 70; // Initial size of the particle
      const newTrail: Trail = { x: e.clientX, y: e.clientY, key: Math.random(), size: newSize };
      setTrails((currentTrails) => [newTrail, ...currentTrails]);

      setTimeout(() => {
        setTrails((currentTrails) => {
          return currentTrails.map((trail) => 
            trail.key === newTrail.key ? { ...trail, size: trail.size * 0.9 } : trail
          );
        });
      }, 300); // Continuously decrease size
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.key}
          className={styles.blob}
          style={{ 
            left: `${trail.x}px`, 
            top: `${trail.y}px`,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            transition: 'width 3s ease, height 3s ease, opacity 3s ease',
            opacity: 1,
            transform: `translate(-50%, -50%) scale(${trail.size / 100})`
          }}
        />
      ))}
    </>
  );
};

export default MouseTracker;