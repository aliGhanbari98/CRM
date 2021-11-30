import React from 'react'
import styles from './tabs.module.scss'

const Tabs = ({
  tabs = [],
  activeTab = { index: 0 },
  setActiveTab,
  noBorderBottom,
  small,
}) => {
  return (
    <div className={`${styles.tabs} ${noBorderBottom && styles.noBorder}`}>
      {tabs.map((tab, index) => (
        <button
          className={`${styles.tab} ${
            index === activeTab.index ? styles.selected : ''
          } ${tab.disabled ? styles.disabled : ''} ${small && styles.small}`}
          type="button"
          key={index}
          onClick={() => {
            if (setActiveTab) setActiveTab({ title: tab.title, index })
            if (tab.onClick) tab.onClick()
          }}
        >
          <span>{tab.title}</span>
        </button>
      ))}
    </div>
  )
}

export default Tabs
