import Image from "next/image";
// app/page.tsx
import { Button } from '../components/ui/button';
import { ThemeToggle } from "./components/themetoggle";
import Coursesoffered from "./components/coursesoffered";
import Herosection from "./components/herosection";
import Header from "./components/Header";

export default function Page() {
  return (
    <div>
      <Header/>
      <Herosection /> 
      {/* <Coursesoffered /> */}
      <ThemeToggle/>
      
      
    </div>
  )
}

