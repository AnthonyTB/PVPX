import React, { useContext, useCallback, useReducer, useEffect } from 'react';
import './AboutMe.css';
import Render from '../../../../Assets/Render.mp4';
import { Context } from '../../../../Context';
import ScrollAnimation from 'react-animate-on-scroll';

export interface Reducer {
  type: string;
  payload: any;
}

const AboutMe: React.FC<any> = () => {
  const { twitchFollowers, twitterData, youtubeSubscribers } = useContext(
    Context
  );

  const Reducer = (prevState: any, { type, payload }: Reducer) => {
    switch (type) {
      case 'twitterCount':
        return {
          ...prevState,
          twitterCount: payload.twitterCount,
        };
      case 'twitchFollowers':
        return {
          ...prevState,
          twitchFollowers: payload.twitchFollowers,
        };
      case 'youtubeCount':
        return {
          ...prevState,
          youtubeCount: payload.youtubeCount,
        };
      case 'instagramCount':
        return {
          ...prevState,
          instagramCount: payload.instagramCount,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterCount: 0,
    twitchFollowers: 0,
    youtubeCount: 0,
    instagramCount: 0,
  });

  const dataSetter = (section: string, data: number) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  const incrementVals = useCallback(
    (source: string, sourceVal: number, maxVal: number): any => {
      const interval = setInterval(() => {
        if (maxVal > 999999 && sourceVal < maxVal) {
          sourceVal += 631;
          dataSetter(source, sourceVal);
        } else if (maxVal > 99999 && sourceVal < maxVal) {
          sourceVal += 81;
          dataSetter(source, sourceVal);
        } else if (maxVal > 50000 && sourceVal < maxVal) {
          sourceVal += 41;
          dataSetter(source, sourceVal);
        } else if (maxVal > 9999 && sourceVal < maxVal) {
          sourceVal += 13;
          dataSetter(source, sourceVal);
        } else if (sourceVal < maxVal) {
          sourceVal += 3;
          dataSetter(source, sourceVal);
        } else {
          clearInterval(interval);
          return sourceVal;
        }
      }, 1);
    },
    []
  );

  useEffect(() => {
    if (
      state.twitterCount === 0 &&
      state.twitchFollowers === 0 &&
      state.youtubeCount === 0
    ) {
      incrementVals(
        'twitterCount',
        state.twitterCount,
        twitterData.followers_count
      );

      incrementVals(
        'twitchFollowers',
        state.twitchFollowers,
        twitchFollowers.total
      );

      incrementVals(
        'youtubeCount',
        state.youtubeCount,
        youtubeSubscribers.statistics.subscriberCount
      );
    }
  }, [
    incrementVals,
    state.twitchFollowers,
    state.twitterCount,
    state.youtubeCount,
    twitchFollowers.data.total,
    twitchFollowers.total,
    twitterData.followers_count,
    youtubeSubscribers.statistics.subscriberCount,
  ]);

  const insert = (arr: any, index: number, newItem: any) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
  ];

  const formatCount = (val: number) => {
    if (val.toString().length === 5) {
      let arr = val.toString().split('');
      return insert(arr, 2, '.').slice(0, 4).join('') + 'K';
    } else if (val.toString().length === 6) {
      let arr = val.toString().split('');
      return insert(arr, 3, '.').slice(0, 5).join('') + 'K';
    } else if (val.toString().length === 7) {
      let arr = val.toString().split('');
      return insert(arr, 1, '.').slice(0, 3).join('') + 'M';
    } else if (val.toString().length <= 4) {
      return val.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,');
    }
  };

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      animateOut='fadeOut'
      duration={1.5}
      delay={1}
    >
      <section className='AboutMe'>
        <div className='Heading'>
          <h3>About Me</h3>
        </div>
        <div className='left-container'>
          <div className='video-container'>
            <video width='100%' height='auto' loop autoPlay muted>
              <source src={Render} type='video/mp4' />
            </video>
          </div>
          <p>
            I started streaming Overwatch in early 2017 while I was a Senior in
            College at UCF. After a few months I graduated college & got
            partnered on Twitch during the same week so I pursued full-time
            streaming. I became known as one of the best Junkrat players in the
            game (peaking 4687sr Rank #6 on Junkrat & Rank #3 on Zarya in Top
            500). After a couple years I moved to Call of Duty Blackout to
            pursue the Battle Royale genre then Apex Legends upon release to
            play Professionally under Cloud9 in early 2019. I briefly streamed
            VALORANT but eventually moved back to Overwatch as casual content
            creator.
          </p>
        </div>
        <div className='Socials'>
          <ul>
            <li>
              <a href='https://www.twitch.tv/pvpx' target='blank_'>
                <i className='fab fa-twitch'></i>
                <span className='count'>
                  {formatCount(state.twitchFollowers)}
                </span>
                <span className='label'>Followers</span>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/pvpx' target='blank_'>
                <i className='fab fa-youtube'></i>
                <span className='count'>{formatCount(state.youtubeCount)}</span>
                <span className='label'>Subscribers</span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/PVPX_' target='blank_'>
                <i className='fab fa-twitter'></i>
                <span className='count'>{formatCount(state.twitterCount)}</span>
                <span className='label'>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AboutMe;
