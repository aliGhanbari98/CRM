// modules
import React from 'react'
import { connect } from 'react-redux'
// components
import SegmentPicker from 'pages/campaigns/components/segment_picker/segment_picker'
import { BasicInput, DateInput, Select, CheckBox } from 'base/inputs'
// helpers
import inputsOptions from 'helpers/InputsOptions'
// actions
import {
  dispatchSetFilterData,
  dispatchSetFilterSelected,
} from 'redux/action-creators/filter'
// style
import styles from './filter.module.scss'

const fields = [
  { label: 'First Name', value: 'First Name' },
  { label: 'Last Name', value: 'Last Name' },
  { label: 'Gender', value: 'Gender' },
  { label: 'Date Of Birth', value: 'Date Of Birth' },
  { label: 'Age', value: 'Age' },
]

const Tag = ({ label, value }) => (
  <div>
    <span>{`${label} : ${value}`}</span>
  </div>
)

const Filter = ({ data, multipleGenderSelection }) => {
  const inputsMap = {
    'First Name': (
      <BasicInput
        noMargin
        value={data['First Name'].value}
        onChange={(value) =>
          dispatchSetFilterData({ key: 'First Name', value })
        }
      />
    ),
    'Last Name': (
      <BasicInput
        noMargin
        value={data['Last Name'].value}
        onChange={(value) => dispatchSetFilterData({ key: 'Last Name', value })}
      />
    ),
    Gender: (
      <CheckBox
        multipleSelection
        items={inputsOptions.checkBox.Gender}
        onChange={(value) => dispatchSetFilterData({ key: 'Gender', value })}
      />
    ),
    'Date Of Birth': (
      <DateInput
        onChange={(value) =>
          dispatchSetFilterData({ key: 'Date Of Birth', value })
        }
        value={data['Date Of Birth'].value}
      />
    ),
    Age: (
      <div className={styles.ageContainer}>
        <Select
          options={inputsOptions.select.Period}
          onChange={(value) => dispatchSetFilterData({ key: 'Period', value })}
        />
        <Select
          options={inputsOptions.select.Age}
          onChange={(value) => dispatchSetFilterData({ key: 'Age', value })}
        />
      </div>
    ),
  }

  if (!data) return null
  const keys = Object.keys(data)
  const dataArray = keys.map((item) => {
    const { key, value } = data[item]
    return {
      [key]: { key, content: inputsMap[item], selected: false, value },
    }
  })

  const tags = keys.map((item) => {
    const { key, value, selected } = data[item]
    return {
      value: key === 'Age' ? `${data.Period.value} ${value}` : value,
      key,
      selected,
    }
  })

  const reducedData = dataArray.reduce((obj, item) => ({ ...obj, ...item }), {})

  return (
    <div className={styles.filter}>
      <div className={styles.tags}>
        {tags.map(
          ({ selected, value, key }, index) =>
            selected && <Tag key={index} label={key} value={value} />
        )}
      </div>
      <div className={styles.items}>
        <SegmentPicker
          equalWidth
          fields={fields}
          data={reducedData}
          multipleSelection={multipleGenderSelection}
          onSelectionChange={(detail) => dispatchSetFilterSelected(detail)}
        />
      </div>
    </div>
  )
}

const mapStateToProps = ({ main: { filterData } }) => ({ data: filterData })

export default connect(mapStateToProps, null)(Filter)
