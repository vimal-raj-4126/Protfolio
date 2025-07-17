import React from "react";
import "../../Photographers/css/component/Footer.css";
import {
  FaGithub, FaLinkedin, FaTwitter, FaYoutube,
  FaWhatsapp, FaInstagram, FaCodepen, FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

    

      <div className="subscribe-box">
        <h3>Get Updates From Anywhere</h3>
        <div className="subscribe-input">
          <input type="text" placeholder="Enter your Email or Contact Number" />
          <button>Get Started</button>
        </div>
      </div>

        <div className="social-icons">
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer"><FaYoutube /></a>
        <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://codepen.io/yourprofile" target="_blank" rel="noreferrer"><FaCodepen /></a>
        <a href="mailto:youremail@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
      </div>

      <hr />
      <p className="copyright">© 2025 Samuvel Reegan. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
