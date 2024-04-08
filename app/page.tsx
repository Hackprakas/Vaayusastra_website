import Image from "next/image";
// app/page.tsx
import { Button } from '../components/ui/button';
import { ThemeToggle } from "./components/themetoggle";

export default function Page() {
  return (
    <div>
      <Button>Click me</Button>
      <ThemeToggle />
    </div>
  )
}

