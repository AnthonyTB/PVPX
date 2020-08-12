import React, { useState } from 'react';
import './Nav.css';
import SmallBranding from '../../Assets/Branding.png';
import NavArrow from '../../Assets/NavArrow.svg';

const Nav: React.FC<any> = () => {
  const [isNavVisibile, toggleNav] = useState(false);

  return (
    <div className='Nav-Container'>
      <nav className={isNavVisibile ? 'showing' : 'not-showing'}>
        <img src={SmallBranding} alt='Small PVPX Logo' />
      </nav>
      <button onClick={() => toggleNav(!isNavVisibile)}>
        <img
          src={NavArrow}
          alt='Arrow'
          className={isNavVisibile ? '' : 'rotate'}
        />
      </button>
    </div>
  );
};

export default Nav;
