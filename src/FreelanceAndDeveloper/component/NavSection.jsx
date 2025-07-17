import { useEffect, useState } from "react";
import "../../FreelanceAndDeveloper/css/component/NavSection.css";
import ThemeToggle from "../../Common/component/ThemeToggle";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // scroll threshold
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-section ${scrolled ? "scrolled" : ""} main-navbar`}>
        <div className="logo">
          <span>Portfolio</span>
        </div>

        <div className="nav-right ">
          <div className="nav-links desktop-only">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/experience">Experience</a>
          </div>
          <div className="theme_toggle ms-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Toggle Button Mobile */}
      <div className="nav-toggle-wrapper mobile-only">
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "visible" : ""}`}>
        <nav className="sidebar-content">
          <a href="/about" onClick={handleToggle}>
            About
          </a>
          <a href="/projects" onClick={handleToggle}>
            Projects
          </a>
          <a href="/experience" onClick={handleToggle}>
            Experience
          </a>

          <div className="social">
            <a href="/">
              <i className="fab fa-github"></i>
            </a>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavSection;
