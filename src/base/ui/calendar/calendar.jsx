import React from 'react'
import DateRangePicker from 'react-daterange-picker'
import styles from './calendar.module.scss'
import 'react-daterange-picker/dist/css/react-calendar.css'

const Calendar = ({
  value,
  onSelect,
  selectionType,
  allowEarlierDates = false,
}) => {
  return (
    <div className={styles.calendar}>
      <DateRangePicker
        firstOfWeek={1}
        numberOfCalendars={1}
        selectionType={selectionType || 'range'}
        minimumDate={!allowEarlierDates && new Date()}
        value={value}
        onSelect={onSelect}
      />
    </div>
  )
}

export default Calendar
