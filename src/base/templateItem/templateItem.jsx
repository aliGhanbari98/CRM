/* eslint-disable no-nested-ternary */
// modules
import React from 'react'
import { navigate } from '@reach/router'
// queries
import { ChannelTemplateQueries } from 'queries'
// icons
import { ReactComponent as CampaignsIcon } from '../../assets/icons/speaker.svg'
// styles
import styles from './templateItem.module.scss'

const Button = ({ label, icon, onClick }) => (
  <button type="button" className={`${styles.cardButtons}`} onClick={onClick}>
    <img alt="icon" className={`${styles.icon}`} src={icon} />
    <span>{label}</span>
  </button>
)

const SMSItem = ({ title, text }) => (
  <div className={styles.smsItem}>
    <span className={styles.title}>{title}</span>
    <span className={styles.text}>{text}</span>
  </div>
)

export default ({
  id,
  templateId,
  sms,
  className,
  photo,
  name,
  addTemplate,
  controls = true,
  active,
  setActive,
  onClick,
}) => {
  const handleClick = () => {
    if (controls) setActive()
    else if (typeof onClick === 'function') onClick()
  }

  return (
    <div className={`${styles.templateItem} ${className || ''}`}>
      <div
        className={`${styles.templateCard} ${
          addTemplate && styles.addTemplateCard
        }`}
      >
        <button type="button" onClick={!addTemplate ? handleClick : null}>
          {!addTemplate ? (
            sms ? (
              <SMSItem {...sms} />
            ) : (
              <img
                alt="template"
                className={`${styles.templateImage}`}
                src={`/${photo}`}
              />
            )
          ) : (
            <img
              alt="template"
              className={`${styles.addTemplateImage}`}
              src={`/${photo}`}
            />
          )}
        </button>
        {active && (
          <div className={sms ? styles.smsButtons : styles.emailButtons}>
            <Button
              label="Preview"
              icon="/img/eye.png"
              onClick={() => {
                if (sms) navigate('/edit-sms')
                else navigate('/edit-template')
              }}
            />
            <Button label="Duplicate" icon="/img/duplicate.png" />
            <Button
              label="Edit"
              icon="/img/pen.png"
              onClick={() => {
                if (sms) navigate('/edit-sms')
                else navigate('/edit-template')
              }}
            />
            <Button
              label="Delete"
              icon="/img/bin.png"
              onClick={() =>
                ChannelTemplateQueries.deleteTemplateReq({
                  templateId,
                })
              }
            />
          </div>
        )}
      </div>
      <span>{name}</span>
    </div>
  )
}
