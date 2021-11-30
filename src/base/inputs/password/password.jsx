// modules
import React from 'react'
// components
import WatchFilledIcon from '@atlaskit/icon/glyph/watch-filled'
import BasicInput from '../basic/basic'
// style
import styles from './password.module.scss'

export default (props) => {
  const [type, setType] = React.useState('password')

  return (
    <BasicInput
      {...props}
      type={type}
      name="password"
      ElemAfterInput={
        <div
          className={styles.seePassword}
          role="button"
          tabIndex="0"
          onMouseDown={() => {
            setType('text')
          }}
          onMouseUp={() => {
            setType('password')
          }}
        >
          <WatchFilledIcon className={styles.eyeIcon} primaryColor="#7A869A" />
        </div>
      }
    >
      hello
    </BasicInput>
  )
}
