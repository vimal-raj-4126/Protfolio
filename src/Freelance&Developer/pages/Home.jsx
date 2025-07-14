import About from "../component/About"
import GitContribution from "../component/GitContribution"
import Hero from "../component/Hero"
import Skills from "../component/Skills"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <GitContribution />
    </div>
  )
}

export default Home