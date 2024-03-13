import React from 'react'
import styles from './Projects.module.css'
import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard'
import FadeInOnScroll from '../Scroll/FadeInOnScroll'

export const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <FadeInOnScroll>
        <h3 className={styles.title}>Projects</h3>
        </FadeInOnScroll>
        <div className={styles.projects}> {
            projects.map((project, id) => {
                return (
                <ProjectCard key={id} project={project}/>
            )})
            }
        </div>
    </section>
  )
}
