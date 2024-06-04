import Image from "next/image";
// app/page.tsx
import { Button } from '../components/ui/button';
import { ThemeToggle } from "./components/themetoggle";
import Coursesoffered from "./components/coursesoffered";
import Herosection from "./components/herosection";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contactus from "./components/design/Contactus";

export default function Page() {
  return (
    <div>
      <Header/>
      <Benefits/>
      <Roadmap/>
      <Footer/>
      <Contactus/>
      {/* <Coursesoffered /> */}
      
      
      
    </div>
  )
}

