// modules
import React from 'react'
// components
import { Uploader } from 'base/ui'
// styles
import styles from './import_customers.module.scss'

const ImportCustomers = () => {
  const onFileDrop = (file) => {
    console.log(file)
  }

  const onFileUpload = (file) => {
    console.log(file)
  }
  return (
    <div className={styles.importCustomers}>
      <div className={styles.uploader}>
        <Uploader onFileDrop={onFileDrop} onFileUpload={onFileUpload} />
      </div>
    </div>
  )
}

export default ImportCustomers
