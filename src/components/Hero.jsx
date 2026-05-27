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
          <h1 className={styles.name}>
            <span className={styles.highlight}>{personalInfo.name}</span>
          </h1>
          <p className={styles.titleLine}>
            {personalInfo.title},{' '}
            <span className={styles.institution}>{personalInfo.institution}</span>
          </p>
          <p className={styles.tagline}>{personalInfo.tagline}</p>
          <p className={styles.bio}>
            I am a PhD candidate at the School of Mathematical Sciences, Zhejiang University, advised by{' '}
            <a
              href={personalInfo.advisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.advisorLink}
            >
              {personalInfo.advisor.name}
            </a>
            . My research focuses on the theoretical foundations of machine learning, with a particular interest in optimization algorithms and their convergence properties.
          </p>
          <a href="#publications" className={styles.cta}>
            View Publications
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
