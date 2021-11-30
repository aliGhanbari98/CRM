// modules
import React from 'react'
// components
import EditorSearchIcon from '@atlaskit/icon/glyph/editor/search'
import BasicInput from '../basic/basic'
// style
import styles from './search.module.scss'

export default (props) => {
  return (
    <BasicInput
      {...props}
      name="password"
      noMargin
      ElemBeforeInput={
        <button className={styles.searchButton} type="button">
          <EditorSearchIcon className={styles.eyeIcon} primaryColor="#7A869A" />
        </button>
      }
    >
      hello
    </BasicInput>
  )
}
