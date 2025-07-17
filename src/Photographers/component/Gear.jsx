import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "../../Photographers/css/component/Gear.css";

const Gear = () => {
  const { gear } = useContext(MyContext);

  return (
    <section className="gear-section">
      <div className="gear-left">
        <h2>{gear.title}</h2>
        <p>{gear.description}</p>
        <div className="gear-cards">
          {gear.items.map((item, index) => (
            <div className="gear-card" key={index}>
              {item.name} 
            </div>
          ))}
        </div>
      </div>

      <div className="gear-right">
        <img src={gear.profile} alt="Profile" />
      </div>
    </section>
  );
};

export default Gear;
