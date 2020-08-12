import React from 'react';
import './AboutMe.css';
import Render from '../../Assets/Render.mp4';
import ScrollAnimation from 'react-animate-on-scroll';
import Arrow from '../../Assets/arrow.svg';
import { Link } from 'react-router-dom';

const AboutMe: React.FC<any> = () => {
  return (
    <ScrollAnimation
      animateIn='fadeIn'
      animateOut='fadeOut'
      duration={1.5}
      delay={1}
    >
      <section className='AboutMe'>
        <div className='nav'>
          <Link to='/' className='Return'>
            <img src={Arrow} alt='arrow svg' />
            <span>Return</span>
          </Link>
        </div>
        <div className='left-container'>
          <div className='video-container'>
            <video width='100%' height='auto' loop autoPlay muted>
              <source src={Render} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='right-container'>
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
      </section>
    </ScrollAnimation>
  );
};

export default AboutMe;
