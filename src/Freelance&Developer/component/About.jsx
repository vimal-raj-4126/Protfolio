import React, { useContext, useEffect, useState } from "react";
import "../css/component/About.css";
import { MyContext } from "../context/MyContext";

const About = () => {
  const { about } = useContext(MyContext);
  const [counters, setCounters] = useState({});

  useEffect(() => {
   const handleScroll = () => {
  const section = document.getElementById("about-section");
  if (!section) return;

  const trigger = window.innerHeight / 1.2;
  const top = section.getBoundingClientRect().top;

  if (top < trigger) {
    about.additional.forEach(({ name, count }) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < count) {
          current++;
          setCounters((prev) => ({ ...prev, [name]: current }));
        } else {
          clearInterval(interval);
        }
      }, 100);
    });

    window.removeEventListener("scroll", handleScroll);
  }
};


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [about]);

  return (
    <div className="about-section" id="about-section">
      {/* Left Side */}
      <div className="about-side about-left">
        {about.leftCards.map((card, i) => (
          <div className="about-card" key={i}>
            <i className={card.icon}></i>
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      {/* Center */}
      <div className="about-center">
        <h2 className="mb-3">About Me</h2>
        <p>{about.description}</p>

        <div className="about-counts">
          {about.additional.map((item, i) => (
            <div className="count-box" key={i}>
              <h3>{counters[item.name] || 0}+</h3>
             <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
            </div>
          ))}
        </div>

       <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
  <div className="glow-button-container">
    <a href={about.resume} download className="glow-button-card">
      <h2>Download Resume</h2>
    </a>
  </div>

  <div className="glow-button-container">
    <a href={about.resume} download className="glow-button-card">
      <h2>Learn More</h2>
    </a>
  </div>
</div>

        
      </div>
      
 {/* <a href={about.resume} download className="resume-btn">
          Learn More
        </a> */}
      {/* Right Side */}
      <div className="about-side about-right">
        {about.rightCards.map((card, i) => (
          <div className="about-card" key={i}>
            <i className={card.icon}></i>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
