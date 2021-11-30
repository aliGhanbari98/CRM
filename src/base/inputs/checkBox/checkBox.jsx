// modules
import React, { useState, useEffect } from 'react'
// components
import { Checkbox } from '@atlaskit/checkbox'
// styles
import styles from './checkBox.module.scss'

const MyCheckBox = ({ label, items, onChange, multipleSelection }) => {
  const [checkedBoxes, setCheckedBoxes] = useState([])

  useEffect(() => {
    setCheckedBoxes(items.map(() => false))
  }, [])

  const handleBoxesSelection = (checkedBoxIndex) => {
    const newState = checkedBoxes.map((selected, i) =>
      i === checkedBoxIndex && selected
        ? !selected
        : (multipleSelection && selected) || i === checkedBoxIndex
    )
    setCheckedBoxes(newState)
    return newState
  }

  const concatSelectedValues = (state) => {
    let result = ''
    items.forEach((item, i) => {
      if (state[i]) result += ` ${item}`
    })
    return result
  }

  return (
    <div className={styles.checkBox}>
      {label && <label>{label}</label>}
      <div>
        {items.map((name, index) => (
          <div key={index}>
            <Checkbox
              isChecked={checkedBoxes[index]}
              value={name}
              label={name}
              onChange={(e) => {
                const newState = handleBoxesSelection(index)
                onChange(concatSelectedValues(newState))
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCheckBox
