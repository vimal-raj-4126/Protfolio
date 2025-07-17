import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import "../../Photographers/css/component/About.css";

const About = () => {
  const { about } = useContext(MyContext);

  return (
    <section className="about-section">
      <div className="about-image">
        <img src={about.aboutImg} alt="About me" />
      </div>
      <div className="about-content">
        <h2>{about.title}</h2>
        <h4>{about.subtitle}</h4>
        <p>{about.description}</p>
        <button>{about.buttonText}</button>
      </div>
    </section>
  );
};

export default About;
