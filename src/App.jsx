import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="page" id="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
