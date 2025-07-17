import About from "../../Photographers/component/About";
import BgStyle from "../../Photographers/component/BgStyle";
import Blog from "../../Photographers/component/Blog";
// import Certifications from "../../Photographers/component/Certifications"
import Contact from "../../Photographers/component/Contact";
import Gallery from "../../Photographers/component/Gallery";
import Gear from "../../Photographers/component/Gear";
import Hero from "../../Photographers/component/Hero";
import PostSection from "../../Photographers/component/PostSection";
import Skills from "../../Photographers/component/Skills";
import TechStack from "../../Photographers/component/TechStack";
import Testimonials from "../../Photographers/component/Testimonials";
// import WorkExperience from "../../Photographers/component/WorkExperience"

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
