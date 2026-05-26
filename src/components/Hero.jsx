import { motion } from 'framer-motion'
import { personalInfo } from '../data/content'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className={styles.greeting}>
            Hi, I'm <span className={styles.highlight}>{personalInfo.name}</span>
          </h1>
          <p className={styles.tagline}>{personalInfo.tagline}</p>
          <a href="#projects" className={styles.cta}>
            View My Work
          </a>
        </motion.div>

        <motion.div
          className={styles.avatarWrapper}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className={styles.avatar}
          />
          <span className={`${styles.floatingEmoji} ${styles.emoji1}`}>&#x2728;</span>
          <span className={`${styles.floatingEmoji} ${styles.emoji2}`}>&#x1F680;</span>
          <span className={`${styles.floatingEmoji} ${styles.emoji3}`}>&#x1F3A8;</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
