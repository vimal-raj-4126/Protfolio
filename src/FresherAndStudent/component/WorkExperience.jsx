import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "../../FresherAndStudent/css/component/WorkExperience.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


const WorkExperience = () => {
  const { experience } = useContext(MyContext);

  return (
    <section className="experience">
      <h2 className="heading">Internship Experience</h2>
      <div className="experience-container">
        {experience.map((item) => (
      <div className="experience-card">
  <div className="logo-company">
    <img src={item.logo} alt={`${item.company} logo`} />
    <h3 className="company">{item.company}</h3>
  </div>

  <p className="role">{item.role}</p>

  <div className="info-line">
    <span className="year"><FaCalendarAlt /> {item.year}</span>
    <span className="location"><FaMapMarkerAlt /> {item.location}</span>
  </div>

  <p className="desc">{item.description}</p>
  <p className="ctc">CTC: {item.ctc}</p>
</div>


        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
