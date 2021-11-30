// modules
import React from 'react'
// components
import FieldTextArea from '@atlaskit/field-text-area'
// style
import styles from './textarea.module.scss'

export default React.forwardRef(
  (
    {
      className,
      type,
      label,
      value,
      name,
      onChange,
      placeHolder,
      ElemAfterInput,
      ElemBeforeInput,
      noMargin,
    },
    ref
  ) => {
    return (
      <div
        className={`${styles.areaInput} ${
          noMargin ? styles.noMargin : ''
        } ${className}`}
      >
        <FieldTextArea
          ref={ref}
          className={styles.textArea}
          placeholder={placeHolder || ''}
          label={label}
          type={type}
          value={value || ''}
          name={name}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          elemAfterInput={ElemAfterInput}
          elemBeforeInput={ElemBeforeInput}
        />
      </div>
    )
  }
)
