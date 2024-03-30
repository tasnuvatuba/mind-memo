import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import Button from '@mui/material/Button';

export const ModalTemplate = ({showModal, onClose, submit, label, children}) => {
  return (
    <Modal show={showModal} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{label}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer style={{ marginRight: '15px' }}>
        <Button variant="contained" onClick={submit}>
          {label}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
