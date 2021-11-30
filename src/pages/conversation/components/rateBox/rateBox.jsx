// modules
import React, { useState } from 'react'
// components
import { Modal } from 'base/ui'
import { RatingGroup, Star } from '@atlaskit/rating'
import { TextArea } from 'base/inputs'
import { Button } from 'base/buttons'
// actions
import { dispatchSetAlertData } from 'redux/action-creators/alert'
// style
import styles from './rateBox.module.scss'

const TextBox = ({ isOpen, setOpen, name, ticketId, avatar }) => {
  const [rate, setRate] = useState()
  const [text, setText] = useState()

  const onClick = () => {
    dispatchSetAlertData({
      text: 'your message has been sent',
      title: 'Thank You',
      mode: 'success',
    })
    setOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)} width={500}>
      <div className={styles.rateBox}>
        <h4>Have you been satisfied with the support ?</h4>
        <img alt="avatar" src={avatar} />
        <span>{`Name : ${name}`}</span>
        <span className={styles.ticketId}>{`Ticket ID: ${ticketId}`}</span>
        <div className={styles.rating}>
          <RatingGroup
            groupName="rating--uncontrolled"
            testId="uncontrolled-rating"
            onChange={setRate}
          >
            <Star label="Terrible" value={1} />
            <Star label="Meh" value={2} />
            <Star label="Good" value={3} />
            <Star label="Great" value={4} />
            <Star label="Fantastic!" value={5} />
          </RatingGroup>
        </div>
        <div className={styles.textArea}>
          <TextArea
            placeHolder="Tell us more"
            value={text}
            onChange={setText}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={onClick} label="Send" />
        </div>
      </div>
    </Modal>
  )
}

export default TextBox
