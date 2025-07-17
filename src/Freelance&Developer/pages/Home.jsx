import About from "../component/About"
import Blog from "../component/Blog"
import Certifications from "../component/Certifications"
import Contact from "../component/Contact"
import GitContribution from "../component/GitContribution"
import Hero from "../component/Hero"
import MyCreativity from "../component/MyCreativity"
import Project from "../component/Project"
import Resume from "../component/Resume"
import Skills from "../component/Skills"
import TechStack from "../component/TechStack"
import Testimonials from "../component/Testimonials"
import WorkExperience from "../component/WorkExperience"

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