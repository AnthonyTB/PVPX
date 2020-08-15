import React from 'react';
import './Feed.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Feed: React.FC<any> = () => {
  return (
    <div className='Twitter-Feed'>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='pvpx_'
        options={{ width: '100%' }}
      />
    </div>
  );
};

export default Feed;
