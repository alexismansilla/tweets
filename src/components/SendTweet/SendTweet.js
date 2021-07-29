import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../ModalContainer';

import "./SendTweet.scss";

export default function SendTweet() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="send-tweet">
      <Fab className="send-tweet__open-modal" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} handleClose={handleClose}>
        <p>Modal Content</p>
      </ModalContainer>
    </div>
  )
}
