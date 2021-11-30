// modules
import React from 'react'
import AtlaskitSelect from '@atlaskit/select'
// style
import styles from './select.module.scss'

const Select = ({
  className,
  options,
  placeholder,
  inputValue,
  components,
  label,
  onChange,
  defaultValue,
}) => {
  const defaultOption = options.find(({ isDefault }) => !!isDefault)
  return (
    <div className={className || ''}>
      {label && <label>{label}</label>}
      <AtlaskitSelect
        className={styles.select}
        options={options}
        placeholder={placeholder}
        inputValue={inputValue}
        selectedItem={defaultValue}
        defaultValue={defaultValue || defaultOption}
        components={components}
        onChange={(e) => onChange && onChange(e.value)}
      />
    </div>
  )
}

export default Select
