import React, { useContext } from 'react';
import './Twitch.css';
import { Context } from '../../../../Context';

const Twitch: React.FC<any> = () => {
  const { twitchStream, twitchVod } = useContext(Context);
  const liveStatus = twitchStream.data.length > 0 ? false : true;

  const renderLiveStream = () => {
    return (
      <>
        <div className='Heading regular'>
          <h3>Currently Live</h3>
        </div>
        <div className='Twitch-Container'>
          <iframe
            title="PVPX's Live Stream"
            src={`https://player.twitch.tv/?channel=pvpx&parent=pvpx.vercel.sh&parent=pvpx.live&muted=true&autoplay=true`}
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

  const renderPastBroadcast = () => {
    return (
      <>
        <div className='Heading extended'>
          <h3>Latest Stream</h3>
        </div>
        <div className='Twitch-Container'>
          <iframe
            title="PVPX's Live Stream"
            src={`https://player.twitch.tv/?video=v${twitchVod.data[0].id}&parent=localhost&parent=pvpx.vercel.sh&parent=pvpx.live&muted=true&autoplay=true`}
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
    <section className='Twitch'>
      {liveStatus ? renderLiveStream() : renderPastBroadcast()}
    </section>
  );
};

export default Twitch;
