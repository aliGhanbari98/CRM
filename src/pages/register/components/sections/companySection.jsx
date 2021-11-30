// modules
import React from 'react'
// components
import Page, { Grid, GridColumn } from '@atlaskit/page'
import { BasicInput, Select } from 'base/inputs'
// input options
import inputsOptions from 'helpers/InputsOptions'
// style
import styles from './section.module.scss'

export default ({
  setCompanyName,
  setIndustry,
  setCountry,
  setCity,
  companyName,
  // industry,
  // country,
  // city,
}) => {
  return (
    <div className={`${styles.section} ${styles.companySection}`}>
      <span>Complany information</span>
      <Page>
        <Grid spacing="compact">
          <GridColumn medium={5.5}>
            <BasicInput
              type="text"
              label="Company name"
              value={companyName}
              name="companyName"
              placeHolder="calistu"
              onChange={setCompanyName}
            />
          </GridColumn>
          <GridColumn medium={1} />
          <GridColumn medium={5.5}>
            <div className={styles.select}>
              <Select
                label="Industry"
                options={inputsOptions.select.Industry}
                onChange={setIndustry}
              />
            </div>
          </GridColumn>
        </Grid>

        <Grid spacing="compact">
          <GridColumn medium={5.5}>
            <div className={styles.select}>
              <Select
                label="Country"
                options={inputsOptions.select.Country}
                onChange={setCountry}
              />
            </div>
          </GridColumn>
          <GridColumn medium={1} />
          <GridColumn medium={5.5}>
            <div className={styles.select}>
              <Select
                label="City"
                options={inputsOptions.select.City}
                onChange={setCity}
              />
            </div>
          </GridColumn>
        </Grid>
      </Page>
    </div>
  )
}
