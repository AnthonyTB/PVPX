import React, { useContext } from 'react';
import './App.css';
import { Home, Setup, AboutMe } from './Routes/';
import { Footer, Nav } from './Components';
import { Switch, Route } from 'react-router-dom';
import { Context } from './Context';
import { css } from '@emotion/core';
import DotLoader from 'react-spinners/DotLoader';
import { Animated } from 'react-animated-css';

const App: React.FC<any> = () => {
  const {
    twitchStream,
    youtubeSubscribers,
    twitterData,
    twitterTweets,
  } = useContext(Context);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const renderLoader = () => {
    return (
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDelay={0}
        animationOutDelay={800}
        isVisible={true}
      >
        <div className='Loader'>
          <DotLoader
            css={override}
            size={60}
            color={'#d79d00'}
            loading={true}
          />
        </div>
      </Animated>
    );
  };

  return (
    <div className='App'>
      {twitchStream && youtubeSubscribers && twitterData && twitterTweets ? (
        <>
          <Route path='/' render={(routeProps) => <Nav {...routeProps} />} />
          <Switch>
            <Route
              exact
              path='/'
              render={(routeProps) => <Home {...routeProps} />}
            />
            <Route
              exact
              path='/Setup'
              render={(routeProps) => <Setup {...routeProps} />}
            />
            <Route
              exact
              path='/AboutMe'
              render={(routeProps) => <AboutMe {...routeProps} />}
            />
          </Switch>
          <Footer />
        </>
      ) : (
        renderLoader()
      )}
    </div>
  );
};
export default App;
