import { Container } from "react-bootstrap";
import "../../Photographers/css/component/Skills.css";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MyContext } from "../context/MyContext";
import Wave from 'react-wavify';

const Skills = () => {
  const { Myskilldata } = useContext(MyContext);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [animatedPercentages, setAnimatedPercentages] = useState(
    Myskilldata.map(() => 0)
  );

  useEffect(() => {
    if (inView) {
      Myskilldata.forEach((skill, i) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setAnimatedPercentages((prev) => {
            const updated = [...prev];
            updated[i] = count;
            return updated;
          });
          if (count >= skill.percentage) clearInterval(interval);
        }, 50);
      });
    }
  }, [inView, Myskilldata]);

  const aboutData = Myskilldata.find(item => item.text); // fetch text+description item

  return (
    <Container className="my-4">
      <div className="skills-main-container1" ref={ref}>
        {/* Left Text */}
        <div className="skills-left-content1">
          <h1 className="text-center">{aboutData?.text}</h1>
          <p>{aboutData?.description}</p>
        </div>

        {/* Right Skills */}
        <div className="skills-right-container1">
          {Myskilldata.filter(skill => skill.pic).map((skill, i) => (
            <div className="skill-card1" key={skill.id}>
              <div className="skill-circle1">
                <Wave
                  fill={skill.rangecolor}
                  paused={false}
                  options={{
                    height: 0,
                    amplitude: 10,
                    speed: 0.25,
                    points: 4
                  }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: `${animatedPercentages[i]}%`,
                    width: '100%',
                    transition: 'height 0.5s ease'
                  }}
                />
                <div className="skill-icon1">{skill.pic}</div>
                <div className="skill-percent1">{animatedPercentages[i]}%</div>
              </div>
              <div className="skill-name1">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
