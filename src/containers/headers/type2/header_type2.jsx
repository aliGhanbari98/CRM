// modules
import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import CheckIcon from '@atlaskit/icon/glyph/check'
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled'
import { Button } from 'base/buttons'
import { BasicInput } from 'base/inputs'

// style
import styles from './header_type2.module.scss'

const Header = () => {
  const [templateName, setTemplateName] = React.useState('')
  return (
    <div className={styles.header}>
      <Button appearance="subtle" border label="Finish" icon={<CheckIcon />} />
      <div>
        <Button
          label="Go to create campaign"
          onClick={() => navigate('/campaigns/create')}
        />
      </div>
      <div>
        <BasicInput
          value={templateName}
          onChange={setTemplateName}
          placeHolder="Template name"
          templateName
          noMargin
          ElemAfterInput={<EditFilledIcon primaryColor="#de350b" />}
        />
      </div>
      <div className={styles.rightSide}>
        <span>Auto save</span>
        <img alt="checkMark" src="/img/autoSave.svg" />
      </div>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
