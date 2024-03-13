import React, { useEffect, useRef, useState } from 'react';
import styles from './Scroll.module.css';

const Scroll = ({ children }) => {
  const animatedElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    observer.observe(animatedElementRef.current);

    return () => observer.disconnect();
  }, []);

  const classNames = `${styles.scroll} ${isVisible ? styles.visible : ''}`;

  return <div ref={animatedElementRef} className={classNames}>{children}</div>;
};

export default Scroll;
