import Image from "next/image";
// app/page.tsx
import { Button } from '../components/ui/button';
import { ThemeToggle } from "./components/themetoggle";
import Coursesoffered from "./components/coursesoffered";
import Herosection from "./components/herosection";

export default function Page() {
  return (
    <div>
      <Herosection />
      <Coursesoffered />
      
      
    </div>
  )
}

