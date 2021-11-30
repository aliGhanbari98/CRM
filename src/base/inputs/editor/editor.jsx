/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
// modules
import React from 'react'
// components
import Select from '@atlaskit/select'
import ColorPicker from 'base/inputs/colorPicker/colorPicker'
// actions
import {
  dispatchSetTemplateSettings,
  dispatchToggleSocialMedia,
} from 'redux/action-creators/template.actinos'
// style
import styles from './editor.module.scss'

const mapSize = {
  square: '25px',
  sm: '70px',
  md: '110px',
  lr: '130px',
  fit: '100%',
}

const CustomizedSelect = ({ options, placeHolder, size, field, subField }) => (
  <Select
    className={size === 'fit' && styles.fitSelect}
    options={options}
    spacing="compact"
    classNamePrefix="editor_select"
    placeholder={placeHolder}
    onChange={(item) =>
      dispatchSetTemplateSettings({ field, subField, newValue: item.value })
    }
    styles={{
      control: (base) => ({
        ...base,
        width: mapSize[size],
        minHeight: '27px',
        height: '27px',
      }),
      placeholder: (base) => ({
        ...base,
        fontSize: '10px',
        color: '#7a869a',
      }),
    }}
  />
)

const Input = ({
  hasBorder,
  size,
  value,
  placeHolder,
  field,
  subField,
  isSocialMediaLink,
  socialMediaIndex,
}) => {
  return (
    <input
      className={hasBorder && styles.widthBorder}
      style={{ width: mapSize[size] }}
      value={value}
      onChange={(e) =>
        isSocialMediaLink
          ? dispatchToggleSocialMedia({
              field: 'link',
              index: socialMediaIndex,
              newValue: e.target.value,
            })
          : dispatchSetTemplateSettings({
              field,
              subField,
              newValue: e.target.value,
            })
      }
      placeholder={placeHolder}
    />
  )
}

const CustomizedColorPicker = ({ value, field, subField }) => (
  <ColorPicker
    value={value}
    onChange={(color) =>
      dispatchSetTemplateSettings({
        field,
        subField,
        newValue: color,
      })
    }
  />
)

export default (props) => {
  const { isSelect, isColorPicker, spaceBetween, size, label } = props
  return (
    <div
      className={`${styles.body} ${spaceBetween && styles.spaceBetween}`}
      style={{ width: mapSize[size] === '100%' && '100%' }}
    >
      {label && <label>{label}</label>}
      {isSelect ? (
        <CustomizedSelect {...props} />
      ) : isColorPicker ? (
        <CustomizedColorPicker {...props} />
      ) : (
        <Input {...props} />
      )}
    </div>
  )
}
