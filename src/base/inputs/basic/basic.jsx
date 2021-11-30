// modules
import React from 'react'
// components
import Textfield from '@atlaskit/textfield'
// style
import styles from './basic.module.scss'

export default ({
  fit,
  Icon,
  type,
  label,
  value,
  name,
  onChange,
  placeHolder,
  ElemAfterInput,
  ElemBeforeInput,
  noMargin,
  templateName,
  disabled,
}) => {
  return (
    <div
      className={`${styles.basicInput} ${noMargin ? styles.noMargin : ''} ${
        templateName && styles.templateName
      }`}
    >
      {label && (
        <label>
          {Icon && <Icon primaryColor="#7A869A" />}
          {label}
        </label>
      )}
      <Textfield
        className={!templateName ? styles.textField : styles.templateName}
        placeholder={placeHolder || ''}
        type={type}
        value={value}
        name={name}
        width={fit ? '100%' : '240px'}
        isDisabled={disabled}
        onChange={(e) => {
          if (typeof onChange === 'function') onChange(e.target.value)
        }}
        elemAfterInput={ElemAfterInput}
        elemBeforeInput={ElemBeforeInput}
      />
    </div>
  )
}
