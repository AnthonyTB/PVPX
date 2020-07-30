import React from 'react';
import './Hero.css';
import Branding from '../../../../Assets/Branding.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';

const Hero: React.FC<any> = () => {
  return (
    <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
      <section className='Hero'>
        <div className='container'>
          <Particles
            className='particles'
            height={'100%'}
            width={'90%'}
            params={{
              particles: {
                number: {
                  value: 20,
                  density: {
                    enable: false,
                  },
                },
                color: { value: '#d79d00' },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 0.3,
                  direction: 'top',
                  out_mode: 'out',
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'bubble',
                  },
                  onclick: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
                modes: {
                  bubble: {
                    distance: 150,
                    duration: 1,
                    size: 0,
                    opacity: 0,
                  },
                  repulse: {
                    distance: 50,
                    duration: 1,
                  },
                },
              },
            }}
          />
          <img src={Branding} alt='PVPX Logo' className='Branding' />
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Hero;
