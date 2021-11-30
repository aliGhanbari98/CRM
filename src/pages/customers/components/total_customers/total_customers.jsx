import React from 'react'
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group'
import EditorAddIcon from '@atlaskit/icon/glyph/editor/add'
import ArrowUpIcon from '@atlaskit/icon/glyph/arrow-up'
import styles from './total_customers.module.scss'

const TotalCustomers = () => {
  return (
    <div className={styles.totalCustomers}>
      <header>
        <span>12599</span>
      </header>
      <footer>
        <div className={styles.icon}>
          <PeopleGroupIcon />
        </div>
        <div className={styles.details}>
          <span className={`${styles.icon} ${styles.up}`}>
            <EditorAddIcon />
          </span>
          <div className={styles.number}>
            <div className={`${styles.percent} ${styles.up}`}>
              <span>12%</span>
              <ArrowUpIcon />
            </div>
            <h3>239</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TotalCustomers
