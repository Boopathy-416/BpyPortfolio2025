import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./components/skills.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Hero from "./components/hero.jsx";
import Services from "./components/services.jsx";
import Navbar from "./components/nav.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Hero />

        <About />

        <Testimonials />

        <Services />

        <Skills />

       <Contact />
          <Footer /> 
      </Router>
    </>
  );
}

export default App;
