import React from "react";
import "./App.css";
import { Home, Setup, AboutMe } from "./Routes/";
import { Footer, Nav } from "./Components";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            exact
            path="/Setup"
            render={(routeProps) => <Setup {...routeProps} />}
          />
          <Route
            exact
            path="/AboutMe"
            render={(routeProps) => <AboutMe {...routeProps} />}
          />
        </Switch>
        <Footer />
      </>
    </div>
  );
};
export default App;
