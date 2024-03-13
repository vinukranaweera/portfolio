import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
import FadeInOnScroll from '../Scroll/FadeInOnScroll'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <FadeInOnScroll>
        <h2 className={styles.title}>About</h2>
        </FadeInOnScroll>
        <div className={styles.content}>
        <img
          src={getImageUrl("about/webImage.png")}
          alt="Image of Vinuk"
          className={styles.aboutImage}/>
        <ul className={styles.aboutItems}
            data-aos="slide-left"
            data-aos-easing="linear">
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                    I have frontend development experience in building responsive
                and appealing websites.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/serverIcon.png')} alt='Server icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                    I have experience developing intricate and optimal backend systems and models.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/uiIcon.png')} alt='UI icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Data Analyst</h3>
                    <p>
                    I have performed data analysis and visualization in multiple projects.
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
