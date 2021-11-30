import React from 'react'
import EditorEditIcon from '@atlaskit/icon/glyph/editor/edit'
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play'
import EditorTextColorIcon from '@atlaskit/icon/glyph/editor/text-color'
import GraphLineIcon from '@atlaskit/icon/glyph/graph-line'
import VidPauseIcon from '@atlaskit/icon/glyph/vid-pause'
import styles from './index.module.scss'

const Accessors = ({ rowKey, rowProps }) => {
  switch (rowKey) {
    case 'upcoming_action':
      return (
        <div className={styles.actions}>
          <button type="button" onClick={rowProps.onEditClick}>
            <EditorEditIcon />
          </button>

          <button type="button" onClick={rowProps.onStartClick}>
            <VidPlayIcon />
          </button>

          <button type="button" onClick={rowProps.onStopClick}>
            <EditorTextColorIcon />
          </button>
        </div>
      )
    case 'running_action':
      return (
        <div className={styles.actions}>
          {/* TODO : add id to this path */}
          <button type="button" onClick={rowProps.onInsightClick}>
            <GraphLineIcon />
          </button>

          <button type="button" onClick={rowProps.onPauseClick}>
            <VidPauseIcon />
          </button>

          <button type="button" onClick={rowProps.onStopClick}>
            <EditorTextColorIcon />
          </button>
        </div>
      )
    case 'status':
      return (
        <span className={`${styles.status} ${styles[rowProps.status]}`}>
          {rowProps.status}
        </span>
      )
    default:
      return ''
  }
}

export default Accessors
