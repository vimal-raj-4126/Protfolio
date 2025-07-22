import "../../FresherAndStudent/css/component/Hero.css";
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import pic from '../assets/persion.png';
// import sun from '../assets/sun.jpg';
// import moon from '../assets/moon.jpg';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub, FaRegSnowflake } from 'react-icons/fa';
import NavSection from "../../FresherAndStudent/component/NavSection";

const Hero = () => {
  const rippleRef = useRef(null);
  const theme = localStorage.getItem('theme') || 'light';

  useEffect(() => {
    const $el = $(rippleRef.current);
    if ($el.length > 0) {
      try {
        $el.ripples({
          resolution: 1024,
          dropRadius: 20,
          perturbance: 0.04,
        });

        setTimeout(() => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const strength = Math.random();
          $el.ripples('drop', x, y, 30, strength);
        }, 1000);

        return () => {
          if ($el.ripples) $el.ripples('destroy');
        };
      } catch (e) {
        console.error('Ripples effect not supported.', e);
      }
    }
  }, [theme]);

  return (
    <div>
      <NavSection />
      <div ref={rippleRef} className="hero-wrapper1">
        {/* ✅ Static background layer */}
        <div className={`hero-bg-layer ${theme === 'dark' ? 'dark-theme-bg' : 'light-theme-bg'}`} />

        <div className="hero-container1">
          {/* Left Side: Text Content */}
          <div className="hero-center1">
            <span className="hero-background-name">
              {"VIMAL RAJ".split("").map((letter, idx) => (
                <span key={idx} className="hero-letter" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {letter}
                </span>
              ))}
            </span>

            <h1 className="hero-name1">
              {"Full Stack Developer".split("").map((ch, idx) => (
                <span key={idx} className="wave-letter" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>

            <p className="hero-mini1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, dolore.
            </p>

            <div className="button-group">
              <button className="learn-more">Learn more ➡️</button>
              <button className="learn-more1">Hire Me</button>
            </div>
          </div>

          {/* Right Side: Profile + Icons */}
          <div className="hero-right1">
            <img src={pic} alt="profile" className="hero-pic1" />
            <div className="hero-left1">
              <div className="icon-box"><FaLinkedin className="left-icon" /></div>
              <div className="icon-box"><FaWhatsapp className="left-icon" /></div>
              <div className="icon-box"><FaInstagram className="left-icon" /></div>
              <div className="icon-box"><FaGithub className="left-icon" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="hero_tech1">
        <div className="tech-marquee">
          <div className="tech-track">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> React</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> Node.js</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> MongoDB</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> Firebase</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> Docker</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> Tailwind</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> AWS</span>
                <span><FaRegSnowflake style={{ position: "relative", top: "-2px", right: "13px" }} /> ChatGPT</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
