// modules
import React from 'react'
// style
import styles from './message.module.scss'

const Message = ({
  isUser,
  detail: { firstName, lastName, day, time, profilePhoto },
  text,
  attachment,
}) => {
  return (
    <div className={`${styles.container} ${isUser && styles.isUser_container}`}>
      <div className={`${styles.message} ${isUser && styles.isUser_message}`}>
        <div className={`${styles.detail} ${isUser && styles.isUser_detail}`}>
          <img alt="profile" src={profilePhoto} />
          <span className={styles.name}>{`${firstName} ${lastName}`}</span>
          <span className={styles.date}>{`${day}, ${time}`}</span>
        </div>
        <div className={`${styles.content} ${isUser && styles.isUser_content}`}>
          <p className={styles.text}>{text}</p>
          {attachment && (
            <div className={styles.attachment}>
              <img alt="attachment" src={attachment} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Message
