import React, { useContext } from 'react';
import './Twitter.css';
import { Feed } from './Components/';
import { Context } from '../../../../Context';
import Heading from '../Heading/Heading';
import ScrollAnimation from 'react-animate-on-scroll';

const Twitter: React.FC<any> = () => {
  const { twitterData } = useContext(Context);

  const HeadingObject = {
    Icon: 'fa-twitter',
    Heading: 'PVPX_',
    HeadingValue: twitterData.followers_count,
    HeadingLabel: 'Followers',
    Link: 'https://www.twitter.com/pvpx_',
  };

  return (
    <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
      <section className='Twitter'>
        <Heading {...HeadingObject} />
        <div className='container'>
          <i className='fab fa-twitter'></i>
          <Feed />
          <div className='twitter-btns'>
            <a href='https://www.twitter.com/pvpx_' target='blank_'>
              <i className='fas fa-check'></i>
              <span>follow</span>
            </a>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Twitter;
