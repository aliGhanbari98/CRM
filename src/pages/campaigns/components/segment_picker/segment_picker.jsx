import React, { useState, useEffect } from 'react'
import { Button } from 'base/buttons'
import { Select } from 'base/inputs'
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from '@atlaskit/dropdown-menu'
import { Checkbox } from '@atlaskit/checkbox'
import AddIcon from '@atlaskit/icon/glyph/add'
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close'
import styles from './segment_picker.module.scss'

const SegmentPicker = ({ data, fields, onSelectionChange, equalWidth }) => {
  const [segments, setSegments] = useState([
    { label: 'Gender', value: 'Gender' },
  ])
  const [selectedSegments, setSelectedSegments] = useState([])
  const [segmentsData, setSegmentsData] = useState({
    Gender: {
      key: 'Gender',
      content: (
        <div className={styles.gender}>
          <Checkbox label="Men" />
          <Checkbox label="Women" />
          <Checkbox label="Other" />
        </div>
      ),
      selected: false,
    },
  })

  useEffect(() => {
    if (!data || !fields) return
    setSegments(fields)
    setSegmentsData(data)
  }, [])

  const handleSegmentsChange = (key, value) => {
    setSegmentsData((prevState) => {
      const prev = prevState
      prev[key].selected = value
      return { ...prev }
    })
  }

  const handleClick = (seg) => {
    setSelectedSegments((prevState) => {
      const prev = prevState
      if (segmentsData[seg].selected === false) {
        prev.push(segmentsData[seg])
        handleSegmentsChange(seg, true)
        return [...prev]
      }
      return prev
    })
    if (onSelectionChange) onSelectionChange({ key: seg, selected: true })
  }

  const handleRemove = (index, key) => {
    setSelectedSegments((prevState) => {
      const prev = prevState
      prev.splice(index, 1)
      handleSegmentsChange(key, false)
      return [...prev]
    })
    if (onSelectionChange) onSelectionChange({ key, selected: false })
  }

  return (
    <div className={styles.segmentPicker}>
      <div className={styles.segments}>
        {selectedSegments.map((seg, index) => (
          <div
            key={index}
            className={`${styles.segment} ${equalWidth && styles.equalWidth}`}
          >
            <div className={styles.label}>{seg.key}</div>
            {/* <Select
              options={[{ label: seg.key, value: seg.key }]}
              placeholder={seg.key}
            /> */}
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => handleRemove(index, seg.key)}
            >
              <EditorCloseIcon />
            </button>
            <div className={styles.content}>{data[seg.key].content}</div>
          </div>
        ))}
      </div>

      <DropdownMenu
        trigger={
          <Button
            className={styles.button}
            appearance="subtle"
            label={<AddIcon />}
          />
        }
        shouldFitContainer
      >
        <DropdownItemGroup>
          {segments.map((seg, index) => (
            <DropdownItem
              key={`${seg.value}-${index}`}
              onClick={() => handleClick(seg.label)}
            >
              {seg.label}
            </DropdownItem>
          ))}
        </DropdownItemGroup>
      </DropdownMenu>
    </div>
  )
}

export default SegmentPicker
