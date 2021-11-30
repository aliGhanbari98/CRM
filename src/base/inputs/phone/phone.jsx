// modules
import React from 'react'
// helpers
import inputsOptions from 'helpers/InputsOptions'
// components
import Select from '../select/select'
import BasicInput from '../basic/basic'
import styles from './phone.module.scss'

export default (props) => {
  const { label, onCountryCodeChange, countryCodeValue } = props
  return (
    <div className={styles.phone}>
      {label && <label>{label}</label>}
      <div className={styles.inputWrapper}>
        <Select
          className={styles.select}
          value={countryCodeValue}
          onChange={onCountryCodeChange}
          options={inputsOptions.select.CountryCodes}
        />
        <BasicInput {...props} label="" type="number" name="phone" fit noMargin>
          hello
        </BasicInput>
      </div>
    </div>
  )
}
