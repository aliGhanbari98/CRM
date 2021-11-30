// modules
import React from 'react'
// components
import Button from '../button/button'
// style
import styles from './authButtons.module.scss'

export default ({ left, right }) => {
  return (
    <div
      className={`${styles.authButtons} ${
        !left.label && right.label ? styles.singleRight : ''
      }`}
    >
      {left.label && (
        <Button
          appearance="subtle-link"
          spacing="none"
          onClick={left.onClick}
          disabled={left.disabled}
          label={left.label}
        />
      )}
      {right.label && (
        <Button
          appearance="subtle-link"
          spacing="none"
          onClick={right.onClick}
          disabled={right.disabled}
          label={right.label}
        />
      )}
    </div>
  )
}
