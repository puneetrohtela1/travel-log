import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import App from "./App";

const Router = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li id="logo">
              <Link to="/">
                <img alt="Logo" />
              </Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/About">About</Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/About" component={() => <h1>Hello</h1>} />
        <Route component={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </>
  );
};

export default Router;

const styles = {
  floatRight: {
    float: "right",
  },
};
