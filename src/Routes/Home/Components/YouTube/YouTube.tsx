import React, { useContext } from 'react';
import './YouTube.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Context } from '../../../../Context';
import { Heading } from '../';

const YouTube: React.FC<any> = () => {
  const { youtubeSubscribers } = useContext(Context);
  const renderYoutubeUploads = () => {
    return (
      <>
        <div className='Youtube-Container'>
          <i className='fab fa-youtube'></i>
          <iframe
            title="PVPX's Youtube Uploads"
            width='100%'
            frameBorder='0'
            height='100%'
            src='https://www.youtube.com/embed/videoseries?list=UUhBxzpP9wrwLpw_qsedX7YQ'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
          <div className='youtube-btns'>
            <a
              className='main'
              href='https://www.youtube.com/c/pvpx'
              target='blank_'
            >
              <i className='far fa-bell'></i>
              <span>subscribe</span>
            </a>
          </div>
        </div>
      </>
    );
  };

  const HeadingObject = {
    Icon: 'fa-youtube',
    Heading: 'PVPX',
    HeadingValue: youtubeSubscribers.statistics.subscriberCount,
    HeadingLabel: 'Subscribers',
  };

  return (
    <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
      <section className='YouTube'>
        <Heading {...HeadingObject} />
        {renderYoutubeUploads()}
      </section>
    </ScrollAnimation>
  );
};

export default YouTube;
