import Hero from "./components/Hero";
import { navigation } from "./constants";
import Header from "./components/Navbar";
import Benefits from "./components/CourseOffered";
import Roadmap from "./components/About";
import Services from "./components/Offering";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Testimonials  from "./components/testimonials";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header data={navigation} />
      <Hero/>
      <Benefits/>
      <Roadmap/>
      <Testimonials/>
      <Footer/>
      <Contactus/>
      {/* <Coursesoffered /> */}
      
      
      
    </div>
  )
}

