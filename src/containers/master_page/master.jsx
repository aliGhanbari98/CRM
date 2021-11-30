// modules
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// actions
import { dispatchSetSelectedPage } from 'redux/action-creators/selectedPage'
// queries
import { UserQueries } from 'queries'
// components
import { HeaderType1, HeaderType2 } from '../headers'
import { SideBarType1, SideBarType2 } from '../side_bars'
// style
import styles from './master.module.scss'

const Master = ({ children, routes, location: { pathname } }) => {
  if (pathname === '/') navigate('/dashboard/*')
  if (pathname === '/customers/*') navigate('/customers/segment')
  if (pathname === '/campaigns/*') navigate('/campaigns/dashboard')
  if (pathname === '/support/*') navigate('/support/dashboard')
  if (pathname === '/channels/*') navigate('/channels/dashboard')
  if (pathname === '/channels/email') navigate('/channels/email/insight')
  if (pathname === '/channels/SMS') navigate('/channels/SMS/insight')

  const splitted = pathname.split('/')
  const { header, sideBar, hasNoSideBar, label, hasNoHeader } =
    routes.find(({ path }) => path.includes(splitted[1])) || {}
  useEffect(() => {
    dispatchSetSelectedPage(label)
    // UserQueries.getProfileReq()
  }, [])
  return (
    <div className={styles.master}>
      {!hasNoHeader && (header === 'type2' ? <HeaderType2 /> : <HeaderType1 />)}
      <div className={styles.body}>
        {!hasNoSideBar && (
          <div className={styles.sideBar}>
            {sideBar === 'type2' ? <SideBarType2 /> : <SideBarType1 />}
          </div>
        )}
        <div id="master-container" className={styles.container}>
          {children}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Master)
