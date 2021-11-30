/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

import styles from './colorPicker.module.scss'

const ColorPicker = ({ onChange, value }) => {
  const [state, setState] = useState({
    displayColorPicker: false,
  })

  let { rgb } = value

  // default rgb if it was not loaded
  if (!rgb.r) rgb = { a: 1, b: 115, g: 155, r: 212 }

  const backgroundRGB = () =>
    rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` : ''

  const handleClick = () => {
    setState({
      displayColorPicker: !state.displayColorPicker,
    })
  }

  const handleClose = () => {
    setState({ displayColorPicker: false })
  }

  const handleChange = (color) => {
    onChange({ rgb: color.rgb, hex: color.hex.toUpperCase() })
  }

  return (
    <div className={styles.container}>
      <div className={styles.colorPicker}>
        <div
          onClick={handleClick}
          className={styles.color}
          style={{
            background: backgroundRGB(),
          }}
        />
        <span>{value.hex || ''}</span>
      </div>
      {state.displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={rgb} onChangeComplete={handleChange} />
        </div>
      ) : null}
    </div>
  )
}

export default ColorPicker
