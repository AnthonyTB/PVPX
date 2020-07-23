import React, { useContext } from 'react';
import './App.css';
import { Home, Setup } from './Routes/';
import { Footer } from './Components';
import { Switch, Route } from 'react-router-dom';
import { Context } from './Context';

const App: React.FC<any> = () => {
  const {
    twitchStream,
    youtubeSubscribers,
    twitterData,
    instagramStats,
  } = useContext(Context);

  return (
    <div className='App'>
      {twitchStream && youtubeSubscribers && twitterData && instagramStats ? (
        <>
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
          </Switch>
          <Footer />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default App;
