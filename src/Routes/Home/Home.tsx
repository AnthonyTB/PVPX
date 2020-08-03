import React from 'react';
import { AboutMe, Hero, Twitch, YouTube } from './Components/';

const Home: React.FC<any> = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Twitch />
      <YouTube />
    </>
  );
};

export default Home;
