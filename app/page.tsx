
import Coursesoffered from "./components/coursesoffered";
import Hero from "./components/Hero";
import Header from "./components/Navbar";
import Benefits from "./components/Benefits";
import Roadmap from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contactus from "./components/design/Contactus";

export default function Page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Benefits/>
      <Roadmap/>
      <Footer/>
      <Contactus/>
      {/* <Coursesoffered /> */}
      
      
      
    </div>
  )
}

