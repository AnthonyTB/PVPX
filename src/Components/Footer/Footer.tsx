import React from 'react';
import './Footer.css';
import BrandingSmall from '../../Assets/Branding.png';

const Footer: React.FC<any> = () => {
  return (
    <footer className='Footer'>
      <div className='left-column'>
        <img src={BrandingSmall} alt='Small Logo' className='small-branding' />
      </div>
      <hr className='middle-column' />
      <div className='right-column'>
        <ul>
          <li>
            <a href='' target='blank_'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='' target='blank_'>
              <i className='fab fa-twitch'></i>
            </a>
          </li>
          <li>
            <a href='' target='blank_'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='' target='blank_'>
              <i className='fab fa-youtube'></i>
            </a>
          </li>
          <li>
            <a href='' target='blank_'>
              <i className='fab fa-discord'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
