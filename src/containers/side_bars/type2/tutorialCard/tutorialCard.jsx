// modules
import React from 'react'
import { connect } from 'react-redux'

// components

// style
import styles from './tutorialCard.module.scss'

const SideBar = () => {
  return (
    <div className={styles.tutorialCard}>
      <div className={styles.top}>
        <h3>Hint :</h3>
        <p>
          To change or edit, select each element for more inforamtion, watch
          this video
        </p>
      </div>
      <div className={styles.bottom}>
        <a href="www.barcanews.org">
          <img alt="youtube" src="/img/youtube.svg" />
        </a>
        <a href="www.barcanews.org">
          <h3>Watch Video</h3>
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
