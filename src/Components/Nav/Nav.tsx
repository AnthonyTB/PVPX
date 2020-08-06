import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import MenuImg from '../../Assets/Menu.svg';
import Cancel from '../../Assets/cancel.svg';

const Nav: React.FC<any> = (props: any) => {
  const [menuState, toggleMenuState] = useState(false);

  return (
    <nav className='Nav'>
      <button onClick={() => toggleMenuState(!menuState)} type='button'>
        {!menuState ? (
          <img
            src={MenuImg}
            alt='Menu Button'
            className='animate__animated animate__fadeIn'
          />
        ) : (
          <img
            src={Cancel}
            alt='Cancel Button'
            className='animate__animated animate__fadeIn'
          />
        )}
      </button>
      <div
        className={`menu ${
          menuState
            ? 'visible animate__animated animate__slideInRight'
            : 'hidden'
        }`}
      >
        {props.location.pathname === '/Setup' ||
        props.location.pathname === '/setup' ? (
          <Link onClick={() => toggleMenuState(false)} to='/'>
            Home
          </Link>
        ) : (
          <Link onClick={() => toggleMenuState(false)} to='/Setup'>
            Setup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
