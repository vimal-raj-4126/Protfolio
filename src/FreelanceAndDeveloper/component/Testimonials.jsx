import React, { useContext } from "react";
import "../../FreelanceAndDeveloper/css/component/Testimonials.css";
import { MyContext } from "../context/MyContext";

const Testimonials = () => {
  const { testimonials } = useContext(MyContext);

  return (
    <section className="testimonials">
      <h2 className="heading">Testimonials</h2>
      <p className="subtext">What people are saying about me</p>

      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">“{item.comment}”</p>
            <div className="profile">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
