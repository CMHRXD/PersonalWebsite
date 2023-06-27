import { NavBar } from "./components/Nav";
import { Banner } from "./components/Banner";
import "./App.css";
import { SkillsList } from "./components/Skills-list";
import { Projects } from "./components/Projects";
import Experience from "./components/Experience";
import { useScrollY } from "./hooks/useScrollY";
import Contact from "./components/Contact";

function App() {
  const { scrollY } = useScrollY(); // the order pages automatically detect the scrollY value

  return (
    <div>
      <NavBar />
      <Banner />
      <SkillsList />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
