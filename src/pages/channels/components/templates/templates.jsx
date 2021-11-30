// modules
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// queries
import { ChannelTemplateQueries } from 'queries'
// components
import Carousel from 'base/carousel/carousel'
import TemplateItem from 'base/templateItem/templateItem'
// style
import styles from './templates.module.scss'

const Templates = ({ templates, channelType }) => {
  const [userActive, setUserActive] = useState(0)
  const [preparedActive, setPreparedActive] = useState(0)

  useEffect(() => {
    ChannelTemplateQueries.getTemplatesReq({ channelType })
  }, [channelType])

  const userTemplates = templates
    .filter(({ is_default }) => !is_default)
    .map(({ id, name, template_id }) => (
      <TemplateItem
        id={id}
        templateId={template_id}
        photo="img/Christmas1.png"
        name={name}
        active={userActive === id}
        setActive={() => setUserActive(id)}
      />
    ))

  const preparedTemplates = templates
    .filter(({ is_default }) => is_default)
    .map(({ id, name, template_id }) => (
      <TemplateItem
        id={id}
        templateId={template_id}
        photo="img/wedding1.png"
        name={name}
        active={preparedActive === id}
        setActive={() => setPreparedActive(id)}
      />
    ))

  return (
    <div className={styles.templates}>
      <section>
        <div className={styles.title}>
          <h3>User Templates</h3>
        </div>
        <Carousel addTemplate items={userTemplates} />
      </section>

      <section>
        <div className={styles.title}>
          <h3>Prepared Templates</h3>
          <span>(Use one of this templates to create yours)</span>
        </div>

        <div className={styles.templatesList}>
          {preparedTemplates.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => ({ templates: state.main.templates })

export default connect(mapStateToProps, null)(Templates)
