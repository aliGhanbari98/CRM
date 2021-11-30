import React from 'react'
import ArrowUpIcon from '@atlaskit/icon/glyph/arrow-up'
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as FeedbackIcon } from 'assets/icons/feedback.svg'
import styles from './campaign_summery.module.scss'

const TotalCustomers = ({ totalCampaigns, convertionRate }) => {
  const convertionRateIncrease = 20
  return (
    <div className={styles.totalCustomers}>
      <header>
        <span>{totalCampaigns}</span>
        <span>Total Campaigns</span>
      </header>
      <footer>
        <div className={styles.icon}>
          <FeedbackIcon />
        </div>
        <div className={styles.details}>
          <span className={`${styles.description}`}>Conversion rate</span>
          <div className={styles.number}>
            <div className={`${styles.percent} ${styles.up}`}>
              <span>{`${convertionRateIncrease}%`}</span>
              <ArrowUpIcon />
            </div>
            <h3>{`${convertionRate}%`}</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TotalCustomers
