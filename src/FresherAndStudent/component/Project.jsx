import React, { useContext } from "react";
import "../../FresherAndStudent/css/component/Project.css";
import { MyContext } from "../context/MyContext";

const Project = () => {
  const { projectdata } = useContext(MyContext);

  return (
    <section className="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-container">
        {projectdata.map((item, index) => (
          <div className="project-card" key={index}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} className="scroll-image" />
              <div className="overlay">
                <p className="description">{item.description}</p>
                <p className="duration">Duration: {item.duration}</p>
                <div className="tech-text">
                  {item.tech.map((tech, idx) => (
                    <span key={idx} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-footer">
              <h3 className="project-title">{item.title}</h3>
              {/* <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a> */}
              <div className="glow-button-container" >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button-card"
                >
                  <h2>View Project</h2>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
