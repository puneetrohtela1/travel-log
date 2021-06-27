import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import image from './Images/4.jpg';
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height:"100vh",
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3.5rem",
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >
        TRAVELLER
      </h1>
      <p style={{ color: "white", fontSize: "1.5rem",width:"65%",textAlign:"center" }}>
       <b> If your Passion is Travelling and you want to travel new Adventurous,
        Mysterious, and Auspicious Places Which don't often grace by Other
        Travellers. Then This is the place you have been searching for your
        whole life. Here you can find the most underrated traveling places which
        you can explore.</b>
      </p>
      <Link to="/Map"> <button className="button">Map</button></Link>
    </div>
  );
};

export default Home;

const styles = {
  container: {},
};
