import React, { useContext, useState } from 'react';
import './Twitch.css';
import { Context } from '../../../../Context';
import ScrollAnimation from 'react-animate-on-scroll';

const Twitch: React.FC<any> = () => {
  const [isChatRendered, toggleChat] = useState(false);
  const { twitchStream, twitchVod } = useContext(Context);
  const liveStatus = twitchStream.data.length > 0 ? true : false;

  const renderChat = () => {
    return (
      <div className='chat animate__animated animate__zoomIn'>
        <iframe
          frameBorder='0'
          scrolling='yes'
          id='PVPX'
          src='https://www.twitch.tv/embed/PVPX/chat?parent=pvpx.vercel.app&parent=pvpx.live'
          height='100%'
          width='100%'
        ></iframe>
      </div>
    );
  };

  const renderLiveStream = () => {
    return (
      <>
        <div className='Twitch-Container'>
          <i className='fab fa-twitch'></i>
          <iframe
            title="PVPX's Live Stream"
            src={`https://player.twitch.tv/?channel=pvpx&parent=pvpx.vercel.app&parent=pvpx.live&muted=true&autoplay=true`}
            allowFullScreen={true}
            frameBorder='0'
            scrolling='no'
            height='100%'
            width='100%'
          />
        </div>
        {isChatRendered ? renderChat() : ''}
      </>
    );
  };

  const renderPastBroadcast = () => {
    return (
      <>
        <div className='Twitch-Container'>
          <i className='fab fa-twitch'></i>
          <iframe
            title="PVPX's Live Stream"
            src={`https://player.twitch.tv/?video=v${twitchVod.data[0].id}&parent=localhost&parent=pvpx.vercel.app&parent=pvpx.live&muted=true&autoplay=true`}
            allowFullScreen={true}
            frameBorder='0'
            scrolling='no'
            height='100%'
            width='100%'
          />
        </div>
      </>
    );
  };

  return (
    <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
      <section className='Twitch'>
        <div className='Heading'>
          <h3>{liveStatus ? 'Currently Live' : 'Latest Stream'}</h3>
        </div>
        <div className='container'>
          {liveStatus ? renderLiveStream() : renderPastBroadcast()}
          <div className='twitch-btns'>
            {liveStatus ? (
              <button onClick={() => toggleChat(!isChatRendered)} type='button'>
                {isChatRendered ? 'hide chat' : 'show chat'}
              </button>
            ) : (
              ''
            )}
            <a href='https://www.twitch.tv/subs/pvpx/' target='blank_'>
              subscribe
            </a>
            <a href='https://www.twitch.tv/pvpx' target='blank_'>
              follow
            </a>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Twitch;
