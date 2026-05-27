import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { socialLinks, personalInfo } from '../data/content'
import styles from './Footer.module.css'

const iconMap = {
  GitHub: FaGithub,
  Email: FaEnvelope,
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name] || FaEnvelope
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={link.name}
              >
                <Icon />
              </a>
            )
          })}
        </div>
        <p className={styles.copyright}>
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
