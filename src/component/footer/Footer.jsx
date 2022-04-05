import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMainContent">
        <div className="footerContainer">
          <div className="footerSubHeading">Timeby</div>
          <a className="footerText">about us</a>
          <a className="footerText">careers</a>
          <a className="footerText">press</a>
        </div>
        <div className="footerContainer">
          <div className="footerSubHeading">Social</div>
          <a className="footerText">facebook</a>
          <a className="footerText">twitter</a>
          <a className="footerText">instagram</a>
          <a className="footerText">youtube</a>
        </div>
        <div className="footerContainer">
          <div className="footerSubHeading">Policy</div>
          <a className="footerText">return policy</a>
          <a className="footerText">terms of use</a>
          <a className="footerText">privacy policy</a>
          <a className="footerText">copyright</a>
          <a className="footerText">security</a>
        </div>
        <div className="footerContainer">
          <div className="footerSubHeading">Help</div>
          <a className="footerText">payments</a>
          <a className="footerText">return</a>
          <a className="footerText">cancellation</a>
          <a className="footerText">subscription</a>
          <a className="footerText">shipping</a>
        </div>
        <div className="footerContainer">
          <div className="footerSubHeading">Contact Us</div>
          <a className="footerText">mail us</a>
          <a className="footerText">Toll- free No</a>
          <a className="footerText">1800-200-9211</a>
        </div>
      </div>
      <div className="footerBottom">©2022 timeby.netlify.in</div>
    </footer>
  );
};

export { Footer };
