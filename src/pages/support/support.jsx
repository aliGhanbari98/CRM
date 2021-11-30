// modules
import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from '@reach/router'
// components
import { BreadCrumbs } from 'base/ui'
import { Dashboard, AllTickets } from './components'
// style
import styles from './support.module.scss'

const Support = ({ tabs }) => {
  const { pathname } = useLocation()
  const bcItems = pathname.split('/').slice(0, 2)
  return (
    <main className={styles.support}>
      <BreadCrumbs items={bcItems} tabs={tabs} />
      {pathname === '/support/dashboard' && <Dashboard />}
      {pathname === '/support/all-tickets' && <AllTickets />}
    </main>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Support)
