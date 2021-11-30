// modules
import React, { useState, useEffect, createRef } from 'react'
// components
import { TextArea } from 'base/inputs'
import { Modal, Uploader } from 'base/ui'
// style
import styles from './textBox.module.scss'

let textAreaRef = null

const TextBox = ({ onSend }) => {
  const [uploaderIsOpen, setUploaderIsOpen] = useState(false)
  const [attachedFile, setAttachedFile] = useState()
  const [message, setMessage] = useState('')
  const [isUser, setIsUser] = useState(true)
  useEffect(() => {
    textAreaRef = createRef()
  }, [])

  const onFileDrop = (file) => {
    setAttachedFile('/img/attachedFile.png')
  }

  const onFileUpload = (file) => {
    setAttachedFile('/img/attachedFile.png')
  }

  const onSendClick = () => {
    onSend({
      isUser,
      detail: {
        firstName: isUser ? 'Ali' : 'Support',
        lastName: isUser ? 'Ghanbari' : 'lsatname',
        day: 'Monday',
        time: '1:45 pm',
        profilePhoto: isUser ? '/img/userAvatar.svg' : '/img/supportAvatar.svg',
      },
      text: message,
      attachment: attachedFile,
    })
    setMessage('')
    setAttachedFile('')
    textAreaRef.current.state.value = ''
  }

  return (
    <div className={styles.textBox}>
      <TextArea
        className={styles.customizedTextArea}
        noMargin
        placeHolder="Add Message Here"
        value={message}
        onChange={setMessage}
        ref={textAreaRef}
      />
      <div className={styles.container}>
        {attachedFile && <img alt="attached-file" src={attachedFile} />}
        <div className={styles.buttons}>
          <button onClick={() => setIsUser(!isUser)} type="button">
            <img
              alt="attachment"
              src={isUser ? '/img/userAvatar.svg' : '/img/supportAvatar.svg'}
            />
          </button>
          <button onClick={() => setUploaderIsOpen(true)} type="button">
            <img alt="attachment" src="/img/attachment.svg" />
          </button>
          <button onClick={onSendClick} type="button">
            Send
          </button>
        </div>
      </div>
      <Modal
        isOpen={uploaderIsOpen}
        onClose={() => setUploaderIsOpen(false)}
        actions={[{ text: 'Close', onClick: () => setUploaderIsOpen(false) }]}
        width={850}
      >
        <div className={styles.uploaderContainer}>
          <Uploader onFileDrop={onFileDrop} onFileUpload={onFileUpload} />
        </div>
      </Modal>
    </div>
  )
}

export default TextBox
