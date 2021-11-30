/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// modules
import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// actions
import { dispatchSetOpenProfileCard } from 'redux/action-creators/profileCard'
// components
import NotificationIcon from '@atlaskit/icon/glyph/notification'
import { Button } from 'base/buttons'
import ProfileCard from './profile_card/profile_card'

// style
import styles from './header.module.scss'

const onSupportClick = () => {
  navigate('/support/*')
}

const Header = ({ profileCardIsOpen }) => {
  const handleProfileExpantion = () => {
    dispatchSetOpenProfileCard(!profileCardIsOpen)
  }

  return (
    <div className={styles.header}>
      <Button label="CRM" />
      <div className={`header-left ${styles.left}`} />
      <div className={`header-right ${styles.right}`}>
        <img
          onClick={handleProfileExpantion}
          alt="user-icon"
          className="center"
          src="/img/ali.jpg"
        />
        <div className="center">
          <NotificationIcon />
        </div>
        {/* <Button label="Payment" appearance="subtle" />
        <Button onClick={onSupportClick} label="Support" appearance="subtle" /> */}
        <Button
          label="Create campaign"
          onClick={() => navigate('/campaigns/create')}
          width={185}
          height={36}
          fontSize={18}
          fontWeight={500}
        />
      </div>
      {profileCardIsOpen && (
        <div className={styles.profileCard}>
          <ProfileCard />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  profileCardIsOpen: state.view.profileCard.isOpen,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
