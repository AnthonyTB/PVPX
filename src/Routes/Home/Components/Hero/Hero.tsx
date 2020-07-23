import React from 'react';
import './Hero.css';
import Branding from '../../../../Assets/Branding.png';

const Hero: React.FC<any> = () => {
  return (
    <section className='Hero'>
      <div className='video-container '>
        <img src={Branding} alt='PVPX Logo' className='Branding' />
      </div>
      <h2>Welcome</h2>
    </section>
  );
};

export default Hero;
