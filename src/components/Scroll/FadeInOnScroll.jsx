import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;