import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./components/skills.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Hero from "./components/hero.jsx";
import Services from "./components/services.jsx";
import Navbar from "./components/nav.jsx";
import Contact from "./components/contact/Contact.jsx";
import Portfolio from "./components/Project-Section/Portfolio.jsx"

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Services />
        <Contact />
        <Skills />
        <Footer />
      </Router>
    </>
  );
}

export default App;
