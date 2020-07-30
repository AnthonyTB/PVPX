import React from 'react';
import './YouTube.css';
import ScrollAnimation from 'react-animate-on-scroll';

const YouTube: React.FC<any> = () => {
  const renderYoutubeUploads = () => {
    return (
      <>
        <div className='Heading'>
          <h3>Latest Upload</h3>
        </div>
        <div className='Youtube-Container'>
          <iframe
            title="PVPX's Youtube Uploads"
            width='100%'
            frameBorder='0'
            height='100%'
            src='https://www.youtube.com/embed/videoseries?list=UUhBxzpP9wrwLpw_qsedX7YQ'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </div>
      </>
    );
  };

  return (
    <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
      <section className='YouTube'>{renderYoutubeUploads()}</section>
    </ScrollAnimation>
  );
};

export default YouTube;
