import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import About from "./About";
import Logo from "./Images/logo.png";

const Router = () => {
  return (
    <>
      <div style={styles.header}>
        <nav>
          <ul>
            <li id="logo">
              <Link to="/" style={styles.logo}>
                <img alt="Logo" src={Logo} />
              </Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/About">About</Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/Map">Map</Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Map" component={App} />
        <Route exact path="/About" component={About} />
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
  header: {
    zIndex: 11,
    position: "absolute",
    width: "100%",
  },
  logo: { paddingTop: "6px", paddingBottom: "4px" },
};
