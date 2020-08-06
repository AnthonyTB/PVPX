import React from 'react';
import './Footer.css';
import BrandingSmall from '../../Assets/Branding.png';

const Footer: React.FC<any> = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-Container'>
        <div className='left-column'>
          <img
            src={BrandingSmall}
            alt='Small Logo'
            className='small-branding'
          />
        </div>
        <div className='middle-column'>
          <hr />
        </div>
        <div className='right-column'>
          <ul>
            <li>
              <a href='https://www.twitch.tv/pvpx' target='blank_'>
                <i className='fab fa-twitch'></i>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/pvpx' target='blank_'>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/PVPX_' target='blank_'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/pvpxofficial/' target='blank_'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/pvpxofficial/' target='blank_'>
                <i className='fab fa-discord'></i>
              </a>
            </li>
            <li>
              <a href='mailto:pvpxbusiness@gmail.com' target='blank_'>
                <i className='fas fa-envelope'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
