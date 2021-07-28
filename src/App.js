import React from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';

function App() {
  return (
    <div className="App">
      <Container className="tweets" maxWidth={false}>
        <Header />
        <SendTweet />
      </Container>
    </div>
  );
}

export default App;
