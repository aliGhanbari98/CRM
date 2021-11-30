import React from 'react'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'

const ModalDialog = ({
  children,
  isOpen = false,
  onClose,
  actions = [],
  heading,
  width,
}) => {
  return (
    <ModalTransition>
      {isOpen && (
        <Modal
          actions={actions}
          onClose={() => onClose(false)}
          heading={heading}
          width={width}
        >
          {children}
        </Modal>
      )}
    </ModalTransition>
  )
}

export default ModalDialog
