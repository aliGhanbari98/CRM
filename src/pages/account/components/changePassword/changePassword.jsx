// modules
import React, { useState } from 'react'
// components
import { Button } from 'base/buttons'
import { PasswordInput } from 'base/inputs'
// queries
import { UserQueries } from 'queries'
// style
import styles from './changePassword.module.scss'

const AccountSettings = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const onSaveClick = () => {
    if (repeatedPassword !== newPassword) return
    UserQueries.updatePasswordReq({ newPassword, oldPassword })
  }

  return (
    <div className={styles.changePassword}>
      <PasswordInput
        value={oldPassword}
        onChange={setOldPassword}
        label="Old password"
      />
      <PasswordInput
        value={newPassword}
        onChange={setNewPassword}
        label="New password"
      />
      <PasswordInput
        value={repeatedPassword}
        onChange={setRepeatedPassword}
        label="Retype password"
      />
      <div className={styles.buttonWrapper}>
        <Button onClick={onSaveClick} label="Save" />
      </div>
    </div>
  )
}

export default AccountSettings
