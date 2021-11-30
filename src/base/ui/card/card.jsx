import React from 'react'
import styles from './card.module.scss'

const Card = ({
  children,
  className,
  title,
  description1,
  description2,
  action,
  hasTabs,
  size = 'large',
}) => {
  return (
    <div
      className={`${styles.card} ${hasTabs && styles.noTopBorderRadius} ${
        styles[size]
      }`}
    >
      <header>
        {title && <h4>{title}</h4>}

        {description1 && (
          <div className={styles.descriptions}>
            <span>{description1 || ''}</span>
            <span>{description2 || ''}</span>
          </div>
        )}

        {(description1 || action) && (
          <div className={styles.action}>{action || ''}</div>
        )}
      </header>

      <div className={`${styles.content} ${className || ''}`}>{children}</div>
    </div>
  )
}

export default Card
