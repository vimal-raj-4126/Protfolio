import About from "../component/About";
import BgStyle from "../component/BgStyle";
import Blog from "../component/Blog";
// import Certifications from "../component/Certifications"
import Contact from "../component/Contact";
import Gallery from "../component/Gallery";
import Gear from "../component/Gear";
import Hero from "../component/Hero";
import PostSection from "../component/PostSection";
import Skills from "../component/Skills";
import TechStack from "../component/TechStack";
import Testimonials from "../component/Testimonials";
// import WorkExperience from "../component/WorkExperience"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Gear />
      <TechStack />
      {/* <Certifications /> */}
      {/* <WorkExperience /> */}
      <PostSection />
      <Blog />
      <BgStyle />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
