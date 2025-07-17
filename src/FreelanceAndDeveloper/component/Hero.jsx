import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../FreelanceAndDeveloper/css/component/Hero.css";
import persion from "../assets/persion.png";
import { MyContext } from "../context/MyContext";
import NavSection from "./NavSection";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { hero } = useContext(MyContext);

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentRole = hero.role[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const typeTimeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % hero.role.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, roleIndex, hero.role]);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      //  Select one effect here
      // const selectedEffect = window.VANTA.CLOUDS;
      // const selectedEffect = window.VANTA.RINGS;
      // const selectedEffect = window.VANTA.DOTS;
      const selectedEffect = window.VANTA.BIRDS;

      const theme = localStorage.getItem("theme");

      const backgroundColor = theme === "dark" ? 0x131111 : 0xffffff;

      if (selectedEffect === window.VANTA.CLOUDS) {
        setVantaEffect(
          selectedEffect({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            skyColor: 0x68b8d7,
            cloudColor: 0xadc1de,
            cloudShadowColor: 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 0.2,
          })
        );
      } else {
        setVantaEffect(
          selectedEffect({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: backgroundColor,
          })
        );
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
   <NavSection  />


      <div ref={vantaRef} className="hero_container">
        <div className="hero_child">
          <Container>
            <Row className="align-items-center">
              {/* Image first on mobile, second on desktop */}
              <Col
                xs={12}
                md={4}
                className="order-md-2 mb-4 mb-md-0"
                style={{ textAlign: "center" }}
              >
                <div className="hero_image_wrapper">
                  <img src={persion} alt="Hero" className="hero_image" />
                </div>
              </Col>

              {/* Text section */}
              <Col xs={12} md={8} className="hero_text">
                <p className="hero_line1">{hero.line_1}</p>
                <p className="hero_line2">
                  {hero.line_2}{" "}
                  <span className="hero_name">{hero.hero_name}</span>
                </p>
                <p className="hero_line3 typing-effect">{displayText}</p>

                <p className="hero_line4">{hero.line_4}</p>
                <div className="holographic-container">
                  <div
                    className="holographic-card"
                    onClick={() => setIsOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <h2>Hire Me</h2>
                  </div>
                  <div className="mt-1 ms-3" style={{cursor:"pointer"}}>Learn more <FaArrowRightLong /></div>
                </div>

                {/* Modal */}
                {isOpen && (
                  <div className="custom-modal-overlay">
                    <div className="custom-modal">
                      <button
                        className="modal-close"
                        onClick={() => setIsOpen(false)}
                      >
                        ×
                      </button>
                      <h3>Hire Me</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault(); // Stop default submit
                          setIsOpen(false); // Close the modal
                          e.target.submit(); // Manually submit the form
                        }}
                        action="https://formsubmit.co/samuelreegan372@gmail.com"
                        method="POST"
                      >
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your Email"
                        />
                        <textarea
                          name="message"
                          required
                          placeholder="Your Message"
                        ></textarea>
                        <button type="submit" className="submit-btn">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
