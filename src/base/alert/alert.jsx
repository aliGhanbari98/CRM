// modules
import React from 'react'
import { connect } from 'react-redux'
// components
import { Button } from 'base/buttons'
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle'
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error'
import EditorWarningIcon from '@atlaskit/icon/glyph/editor/warning'
import InfoIcon from '@atlaskit/icon/glyph/info'
// actions
import { dispatchSetAlertData } from 'redux/action-creators/alert'
// styles
import styles from './alert.module.scss'

const modesMap = {
  success: {
    icon: <CheckCircleIcon primaryColor="green" size="medium" />,
  },
  warning: {
    icon: <EditorWarningIcon primaryColor="white" size="medium" />,
  },
  danger: {
    icon: <EditorErrorIcon primaryColor="white" size="medium" />,
  },
  info: {
    icon: <InfoIcon primaryColor="white" size="medium" />,
  },
}

const closeAlert = () => {
  dispatchSetAlertData({ isOpen: false })
}

const Alert = ({ isOpen, mode, title, text }) => {
  return isOpen ? (
    <div className={styles.alert}>
      <div
        className={`${styles.main} ${styles[mode]}`}
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {title && (
          <div className={styles.header}>
            {mode && modesMap[mode].icon}
            <span className={styles.title}>{title}</span>
          </div>
        )}
        <div className={styles.body}>{text}</div>
        <div className={styles.footer}>
          <Button label="close" onClick={closeAlert} />
        </div>
      </div>
    </div>
  ) : null
}

const mapStateToProps = ({ view: { alert } }) => ({
  ...alert,
})

export default connect(mapStateToProps, null)(Alert)
