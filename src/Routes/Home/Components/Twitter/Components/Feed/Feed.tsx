import React, { useContext } from 'react';
import { Context } from '../../../../../../Context';
import './Feed.css';

const Feed: React.FC<any> = () => {
  const { twitterTweets } = useContext(Context);
  return (
    <div className='Twitter-Feed'>
      <ul>
        {twitterTweets.map((tweet: any) => {
          <li>
            <h5 className='Tweet'>{tweet.text}</h5>
            <span className='Likes'>{}</span>
            <span className='Retweets'>{}</span>
            <span className='Mentions'>
              {tweet.entities.user_mentions.length}
            </span>
            <span className='Date-Posted'>{}</span>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Feed;
