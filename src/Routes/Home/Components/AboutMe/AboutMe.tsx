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
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim
            in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
            cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
            eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
            porttitor, facilisis luctus, metus
          </p>
        </div>
        <div className='Socials'>
          <ul>
            <li>
              <a href='#' target='blank_'>
                <i className='fab fa-twitch'></i>
                <span>{formatCount(state.twitchFollowers)}</span>
              </a>
            </li>
            <li>
              <a href='#' target='blank_'>
                <i className='fab fa-youtube'></i>
                <span>{formatCount(state.youtubeCount)}</span>
              </a>
            </li>
            <li>
              <a href='#' target='blank_'>
                <i className='fab fa-twitter'></i>
                <span>{formatCount(state.twitterCount)}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AboutMe;
