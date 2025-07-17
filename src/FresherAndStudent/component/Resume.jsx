// import { useContext } from "react";
// import { MyContext } from "../context/MyContext";
import "../../FresherAndStudent/css/component/Resume.css";
import resumePage from "../json/resumePage";

const Resume = () => {
  const resume = resumePage[0];

  return (
    <div className="resume-section">
      <h1>Resume</h1>
      <p className="intro">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...</p>

      <div className="resume-grid">
        {/* Left Column */}
        <div className="left-col">
          <h2>Summary</h2>
          <h3>{resume.summary.name}</h3>
          <p><em>{resume.summary.description}</em></p>
          <ul>
            <li>{resume.summary.location}</li>
            <li>{resume.summary.phone}</li>
            <li>{resume.summary.email}</li>
          </ul>

          <h2>Education</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="resume-item">
              <h3>{edu.degree}</h3>
              <span className="years">{edu.years}</span>
              <p className="institute">{edu.institute}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="right-col">
          <h2>Professional Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="resume-item">
              <h3>{exp.title}</h3>
              <span className="years">{exp.years}</span>
              <p className="institute">{exp.company}</p>
              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Resume;
