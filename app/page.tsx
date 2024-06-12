import Hero from "./components/Hero";
import { navigation } from "./constants";
import Navbar from "../app/components/navbar";
import Courses from "./components/CourseOffered";
import About from "./components/About";
import Offering from "./components/Offering";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Testimonials  from "./components/testimonials";
import Product from "./components/Product";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar data={navigation} position={true} hide={false}/>
      <Hero/>
      <Courses/>
      <Offering/>
      <Product/>
      <About/>
      <Testimonials/>
      <Footer/>
      <Contactus/>
      {/* <Coursesoffered /> */}
      
      
      
    </div>
  )
}

