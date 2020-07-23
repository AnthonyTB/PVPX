import React from 'react';
import './YouTube.css';

const YouTube: React.FC<any> = () => {
  const renderYoutubeUploads = () => {
    return (
      <>
        <div className='Heading'>
          <h3>Latest Upload</h3>
        </div>
        <div className='Youtube-Container'>
          <iframe
            title="PVPX's Youtube Uploads"
            width='100%'
            frameBorder='0'
            height='100%'
            src='https://www.youtube.com/embed/videoseries?list=UUhBxzpP9wrwLpw_qsedX7YQ'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </div>
      </>
    );
  };

  return <section className='YouTube'>{renderYoutubeUploads()}</section>;
};

export default YouTube;
