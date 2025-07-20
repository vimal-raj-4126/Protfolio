import About from "../../FresherAndStudent/component/About"
import Blog from "../../FresherAndStudent/component/Blog"
import Certifications from "../../FresherAndStudent/component/Certifications"
import Contact from "../../FresherAndStudent/component/Contact"
import GitContribution from "../../FresherAndStudent/component/GitContribution"
import Hero from "../../FresherAndStudent/component/Hero"
import MyCreativity from "../../FresherAndStudent/component/MyCreativity"
import Project from "../../FresherAndStudent/component/Project"
import Resume from "../../FresherAndStudent/component/Resume"
import Skills from "../../FresherAndStudent/component/Skills"
import TechStack from "../../FresherAndStudent/component/TechStack"
// import Testimonials from "../../FresherAndStudent/component/Testimonials"
import WorkExperience from "../../FresherAndStudent/component/WorkExperience"
import BgStyle from "../../FresherAndStudent/component/BgStyle"
import AwardsSection from "../component/AwardsSection"

const Home = () => {
  return (
    <div>
      <Hero />
      
     <div id="about">
       <About />
     </div>
      <MyCreativity />
      <Skills />
      <GitContribution />
      <Project />
      <TechStack />
      <Resume />
      <AwardsSection />
      <Certifications />
      <WorkExperience />
      <BgStyle />
      <Blog />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}

export default Home