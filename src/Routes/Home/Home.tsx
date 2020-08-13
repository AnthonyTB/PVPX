import React from 'react';
import { Hero, Twitch, YouTube, Twitter } from './Components/';
import './Home.css';

const Home: React.FC<any> = () => {
  return (
    <>
      <Hero />
      <Twitch />
      <YouTube />
      <Twitter />
    </>
  );
};

export default Home;
