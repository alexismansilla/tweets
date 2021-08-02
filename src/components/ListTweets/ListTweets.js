import React from 'react';
import { Grid } from '@material-ui/core';
import Tweets from '../Tweets';

import './ListTweets.scss';

export default function ListTweets(props) {
  const { allTweets, deleteTweet } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2> You dont have tweets!</h2>
      </div>
    )
  }

  return (
    <Grid container spacing={3} className="list-tweets">
      {
        allTweets.map((tweet, index) => (
          <Grid key={index} item xs={4}>
            <Tweets tweet={tweet} index={index} deleteTweet={deleteTweet}/>
          </Grid>
        ))
      }
    </Grid>
  )
}
