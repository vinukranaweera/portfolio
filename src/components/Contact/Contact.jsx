import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2 >Contact</h2>
            <p className={styles.description}>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon"/>
                <a href='mailto:vinukranaweera@gmail.com'>vinukranaweera@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon"/>
                <a href='https://github.com/vinukranaweera' target="_blank">github.com/vinukranaweera</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn icon"/>
                <a href='https://www.linkedin.com/in/vinuk-ranaweera-3662a918b/' target="_blank">linkedin.com/in/vinuk-ranaweera-3662a918b</a>
            </li>
        </ul>
    </footer>
  )
}
