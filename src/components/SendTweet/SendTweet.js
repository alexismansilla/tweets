import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';
import { TWEETS_STORAGE } from '../../utils/contants';

import "./SendTweet.scss";

export default function SendTweet(props) {
  const { setToastProps, allTweets } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();

    const { name, tweet } = formValue;
    let allTweetsArray = [];

    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if(!name || !tweet) {
      setToastProps({open: true, text: "The fields are required"});
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({open: true, text: "Sent tweet successfully"})
      handleClose();
    }
    allTweetsArray = [];
  };

  return (
    <div className="send-tweet">
      <Fab className="send-tweet__open-modal" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} handleClose={handleClose}>
        < FormSendTweet sendTweet={sendTweet}/>
      </ModalContainer>
    </div>
  )
}
