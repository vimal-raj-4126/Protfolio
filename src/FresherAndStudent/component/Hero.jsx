import "../../FresherAndStudent/css/component/Hero.css";
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import pic from '../assets/persion.png';
import sun from '../assets/sun.jpg';
import moon from '../assets/moon.jpg';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import NavSection from "../../FreelanceAndDeveloper/component/NavSection";

const Hero = () => {
  const rippleRef = useRef(null);
  const theme = localStorage.getItem('theme') || 'light';

 useEffect(() => {
  const $el = $(rippleRef.current);
  if ($el.length > 0) {
    try {
      $el.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
      $el.css("background", `url(${theme === 'dark' ? moon : sun}) center/cover no-repeat`);

      // ✅ Page load la 3 times ripple trigger
      for (let i = 0; i < 1; i++) {
        setTimeout(() => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const strength =  Math.random() ;
          $el.ripples('drop', x, y, 30, strength);
        }, i * 1000); // 0s, 1s, 2s la wave varum
      }

      return () => {
        if ($el.ripples) $el.ripples('destroy');
      };
    } catch (e) {
      console.error('Ripples effect not supported.', e);
    }
  }
}, [theme]);


  return (
    <div ref={rippleRef} className="hero-wrapper1">
      <NavSection />
      <div className="hero-container1">

        {/* Left Icons */}
        <div className="hero-left1">
          <div className="icon-box"><FaLinkedin className="left-icon"/></div>
          <div className="icon-box"><FaWhatsapp className="left-icon"/></div>
          <div className="icon-box"><FaInstagram className="left-icon"/></div>
          <div className="icon-box"><FaEnvelope className="left-icon"/></div>
          <button className="hire-btn">Hire</button>
        </div>

        {/* Center */}
        <div className="hero-center1">
          <span className="hero-background-name">SAMUVEL</span>
          <img src={pic} alt="profile" className="hero-pic1"/>
        </div>

        {/* Right */}
        <div className="hero-right1">
          <h1 className="hero-name1">Full Stack Developer</h1>
          <p className="hero-mini1">React | Django | Flutter</p>
          <button className="learn-more">Learn more ➡️</button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
