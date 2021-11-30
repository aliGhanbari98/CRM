/* eslint-disable react/no-unescaped-entities */
// modules
import React, { useState } from 'react'
// queries
import { UserQueries } from 'queries'
// helpers
import inputsOptions from 'helpers/InputsOptions'
// components
import { Button } from 'base/buttons'
import { Select, BasicInput } from 'base/inputs'
import { Modal } from 'base/ui'
import ChangePassword from '../changePassword/changePassword'

// style
import styles from './profileSettings.module.scss'

const ProfileSettings = ({ profileSettings }) => {
  const {
    full_name,
    work: { job_position, company_name, industry, country, city, address },
  } = profileSettings

  const [fullName, setFullName] = useState({ value: '', changed: false })
  const [jobPosition, setJobPosition] = useState({
    value: '',
    changed: false,
  })
  const [changePasswordIsOpen, setChangePasswordIsOpen] = useState(false)

  const onSaveClick = () => {
    UserQueries.updateProfileReq({
      fullName: fullName.value,
      jobPosition: jobPosition.value,
    })
  }

  return (
    <div className={styles.profileSettings}>
      <div className={styles.formSection}>
        <div className={styles.header}>
          <h4>Notification setting</h4>
          <span>
            (You can't change some information directly, you should send a
            ticket)
          </span>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <BasicInput
              value={fullName.value || (!fullName.changed ? full_name : '')}
              label="Full name"
              onChange={(value) => setFullName({ value, changed: true })}
            />
          </div>
          <div className={styles.inputContainer}>
            <BasicInput disabled value={null} label="Phonenumber" />
          </div>
          <div className={styles.inputContainer}>
            <BasicInput disabled value={null} label="Email" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <Select
              disabled
              defaultValue={{ label: country, value: country }}
              label="Country"
              options={inputsOptions.select.Country}
            />
          </div>
          <div className={styles.inputContainer}>
            <Select
              disabled
              defaultValue={{ label: city, value: city }}
              label="City"
              options={inputsOptions.select.City}
            />
          </div>
          <div className={styles.inputContainer}>
            <Button
              onClick={() => setChangePasswordIsOpen(!changePasswordIsOpen)}
              label="Change password"
              fit
            />
          </div>
        </div>
        <Modal
          isOpen={changePasswordIsOpen}
          onClose={() => setChangePasswordIsOpen(false)}
          width={290}
        >
          <div className={styles.uploaderContainer}>
            <ChangePassword />
          </div>
        </Modal>
      </div>
      <div className={styles.formSection}>
        <div className={styles.header}>
          <h4>Company setting</h4>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <BasicInput disabled label="Company name" value={company_name} />
          </div>
          <div className={styles.inputContainer}>
            <BasicInput
              value={
                jobPosition.value || (!jobPosition.changed ? job_position : '')
              }
              label="Job poition"
              onChange={(value) => setJobPosition({ value, changed: true })}
            />
          </div>
          <div className={styles.inputContainer}>
            <BasicInput label="Work number" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <Select
              disabled
              defaultValue={{ value: industry, label: industry }}
              label="Industry"
              options={inputsOptions.select.Industry}
            />
          </div>
          <div className={styles.addressContainer}>
            <BasicInput disabled label="Address" noMargin value={address} />
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button label="Save" onClick={onSaveClick} />
      </div>
    </div>
  )
}

export default ProfileSettings
