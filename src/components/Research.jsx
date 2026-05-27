import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { researchInterests } from '../data/content'
import styles from './Research.module.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={styles.research} id="research">
      <div className="container" ref={ref}>
        <h2 className="section-title">Research Interests</h2>
        <p className="section-subtitle">Areas I'm passionate about</p>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {researchInterests.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Research
