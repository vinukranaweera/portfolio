import React from 'react'
import styles from './Hero.module.css'
import Scroll from '../Scroll/Scroll'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
            <Typewriter
            words={["Hello, World!", "I'm Vinuk!", "Welcome!"]}
            loop={false}
            cursor
            cursorBlinking={true}
            cursorColor='white'
            cursorStyle='I'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1500}
          />
            </h1>
            <motion.p className={styles.description}
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.9, delay: 0.8}}
            viewport={{ once: true }}>
Greetings! My name is Vinuk Ranaweera and I am a recent graduate from the City College of New York with a Bachelor of Science (BS) degree in computer science. 
My areas of interest include data science, data analytics, web development, software design, and game design. 
During my free time, I enjoy playing chess and basketball as well as exploring new coding languages and frameworks. 
I am always eager to share my experience and connect with fellow enthusiasts, professionals, and anyone interested in the exciting world of computer science. 
Feel free to check out my projects in the Projects section or connect with me on LinkedIn.</motion.p>
            <Scroll>
            <div class="contactBtn-container">
              <a href='mailto:vinukranaweera@gmail.com' className={styles.contactBtn}>
              Contact Me
              </a>
             </div>
             </Scroll>
        </div>
        <div className={styles.topBlur1}/> 
        <div className={styles.bottomBlur1}/>
        <div className={styles.topBlur2}/>
        <div className={styles.bottomBlur2}/>
    </section>
  )
}
