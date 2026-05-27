import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa'
import { publications, personalInfo } from '../data/content'
import styles from './Publications.module.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const paperVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function formatAuthors(authors) {
  return authors.map((author, i) => {
    const isSelf = author === personalInfo.name
    return (
      <span key={i}>
        {i > 0 && ', '}
        {isSelf ? (
          <span className={styles.selfAuthor}>{author}</span>
        ) : (
          author
        )}
      </span>
    )
  })
}

function PublicationCard({ paper }) {
  return (
    <motion.div className={styles.paper} variants={paperVariants}>
      <span className={styles.venue}>{paper.venue} {paper.year}</span>
      <h3 className={styles.paperTitle}>{paper.title}</h3>
      <p className={styles.authors}>{formatAuthors(paper.authors)}</p>
      {paper.abstract && (
        <p className={styles.abstract}>{paper.abstract}</p>
      )}
      {paper.links && paper.links.length > 0 && (
        <div className={styles.links}>
          {paper.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.label === 'arXiv' ? <FaFileAlt /> : <FaExternalLinkAlt />}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  )
}

function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={styles.publications} id="publications">
      <div className="container" ref={ref}>
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">Selected research papers</p>
        <motion.div
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {publications.length > 0 ? (
            publications.map((paper) => (
              <PublicationCard key={paper.title} paper={paper} />
            ))
          ) : (
            <p className={styles.empty}>Publications coming soon.</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
