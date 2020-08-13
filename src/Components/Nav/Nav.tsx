import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SmallBranding from '../../Assets/Branding.png';
import NavArrow from '../../Assets/NavArrow.svg';

interface NavItem {
  Label: string;
  Link: string;
}

const Nav: React.FC<any> = (props: any) => {
  const [isNavVisibile, toggleNav] = useState(false);

  const NavItems = [
    { Label: 'About Me & FAQ', Link: '/AboutMe' },
    { Label: 'Setup', Link: '/Setup' },
  ];

  return (
    <div className='Nav-Container'>
      <nav
        className={
          isNavVisibile
            ? 'showing animate__animated animate__slideInDown'
            : 'not-showing'
        }
      >
        <img src={SmallBranding} alt='Small PVPX Logo' />
        <div className='NavItems'>
          {NavItems.map((item: NavItem) => {
            if (props.history.location.pathname == item.Link) {
              return (
                <Link onClick={() => toggleNav(false)} to='/'>
                  Home
                </Link>
              );
            } else {
              return (
                <Link onClick={() => toggleNav(false)} to={item.Link}>
                  {item.Label}
                </Link>
              );
            }
          })}
        </div>
      </nav>
      <button onClick={() => toggleNav(!isNavVisibile)}>
        <img
          src={NavArrow}
          alt='Arrow'
          className={isNavVisibile ? 'rotate' : ''}
        />
      </button>
    </div>
  );
};

export default Nav;
