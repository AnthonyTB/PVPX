import React from 'react';
import { Hero, Twitch, YouTube } from './Components/';
import './Home.css';

const Home: React.FC<any> = () => {
  return (
    <>
      <Hero />
      <Twitch />
      <YouTube />
    </>
  );
};

export default Home;
