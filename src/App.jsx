import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./components/skills.jsx";
import ScrollIndicator from "./functionality/ScrollIndicator.jsx"
import Testimonials from "./components/testimonials.jsx";
import Gallery from "./components/gallery.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/services.jsx";



function App() {
  return (
    <>
      <Router>
    
        <ScrollIndicator />
        <div id="about">
          <Hero />
        </div>
        <div id="portfolio">
          <About />
        </div>
        <div id="testimonals">
          <Testimonials />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        {/* <div id="services">
          <Services />
        </div> */}
        <div id="skills">
          <Skills />
        </div> 
        <div id="footer">
          <Footer />
        </div> 
        {/* <Routes>
         <Route path="/" element={<ContactForm />} />
          <Route path="/terms" element={<div>Terms & Conditions</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
          <Route path="/cookie-policy" element={<div>Cookie Policy</div>} /> 
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
