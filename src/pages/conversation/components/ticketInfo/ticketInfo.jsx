// modules
import React from 'react'
// style
import styles from './ticketInfo.module.scss'

const TicketInfo = ({ items }) => {
  return (
    <div className={styles.ticketInfo}>
      <div className={styles.icon}>
        <img alt="info" src="/img/blue_info.svg" />
      </div>
      <div className={styles.items}>
        {items.map(({ title, value }) => (
          <div>
            <span className={styles.bold}>{`${title}: `}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketInfo
