import React from 'react';
import { Modal } from '@material-ui/core';

import "./ModalContainer.scss";

export default function ModalContainer(props) {
  const { isOpenModal, handleClose, children } = props;

  return (
    <Modal className="modal-container" open={isOpenModal} onClose={handleClose}>
      <div>{children}</div>
    </Modal>
  )
}
