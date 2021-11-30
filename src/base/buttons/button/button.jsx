// modules
import React from 'react'
// components
import Button from '@atlaskit/button'
// style
import styles from './button.module.scss'

export default ({
  className,
  onClick,
  appearance,
  border,
  spacing,
  fit,
  label,
  icon,
  disabled,
}) => {
  return (
    <div className={`${styles.container} ${className || ''} center`}>
      <Button
        className={`${styles.button} ${styles[appearance] || ''} ${
          border ? styles.border : ''
        }`}
        onClick={onClick}
        appearance={appearance || 'primary'}
        spacing={spacing}
        shouldFitContainer={fit}
        iconAfter={icon}
        disabled={disabled}
      >
        {label}
      </Button>
    </div>
  )
}
