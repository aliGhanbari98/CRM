import React from 'react'
import styles from './table_tabs.module.scss'

const TableTabs = ({ items, activeTab, setActiveTab }) => {
  return (
    <div className={styles.tableTabs}>
      {items.map(({ onClick, title }, index) => (
        <button
          key={index}
          type="button"
          className={activeTab === index ? styles.active : ''}
          onClick={() => {
            onClick()
            setActiveTab(index)
          }}
        >
          {title}
        </button>
      ))}
    </div>
  )
}

export default TableTabs
