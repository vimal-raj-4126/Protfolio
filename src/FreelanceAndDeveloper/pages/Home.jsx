import About from "../../FreelanceAndDeveloper/component/About"
import Blog from "../../FreelanceAndDeveloper/component/Blog"
import Certifications from "../../FreelanceAndDeveloper/component/Certifications"
import Contact from "../../FreelanceAndDeveloper/component/Contact"
import GitContribution from "../../FreelanceAndDeveloper/component/GitContribution"
import Hero from "../../FreelanceAndDeveloper/component/Hero"
import MyCreativity from "../../FreelanceAndDeveloper/component/MyCreativity"
import Project from "../../FreelanceAndDeveloper/component/Project"
import Resume from "../../FreelanceAndDeveloper/component/Resume"
import Skills from "../../FreelanceAndDeveloper/component/Skills"
import TechStack from "../../FreelanceAndDeveloper/component/TechStack"
import Testimonials from "../../FreelanceAndDeveloper/component/Testimonials"
import WorkExperience from "../../FreelanceAndDeveloper/component/WorkExperience"

const Home = () => {
  return (
    <div>
      <Hero />
      
      <About />
      <MyCreativity />
      <Skills />
      <GitContribution />
      <Project />
      <TechStack />
      <Resume />
      <Certifications />
      <WorkExperience />
      <Blog />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home