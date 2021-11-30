// modules
import React, { useState } from 'react'
// components
import { Modal, Uploader } from 'base/ui'
import { Select, TextArea, BasicInput } from 'base/inputs'
import { Button } from 'base/buttons'
// style
import styles from './new_ticket.module.scss'

const NewTicket = () => {
  const [ticketInfo, setTicketInfo] = useState({
    departmant: '',
    title: '',
    description: '',
  })
  const [attachedFile, setAttachedFile] = useState()
  const [uploaderIsOpen, setUploaderIsOpen] = useState(false)

  const handleTicketInfo = (key, value) => {
    setTicketInfo((prevState) => ({ ...prevState, [key]: value }))
  }

  const onFileDrop = (file) => {
    setAttachedFile('/img/attachedFile.png')
  }

  const onFileUpload = (file) => {
    setAttachedFile('/img/attachedFile.png')
  }

  return (
    <div className={styles.newTicket}>
      <div className={styles.body}>
        <div className={styles.form}>
          <Select
            label="Please Choose your Support Department"
            value={ticketInfo.departmant}
            onChange={(value) => handleTicketInfo('departmant', value)}
          />
          <BasicInput
            label="Title"
            value={ticketInfo.title}
            placeHolder="Example : Campagin problem"
            onChange={(value) => handleTicketInfo('title', value)}
          />
          <div className={styles.textBox}>
            <TextArea
              className={`${styles.customizedTextArea} ${
                attachedFile && styles.morePadding
              }`}
              noMargin
              placeHolder="Add Message Here"
              value={ticketInfo.description}
              onChange={(value) => handleTicketInfo('description', value)}
            />
            <div className={styles.container}>
              {attachedFile && <img alt="attached-file" src={attachedFile} />}
              <div className={styles.buttons}>
                <button onClick={() => setUploaderIsOpen(true)} type="button">
                  <img alt="attachment" src="/img/attachment.svg" />
                </button>
              </div>
            </div>
          </div>
          <Modal
            isOpen={uploaderIsOpen}
            onClose={() => setUploaderIsOpen(false)}
            actions={[
              { text: 'Close', onClick: () => setUploaderIsOpen(false) },
            ]}
            width={850}
          >
            <div className={styles.uploaderContainer}>
              <Uploader onFileDrop={onFileDrop} onFileUpload={onFileUpload} />
            </div>
          </Modal>
        </div>
        <div className={styles.image}>
          <img alt="support-members" src="/img/support_group.svg" />
        </div>
      </div>
      <div className={styles.footer}>
        <Button label="Send" />
      </div>
    </div>
  )
}
export default NewTicket
