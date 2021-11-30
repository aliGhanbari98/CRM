// modules
import React, { useState } from 'react'
// components
import CalendarFilledIcon from '@atlaskit/icon/glyph/calendar-filled'
import { Calendar } from 'base/ui'
import BasicInput from '../basic/basic'
// style
import styles from './date.module.scss'

export default ({ value, label, onChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const Button = () => (
    <button
      type="button"
      onClick={() => {
        if (disabled) return
        setIsOpen(!isOpen)
      }}
    >
      <CalendarFilledIcon primaryColor="#7A869A" />
    </button>
  )

  const formatDate = (date) => {
    if (date) {
      const formattedDate = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }).format(date)
      return formattedDate
    }
    return ''
  }
  return (
    <div className={disabled && styles.disabled}>
      <BasicInput
        noMargin
        label={label}
        value={value}
        ElemAfterInput={<Button />}
      />
      {isOpen && (
        <Calendar
          selectionType="single"
          allowEarlierDates
          onSelect={(e) => {
            setIsOpen(!isOpen)
            onChange(formatDate(e._d))
          }}
        />
      )}
    </div>
  )
}
