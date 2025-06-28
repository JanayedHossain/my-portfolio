import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Education from "../../components/education/Education";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const fetchProjects = fetch("/projects.json").then((res) => res.json());
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects fetchProjects={fetchProjects} />
      <Contact />
    </>
  );
};

export default Home;
