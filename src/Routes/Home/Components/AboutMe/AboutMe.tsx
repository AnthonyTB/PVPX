import React, { useContext } from 'react';
import './AboutMe.css';
import Render from '../../../../Assets/Render.mp4';
import { Context } from '../../../../Context';

const AboutMe: React.FC<any> = () => {
  const { twitchFollowers, twitterData, youtubeSubscribers } = useContext(
    Context
  );

  return (
    <section className='AboutMe'>
      <div className='Heading'>
        <h3>About Me</h3>
      </div>
      <div className='video-container'>
        <video width='100%' height='auto' loop autoPlay muted>
          <source src={Render} type='video/mp4' />
        </video>
      </div>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
      <div className='Socials'>
        <ul>
          <li>
            <a href='#' target='blank_'>
              <i className='fab fa-twitch'></i>
              <span>{twitchFollowers.total}</span>
            </a>
          </li>
          <li>
            <a href='#' target='blank_'>
              <i className='fab fa-youtube'></i>
              <span>{youtubeSubscribers.statistics.subscriberCount}</span>
            </a>
          </li>
          <li>
            <a href='#' target='blank_'>
              <i className='fab fa-twitter'></i>
              <span>{twitterData.followers_count}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
