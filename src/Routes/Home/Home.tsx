import React from 'react';
import { AboutMe, Hero, Twitch, YouTube } from './Components/';
import './Home.css';

const Home: React.FC<any> = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <div className='desktop'>
        <Twitch />
        <YouTube />
      </div>
    </>
  );
};

export default Home;
