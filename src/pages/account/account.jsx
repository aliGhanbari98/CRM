// modules
import React from 'react'
import { connect } from 'react-redux'
// components
import { BreadCrumbs, Card } from 'base/ui'
import ProfileSettings from './components/profileSettings/profileSettings'
import AccountSettings from './components/accountSettings/accountSettings'
// style
import styles from './account.module.scss'

const Account = ({ profile }) => {
  if (!profile.full_name) return null

  const { settings: accountSettings, ...rest } = profile || {}

  return (
    <main className={styles.account}>
      <BreadCrumbs defaultSelectedBC="Profile settings" />
      <section>
        <Card>
          <ProfileSettings profileSettings={rest} />
        </Card>
        <h4>Account setting</h4>
        <Card>
          <AccountSettings accountSettings={accountSettings} />
        </Card>
      </section>
    </main>
  )
}

const mapStateToProps = (state) => ({
  profile: state.main.user,
})
export default connect(mapStateToProps, null)(Account)
