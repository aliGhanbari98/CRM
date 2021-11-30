/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
// modules
import React from 'react'
import { connect } from 'react-redux'
import Handlebars from 'handlebars'
// actions
import {
  dispatchSetSelectedElement,
  dispatchSetTemplateSettings,
} from 'redux/action-creators/template.actinos'
// onClicks
import clickHandlers from 'helpers/templateOnclicks'
// components
import { HeaderType2 } from 'containers/headers'
import SideBarType2 from 'containers/side_bars/type2/side_bar'
import thanksGiving from './emailTemplates'
// style
import styles from './editTemplate.module.scss'

window.addEventListener('message', ({ data: { action, data } }) => {
  if (action === 'selectElement') dispatchSetSelectedElement(data)
  else if (action === 'changeParagraph')
    dispatchSetTemplateSettings({
      field: 'text',
      subField: 'content',
      newValue: data,
    })
  else if (action === 'changeHeader')
    dispatchSetTemplateSettings({
      field: 'header',
      subField: 'content',
      newValue: data,
    })
})

const EditTemplate = ({ settings }) => {
  const [mobileMode, setMobileMode] = React.useState(false)

  const template = Handlebars.compile(thanksGiving)

  Handlebars.registerHelper('stringifyFunc', (fn) => {
    return new Handlebars.SafeString(
      `(${fn.toString().replace(/\"/g, "'")})(event)`
    )
  })

  return (
    <div className={styles.editTemplate}>
      <HeaderType2 />
      <div className={styles.body}>
        <SideBarType2 />
        <div className={`${styles.card} ${mobileMode && styles.mobileMode}`}>
          <iframe
            srcDoc={template({
              ...settings,
              ...clickHandlers,
            })}
            title="Iframe Example"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button type="button" onClick={() => setMobileMode(false)}>
          <img alt="pc" src="/img/pc.svg" />
        </button>
        <button type="button" onClick={() => setMobileMode(true)}>
          <img alt="phone" src="/img/phone.svg" />
        </button>
      </div>
    </div>
  )
}

const areEqual = (
  {
    settings: {
      text: { content: prevPContent, ...prevTextRest },
      header: { content: prevHContent, ...prevHeaderRest },

      ...prevRest
    },
  },
  {
    settings: {
      text: { content: nextPContent, ...nextTextRest },
      header: { content: nextHContent, ...nextHeaderRest },

      ...nextRest
    },
  }
) =>
  JSON.stringify(prevRest) === JSON.stringify(nextRest) &&
  JSON.stringify(prevTextRest) === JSON.stringify(nextTextRest) &&
  JSON.stringify(prevHeaderRest) === JSON.stringify(nextHeaderRest)

const MemoComponent = React.memo(EditTemplate, areEqual)

const mapStateToProps = ({
  view: {
    selectedEmailTemplate: { settings, selectedElement },
  },
}) => ({
  settings,
  selectedElement,
})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(MemoComponent)
