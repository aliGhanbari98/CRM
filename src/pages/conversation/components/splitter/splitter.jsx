// modules
import React from 'react'
// style
import styles from './splitter.module.scss'

const TextBox = ({ date, status }) => {
  return (
    <div className={styles.splitter}>
      <span />
      <div>
        <span className={styles.date}>{date}</span>
        <span className={styles[status]}>{status}</span>
      </div>
      <span />
    </div>
  )
}

export default TextBox
