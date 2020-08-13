import React from 'react';
import './Twitter.css';
import { Feed } from './Components/';

const Twitter: React.FC<any> = () => {
  return (
    <section className='Twitter'>
      <Feed />
    </section>
  );
};

export default Twitter;
