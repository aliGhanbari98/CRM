/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// modules
import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// actions
import { dispatchSetOpenProfileCard } from 'redux/action-creators/profileCard'
// components
import OfficeBuildingFilledIcon from '@atlaskit/icon/glyph/office-building-filled'
import PersonIcon from '@atlaskit/icon/glyph/person'
import SettingsIcon from '@atlaskit/icon/glyph/settings'
import SignOutIcon from '@atlaskit/icon/glyph/sign-out'
import { Button } from 'base/buttons'
// style
import styles from './profile_card.module.scss'

const Field = ({ children }) => <div className={styles.field}>{children}</div>

const onLogOutClick = () => {
  dispatchSetOpenProfileCard(false)
  navigate('/login')
  localStorage.clear()
}
const onSettingsClick = () => {
  dispatchSetOpenProfileCard(false)
  navigate('/account')
}

const handleProfileExpantion = () => {
  dispatchSetOpenProfileCard(false)
}

const ProfileCard = ({ user: { full_name, work, avatar_url } }) => {
  if (!full_name) return null

  return (
    <div className={styles.profileCard}>
      <div className={styles.info}>
        <div className={styles.names}>
          <Field>
            <OfficeBuildingFilledIcon />
            <span>{work.company_name}</span>
          </Field>
          <Field>
            <PersonIcon />
            <span>{full_name}</span>
          </Field>
        </div>
        <div className={styles.photo}>
          <img
            onClick={handleProfileExpantion}
            alt="user-profile"
            className={styles.profilePhoto}
            src={avatar_url || '/img/ali.jpg'}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Field>
          <SettingsIcon />
          <Button
            appearance="subtle-link"
            label="Settings"
            onClick={onSettingsClick}
          />
        </Field>
        <Field>
          <SignOutIcon />
          <Button
            appearance="subtle-link"
            label="Log out"
            onClick={onLogOutClick}
          />
        </Field>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.main.user,
})

export default connect(mapStateToProps, null)(ProfileCard)
