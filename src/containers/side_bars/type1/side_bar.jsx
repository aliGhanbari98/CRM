// modules
import React from 'react'
import { connect } from 'react-redux'

// navigation routes
import NavigationRoutes from 'containers/master_page/routes'

// components
import Item from './item/item'

// style
import styles from './side_bar.module.scss'

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {NavigationRoutes &&
        NavigationRoutes.map(
          (item, index) => item.isInSideBar && <Item key={index} {...item} />
        )}
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
