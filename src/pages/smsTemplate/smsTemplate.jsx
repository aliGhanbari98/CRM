// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
// components
import { BasicInput } from 'base/inputs'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'
import { HeaderType2 } from 'containers/headers'
// style
import styles from './smsTemplate.module.scss'

const insertAtCursor = (fieldId, myValue) => {
  const myField = document.getElementById(fieldId)
  if (myField.value.length + myValue.length > 70) return
  // IE support
  if (document.selection) {
    myField.focus()
    const sel = document.selection.createRange()
    sel.text = myValue
  }
  // MOZILLA and others
  else if (myField.selectionStart || myField.selectionStart === '0') {
    const startPos = myField.selectionStart
    const endPos = myField.selectionEnd
    myField.value =
      myField.value.substring(0, startPos) +
      myValue +
      myField.value.substring(endPos, myField.value.length)
    myField.selectionStart = startPos + myValue.length
    myField.selectionEnd = startPos + myValue.length
  } else {
    myField.value += myValue
  }
}

const SMSTemplate = () => {
  const [name, setName] = useState('')
  const [sender, setSender] = useState('')
  const [message, setMessage] = useState('')
  const [emojiIsOpen, setEmojiIsOpen] = useState(false)

  const onEmojiClick = (_, emojiObject) => {
    insertAtCursor('sms-text-area', emojiObject.emoji)
    const textAreaContent = document.getElementById('sms-text-area').value
    setMessage(textAreaContent)
  }

  const onEmojiButtonClick = () => {
    setEmojiIsOpen(!emojiIsOpen)
  }

  return (
    <div className={styles.smsTemplate}>
      <HeaderType2 />
      <div className={styles.body}>
        <div className={styles.form}>
          <BasicInput
            label="Template name"
            value={name}
            onChange={setName}
            placeHolder="Mother day"
          />
          <BasicInput
            label="Sender"
            value={sender}
            onChange={setSender}
            placeHolder="Ali"
          />
          <div className={styles.messageBox}>
            <label>Write your message here</label>
            <div className={styles.textBox}>
              <div>
                <div>
                  <button type="button" onClick={onEmojiButtonClick}>
                    <img alt="emojies" src="/img/emoji.svg" />
                  </button>
                  <span>{`${message.length}/70`}</span>
                </div>
                {emojiIsOpen && (
                  <div className={styles.emojiPicker}>
                    <Picker
                      onEmojiClick={onEmojiClick}
                      disableAutoFocus
                      disableSearchBar
                      skinTone={SKIN_TONE_MEDIUM_DARK}
                      groupNames={{ smileys_people: 'PEOPLE' }}
                    />
                  </div>
                )}
              </div>
              <textarea
                id="sms-text-area"
                placeholder="write something"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={70}
              />
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div>
            <div className={styles.header}>
              <span>9:40</span>
              <div>
                <img alt="arrow" src="/img/signal.svg" />
                <img alt="arrow" src="/img/wi-fi.svg" />
                <img alt="arrow" src="/img/battery-status.svg" />
              </div>
            </div>
            <div className={styles.buttons}>
              <img alt="arrow" src="/img/sideBar-row.svg" />
              <span>Ali</span>
              <img alt="arrow" src="/img/information.svg" />
            </div>
            <div className={styles.line} />
            <span className={styles.iMessage}>iMessage</span>
            <div className={styles.dates}>
              <span>Thirsday</span>
              <span>19:43</span>
            </div>
            <div className={styles.textBox}>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SMSTemplate)
