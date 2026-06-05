import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Hero from "./Components/Home/Hero";
import About from "./Components/Home/About";
import Skills from "./Components/Home/Skills";
import Projects from "./Components/Home/Projects";
import Process from "./Components/Home/Process";
import Contact from "./Components/Home/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050010] text-white overflow-x-hidden">

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-fuchsia-600/30 blur-[150px] rounded-full -z-10"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Process />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;