import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="otherSections">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
