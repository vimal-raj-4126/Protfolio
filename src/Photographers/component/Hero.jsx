import { useContext } from "react";
import "../../Photographers/css/component/Hero.css";
import { MyContext } from "../context/MyContext";
import NavSection from "./NavSection";

const Hero = () => {
  const { hero } = useContext(MyContext);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${hero.image})` }}>
      <NavSection />

      <div className="hero-content">
        <h1>{hero.title}</h1>
        <h3>{hero.subtitle}</h3>
        <p>{hero.description}</p>
        <button>{hero.buttonText}</button>
      </div>
    </section>
  );
};

export default Hero;
