import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';

import { TWEETS_STORAGE } from './utils/contants';

function App() {
  const [toastProps, setToastProps] = useState({ open: false, text: null});

  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
  }, []);

  return (
    <div className="App">
      <Container className="tweets" maxWidth={false}>
        <Header />
        <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
        <ListTweets allTweets={allTweets}/>
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  open={toastProps.open}
                  autoHideDuration={6000}
                  message={<span id="message-id">{toastProps.text}</span>}/>
      </Container>
    </div>
  );
}

export default App;
