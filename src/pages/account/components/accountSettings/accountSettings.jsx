// modules
import React, { useState, useEffect } from 'react'
// components
import Toggle from '@atlaskit/toggle'
import { Button } from 'base/buttons'
// queries
import { UserQueries } from 'queries'
// style
import styles from './accountSettings.module.scss'

const AccountSettings = ({ accountSettings }) => {
  const { two_factor_login, notification } = accountSettings

  const [loginTwoFactors, setLoginTwoFactors] = useState()
  const [emailNotification, setEmailNotification] = useState()

  useEffect(() => {
    setLoginTwoFactors(two_factor_login)
    setEmailNotification(notification)
  }, [])

  const onSaveClick = () => {
    UserQueries.updateUserSettingsReq({ loginTwoFactors, emailNotification })
  }

  return (
    <div className={styles.accountSettings}>
      <h4>Notification setting</h4>
      <div className={styles.swithces}>
        <div>
          <span>Login two-facors</span>
          <Toggle
            id="toggle-large"
            size="large"
            defaultChecked={two_factor_login}
            value="value"
            onChange={() => {
              setLoginTwoFactors(!loginTwoFactors)
            }}
          />
        </div>
        <div>
          <span>Email notification</span>
          <Toggle
            id="toggle-large"
            size="large"
            defaultChecked={notification}
            value="value"
            onChange={() => {
              setEmailNotification(!emailNotification)
            }}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button label="Save" onClick={onSaveClick} />
      </div>
    </div>
  )
}

export default AccountSettings
