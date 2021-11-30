// modules
import React from 'react'
// components
import Page, { Grid, GridColumn } from '@atlaskit/page'
import { BasicInput, PhoneInput } from '../../../../base/inputs'
// style
import styles from './section.module.scss'

export default ({
  fullName,
  setFullName,
  setJobPosition,
  setEmail,
  setCountryCode,
  countryCode,
  setPhone,
  jobPosition,
  email,
  phone,
}) => {
  return (
    <div className={styles.section}>
      <span>Personal information</span>
      <Page>
        <Grid spacing="compact">
          <GridColumn medium={5.5}>
            <BasicInput
              type="text"
              label="Full Name"
              value={fullName}
              name="fullName"
              placeHolder="Aria Stark"
              onChange={setFullName}
            />
          </GridColumn>
          <GridColumn medium={1} />
          <GridColumn medium={5.5}>
            <BasicInput
              type="text"
              label="Job Position"
              value={jobPosition}
              name="jobPosition"
              placeHolder="Manager"
              onChange={setJobPosition}
            />
          </GridColumn>
        </Grid>

        <Grid spacing="compact">
          <GridColumn medium={5.5}>
            <BasicInput
              type="email"
              label="Email Address"
              value={email}
              name="email"
              placeHolder="Aria Stark"
              onChange={setEmail}
            />
          </GridColumn>
          <GridColumn medium={0.25} />
          <GridColumn medium={5.5}>
            <div className={styles.phoneInput}>
              <PhoneInput
                label="Phone Number"
                countryCodeValue={countryCode}
                value={phone}
                name="phone"
                placeHolder="9039991122"
                onChange={setPhone}
                onCountryCodeChange={setCountryCode}
              />
            </div>
          </GridColumn>
        </Grid>
      </Page>
    </div>
  )
}
