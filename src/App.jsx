import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Services from "./components/services.jsx";
import Skills from "./components/skills.jsx";
import ScrollIndicator from "./functionality/ScrollIndicator.jsx"
import Testimonials from "./components/testimonials.jsx";
import Gallery from "./components/gallery.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollIndicator />
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="testimonals">
          <Testimonials />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="skills">
          <Skills />
        </div> 
        <Routes>
         {/* <Route path="/" element={<ContactForm />} /> */}
          <Route path="/terms" element={<div>Terms & Conditions</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
          <Route path="/cookie-policy" element={<div>Cookie Policy</div>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
