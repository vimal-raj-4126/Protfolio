import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import "../../FresherAndStudent/css/component/About.css";
import { FaArrowRightLong } from 'react-icons/fa6';

const About = () => {
  const { about } = useContext(MyContext);
  return (
    <div className="about-container">
<div style={{margin:"15px 8%"}}>
        <h1>About</h1>
      <p>{about.description}</p>
</div>

      <div className="about-main-section">
        {/* Image Left */}
        <div className="about_img">
          <img src={about.aboutImg} alt="about" />
        </div>

        {/* Text Right */}
        <div className="about-text-section">
          <h2>{about.heading}</h2>
          <p>{about.heading_description}</p>

          {/* Left Cards */}
          <div className="about-side about-left">
            {about.leftCards.map((card, i) => (
              <div className="about-card" key={i}>
                <i className={card.icon}></i>
                <p>{card.title}</p>
              </div>
            ))}
          </div>

          {/* Right Cards */}
          {/* <div className="about-side about-right">
            {about.rightCards.map((card, i) => (
              <div className="about-card" key={i}>
                <i className={card.icon}></i>
                <p>{card.title}</p>
              </div>
            ))}
          </div> */}

          {/* Footer Section */}
          {/* Footer Section */}
<div className="about-footer">
  <div className="about-footer-text">
    <p>{about.heading_end}</p>
  </div>
 <div style={{display:"flex" , flexWrap:"wrap"}}>
   <div className="glow-button-container" style={{float:"right"}}>
    <a href={about.resume} download className="glow-button-card">
      <h2>Download Resume</h2>
    </a>
  </div>
  <div className="mt-1 ms-3" style={{cursor:"pointer"}}>Learn more <FaArrowRightLong /></div>
 </div>
</div>


        </div>
      </div>
    </div>
  )
}

export default About;
