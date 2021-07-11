import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import puneet from "./Images/Puneet.jpg";
import yash from "./Images/yash.jpg";
import email from "./Images/email.png";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aboutUs}>
        <h1 style={styles.aboutUsText}>About Us</h1>
      </div>
      <div style={styles.profileContainer}>
        <div style={styles.profile}>
          <img src={yash} style={styles.profileImg} alt="profile" />
          <h2 style={styles.textCentered}>Yash Singh</h2>
          <p style={styles.textCentered}>
            I am a final Year B.Tech(CSE) Student.I am a 4 Start Coder at
            Code-Chef.I love to work on new and Creative Projects.
          </p>
        </div>
        <div style={styles.altProfile}>
          <img src={puneet} style={styles.profileImg} alt="profile" />
          <h2 style={styles.textCentered}>Puneet Kumar Rohtela</h2>
          <p style={styles.textCentered}>
            I am currently Working At Daffodil Software Pvt. Ltd. I love
            innovating things related to computer science.
          </p>
        </div>
      </div>
      <h2 style={styles.contactUsText}>Contact Us</h2>
      <div style={styles.contactUs}>
        <a
          href="mailto:yash.singh5445@gmail.com"
          className="button"
          style={styles.email}
        >
          <img src={email} style={styles.emailIcon} alt="email" />
        </a>
      </div>
    </div>
  );
};

export default About;

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to bottom, #181818, #202020)",
    color: "white",
  },
  aboutUs: {
    display: "flex",
    justifyContent: "center",
    minHeight: "10vw",
    // marginBottom: "20px",
    paddingTop: "40px",
  },
  aboutUsText: { alignSelf: "center", fontSize: "3em" },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: "20vw",
  },
  profile: {
    display: "flex",
    width: "300px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: "125px",
  },
  profileImg: { height: "100px", width: "100px", borderRadius: "50px" },
  textCentered: { textAlign: "center" },
  altProfile: {
    display: "flex",
    width: "300px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  contactUs: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "40px",
  },
  contactUsText: { textAlign: "center", fontSize: "2.5em", marginTop: "60px" },
  email: {
    backgroundColor: "#FF0000",
    textAlign: "center",
    boxShadow: "0px 8px 15px rgba(255, 0, 0, 0.5)",
    padding: "8px",
    borderRadius: "8px",
  },
  emailIcon: { maxHeight: "40px", maxWidth: "40px" },
};
