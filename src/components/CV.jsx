import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education, awards } from '../data/content'
import styles from './CV.module.css'

function CVItem({ entry }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      className={styles.item}
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.dot} />
      <div className={styles.date}>{entry.date}</div>
      <h3 className={styles.degree}>{entry.degree || entry.title}</h3>
      <div className={styles.institution}>{entry.institution}</div>
      {entry.description && (
        <p className={styles.description}>{entry.description}</p>
      )}
    </motion.div>
  )
}

function CV() {
  return (
    <section className={styles.cv} id="cv">
      <div className="container">
        <h2 className="section-title">CV</h2>

        <p className="section-subtitle">Education</p>
        <div className={styles.timelineWrapper}>
          {education.map((entry, index) => (
            <CVItem key={index} entry={entry} />
          ))}
        </div>

        <p className={`${styles.awardsTitle} section-subtitle`}>Honors & Awards</p>
        <div className={styles.timelineWrapper}>
          {awards.map((entry, index) => (
            <CVItem key={index} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CV
