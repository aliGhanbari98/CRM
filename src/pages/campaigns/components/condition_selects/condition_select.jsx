import React, { useState } from 'react'
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right-large'
import EditIcon from '@atlaskit/icon/glyph/edit'
import { Button } from 'base/buttons'
import Carousel from 'base/carousel/carousel'
import { Select } from 'base/inputs'
import TemplateItem from 'base/templateItem/templateItem'
import styles from './condition_select.module.scss'

const sendEmailOptions = [
  { label: 'Send email', value: 'send_email' },
  { label: 'Send SMS', value: 'send_sms' },
]

const setDelayOptions = [{ label: 'Delay', value: 'delay' }]

const delayOptions = [
  { label: '1 Day', value: '1m' },
  { label: '3 Days', value: '5m' },
  { label: '5 Days', value: '5m' },
  { label: '10 Days', value: '5m' },
  { label: '20 Days', value: '5m' },
]

const IfNotOpenedOptions = [{ label: 'If not opened', value: 'if_not_opened' }]

const sendSMSOptions = [
  { label: 'Send email', value: 'send_email' },
  { label: 'Send SMS', value: 'send_sms' },
]

const setEndOptions = [{ label: 'End', value: 'end' }]

const sms = {
  title: 'Lorem ipsum',
  text:
    'dolor sit amet, consectetur adipiscing elit utLorem ipsum dolor sit amet, consectetur adi ....',
}

const ConditionSelect = () => {
  const [sendEmailAction, setSendEmailAction] = useState()
  const [delayAction, setDelayAction] = useState()
  const [delay, setDelay] = useState()
  const [ifNotOpenAction, setIfNotOpenAction] = useState()
  const [sendSMSAction, setSendSMSAction] = useState()
  const [endAction, setEndAction] = useState()
  const [modalOpen, setModalOpen] = useState(false)
  const [pickedTemplate, setPickedTemplate] = useState()
  const [pickedSMSTemplate, setPickedSMSTemplate] = useState()

  const emailItems = [
    ...[...Array(10)].map((e, i) => (
      <TemplateItem
        key={i}
        photo="img/Christmas1.png"
        name="Christmas"
        controls={false}
        onClick={() => {
          setModalOpen(false)
        }}
      />
    )),
  ]

  const smsItems = [
    ...[...Array(10)].map((e, i) => (
      <TemplateItem
        key={i}
        sms={sms}
        controls={false}
        onClick={() => {
          setModalOpen(false)
        }}
      />
    )),
  ]

  return (
    <div className={styles.condition}>
      <div className={styles.item}>
        <Select
          placeholder="Select an action"
          options={sendEmailOptions}
          onChange={(value) => setSendEmailAction(value)}
        />
        {sendEmailAction && (
          <Button
            className={styles.button}
            label={<EditIcon />}
            onClick={() => {
              if (sendEmailAction === 'send_email') {
                setPickedTemplate(true)
                setPickedSMSTemplate(false)
              } else {
                setPickedSMSTemplate(true)
                setPickedTemplate(false)
              }

              setModalOpen(true)
            }}
          />
        )}
        <div className={`${styles.templates} ${modalOpen ? styles.open : ''}`}>
          <Carousel items={pickedSMSTemplate ? smsItems : emailItems} />
        </div>
      </div>
      {(pickedTemplate || pickedSMSTemplate) && (
        <div className={styles.item}>
          <ChevronRightIcon />
          <Select
            placeholder="Select an actoin"
            options={setDelayOptions}
            onChange={setDelayAction}
          />
        </div>
      )}
      {delayAction && (
        <div className={styles.item}>
          <ChevronRightIcon />
          <Select
            placeholder="Select days"
            options={delayOptions}
            onChange={setDelay}
          />
        </div>
      )}
      {delay && (
        <div className={styles.item}>
          <ChevronRightIcon />
          <Select
            placeholder="Select an action"
            options={IfNotOpenedOptions}
            onChange={setIfNotOpenAction}
          />
        </div>
      )}

      {ifNotOpenAction && (
        <div className={styles.item}>
          <ChevronRightIcon />
          <Select
            placeholder="Send SMS"
            options={sendSMSOptions}
            onChange={(value) => setSendSMSAction(value)}
          />
          {sendSMSAction && (
            <Button
              className={styles.button}
              label={<EditIcon />}
              onClick={() => {
                if (sendSMSAction === 'send_sms') {
                  setPickedSMSTemplate(true)
                  setPickedTemplate(false)
                } else {
                  setPickedTemplate(true)
                  setPickedSMSTemplate(false)
                }
                setModalOpen(true)
                setEndAction(true)
              }}
            />
          )}
        </div>
      )}

      {endAction && (
        <div className={styles.item}>
          <ChevronRightIcon />
          <Select placeholder="Select an action" options={setEndOptions} />
        </div>
      )}
    </div>
  )
}

export default ConditionSelect
