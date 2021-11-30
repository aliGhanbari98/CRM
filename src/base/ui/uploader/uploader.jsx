// modules
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
// components
import { SuccessProgressBar } from '@atlaskit/progress-bar'
// actions
import { dispatchSetAlertData } from 'redux/action-creators/alert'
// styles
import styles from './uploader.module.scss'

const Uploader = ({ onFileDrop, onFileUpload }) => {
  const [uploadStarted, setUploadStarted] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    onFileDrop(acceptedFiles)
    setUploadStarted(true)
  }, [])

  const onUpload = (file) => {
    onFileDrop(file)
    setUploadStarted(true)
    dispatchSetAlertData({
      text: '2452 customers added successfully !',
      title: 'Message',
      mode: 'success',
    })
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className={styles.container}>
      <div {...getRootProps()} className={styles.uploadSection}>
        <input {...getInputProps()} />
        <img alt="upload here" src="/img/upload-area.png" />
        <span className={styles.text}>
          For import your customers data, drag and drop
          <b> CSV </b>
          file here
        </span>
        <span className={styles.or}>or</span>
      </div>
      <label>
        Choose a file from the computer
        <input
          type="file"
          onChange={(e) => onUpload(e.currentTarget.files[0])}
          style={{ display: 'none' }}
        />
      </label>
      {uploadStarted && (
        <div className={styles.uploadStarted}>
          <div className={styles.progressBar}>
            <SuccessProgressBar value={0.7} />
            <span>%70</span>
          </div>
          <div className={styles.file}>
            <img alt="file" src="/img/file.png" />
            <span>filename.svg</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Uploader
