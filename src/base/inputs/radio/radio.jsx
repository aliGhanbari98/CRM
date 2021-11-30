// modules
import React, { useState, useEffect } from 'react'
// components
import { Radio } from '@atlaskit/radio'
// styles
import styles from './radio.module.scss'

const MyRadio = ({ label, items, onChange, checkedRatios }) => {
  const [ratios, setRatios] = useState([])

  useEffect(() => {
    setRatios(items.map((item) => checkedRatios.includes(item)))
  }, [])

  const uncheckOtherBoxes = (checkedBoxIndex) => {
    const newState = ratios.map((_, i) => i === checkedBoxIndex)
    setRatios(newState)
  }

  return (
    <div className={styles.radio}>
      {label && <label>{label}</label>}
      <div>
        {items.map((name, index) => (
          <div key={index}>
            <Radio
              isChecked={ratios[index]}
              value={name}
              label={name}
              onChange={(e) => {
                uncheckOtherBoxes(index)
                onChange(e.target.value)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyRadio
