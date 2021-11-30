// modules
import React from 'react'
// style
import styles from './thankYou.module.scss'

const ThankYou = () => (
  <div className={styles.thankYou_page}>
    <img alt="thank-you" src="/img/support.svg" />
    <span className={styles.thankYou}> Thank you</span>
    <span>Our supports will call you Soon</span>
  </div>
)

export default ThankYou
