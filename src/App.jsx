import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Hero from "./components/hero.jsx";
import Services from "./components/services.jsx";
import Navbar from "./components/nav.jsx";
import Contact from "./components/contact/Contact.jsx";
import Product from "./components/Project-Section/Page.jsx";
import Navba from "./components/header.jsx";
import Abouts from "./components/Project-Section/Profile.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Navba /> */}
        <Hero />
        <About />
        <Product />
        <Abouts />
        <Testimonials />
        <Services />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
