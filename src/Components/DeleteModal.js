import React from 'react';
import { ModalTemplate } from "./ModalTemplate";

export const DeleteModal = ({showModal, onClose, submit, defaultJournal, label}) => {
  return (
    <ModalTemplate showModal={showModal} onClose={onClose} submit={submit} label={label}>
        <div>Do you want to delete "{defaultJournal.title}"?</div>
    </ModalTemplate>

  )
}
